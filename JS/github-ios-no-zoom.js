/*
 * GitHub iOS 防自动缩放
 * Shadowrocket HTTP Response Script
 *
 * V3
 *
 * 主要针对：
 * - GitHub CodeMirror 6 文件编辑器
 * - iOS Safari / WKWebView 输入时页面自动 Zoom
 * - GitHub SPA / 动态加载编辑器
 *
 * 核心方案：
 * 1. 修改 viewport，禁止 iOS 因输入控件自动放大页面
 * 2. 针对 CodeMirror 6 编辑区域进行兼容处理
 *
 * 不主动修改代码字体大小。
 */

const response = $response;
let body = response && response.body;

if (!body) {
    $done({});
    return;
}


/* =========================================================
 * 1. 判断 HTML
 * ======================================================= */

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


/* =========================================================
 * 2. 防止重复处理
 * ======================================================= */

if (
    body.includes("github-ios-no-zoom-v3")
) {
    $done({});
    return;
}


/* =========================================================
 * 3. 修改 viewport
 *
 * iOS 在 focus CodeMirror contenteditable 时，
 * 可能触发页面级自动 Zoom。
 *
 * 这里保留 GitHub 原 viewport 的其他参数，
 * 只增加 maximum-scale=1。
 * ======================================================= */

function fixViewport(html) {

    const viewportRegex =
        /<meta\b[^>]*\bname\s*=\s*["']viewport["'][^>]*>/i;

    const match =
        html.match(viewportRegex);

    if (match) {

        let viewport = match[0];

        /*
         * 已经存在 maximum-scale 时直接覆盖。
         */
        if (
            /\bmaximum-scale\s*=/i.test(viewport)
        ) {

            viewport =
                viewport.replace(
                    /\bmaximum-scale\s*=\s*["'][^"']*["']/i,
                    'maximum-scale=1'
                );

        } else {

            /*
             * 在 content 属性末尾增加。
             */
            viewport =
                viewport.replace(
                    /content\s*=\s*(["'])(.*?)\1/i,
                    function (
                        full,
                        quote,
                        content
                    ) {

                        if (
                            content.trim().endsWith(",")
                        ) {
                            content +=
                                " maximum-scale=1";
                        } else {
                            content +=
                                ", maximum-scale=1";
                        }

                        return (
                            "content=" +
                            quote +
                            content +
                            quote
                        );
                    }
                );
        }

        return html.replace(
            viewportRegex,
            viewport
        );

    }


    /*
     * GitHub 页面极少数情况下没有 viewport。
     *
     * 新增一个。
     */
    const meta =
        '<meta name="viewport" ' +
        'content="width=device-width,initial-scale=1,maximum-scale=1" ' +
        'data-github-ios-no-zoom-v3>';

    if (
        /<\/head\s*>/i.test(html)
    ) {

        return html.replace(
            /<\/head\s*>/i,
            meta + "</head>"
        );

    }

    return html;
}


body = fixViewport(body);


/* =========================================================
 * 4. CodeMirror 6 CSS
 * ======================================================= */

const css = `
<style data-github-ios-no-zoom-v3>

@supports (-webkit-touch-callout: none) {

    /*
     * iOS Safari / WKWebView
     */
    html {
        -webkit-text-size-adjust: 100% !important;
    }


    /*
     * GitHub CodeMirror 6
     *
     * 实际编辑区域：
     *
     * .cm-content
     * contenteditable="true"
     * role="textbox"
     */
    .cm-editor .cm-content,
    .cm-editor [contenteditable="true"],
    .cm-editor [role="textbox"] {

        -webkit-text-size-adjust: 100% !important;

        /*
         * 防止 WebKit 对编辑区域做额外文字缩放。
         */
        text-size-adjust: 100% !important;

        /*
         * 保持编辑区域正常输入行为。
         */
        -webkit-user-modify: read-write-plaintext-only;
    }


    /*
     * CodeMirror 的滚动容器。
     *
     * 避免 iOS 将整个页面当成编辑区域处理。
     */
    .cm-editor .cm-scroller {
        -webkit-overflow-scrolling: touch;
    }


    /*
     * GitHub 其他普通输入控件。
     *
     * 只有小于 16px 的输入框才提高到 16px。
     *
     * 代码编辑器本身不在这里处理，
     * 因此不会改变代码字体大小。
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

        min-height: 1px;
    }

}

</style>
`;


/* =========================================================
 * 5. 动态页面辅助脚本
 *
 * GitHub 是 SPA。
 *
 * 页面从：
 *
 * /blob/
 *
 * 切换到：
 *
 * /edit/
 *
 * 时可能不会重新加载完整 HTML。
 *
 * 因此保留一个非常轻量的监听器。
 * ======================================================= */

const script = `
<script data-github-ios-no-zoom-v3>
(function () {

    "use strict";


    /*
     * iOS / iPadOS 判断
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
     * 给 CodeMirror 6 编辑区域
     * 添加必要的 iOS 属性。
     *
     * 注意：
     * 不修改 font-size。
     */
    function fixEditor() {

        var editors =
            document.querySelectorAll(
                ".cm-editor .cm-content"
            );

        for (
            var i = 0;
            i < editors.length;
            i++
        ) {

            var editor =
                editors[i];

            editor.style.setProperty(
                "-webkit-text-size-adjust",
                "100%",
                "important"
            );

            editor.style.setProperty(
                "text-size-adjust",
                "100%",
                "important"
            );

        }

    }


    /*
     * 页面初始化
     */
    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            fixEditor,
            {
                once: true
            }
        );

    } else {

        fixEditor();

    }


    /*
     * CodeMirror 可能在页面加载后
     * 才动态创建。
     */
    var observer =
        new MutationObserver(
            function () {

                fixEditor();

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


    startObserver();


})();
</script>
`;


/* =========================================================
 * 6. 注入 CSS + JS
 * ======================================================= */

const injection =
    css + script;


/*
 * 优先放入 head。
 */
if (
    /<\/head\s*>/i.test(body)
) {

    body =
        body.replace(
            /<\/head\s*>/i,
            injection + "</head>"
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


/* =========================================================
 * 7. 返回修改后的 HTML
 * ======================================================= */

$done({
    body: body
});
