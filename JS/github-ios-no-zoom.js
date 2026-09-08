/*
 * GitHub iOS 防自动缩放 V5
 * Shadowrocket HTTP Response Script
 *
 * 目标：
 * 1. 阻止 iOS 聚焦普通输入框、textarea、select 以及 GitHub CodeMirror 编辑器时的页面自动放大。
 * 2. 不永久修改网页原本字号；仅在即将获得焦点的瞬间临时提升到 16px。
 * 3. 保留 V4 已验证有效的 touchstart / pointerdown / focusin 处理方式。
 * 4. 兼容 GitHub SPA 动态创建的 CodeMirror 编辑器。
 *
 * V5 核心策略：
 * iOS 在 focus 前后会根据可编辑元素的实际字号判断是否需要 Auto Zoom。
 * 因此在 touchstart / pointerdown 阶段临时将目标设置为 16px，
 * 待 focus 完成并经过两帧后恢复原始 inline style。
 * 这样无需永久把 GitHub 的代码字号改成 16px。
 */

const response = $response;
let body = response && response.body;

if (!body) {
    $done({});
    return;
}

const headers = response.headers || {};
const contentType =
    headers["Content-Type"] ||
    headers["content-type"] ||
    "";

if (contentType && !/text\/html/i.test(contentType)) {
    $done({});
    return;
}

if (body.includes("github-ios-no-zoom-v5")) {
    $done({});
    return;
}

const css = `
<style data-github-ios-no-zoom-v5>

/*
 * 禁止 WebKit 文本自动调整。
 * 注意：这与输入框 focus Auto Zoom 是两套机制，
 * 因此 V5 仍通过 JS 在 focus 前临时处理实际字号。
 */
html,
body,
input,
textarea,
select,
.cm-editor,
.cm-editor .cm-scroller,
.cm-editor .cm-content,
.cm-editor .cm-line {
    -webkit-text-size-adjust: 100% !important;
    text-size-adjust: 100% !important;
}

</style>
`;

