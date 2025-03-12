// Shadowrocket 脚本：删除 "If-None-Match" 请求头
const url = $request.url;
const targetPattern = /^https:\/\/spclient\.wg\.spotify\.com\/user-customization-service\/v1\/customize$/;

if (targetPattern.test(url)) {
    let modifiedHeaders = Object.assign({}, $request.headers); // 复制 headers 避免直接修改原始对象
    delete modifiedHeaders["If-None-Match"]; // 删除请求头（大小写敏感）

    // 返回修改后的请求头
    $done({ headers: modifiedHeaders });
} else {
    $done({});
}
