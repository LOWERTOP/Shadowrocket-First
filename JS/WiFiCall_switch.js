// Shadowrocket 代理规则开关控制
// 详细的调试版本
const enabled = $persistentStore.read("地区定位");

// 添加更多日志记录
console.log("地区定位开关状态:", enabled);

if (enabled === "true") {
  console.log("启用WiFiCall代理");
  $done({ policy: "WiFiCall" }); 
} else {
  console.log("使用直接连接");
  $done({ policy: "DIRECT" }); 
}
