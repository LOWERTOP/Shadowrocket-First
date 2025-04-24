// Spotify header rewrite script for Shadowrocket
const url = $request.url;
const targetPattern = /^https:\/\/spclient\.wg\.spotify\.com\/user-customization-service\/v1\/customize$/;

if (targetPattern.test(url)) {
    // 如果 URL 匹配目标路径
    let headers = $request.headers;

    // 删除 if-none-match 头部
    if (headers["if-none-match"]) {
        delete headers["if-none-match"];
        console.log("已删除 if-none-match 头部");
    }

    // 返回修改后的 headers
    $done({ headers });
} else {
    // 如果 URL 不匹配，保持原样
    $done({});
}
