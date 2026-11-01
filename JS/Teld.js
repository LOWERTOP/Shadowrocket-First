/*
 * 特来电 记录签到请求 / 自动签到
 * author: LOWERTOP
 *
 * http-request: 在 App 内手动签到时，保存 CompleteCheckInTask 请求 (含 Cookie、X-Token、签名 t)
 * cron:         重放已保存的请求；今日成功后不再重复执行
 *
 * 注意: 该接口的 X-Token 有效期约 15 分钟，请求还带有逐次签名 t，
 *       重放不保证长期可用；失败时会通知具体原因，需在 App 内手动签到一次刷新记录。
 */
const NAME = '特来电';
const KEY_REQ = 'teld_sign_req';
const KEY_DAY = 'teld_sign_day';

function parseArgs(s) {
  const o = {};
  String(s || '').split('&').forEach((p) => {
    const i = p.indexOf('=');
    if (i > 0) o[p.slice(0, i).trim()] = p.slice(i + 1).trim();
  });
  return o;
}
const args = parseArgs(typeof $argument === 'string' ? $argument : '');

function notify(sub, body) {
  $notification.post(NAME, sub, body || '');
}

function beijingDay() {
  return new Date(Date.now() + 8 * 3600 * 1000).toISOString().slice(0, 10);
}

function capture() {
  if (args.record !== 'true') return $done({});
  const skip = ['content-length', 'host', 'accept-encoding'];
  const headers = {};
  Object.keys($request.headers || {}).forEach((k) => {
    if (skip.indexOf(k.toLowerCase()) < 0) headers[k] = $request.headers[k];
  });
  const saved = { url: $request.url, headers: headers, body: $request.body || '', time: Date.now() };
  $persistentStore.write(JSON.stringify(saved), KEY_REQ);
  notify('已记录签到请求', '登录态与签到参数已保存到本机，可在模块参数中开启自动签到');
  $done({});
}

function run() {
  if (args.auto !== 'true') return $done();
  const today = beijingDay();
  if ($persistentStore.read(KEY_DAY) === today) return $done();

  const raw = $persistentStore.read(KEY_REQ);
  if (!raw) {
    notify('自动签到未执行', '尚未记录签到请求，请先在 App 内手动签到一次');
    return $done();
  }
  let req;
  try {
    req = JSON.parse(raw);
  } catch (e) {
    notify('自动签到未执行', '已保存的请求数据损坏，请重新手动签到一次');
    return $done();
  }

  $httpClient.post({ url: req.url, headers: req.headers, body: req.body, timeout: 20 }, (err, resp, data) => {
    if (err) {
      notify('签到失败', '网络错误: ' + err);
      return $done();
    }
    let j;
    try {
      j = JSON.parse(data);
    } catch (e) {
      notify('签到失败', 'HTTP ' + (resp && resp.status) + '，响应无法解析');
      return $done();
    }
    const d = j && j.data;
    if (String(j.state) === '1' && d && d.IsCheckInSuccess) {
      $persistentStore.write(today, KEY_DAY);
      let msg = '连续 ' + d.ContinuousDays + ' 天，累计 ' + d.TotalDays + ' 天';
      if (d.IsChallengeSuccess) msg += '，挑战已完成，请到 App 领取奖励';
      notify('签到成功', msg);
    } else {
      const why = (j && (j.errmsg || j.errcode)) || (d ? JSON.stringify(d).slice(0, 80) : '登录态可能已过期');
      notify('签到失败', why + '\n如为登录态过期，请在 App 内手动签到一次以更新记录');
    }
    $done();
  });
}

if (typeof $request !== 'undefined') capture();
else run();
