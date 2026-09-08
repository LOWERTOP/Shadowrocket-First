/*
 * GitHub iOS 防自动缩放 V6.1
 *
 * 核心：iOS 会因为可编辑区域实际字号小于 16px 而触发整页自动放大。
 * 因此采用已验证有效的方案：聚焦前临时将实际编辑节点设为 16px，
 * 待 iOS 完成 focus / page zoom 判定后恢复原始字号。
 *
 * 性能原则：只在用户触摸/聚焦输入区域时工作；不扫描普通页面，
 * 不遍历整个 CodeMirror 文档，不使用全页面 MutationObserver。
 */

const response = $response;
let body = response && response.body;

if (!body) {
    $done({});
    return;
}

const headers = response.headers || {};
const contentType = headers["Content-Type"] || headers["content-type"] || "";

if (contentType && !/text\/html/i.test(contentType)) {
    $done({});
    return;
}

if (body.includes("github-ios-no-zoom-v6-1")) {
    $done({});
    return;
}

const css = `
<style data-github-ios-no-zoom-v6-1>
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

/* 仅在保护窗口内生效；结束后 class 移除，原始字号恢复。 */
.cm-editor.github-ios-no-zoom-v6-1-active .cm-content[contenteditable="true"] {
    font-size: 16px !important;
}

.github-ios-no-zoom-v6-1-input-active {
    font-size: 16px !important;
}
</style>
`;

const script = `
<script data-github-ios-no-zoom-v6-1>
(function () {
    "use strict";

    if (window.__githubIOSNoZoomV61) return;
    window.__githubIOSNoZoomV61 = true;

    const ua = navigator.userAgent || "";
    const isIOS = /iPhone|iPad|iPod/i.test(ua) ||
        (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1);

    if (!isIOS) return;

    const saved = new Map();
    let activeEditor = null;
    let restoreTimer = null;
    let generation = 0;
    let raf1 = 0;
    let raf2 = 0;
    let raf3 = 0;

    function saveAndSet16(el) {
        if (!el || el.nodeType !== 1) return;

        if (!saved.has(el)) {
            saved.set(el, {
                value: el.style.getPropertyValue("font-size"),
                priority: el.style.getPropertyPriority("font-size")
            });
        }

        el.style.setProperty("font-size", "16px", "important");
    }

    function restore() {
        if (restoreTimer) {
            clearTimeout(restoreTimer);
            restoreTimer = null;
        }

        if (activeEditor && activeEditor.isConnected) {
            activeEditor.classList.remove("github-ios-no-zoom-v6-1-active");
        }
        activeEditor = null;

        for (const [el, style] of saved) {
            if (!el || !el.isConnected) continue;

            if (style.value) {
                el.style.setProperty("font-size", style.value, style.priority || "");
            } else {
                el.style.removeProperty("font-size");
            }

            el.classList.remove("github-ios-no-zoom-v6-1-input-active");
        }

        saved.clear();
    }

    function laterRestore(ms, token) {
        if (restoreTimer) clearTimeout(restoreTimer);

        restoreTimer = setTimeout(function () {
            if (token !== generation) return;
            restore();
        }, ms);
    }

    function getElement(target) {
        if (!target) return null;
        if (target.nodeType === 1) return target;
        return target.parentElement || null;
    }

    function getEditor(target) {
        const el = getElement(target);
        if (!el || !el.closest) return null;
        return el.closest(".cm-editor");
    }

    function getContent(editor) {
        if (!editor) return null;
        return editor.querySelector(".cm-content[contenteditable=\"true\"]");
    }

    function protectEditor(editor, target) {
        if (!editor) return;

        generation++;
        const token = generation;
        activeEditor = editor;

        /*
         * 关键：class 放在 .cm-editor 上，而不是只修改一次 content 节点。
         * 如果 CodeMirror 替换 contentDOM，新节点仍会立即继承 16px 规则。
         */
        editor.classList.add("github-ios-no-zoom-v6-1-active");

        const content = getContent(editor);
        if (content) saveAndSet16(content);

        /* 当前点击 token / 行也临时设为 16px。 */
        let el = getElement(target);
        let depth = 0;
        while (el && el !== editor && depth < 5) {
            if (el.matches && el.matches(".cm-line")) {
                saveAndSet16(el);
            }
            el = el.parentElement;
            depth++;
        }

        /*
         * 只在编辑器内部检查 3 帧，解决 GitHub/CodeMirror 异步 focus。
         * 每帧只 query 当前编辑器，不扫描 document。
         */
        cancelAnimationFrame(raf1);
        cancelAnimationFrame(raf2);
        cancelAnimationFrame(raf3);

        raf1 = requestAnimationFrame(function () {
            if (token !== generation || !editor.isConnected) return;
            editor.classList.add("github-ios-no-zoom-v6-1-active");
            const current = getContent(editor);
            if (current) saveAndSet16(current);

            raf2 = requestAnimationFrame(function () {
                if (token !== generation || !editor.isConnected) return;
                editor.classList.add("github-ios-no-zoom-v6-1-active");
                const current2 = getContent(editor);
                if (current2) saveAndSet16(current2);

                raf3 = requestAnimationFrame(function () {
                    if (token !== generation || !editor.isConnected) return;
                    editor.classList.add("github-ios-no-zoom-v6-1-active");
                    const current3 = getContent(editor);
                    if (current3) saveAndSet16(current3);
                });
            });
        });

        /* 给 iOS 足够时间完成自动缩放判定，然后恢复原始字号。 */
        laterRestore(900, token);
    }

    function protectNativeInput(el) {
        if (!el) return;

        generation++;
        const token = generation;
        saveAndSet16(el);
        el.classList.add("github-ios-no-zoom-v6-1-input-active");
        laterRestore(900, token);
    }

    function handleTarget(target) {
        const el = getElement(target);
        if (!el) return;

        /* CodeMirror 6 编辑器优先。 */
        const editor = getEditor(el);
        if (editor) {
            protectEditor(editor, el);
            return;
        }

        /* 普通可编辑控件。 */
        const input = el.closest && el.closest("input, textarea, select");
        if (input) {
            const type = (input.getAttribute("type") || "text").toLowerCase();
            if (!/^(checkbox|radio|range|button|submit|reset|file|hidden|image|color)$/.test(type)) {
                protectNativeInput(input);
            }
        }
    }

    /* 最早的触摸阶段：必须早于 GitHub 的 focus。 */
    document.addEventListener("touchstart", function (event) {
        handleTarget(event.target);
    }, true);

    /* iOS 新版 WebKit 的 pointer 路径。 */
    document.addEventListener("pointerdown", function (event) {
        handleTarget(event.target);
    }, true);

    /* 桌面 WebKit / 兼容路径。 */
    document.addEventListener("mousedown", function (event) {
        handleTarget(event.target);
    }, true);

    /* focus 后再对真正获得焦点的节点做一次确认。 */
    document.addEventListener("focus", function (event) {
        const el = getElement(event.target);
        const editor = getEditor(el);

        if (editor) {
            protectEditor(editor, el);
            return;
        }

        if (el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) {
            protectNativeInput(el);
        }
    }, true);

    document.addEventListener("focusin", function (event) {
        const el = getElement(event.target);
        const editor = getEditor(el);

        if (editor) {
            protectEditor(editor, el);
            return;
        }

        if (el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) {
            protectNativeInput(el);
        }
    }, true);

    document.addEventListener("focusout", function (event) {
        const el = getElement(event.target);
        if (getEditor(el)) {
            generation++;
            laterRestore(250, generation);
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
