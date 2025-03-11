/**
 * Shadowrocket 移除 twmanga 相关网站的广告元素
 * 目标：删除 class="mobadsq" 的广告
 * 适用于 twmanga 的所有域名
 */

// 解析 HTML 并删除目标广告元素
const body = $response.body;
const modifiedBody = body.replace(/<div[^>]*class=["']?mobadsq["']?[^>]*>.*?<\/div>/g, '');

// 返回修改后的 HTML
$done({ body: modifiedBody });
