/*
 * GitHub iOS 输入框 / 代码编辑器防自动缩放
 * Shadowrocket HTTP Response Script
 *
 * V2
 *
 * 解决：
 * 1. 普通 input / textarea 聚焦时 iOS 自动放大
 * 2. GitHub 代码编辑器 contenteditable 聚焦时 iOS 自动放大
 * 3. CodeMirror 编辑器
 * 4. GitHub 动态加载的编辑器
 *
 * 不修改 viewport
 * 不禁止页面正常双指缩放
 */

const response = $response;
const body = response && response.body;

if (!body) {
  $done({});
  return;
}

const headers = response.headers || {};
const contentType =
  headers["Content-Type"] ||
  headers["content-type"] ||
  "";

// 只处理 HTML
if (contentType && !/text\/html/i.test(contentType)) {
  $done({});
  return;
}

// 防止重复注入
if (body.includes("github-ios-no-zoom-v2")) {
  $done({});
  return;
}


/*
 * 注入 CSS。
 *
 * GitHub 的代码编辑器并不一定使用 textarea，
 * 因此同时覆盖：
 *
 * input
 * textarea
 * select
 * contenteditable
 * role=textbox
 * CodeMirror
 */
const css = `
<style data-github-ios-no-zoom-v2>

@supports (-webkit-touch-callout: none) {

  @media (pointer: coarse) {

    /*
     * 普通输入框
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
    select,

    /*
     * 通用 contenteditable
     */
    [contenteditable="true"],

    /*
     * ARIA textbox
     */
    [role="textbox"],

    /*
     * CodeMirror 6
     */
    .cm-content,

    /*
     * CodeMirror 5
     */
    .CodeMirror textarea,

    /*
     * GitHub 编辑器常见编辑区域
     */
    .monaco-editor textarea,
    .monaco-editor .inputarea,

    /*
     * GitHub / Primer 编辑器中可能出现的编辑区域
     */
    .js-editor-textarea,
    .js-comment-field,
    .js-quick-submit
    {
      min-font-size: 16px !important;
    }

    /*
     * iOS 实际判断字号时，
     * min-font-size 并不是标准 CSS 属性，
     * 因此真正起作用的是这里。
     *
     * 使用 16px 防止 WebKit 自动 Zoom。
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
    select,
    [contenteditable="true"],
    [role="textbox"],
    .cm-content,
    .CodeMirror textarea,
    .monaco-editor textarea,
    .monaco-editor .inputarea,
    .js-editor-textarea,
    .js-comment-field
    {
      font-size: 16px !important;
    }

  }
}

</style>
`;


/*
 * 注入一个极小的 JS。
 *
 * 目的不是主动改变页面，
 * 而是在 GitHub 动态加载编辑器后，
 * 强制重新触发一次样式计算。
 *
 * 同时监听 focus，
 * 确保动态生成的 contenteditable 编辑器也能工作。
 */
const script = `
<script data-github-ios-no-zoom-v2>
(function () {

    "use strict";

    function githubIOSNoZoom() {

        /*
         * 仅 iOS / iPadOS
         */
        var ua = navigator.userAgent || "";

        var isIOS =
            /iPhone|iPad|iPod/i.test(ua) ||
            (
                /Macintosh/i.test(ua) &&
                navigator.maxTouchPoints > 1
            );

        if (!isIOS) {
            return;
        }

        /*
         * 找到当前获得焦点的元素
         */
        var active = document.activeElement;

        if (!active) {
            return;
        }

        /*
         * 普通输入框
         */
        var isInput =
            active.matches &&
            active.matches(
                'input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="file"]):not([type="hidden"]), textarea, select'
            );

        /*
         * contenteditable
         */
        var isEditable =
            active.isContentEditable === true ||
            (
                active.matches &&
                active.matches('[contenteditable="true"]')
            );

        /*
         * ARIA textbox
         */
        var isTextbox =
            active.matches &&
            active.matches('[role="textbox"]');

        /*
         * CodeMirror
         */
        var isCodeMirror =
            active.closest &&
            active.closest('.cm-editor, .CodeMirror');

        /*
         * Monaco / GitHub 编辑器
         */
        var isMonaco =
            active.closest &&
            active.closest('.monaco-editor');

        if (
            !isInput &&
            !isEditable &&
            !isTextbox &&
            !isCodeMirror &&
            !isMonaco
        ) {
            return;
        }

        /*
         * 强制浏览器重新计算当前编辑区域。
         */
        active.style.setProperty(
            "font-size",
            "16px",
            "important"
        );

    }


    /*
     * 页面加载完成
     */
    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            githubIOSNoZoom,
            false
        );

    } else {

        githubIOSNoZoom();

    }


    /*
     * 输入框 / 编辑器获得焦点
     */
    document.addEventListener(
        "focusin",
        function () {

            /*
             * 延迟一个事件循环，
             * 等 GitHub 自己完成 focus 处理之后再执行。
             */
            setTimeout(
                githubIOSNoZoom,
                0
            );

        },
        true
    );


    /*
     * GitHub 是 SPA。
     *
     * 页面切换、打开编辑器、切换文件时，
     * 编辑区域可能才刚刚被创建。
     */
    var observer =
        new MutationObserver(
            function () {

                githubIOSNoZoom();

            }
        );


    /*
     * 等待 documentElement 出现
     */
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

    startObserver();


})();
</script>
`;


/*
 * 插入 CSS + JS
 */
const injection = css + script;

let newBody;

if (/<\/head\s*>/i.test(body)) {

  newBody = body.replace(
    /<\/head\s*>/i,
    injection + "</head>"
  );

} else if (/<body(?:\s[^>]*)?>/i.test(body)) {

  newBody = body.replace(
    /<body(?:\s[^>]*)?>/i,
    function (match) {
      return match + injection;
    }
  );

} else {

  newBody = injection + body;

}


$done({
  body: newBody
});
