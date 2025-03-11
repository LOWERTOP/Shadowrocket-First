/**
 * Shadowrocket 移除 twmanga 相关网站的广告元素
 * 目标：删除 class="mobadsq", "div_sub_adhost", "div_adhost", "div_close_ads" 的广告
 * 适用于 twmanga 的所有域名
 */

// 解析 HTML 并删除目标广告元素
const body = $response.body;
let modifiedBody = body;

// 删除 .mobadsq 广告
modifiedBody = modifiedBody.replace(/<div[^>]*class=["']?mobadsq["']?[^>]*>.*?<\/div>/g, '');

// 删除 .div_sub_adhost 广告
modifiedBody = modifiedBody.replace(/<div[^>]*class=["']?div_sub_adhost["']?[^>]*>.*?<\/div>/g, '');

// 删除 .div_adhost 广告
modifiedBody = modifiedBody.replace(/<div[^>]*class=["']?div_adhost["']?[^>]*>.*?<\/div>/g, '');

// 删除 .div_close_ads 广告
modifiedBody = modifiedBody.replace(/<div[^>]*class=["']?div_close_ads["']?[^>]*>.*?<\/div>/g, '');

// 返回修改后的 HTML
$done({ body: modifiedBody });
