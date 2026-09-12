// Shadowrocket 当前节点实际下载测速
// 测速源：Cloudflare Speed Test API

const DEFAULT_MB = 50;
const MIN_MB = 5;
const MAX_MB = 95;
const TIMEOUT = 30000;

let sizeMB = parseInt($argument || DEFAULT_MB, 10);
if (isNaN(sizeMB)) sizeMB = DEFAULT_MB;
sizeMB = Math.min(Math.max(sizeMB, MIN_MB), MAX_MB);

const warmupURL = `https://speed.cloudflare.com/__down?bytes=1000000&_=${Date.now()}`;
const testURL = `https://speed.cloudflare.com/__down?bytes=${sizeMB * 1000000}&_=${Date.now()}`;

function notify(title, message) {
  if (typeof $notification !== "undefined" && $notification.post) {
    $notification.post(title, "", message);
  }
}

function done() {
  if (typeof $done === "function") $done();
}

function fail(message) {
  notify("🚀 Shadowrocket 下载测速", message);
  done();
}

function formatMbps(value) {
  if (value >= 1000) return (value / 1000).toFixed(2) + " Gbps";
  if (value >= 100) return value.toFixed(0) + " Mbps";
  return value.toFixed(2) + " Mbps";
}

function request(url, timeout, callback) {
  $httpClient.get({
    url: url,
    timeout: timeout,
    headers: {
      "Cache-Control": "no-cache",
      "Accept": "*/*"
    }
  }, callback);
}

// 先进行 1 MB 预热，尽量排除连接建立阶段对正式测速的影响。
request(warmupURL, 10000, function(error, response) {
  if (error) {
    fail("预热请求失败\n" + error);
    return;
  }

  if (!response || response.statusCode < 200 || response.statusCode >= 300) {
    fail("预热请求异常\nHTTP " + (response ? response.statusCode : "Unknown"));
    return;
  }

  const start = Date.now();

  request(testURL, TIMEOUT, function(error, response) {
    const elapsed = (Date.now() - start) / 1000;

    if (error) {
      fail("测速请求失败\n" + error);
      return;
    }

    if (!response || response.statusCode < 200 || response.statusCode >= 300) {
      fail("测速请求异常\nHTTP " + (response ? response.statusCode : "Unknown"));
      return;
    }

    if (elapsed <= 0) {
      fail("测速时间异常");
      return;
    }

    // Cloudflare __down 按 bytes 参数返回指定大小的数据。
    // 这里使用请求的数据量 / 请求完成时间计算平均下载吞吐量。
    const bytes = sizeMB * 1000000;
    const mbps = bytes * 8 / elapsed / 1000000;
    const mbpsText = formatMbps(mbps);
    const mbps2Text = (mbps / 8).toFixed(2) + " MB/s";

    notify(
      "🚀 Shadowrocket 下载测速",
      "下载速度：" + mbpsText +
      "\n实际速率：" + mbps2Text +
      "\n测速数据：" + sizeMB + " MB" +
      "\n测速耗时：" + elapsed.toFixed(2) + " 秒"
    );

    done();
  });
});
