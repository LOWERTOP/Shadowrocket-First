// Shadowrocket 脚本：删除 "if-none-match" 请求头
const url = $request.url;
const targetPattern = /^https:\/\/spclient\.wg\.spotify\.com\/user-customization-service\/v1\/customize$/;

if (targetPattern.test(url)) {
    let modifiedHeaders = $request.headers;
    delete modifiedHeaders["if-none-match"];

    // 处理后返回修改后的请求头
    $done({ headers: modifiedHeaders });
} else {
    $done({});
}
