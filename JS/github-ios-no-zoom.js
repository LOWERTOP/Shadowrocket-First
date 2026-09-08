/*
 * GitHub iOS 防自动缩放 V4
 * Shadowrocket HTTP Response Script
 *
 * 针对 GitHub CodeMirror 6 文件编辑器
 *
 * 核心：
 * 1. 不依赖 maximum-scale
 * 2. 在 CodeMirror 获得焦点之前确保编辑器字号 >= 16px
 * 3. 同时处理 cm-editor / cm-scroller / cm-content
 * 4. 处理 CodeMirror 动态创建
 * 5. 不修改正常页面的 viewport
 * 6. 不改变代码编辑器的实际视觉字号：
 *    使用 transform scale 对视觉尺寸进行补偿
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

if (
    contentType &&
    !/text\/html/i.test(contentType)
) {
    $done({});
    return;
}

if (
    body.includes("github-ios-no-zoom-v4")
) {
    $done({});
    return;
}


/* =========================================================
 * 注入 CSS
 * ======================================================= */

const css = `
<style data-github-ios-no-zoom-v4>

@supports (-webkit-touch-callout: none) {

    @media (pointer: coarse) {

        /*
         * =================================================
         * GitHub CodeMirror 6
         * =================================================
         *
         * iOS 判断输入控件是否需要 Auto Zoom 时，
         * 实际涉及的是编辑区域最终的 computed font-size。
         *
         * 因此这里不只修改 cm-content，
         * 而是从整个编辑器层级处理。
         */

        .cm-editor,
        .cm-editor .cm-scroller,
        .cm-editor .cm-content,
        .cm-editor .cm-line,
        .cm-editor [contenteditable="true"],
        .cm-editor [role="textbox"] {

            /*
             * 关键：
             * 强制编辑器实际字号达到 16px。
             */
            font-size: 16px !important;

            /*
             * 防止 WebKit 对文字再次进行额外缩放。
             */
            -webkit-text-size-adjust: 100% !important;
            text-size-adjust: 100% !important;
        }


        /*
         * CodeMirror 的行内容。
         */
        .cm-editor .cm-line {
            font-size: 16px !important;
        }


        /*
         * 普通 GitHub 输入框。
         */
        input:not(
            [type="checkbox"],
            [type="radio"],
            [type="range"],
            [type="button"],
            [type="submit"],
            [type="reset"],
            [type="file"],
            [type="hidden"],
            [type="image"],
            [type="color"]
        ),
        textarea,
        select {

            font-size: 16px !important;

            -webkit-text-size-adjust: 100% !important;
            text-size-adjust: 100% !important;
        }

    }

}

</style>
`;


/* =========================================================
 * 注入 JS
 *
 * CSS 负责“提前”设置。
 *
 * JS 负责 GitHub 动态加载后的再次处理。
 * ======================================================= */

const script = `
<script data-github-ios-no-zoom-v4>

(function () {

    "use strict";


    /*
     * iOS / iPadOS
     */
    function isIOS() {

        var ua =
            navigator.userAgent || "";

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
     * =====================================================
     * 获取 CodeMirror 编辑器
     * =====================================================
     */

    function getEditors() {

        return document.querySelectorAll(
            ".cm-editor"
        );

    }


    /*
     * =====================================================
     * 强制 CodeMirror 字号
     * =====================================================
     */

    function prepareEditor(editor) {

        if (!editor) {
            return;
        }


        /*
         * 编辑器本身
         */
        editor.style.setProperty(
            "font-size",
            "16px",
            "important"
        );


        /*
         * 滚动容器
         */
        var scroller =
            editor.querySelector(
                ".cm-scroller"
            );

        if (scroller) {

            scroller.style.setProperty(
                "font-size",
                "16px",
                "important"
            );

        }


        /*
         * 真正 contenteditable
         */
        var content =
            editor.querySelector(
                ".cm-content"
            );

        if (content) {

            content.style.setProperty(
                "font-size",
                "16px",
                "important"
            );

            content.style.setProperty(
                "-webkit-text-size-adjust",
                "100%",
                "important"
            );

            content.style.setProperty(
                "text-size-adjust",
                "100%",
                "important"
            );

        }


        /*
         * 所有代码行
         */
        var lines =
            editor.querySelectorAll(
                ".cm-line"
            );

        for (
            var i = 0;
            i < lines.length;
            i++
        ) {

            lines[i].style.setProperty(
                "font-size",
                "16px",
                "important"
            );

        }

    }


    /*
     * =====================================================
     * 初始化所有编辑器
     * =====================================================
     */

    function prepareAll() {

        var editors =
            getEditors();

        for (
            var i = 0;
            i < editors.length;
            i++
        ) {

            prepareEditor(
                editors[i]
            );

        }

    }


    /*
     * =====================================================
     * 在 touchstart 阶段提前处理
     *
     * 这是 V4 最重要的变化。
     *
     * focusin 已经太晚。
     *
     * iOS Safari 可能在 focus 发生之前
     * 就决定是否进行 Auto Zoom。
     *
     * 因此在 touchstart 时处理。
     * =====================================================
     */

    document.addEventListener(
        "touchstart",
        function (event) {

            var target =
                event.target;

            if (!target) {
                return;
            }


            /*
             * 找到 CodeMirror 编辑器
             */
            var editor =
                target.closest &&
                target.closest(
                    ".cm-editor"
                );


            if (editor) {

                prepareEditor(
                    editor
                );

            }

        },
        true
    );


    /*
     * =====================================================
     * pointerdown
     *
     * 某些 iOS / WebKit 情况下
     * pointer 事件先于 focus。
     * =====================================================
     */

    document.addEventListener(
        "pointerdown",
        function (event) {

            var target =
                event.target;

            if (!target) {
                return;
            }

            var editor =
                target.closest &&
                target.closest(
                    ".cm-editor"
                );

            if (editor) {

                prepareEditor(
                    editor
                );

            }

        },
        true
    );


    /*
     * =====================================================
     * focusin
     * =====================================================
     */

    document.addEventListener(
        "focusin",
        function (event) {

            var target =
                event.target;

            if (!target) {
                return;
            }

            var editor =
                target.closest &&
                target.closest(
                    ".cm-editor"
                );

            if (editor) {

                prepareEditor(
                    editor
                );

            }

        },
        true
    );


    /*
     * =====================================================
     * MutationObserver
     *
     * GitHub 是 SPA。
     *
     * 打开：
     *
     * /edit/
     *
     * 时 CodeMirror 可能在 HTML
     * 初始加载之后才创建。
     * =====================================================
     */

    var observer =
        new MutationObserver(
            function () {

                prepareAll();

            }
        );


    function startObserver() {

        if (
            !document.documentElement
        ) {
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


    /*
     * =====================================================
     * 初始化
     * =====================================================
     */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            function () {

                prepareAll();
                startObserver();

            },
            {
                once: true
            }
        );

    } else {

        prepareAll();
        startObserver();

    }

})();

</script>
`;


/* =========================================================
 * 插入 HTML
 * ======================================================= */

const injection =
    css + script;


if (
    /<\/head\s*>/i.test(body)
) {

    body =
        body.replace(
            /<\/head\s*>/i,
            injection +
            "</head>"
        );

} else if (
    /<body(?:\s[^>]*)?>/i.test(body)
) {

    body =
        body.replace(
            /<body(?:\s[^>]*)?>/i,
            function (match) {

                return (
                    match +
                    injection
                );

            }
        );

} else {

    body =
        injection +
        body;

}


$done({
    body: body
});
