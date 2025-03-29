const targetDomain = /^(.*\.)?gspe1-ssl\.ls\.apple\.com$/;
const proxyGroup = "WiFiCall"; // 分组名称

if (targetDomain.test($request.host)) {
  $done({ policy: proxyGroup });
} else {
  $done();
}
