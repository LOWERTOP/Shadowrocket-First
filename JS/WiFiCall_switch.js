// Shadowrocket WiFi Calling 开关控制脚本
const enabled = $persistentStore.read("地区定位");

console.log("地区定位开关状态:", enabled);
console.log("当前请求URL:", $request.url);

// 仅在开关启用时执行代理逻辑
if (enabled === "true") {
  console.log("切换到 WiFiCall 代理");
  $done({ policy: "WiFiCall" }); 
} else {
  console.log("保持直接连接");
  $done();
}
