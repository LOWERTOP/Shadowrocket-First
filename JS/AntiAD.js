/**
 * Shadowrocket 移除 twmanga.com & baozimh.com 相关广告元素
 * 目标：
 * - 删除 twmanga 的广告：class="mobadsq", "div_sub_adhost", "div_adhost", "div_close_ads", "l-box", "m-page-bottom"
 * - 删除 baozimh 的广告：class="recommend", "addthis-box"
 * - 删除 baozimh.com 的 h3[style="margin: 0 0 12px; padding: 0;"]
 * - 删除 twmanga.com 的 div[style="overflow:hidden; flex: 1;"]
 * - 删除 twmanga.com 中 id="download-swiper" 的元素
 * 作者: LOWERTOP
 */

// 获取当前请求的 URL
const url = $request.url;

// 仅在 twmanga.com 和 baozimh.com 及其所有子域名下执行
if (/https?:\/\/([^\/]+\.)?(twmanga|baozimh)\.com/.test(url)) {
    // 确保 $response.body 存在，避免 undefined 错误
    if (!$response || !$response.body) {
        $done({});
        return;
    }

    let modifiedBody = $response.body;

    // 定义所有要删除的广告 class 名称
    const adClasses = [
        "mobadsq", "div_sub_adhost", "div_adhost", "div_close_ads", "l-box", "m-page-bottom",  // twmanga 广告
        "recommend", "addthis-box"  // baozimh 广告
    ];

    // 统一匹配 class 并删除
    const regex = new RegExp(`<div[^>]*class=["']?(${adClasses.join('|')})["']?[^>]*>.*?<\\/div>`, "gi");
    modifiedBody = modifiedBody.replace(regex, '');

    // 额外删除 baozimh.com 特定的 h3 标签广告
    modifiedBody = modifiedBody.replace(/<h3[^>]*style=["']?margin:\s?0\s?0\s?12px;\s?padding:\s?0;["']?[^>]*>.*?<\/h3>/gi, '');

    // 删除 twmanga.com 特定的 div[style="overflow:hidden; flex: 1;"]
    modifiedBody = modifiedBody.replace(/<div[^>]*style=["']?overflow:\s?hidden;\s?flex:\s?1;["']?[^>]*>.*?<\/div>/gi, '');

    // 删除 id="download-swiper" 的元素
    modifiedBody = modifiedBody.replace(/<div[^>]*id=["']?download-swiper["']?[^>]*>[\s\S]*?<\/div>/gi, '');

    // 返回修改后的 HTML
    $done({ body: modifiedBody });
} else {
    // 非目标域名，直接返回原始内容
    $done({});
}
