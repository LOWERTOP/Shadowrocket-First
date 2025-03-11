/**
 * Shadowrocket 移除 twmanga.com 及其子域名的广告元素
 * 目标：删除 class="mobadsq", "div_sub_adhost", "div_adhost", "div_close_ads", "l-box" 的广告
 * 适用于 *.twmanga.com
 */

// 获取当前请求的 URL
const url = $request.url;

// 仅在 twmanga.com 及其所有子域名下执行
if (/https?:\/\/([^\/]+\.)?twmanga\.com/.test(url)) {
    // 解析 HTML 并删除目标广告元素
    const body = $response.body;
    let modifiedBody = body;

    // 删除 .mobadsq 广告
    modifiedBody = modifiedBody.replace(/<div[^>]*\bmobadsq\b[^>]*>[\s\S]*?<\/div>/gi, '');

    // 删除 .div_sub_adhost 广告
    modifiedBody = modifiedBody.replace(/<div[^>]*\bdiv_sub_adhost\b[^>]*>[\s\S]*?<\/div>/gi, '');

    // 删除 .div_adhost 广告
    modifiedBody = modifiedBody.replace(/<div[^>]*\bdiv_adhost\b[^>]*>[\s\S]*?<\/div>/gi, '');

    // 删除 .div_close_ads 广告
    modifiedBody = modifiedBody.replace(/<div[^>]*\bdiv_close_ads\b[^>]*>[\s\S]*?<\/div>/gi, '');

    // 删除 .l-box 广告
    modifiedBody = modifiedBody.replace(/<div[^>]*\bl-box\b[^>]*>[\s\S]*?<\/div>/gi, '');

    // 返回修改后的 HTML
    $done({ body: modifiedBody });
} else {
    // 不是目标域名，直接返回原始内容
    $done({});
}
