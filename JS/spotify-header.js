// Spotify header rewrite script for Shadowrocket

const url = $request.url;
const targetUrl = "https://spclient.wg.spotify.com/user-customization-service/v1/customize";

if (url.indexOf(targetUrl) !== -1) {
  // 如果URL匹配目标URL
  let headers = $request.headers;
  
  // 删除if-none-match头
  if (headers["if-none-match"]) {
    delete headers["if-none-match"];
    console.log("已删除if-none-match头");
  }
  
  // 应用修改后的headers
  $done({headers});
} else {
  // 如果URL不匹配，不做任何更改
  $done({});
}
