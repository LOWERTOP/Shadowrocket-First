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

    // 基础广告类名清理
    const adClasses = [
        "mobadsq", "div_sub_adhost", "div_adhost", 
        "div_close_ads", "l-box", "recommend",
        "m-page-bottom", "download-swiper",      // 新增类选择器
        "action-buttons", "position-relative",  // 复合选择器拆解处理
        "chapter-goto"                          // 同时保留独立类清理能力
    ];

    // 基础广告类清理（支持多标签类型）
    adClasses.forEach(adClass => {
        const regex = new RegExp(
            `<\/?([a-zA-Z]+)[^>]*\\bclass=["'][^"']*\\b${adClass}\\b[^"']*["'][^>]*>`, 
            "gi"
        );
        modifiedBody = modifiedBody.replace(regex, '');
    });

    // 复合类选择器专项清理（需同时包含三个类）
    const compoundClassRegex = /<([a-zA-Z]+)(?=[^>]*class="[^"]*?\baction-buttons\b)(?=[^>]*class="[^"]*?\bposition-relative\b)(?=[^>]*class="[^"]*?\bchapter-goto\b)[^>]*>.*?<\/\1>/gi;
    modifiedBody = modifiedBody.replace(compoundClassRegex, '');

    // ID选择器专项清理
    const idSelectors = [
        "download-swiper"  // ID选择器
    ];
    idSelectors.forEach(id => {
        modifiedBody = modifiedBody.replace(
            new RegExp(`<[a-zA-Z]+[^>]*\\bid=["']${id}["'][^>]*>.*?<\/[a-zA-Z]+>`, "gi"), 
            ''
        );
    });

    // 样式特征清理
    const styleCleanRules = [
        {
            // baozimh 的 h3 标题广告
            regex: /<h3[^>]*style=["']?margin:\s?0\s?0\s?12px;\s?padding:\s?0;["']?[^>]*>.*?<\/h3>/gi
        },
        {
            // twmanga 的弹性布局广告容器
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
