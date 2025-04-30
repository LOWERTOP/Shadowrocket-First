// Spotify header rewrite script for Shadowrocket
(function() {
  let headers = $request.headers;
  delete headers['if-none-match']; 
  $done({ headers: headers });
})();
