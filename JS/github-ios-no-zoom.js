/*
 * GitHub iOS 防自动缩放 V6
 * Shadowrocket HTTP Response Script
 *
 * 目标：阻止 iOS WebKit 在 GitHub 文件编辑器中触发“整个页面自动放大”。
 *
 * V6 与 V5.x 的核心区别：
 * 1. 不再只修改点击瞬间找到的 .cm-content。
 * 2. 使用“编辑器临时保护状态”，覆盖 CodeMirror 6 异步 focus / DOM 更新。
 * 3. 同时处理真正的 contenteditable、当前点击目标和当前编辑器。
 * 4. focus 后连续检查数帧，避免 GitHub/CodeMirror 在下一帧替换节点后失效。
 * 5. 保护结束后恢复原始 inline font-size，不永久改变 GitHub 原字号。
 * 6. 不设置 maximum-scale=1，因此不关闭用户自己的双指缩放能力。
 * 7. 只在已经命中的 GitHub 编辑器/原生输入控件附近工作，不扫描整个页面。
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

if (body.includes("github-ios-no-zoom-v6")) {
    $done({});
    return;
}

const css = `
<style data-github-ios-no-zoom-v6>
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

/*
 * 保护状态只存在于用户正在点击/聚焦编辑器的短时间内。
 * 16px 是为了满足 iOS 对可编辑区域自动 page zoom 的判定阈值。
 * 保护解除后不会继续影响页面原始字号。
 */
.cm-editor.github-ios-no-zoom-v6-active .cm-content[contenteditable="true"] {
    font-size: 16px !important;
}

