/**
 * Shadowrocket 移除 twmanga.com & baozimh.com 相关广告
 * 
 * 目标：
 * - 删除 twmanga & baozimh 广告 class: "mobadsq", "recommend", "footer"
 * - 删除 twmanga.com 的 div[style="overflow:hidden; flex: 1;"]
 * 
 * 作者: LOWERTOP
 */

// 确保响应体存在
if (!$response || !$response.body) {
    $done({});
    return;
}

let modifiedBody = $response.body;

// 统一删除指定的 class 广告元素
const adClasses = ["mobadsq", "recommend", "footer"];
adClasses.forEach(adClass => {
    const regex = new RegExp(`<div[^>]*class=["']?${adClass}["']?[^>]*>.*?<\\/div>`, "gis");
    modifiedBody = modifiedBody.replace(regex, '');
});

// 删除指定 style="overflow:hidden; flex: 1;"
modifiedBody = modifiedBody.replace(/<div[^>]*style=["']?overflow:\s?hidden;\s?flex:\s?1;["']?[^>]*>.*?<\/div>/gis, '');

// 返回修改后的 HTML
$done({ body: modifiedBody });
