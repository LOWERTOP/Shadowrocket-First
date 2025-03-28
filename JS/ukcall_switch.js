// Shadowrocket 代理规则开关控制
// 作用：允许通过 GUI 变量 "英国节点" 来决定 UKCall 是否生效

const enabled = $persistentStore.read("英国定位"); // 读取 GUI 变量

if (enabled === "true") {
  $done({ policy: "UKCall" }); // 走 UKCall 代理
} else {
  $done({ policy: "DIRECT" }); // 走直连
}
