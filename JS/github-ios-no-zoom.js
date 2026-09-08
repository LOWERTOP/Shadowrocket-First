/*
 * GitHub iOS 防自动缩放 V5.2
 * Shadowrocket HTTP Response Script
 *
 * 针对 GitHub 当前文件编辑器（CodeMirror 6）优化。
 * GitHub 官方文档确认文件编辑器使用 CodeMirror；当前编辑器结构为
 * .cm-editor → .cm-scroller → .cm-content[contenteditable=true]。
 *
 * 核心原则：
 * 1. 不修改普通页面的字号。
 * 2. 不扫描整个 DOM，不使用 MutationObserver。
 * 3. 点击 CodeMirror 时只处理当前点击行 + 真正的 contenteditable 节点。
 * 4. 在 iOS 完成 focus/自动缩放判断前保持 >=16px，随后恢复原始字号。
 * 5. 保留用户正常 pinch-to-zoom 能力。
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

if (body.includes("github-ios-no-zoom-v5.2")) {
    $done({});
    return;
}

const css = `
<style data-github-ios-no-zoom-v5.2>
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
<script data-github-ios-no-zoom-v5.2>
(function () {
    "use strict";

    if (window.__githubIOSNoZoomV52) return;
    window.__githubIOSNoZoomV52 = true;

    const ua = navigator.userAgent || "";
    const ios = /iPhone|iPad|iPod/i.test(ua) ||
        (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1);

    if (!ios) return;

    const pending = new Map();
    let restoreTimer = null;
    let restoreToken = 0;

    function rememberAndSet16(element) {
        if (!element || element.nodeType !== 1 || pending.has(element)) {
            return;
        }

        let size = 0;
        try {
            size = parseFloat(getComputedStyle(element).fontSize);
        } catch (e) {}

        if (isFinite(size) && size >= 16) return;

        pending.set(element, {
            value: element.style.getPropertyValue("font-size"),
            priority: element.style.getPropertyPriority("font-size")
        });

        element.style.setProperty("font-size", "16px", "important");
    }

    function restoreAll() {
        const entries = Array.from(pending.entries());
        pending.clear();

        for (let i = entries.length - 1; i >= 0; i--) {
            const element = entries[i][0];
            const original = entries[i][1];

            if (!element || !element.isConnected) continue;

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
        }

        /*
         * 关键修正：不能像 V5.1 一样在约 120ms 后恢复。
         * GitHub CodeMirror 6 会在点击后完成 focus、selection 和编辑器测量，
         * iOS 的键盘/缩放判定也可能跨越数帧。
         *
         * 500ms 足够覆盖这个过程，但只影响刚刚点击的元素，
         * 不会影响页面加载性能。
         */
        restoreTimer = setTimeout(function () {
            if (token === restoreToken) {
                restoreAll();
                restoreTimer = null;
            }
        }, 500);
    }

    function isNativeEditable(element) {
        if (!element || element.nodeType !== 1) return false;

        const tag = element.tagName;

        if (tag === "INPUT") {
            const type = (element.getAttribute("type") || "text").toLowerCase();
            return !/^(checkbox|radio|range|button|submit|reset|file|hidden|image|color)$/.test(type);
        }

        return tag === "TEXTAREA" || tag === "SELECT";
    }

    function prepareCodeMirrorFromTarget(target) {
        if (!target || !target.closest) return false;

        const content = target.closest(".cm-content[contenteditable=\"true\"]");
        const editor = target.closest(".cm-editor");

        if (!content || !editor) return false;

        /*
         * CodeMirror 6 的真正焦点节点就是 contentDOM（.cm-content）。
         * 这是最重要的一层。
         */
        rememberAndSet16(content);

        /*
         * 点击的是 .cm-line 时，额外处理当前这一行。
         *
         * V5 为了保险曾遍历全部 .cm-line，这会让大文件明显变慢。
         * V5.2 只处理用户当前点击的这一行，复杂度保持 O(1)。
         */
        const line = target.closest(".cm-line");
        if (line && line.parentElement === content) {
            rememberAndSet16(line);
        }

        return true;
    }

    function prepareTarget(target) {
        if (!target || target.nodeType !== 1) return false;

        if (isNativeEditable(target)) {
            rememberAndSet16(target);
            return true;
        }

        if (prepareCodeMirrorFromTarget(target)) {
            return true;
        }

        /*
         * 某些 GitHub 点击路径可能先命中编辑器容器，再由 CodeMirror
         * 异步把焦点放到 contentDOM；此时仍只查询当前编辑器内部的
         * contenteditable 节点，不扫描整个 document。
         */
        const editor = target.closest && target.closest(".cm-editor");
        if (editor) {
            const content = editor.querySelector(".cm-content[contenteditable=\"true\"]");
            if (content) {
                rememberAndSet16(content);
                return true;
            }
        }

        return false;
    }

    function prepareFocusedTarget(target) {
        if (!target || target.nodeType !== 1) return;

        if (isNativeEditable(target)) {
            rememberAndSet16(target);
            scheduleRestore();
            return;
        }

        if (target.matches && target.matches(".cm-content[contenteditable=\"true\"]")) {
            rememberAndSet16(target);
            scheduleRestore();
            return;
        }

        const editor = target.closest && target.closest(".cm-editor");
        if (editor) {
            const content = editor.querySelector(".cm-content[contenteditable=\"true\"]");
            if (content) {
                rememberAndSet16(content);
                scheduleRestore();
            }
        }
    }

    /*
     * iOS：touchstart 是最关键的时机。
     * 在 GitHub/CodeMirror 自己处理点击并触发 focus 之前，
     * 先把真正的 contenteditable 提升到 16px。
     */
    document.addEventListener("touchstart", function (event) {
        prepareTarget(event.target);
    }, true);

    /* 某些 WebKit/WKWebView 路径主要走 pointer 事件。 */
    document.addEventListener("pointerdown", function (event) {
        prepareTarget(event.target);
    }, true);

    /* 鼠标事件不影响 iOS，但可覆盖部分兼容路径。 */
    document.addEventListener("mousedown", function (event) {
        prepareTarget(event.target);
    }, true);

    /*
     * focus 本身比 focusin 更早进入捕获阶段；两者都保留，
     * 但这里只做 O(1) 的当前目标处理。
     */
    document.addEventListener("focus", function (event) {
        prepareFocusedTarget(event.target);
    }, true);

    document.addEventListener("focusin", function (event) {
        prepareFocusedTarget(event.target);
    }, true);

    document.addEventListener("focusout", function () {
        if (pending.size) {
            scheduleRestore();
        }
    }, true);
})();
</script>
`;

const injection = css + script;

if (/<\\/head\\s*>/i.test(body)) {
    body = body.replace(/<\\/head\\s*>/i, injection + "</head>");
} else if (/<body(?:\\s[^>]*)?>/i.test(body)) {
    body = body.replace(/<body(?:\\s[^>]*)?>/i, function (match) {
        return match + injection;
    });
} else {
    body = injection + body;
}

$done({ body: body });
