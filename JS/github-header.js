// 用于修改 GitHub 简中请求头为英文
// 作者：@iab0x00
(function() {
  let headers = $request.headers;
  headers['Accept-Language'] = 'en-US,en;q=0.9';
  $done({ headers: headers });
})();