.github-ios-no-zoom-v6-native-protect {
    font-size: 16px !important;
}
</style>
`;

const script = `
<script data-github-ios-no-zoom-v6>
(function () {
    "use strict";

    if (window.__githubIOSNoZoomV6) return;
    window.__githubIOSNoZoomV6 = true;

    const ua = navigator.userAgent || "";
    const ios = /iPhone|iPad|iPod/i.test(ua) ||
        (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1);

    if (!ios) return;

    const originalStyles = new Map();
    let activeEditor = null;
    let restoreTimer = null;
    let protectionToken = 0;
    let rafIds = [];

    function editableElement(element) {
        if (!element || element.nodeType !== 1) return null;

        const tag = element.tagName;
        if (tag === "INPUT") {
            const type = (element.getAttribute("type") || "text").toLowerCase();
            if (/^(checkbox|radio|range|button|submit|reset|file|hidden|image|color)$/.test(type)) {
                return null;
            }
            return element;
        }

        if (tag === "TEXTAREA" || tag === "SELECT") return element;

        if (element.isContentEditable ||
            element.getAttribute("contenteditable") === "true") {
            return element;
        }

        return null;
    }

    function rememberAndSet16(element) {
        if (!element || element.nodeType !== 1) return;

        if (!originalStyles.has(element)) {
            originalStyles.set(element, {
                value: element.style.getPropertyValue("font-size"),
                priority: element.style.getPropertyPriority("font-size")
            });
        }

        element.style.setProperty("font-size", "16px", "important");
    }

    function protectNative(element) {
        if (!element) return;
        rememberAndSet16(element);
        element.classList.add("github-ios-no-zoom-v6-native-protect");
    }

    function protectCodeMirror(editor, target) {
        if (!editor) return false;

        activeEditor = editor;
        editor.classList.add("github-ios-no-zoom-v6-active");

        /*
         * 当前真正可编辑节点。CodeMirror 6 的 contentDOM 通常就是这里。
         */
        const content = editor.querySelector(
            ".cm-content[contenteditable=\"true\"]"
        );

        if (content) {
            rememberAndSet16(content);
        }

        /*
         * 只处理当前点击目标及其最近的可编辑祖先链，
         * 不遍历整个代码文件，避免大文件产生明显卡顿。
         */
        let node = target;
        let depth = 0;
        while (node && node !== editor && depth < 4) {
            if (node.nodeType === 1) {
                if (node.matches && node.matches(".cm-line")) {
                    rememberAndSet16(node);
                }

                if (node.isContentEditable ||
                    node.getAttribute("contenteditable") === "true") {
                    rememberAndSet16(node);
                }
            }

            node = node.parentElement;
            depth++;
        }

        return !!content;
    }

    function findEditorFromTarget(target) {
        if (!target || target.nodeType !== 1 || !target.closest) return null;
        return target.closest(".cm-editor");
    }

    function resolveTarget(target, event) {
        if (target && target.nodeType === 1) {
            return target;
        }

        /*
         * 某些 iOS/WebKit 事件可能把 target 交给文本节点或包装节点。
         * elementFromPoint 可以重新得到用户真正点击的位置。
         */
        if (event && typeof event.clientX === "number" &&
            typeof event.clientY === "number") {
            try {
                const element = document.elementFromPoint(
                    event.clientX,
                    event.clientY
                );
                if (element) return element;
            } catch (e) {}
        }

        return null;
    }

    function protectFromTarget(rawTarget, event) {
        const target = resolveTarget(rawTarget, event);
        if (!target) return;

        const native = editableElement(target);
        if (native) {
            protectNative(native);
            scheduleRestore(1200);
            return;
        }

        const editor = findEditorFromTarget(target);
        if (editor) {
            protectCodeMirror(editor, target);
            startFocusGuard(editor);
            return;
        }

        /*
         * 如果点击命中 CodeMirror 的外围元素，使用坐标再次确认，
         * 仍然只在这个点击位置附近查找，不扫描 document。
         */
        if (event && typeof event.clientX === "number") {
            try {
                const element = document.elementFromPoint(
                    event.clientX,
                    event.clientY
                );
                const pointEditor = findEditorFromTarget(element);
                if (pointEditor) {
                    protectCodeMirror(pointEditor, element);
                    startFocusGuard(pointEditor);
                }
            } catch (e) {}
        }
    }

    function protectFocusedTarget(target) {
        if (!target || target.nodeType !== 1) return;

        const native = editableElement(target);
        if (native) {
            protectNative(native);
            return;
        }

        const editor = findEditorFromTarget(target);
        if (editor) {
            protectCodeMirror(editor, target);
            startFocusGuard(editor);
        }
    }

    function startFocusGuard(editor) {
        const token = ++protectionToken;

        for (let i = 0; i < rafIds.length; i++) {
            cancelAnimationFrame(rafIds[i]);
        }
        rafIds = [];

        /*
         * CodeMirror/GitHub 可能在 focus 后才完成 contentDOM/selection 的更新。
         * 连续检查 8 帧，只处理同一个编辑器，不产生全 DOM 扫描。
         */
        let frame = 0;

        function check() {
            if (token !== protectionToken) return;
            if (!editor || !editor.isConnected) return;

            editor.classList.add("github-ios-no-zoom-v6-active");

            const content = editor.querySelector(
                ".cm-content[contenteditable=\"true\"]"
            );

            if (content) {
                rememberAndSet16(content);
            }

            frame++;
            if (frame < 8) {
                const id = requestAnimationFrame(check);
                rafIds.push(id);
            }
        }

        const id = requestAnimationFrame(check);
        rafIds.push(id);

        /*
         * 自动缩放/键盘动画在部分 iOS 版本上可能明显晚于 focus，
         * 因此保护窗口比 V5.x 更长；结束后立即恢复原始字号。
         */
        scheduleRestore(1200);
    }

    function scheduleRestore(delay) {
        const token = ++protectionToken;

        if (restoreTimer) {
            clearTimeout(restoreTimer);
        }

        restoreTimer = setTimeout(function () {
            if (token !== protectionToken) return;

            if (activeEditor && activeEditor.isConnected) {
                activeEditor.classList.remove("github-ios-no-zoom-v6-active");
            }
            activeEditor = null;

            for (const [element, original] of originalStyles) {
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

                element.classList.remove("github-ios-no-zoom-v6-native-protect");
            }

            originalStyles.clear();
            restoreTimer = null;
        }, delay || 1200);
    }

    /*
     * touchstart：最早的用户触摸阶段，优先于 GitHub 后续 focus 流程。
     */
    document.addEventListener("touchstart", function (event) {
        protectFromTarget(event.target, event);
    }, true);

    /* pointerdown：覆盖较新的 iOS/WebKit pointer 事件路径。 */
    document.addEventListener("pointerdown", function (event) {
        protectFromTarget(event.target, event);
    }, true);

    /* mousedown：兼容部分 GitHub/桌面 WebKit 事件链。 */
    document.addEventListener("mousedown", function (event) {
        protectFromTarget(event.target, event);
    }, true);

    /*
     * focus/focusin：真正获得焦点以后再次确认实际节点。
     * 这一步专门解决 GitHub/CodeMirror 异步替换 contentDOM 的问题。
     */
    document.addEventListener("focus", function (event) {
        protectFocusedTarget(event.target);
    }, true);

    document.addEventListener("focusin", function (event) {
        protectFocusedTarget(event.target);
    }, true);

    document.addEventListener("focusout", function (event) {
        const target = event.target;
        const editor = findEditorFromTarget(target);

        if (editor) {
            /* focus 离开编辑器后给 WebKit 一个短暂缓冲，再恢复字号。 */
            scheduleRestore(300);
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
