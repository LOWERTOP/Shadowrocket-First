/**
 * Shadowrocket 移除 twmanga.com & baozimh.com 相关广告元素
 * 增强版：
 * - 新增对 baozimh.com 多个广告元素的清理
 * - 支持类选择器、ID选择器及复合选择器
 * 作者: LOWERTOP
 * 更新: 根据用户需求新增广告规则
 */

const url = $request.url;

if (/https?:\/\/([^\/]+\.)?(twmanga|baozimh)\.com/.test(url)) {
    const body = $response.body;
    let modifiedBody = body;

    // ✅ 1. 处理常规 class 广告
    const adClasses = [
        "mobadsq", "div_sub_adhost", "div_adhost", 
        "div_close_ads", "l-box", "recommend",
        "m-page-bottom", "download-swiper", // 新增
        "action-buttons", "position-relative", "chapter-goto" // 复合类
    ];

    adClasses.forEach(adClass => {
        const regex = new RegExp(
            `<[^>]+\\bclass=["'][^"']*\\b${adClass}\\b[^"']*["'][^>]*>.*?<\\/[^>]+>`, 
            "gi"
        );
        modifiedBody = modifiedBody.replace(regex, '');
    });

    // ✅ 2. 处理复合类（多个类同时存在）
    const compoundClassRegex = /<[^>]+class=["'][^"']*\baction-buttons\b[^"']*\bposition-relative\b[^"']*\bchapter-goto\b[^"']*["'][^>]*>.*?<\/[^>]+>/gi;
    modifiedBody = modifiedBody.replace(compoundClassRegex, '');

    // ✅ 3. 处理 ID 选择器
    const idSelectors = ["download-swiper"];
    idSelectors.forEach(id => {
        const idRegex = new RegExp(
            `<[^>]+\\bid=["']?${id}["']?[^>]*>.*?<\\/[^>]+>`, 
            "gi"
        );
        modifiedBody = modifiedBody.replace(idRegex, '');
    });

    // ✅ 4. 处理特定 style 规则
    const styleCleanRules = [
        {
            // baozimh 的 h3 标题广告
            regex: /<h3[^>]*style=["']?margin:\s?0\s?0\s?12px;\s?padding:\s?0;["']?[^>]*>.*?<\/h3>/gi
        },
        {
            // twmanga 的弹性布局广告
            regex: /<div[^>]*style=["']?overflow:\s?hidden;\s?flex:\s?1;["']?[^>]*>.*?<\/div>/gi
        }
    ];
    styleCleanRules.forEach(rule => {
        modifiedBody = modifiedBody.replace(rule.regex, '');
    });

    $done({ body: modifiedBody });
} else {
    $done({});
}
