/**
 * Shadowrocket 移除 twmanga.com & baozimh.com 相关广告元素
 * 目标：
 * - 删除 twmanga 的 class="mobadsq", "div_sub_adhost", "div_adhost", "div_close_ads", "l-box"
 * - 删除 baozimh 的 class="recommend" 和 h3[style="margin: 0 0 12px; padding: 0;"]
 * 作者: LOWERTOP
 */

// 获取当前请求的 URL
const url = $request.url;

// 仅在 twmanga.com 和 baozimh.com 及其所有子域名下执行
if (/https?:\/\/([^\/]+\.)?(twmanga|baozimh)\.com/.test(url)) {
    // 解析 HTML 并删除目标广告元素
    const body = $response.body;
    let modifiedBody = body;

    // 定义要删除的广告 class 名称
    const adClasses = [
        "mobadsq",          // twmanga 广告
        "div_sub_adhost",   // twmanga 广告
        "div_adhost",       // twmanga 广告
        "div_close_ads",    // twmanga 广告
        "l-box",            // twmanga 广告
        "recommend"         // baozimh 推荐广告
    ];

    // 循环删除多个广告元素
    adClasses.forEach(adClass => {
        const regex = new RegExp(`<div[^>]*class=["']?${adClass}["']?[^>]*>.*?<\\/div>`, "gi");
        modifiedBody = modifiedBody.replace(regex, '');
    });

    // 额外删除 baozimh.com 特定的 h3 标签广告
    modifiedBody = modifiedBody.replace(/<h3[^>]*style=["']?margin:\s?0\s?0\s?12px;\s?padding:\s?0;["']?[^>]*>.*?<\/h3>/gi, '');

    // 返回修改后的 HTML
    $done({ body: modifiedBody });
} else {
    // 不是目标域名，直接返回原始内容
    $done({});
}
