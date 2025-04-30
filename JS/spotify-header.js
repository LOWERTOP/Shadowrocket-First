// Spotify header rewrite script
(function() {
  let headers = $request.headers;
  delete headers['if-none-match']; 
  $done({ headers: headers });
})();
