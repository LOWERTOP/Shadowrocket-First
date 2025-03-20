let body = $response.body;
body = body.replace(/"imgUrl19_5x9":".+?"/g, '"imgUrl19_5x9":""');
$done({body});