const script = `
<script data-github-ios-no-zoom-v5>

(function () {
    "use strict";

    if (window.__githubIOSNoZoomV5) {
        return;
    }

    window.__githubIOSNoZoomV5 = true;

    function isIOS() {
        const ua = navigator.userAgent || "";

        return (
            /iPhone|iPad|iPod/i.test(ua) ||
            (
                /Macintosh/i.test(ua) &&
                navigator.maxTouchPoints > 1
            )
        );
    }

    if (!isIOS()) {
        return;
    }

    /*
     * 当前一次 focus 预处理所记录的原始样式。
     * 使用 Map，避免同一个元素被 touchstart + pointerdown
     * 重复记录。
     */
    const pending = new Map();
    let restoreTimer = null;
    let restoreToken = 0;

    function rememberAndSet16(element) {
        if (!element || element.nodeType !== 1) {
            return;
        }

        if (pending.has(element)) {
            return;
        }

        let computedSize = 0;

        try {
            computedSize = parseFloat(
                window.getComputedStyle(element).fontSize
            );
        } catch (e) {}

        /*
         * 原本已经 >= 16px 时完全不碰它。
         */
        if (isFinite(computedSize) && computedSize >= 16) {
            return;
        }

        pending.set(element, {
            value: element.style.getPropertyValue("font-size"),
            priority: element.style.getPropertyPriority("font-size")
        });

        element.style.setProperty(
            "font-size",
            "16px",
            "important"
        );
    }

    function restoreAll() {
        const entries = Array.from(pending.entries());
        pending.clear();

        /*
         * 倒序恢复，尽量保持与修改时相反的层级顺序。
         */
        for (let i = entries.length - 1; i >= 0; i--) {
            const element = entries[i][0];
            const original = entries[i][1];

            if (!element || !element.isConnected) {
                continue;
            }

            if (original.value) {
                element.style.setProperty(
                    "font-size",
                    original.value,
                    original.priority || ""
                );
            } else {
                element.style.removeProperty("font-size");
            }
        }
    }

    function scheduleRestore() {
        const token = ++restoreToken;

        if (restoreTimer) {
            clearTimeout(restoreTimer);
            restoreTimer = null;
        }

        /*
         * 第一帧：让 focus 事件和 WebKit 的 zoom 判断完成。
         * 第二帧：恢复原始字号。
         */
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                if (token === restoreToken) {
                    restoreAll();
                }
            });
        });

        /*
         * 极少数 WebKit 时序较慢时的兜底。
         * 时间很短，不会让字号长期保持 16px。
         */
        restoreTimer = setTimeout(function () {
            if (token === restoreToken) {
                restoreAll();
            }
        }, 120);
    }

    function getCodeMirrorEditor(element) {
        if (!element || !element.closest) {
            return null;
        }

        return element.closest(".cm-editor");
    }

    function prepareCodeMirror(editor) {
        if (!editor) {
            return;
        }

        /*
         * CodeMirror 6 真正负责输入的节点。
         * iOS focus zoom 最重要的是这个 contenteditable。
         */
        const content = editor.querySelector(
            ".cm-content[contenteditable=\"true\"]," +
            " .cm-content," +
            " [contenteditable=\"true\"][role=\"textbox\"]," +
            " [contenteditable=\"true\"]"
        );

        if (!content) {
            return;
        }

        /*
         * 编辑器本体 + scroller + content + 当前代码行。
         * 不永久修改，只临时写入，focus 完成后恢复。
         */
        rememberAndSet16(editor);

        const scroller = editor.querySelector(".cm-scroller");
        if (scroller) {
            rememberAndSet16(scroller);
        }

        rememberAndSet16(content);

        const lines = editor.querySelectorAll(".cm-line");
        for (let i = 0; i < lines.length; i++) {
            rememberAndSet16(lines[i]);
        }
    }

    function isNativeEditable(element) {
        if (!element || element.nodeType !== 1) {
            return false;
        }

        const tag = element.tagName;

        if (tag === "INPUT") {
            const type = (
                element.getAttribute("type") || "text"
            ).toLowerCase();

            return !/^(checkbox|radio|range|button|submit|reset|file|hidden|image|color)$/.test(type);
        }

        return tag === "TEXTAREA" || tag === "SELECT";
    }

    function prepareTarget(target) {
        if (!target || target.nodeType !== 1) {
            return false;
        }

        /* 普通输入控件 */
        if (isNativeEditable(target)) {
            rememberAndSet16(target);
            return true;
        }

        /* CodeMirror */
        const editor = getCodeMirrorEditor(target);
        if (editor) {
            prepareCodeMirror(editor);
            return true;
        }

        return false;
    }

    /*
     * =====================================================
     * touchstart
     * =====================================================
     *
     * 这是防止 iOS Auto Zoom 的关键时机。
     * capture=true 确保早于 GitHub 自己的事件处理器执行。
     */
    document.addEventListener(
        "touchstart",
        function (event) {
            prepareTarget(event.target);
        },
        true
    );

    /*
     * =====================================================
     * pointerdown
     * =====================================================
     */
    document.addEventListener(
        "pointerdown",
        function (event) {
            prepareTarget(event.target);
        },
        true
    );

    /*
     * =====================================================
     * focusin
     * =====================================================
     *
     * 某些情况下最终 focus 目标与 touchstart 目标不同，
     * 因此这里再补一次，但不会破坏原有字号恢复逻辑。
     */
    document.addEventListener(
        "focusin",
        function (event) {
            prepareTarget(event.target);
            scheduleRestore();
        },
        true
    );

    /*
     * =====================================================
     * blur / focusout
     * =====================================================
     *
     * 如果用户通过键盘、辅助功能或其他方式进入编辑器，
     * 仍然确保残留的临时字号能够恢复。
     */
    document.addEventListener(
        "focusout",
        function () {
            if (pending.size) {
                scheduleRestore();
            }
        },
        true
    );

    /*
     * =====================================================
     * MutationObserver
     * =====================================================
     *
     * GitHub 是 SPA，CodeMirror 可能在初始 HTML 之后才创建。
     * V5 不在创建时修改字号，避免改变页面初始视觉效果；
     * 只依靠 touchstart / pointerdown / focusin 捕获实际编辑器。
     */
    const observer = new MutationObserver(function () {
        /*
         * 不需要主动 prepareAll。
         * 这样可以避免 GitHub 大量 DOM 更新时反复写样式，
         * 同时仍然能够处理动态创建的 CodeMirror。
         */
    });

    function startObserver() {
        if (!document.documentElement) {
            return;
        }

        observer.observe(
            document.documentElement,
            {
                childList: true,
                subtree: true
            }
        );
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            startObserver,
            { once: true }
        );
    } else {
        startObserver();
    }

})();

</script>
`;

const injection = css + script;

if (/<\\/head\\s*>/i.test(body)) {
    body = body.replace(
        /<\\/head\\s*>/i,
        injection + "</head>"
    );
} else if (/<body(?:\\s[^>]*)?>/i.test(body)) {
    body = body.replace(
        /<body(?:\\s[^>]*)?>/i,
        function (match) {
            return match + injection;
        }
    );
} else {
    body = injection + body;
}

$done({ body: body });
