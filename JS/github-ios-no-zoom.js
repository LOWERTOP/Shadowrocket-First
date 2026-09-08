/*
 * GitHub iOS 防自动缩放 V5.1
 * Shadowrocket HTTP Response Script
 *
 * 目标：
 * 1. 阻止 iOS 聚焦普通输入框、textarea、select 以及 GitHub CodeMirror 编辑器时的页面自动放大。
 * 2. 不永久修改网页原本字号；仅在即将获得焦点的瞬间临时提升到 16px。
 * 3. 保留 V4 已验证有效的 touchstart / pointerdown / focusin 处理方式。
 * 4. 兼容 GitHub SPA 动态创建的 CodeMirror 编辑器。
 * 5. 尽可能减少对 GitHub 页面加载和 CodeMirror 大文件编辑的性能影响。
 *
 * V5.1 性能修正版：
 * - 移除 MutationObserver：GitHub 是高频 DOM 更新的 SPA，持续观察整个 document 会产生明显开销。
 * - 不再遍历整个 .cm-line：大文件可能有数千甚至数万行，这是 V5 打开文件变慢的主要原因之一。
 * - CodeMirror 只临时处理 editor / scroller / content 三个必要层级。
 * - 动态创建的编辑器仍可通过事件委托正常捕获，无需预扫描。
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
 * 因此 V5.1 仍通过 JS 在 focus 前临时处理实际字号。
 */
html,
body,
input,
textarea,
select,
.cm-editor,
.cm-editor .cm-scroller,
.cm-editor .cm-content {
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
     * Map 可避免 touchstart / pointerdown / focusin 重复记录。
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

        /* 原本已经 >= 16px 时完全不碰。 */
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
         * 连续两帧后恢复原字号。
         * 这样给 WebKit 留出完成 focus zoom 判断的时间，
         * 同时不会让 16px 状态长期存在。
         */
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                if (token === restoreToken) {
                    restoreAll();
                }
            });
        });

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
         * 不再 querySelectorAll(".cm-line")。
         * 大文件的 .cm-line 数量可能非常多，遍历它们会明显拖慢交互。
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
         * 只处理三个必要层级：
         * editor → scroller → content
         * 不触碰每一行，保持大文件性能。
         */
        rememberAndSet16(editor);

        const scroller = editor.querySelector(".cm-scroller");
        if (scroller) {
            rememberAndSet16(scroller);
        }

        rememberAndSet16(content);
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
     * touchstart / pointerdown 使用 capture，
     * 确保在 GitHub 自己的事件处理器之前完成字号预处理。
     */
    document.addEventListener(
        "touchstart",
        function (event) {
            prepareTarget(event.target);
        },
        true
    );

    document.addEventListener(
        "pointerdown",
        function (event) {
            prepareTarget(event.target);
        },
        true
    );

    /*
     * focusin：
     * 某些情况下最终 focus 目标与 touchstart 目标不同，
     * 因此这里补一次。
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
     * focusout：
     * 防止通过键盘、辅助功能等非触摸方式进入编辑器后留下临时字号。
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
     * 不再使用 MutationObserver。
     *
     * GitHub 是 SPA，MutationObserver 监听整个 document 的 childList/subtree
     * 会产生大量回调；而事件委托本身已经可以捕获动态创建的 CodeMirror，
     * 因此这里无需主动扫描或监听 DOM。
     */
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
