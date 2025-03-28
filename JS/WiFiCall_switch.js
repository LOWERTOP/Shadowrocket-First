// Shadowrocket 代理规则开关控制
// 作用：允许通过 GUI 变量 "地区定位" 来决定 WiFiCall 是否生效

const enabled = $persistentStore.read("地区定位"); // 读取 GUI 变量

if (enabled === "true") {
  $done({ policy: "WiFiCall" }); // 走 WiFiCall 代理
} else {
  $done({ policy: "DIRECT" }); // 走直连
}
