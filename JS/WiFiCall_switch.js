// Shadowrocket WiFi Calling 开关控制脚本
const enabled = $persistentStore.read("地区定位");

// 仅在开关启用时执行代理逻辑
if (enabled === "true") {
  $done({ policy: "WiFiCall" }); 
} else {
  // 开关未启用时，不执行任何操作
  $done();
}
