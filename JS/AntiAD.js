/**
 * Shadowrocket 移除 twmanga.com 及其子域名的广告元素
 * 目标：删除 class="mobadsq", "div_sub_adhost", "div_adhost", "div_close_ads", "l-box" 的广告
 * 作者: LOWERTOP
 */

// 获取当前请求的 URL
const url = $request.url;

// 仅在 twmanga.com 及其所有子域名下执行
if (/https?:\/\/([^\/]+\.)?twmanga\.com/.test(url)) {
    // 解析 HTML 并删除目标广告元素
    const body = $response.body;
    let modifiedBody = body;

    // 定义要删除的广告 class 名称
    const adClasses = [
        "mobadsq",
        "div_sub_adhost",
        "div_adhost",
        "div_close_ads",
        "l-box"
    ];

    // 循环删除多个广告元素
    adClasses.forEach(adClass => {
        const regex = new RegExp(`<div[^>]*class=["']?${adClass}["']?[^>]*>.*?<\\/div>`, "gi");
        modifiedBody = modifiedBody.replace(regex, '');
    });

    // 返回修改后的 HTML
    $done({ body: modifiedBody });
} else {
    // 不是 twmanga.com 相关域名，直接返回原始内容
    $done({});
}
