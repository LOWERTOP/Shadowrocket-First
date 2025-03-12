// Shadowrocket 脚本：删除 "If-None-Match" 请求头
const targetPattern = /^https:\/\/spclient\.wg\.spotify\.com\/user-customization-service\/v1\/customize$/;

if (targetPattern.test($request.url)) {
    let modifiedHeaders = { ...$request.headers }; // 使用展开运算符，避免修改原对象
    delete modifiedHeaders["If-None-Match"]; // 删除目标请求头（区分大小写）

    $done({ headers: modifiedHeaders });
} else {
    $done({});
}
