/**
 * Shadowrocket 移除 twmanga.com & baozimh.com 相关广告元素（优化版）
 * 更新：增强正则匹配能力，支持更多广告清理
 * 作者: LOWERTOP
 */

const url = $request.url;

// 仅在 twmanga.com 和 baozimh.com 及其所有子域名及路径下执行
if (/https?:\/\/([^\/]+\.)?(twmanga|baozimh)\.com\/.*/.test(url)) {
    let modifiedBody = $response.body;

    // 广告类名清理（支持多个 class）
    const adClasses = [
        "mobadsq", "div_sub_adhost", "div_adhost",
        "div_close_ads", "l-box", "recommend"
    ];

    adClasses.forEach(adClass => {
        const regex = new RegExp(`<div[^>]*\\bclass=["'][^"']*\\b${adClass}\\b[^"']*["'][^>]*>.*?<\\/div>`, "gis");
        modifiedBody = modifiedBody.replace(regex, '');
    });

    // 额外清理 baozimh.com 的 h3 广告
    modifiedBody = modifiedBody.replace(/<h3[^>]*style=["'][^"']*margin:\s?0\s?0\s?12px;\s?padding:\s?0;[^"']*["'][^>]*>.*?<\/h3>/gis, '');

    // 清理 twmanga.com 的广告 div[style="overflow:hidden; flex: 1;"]
    modifiedBody = modifiedBody.replace(/<div[^>]*style=["'][^"']*\boverflow:\s?hidden;[^"']*\bflex:\s?1;[^"']*["'][^>]*>.*?<\/div>/gis, '');

    // 清理 ID 选择器（如 download-swiper）
    const idSelectors = ["download-swiper"];
    idSelectors.forEach(id => {
        modifiedBody = modifiedBody.replace(new RegExp(`<div[^>]*id=["']?${id}["']?[^>]*>.*?<\\/div>`, "gis"), '');
    });

    $done({ body: modifiedBody });
}
