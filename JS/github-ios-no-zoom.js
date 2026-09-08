/*
 * GitHub iOS 输入框防自动缩放
 * Shadowrocket HTTP Response Script
 *
 * 原理：
 * iOS Safari / WKWebView 在聚焦字号较小的输入控件时，
 * 可能自动放大页面。
 *
 * 本脚本通过修改 GitHub 返回的 HTML，
 * 为输入控件设置最小 16px 字号，
 * 避免触发 iOS 的自动缩放。
 */

const response = $response;
const body = response && response.body;

if (!body) {
  $done({});
  return;
}

// 只处理 HTML 响应
const headers = response.headers || {};
const contentType =
  headers["Content-Type"] ||
  headers["content-type"] ||
  "";

if (contentType && !/text\/html/i.test(contentType)) {
  $done({});
  return;
}

// 防止重复注入
if (body.indexOf("data-github-ios-no-zoom") !== -1) {
  $done({});
  return;
}

/*
 * 只针对 WebKit + 触控设备。
 *
 * 不修改 viewport，
 * 不禁止用户正常双指缩放。
 */
const css = `
<style data-github-ios-no-zoom>
@supports (-webkit-touch-callout: none) {
  @media (pointer: coarse) {
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
      font-size: max(16px, 1em) !important;
    }
  }
}
</style>
`;

let newBody;

// 优先插入 <head>
if (/<\/head\s*>/i.test(body)) {
  newBody = body.replace(
    /<\/head\s*>/i,
    css + "</head>"
  );
}

// 没有 <head> 时尝试插入 <body>
else if (/<body(?:\s[^>]*)?>/i.test(body)) {
  newBody = body.replace(
    /<body(?:\s[^>]*)?>/i,
    (match) => match + css
  );
}

// 极端情况下直接放到 HTML 开头
else {
  newBody = css + body;
}

$done({
  body: newBody
});
