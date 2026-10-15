// discord_translate.js
(() => {
  const MAX_TRANSLATE_COUNT = 50; // 单次最多翻译条数，可根据需要调大（如 25）
  const SEPARATOR = "\n|||\n";

  let body = $response.body;
  if (!body) {
    return $done({});
  }

  let messages;
  try {
    messages = JSON.parse(body);
  } catch (err) {
    return $done({});
  }

  if (!Array.isArray(messages) || messages.length === 0) {
    return $done({});
  }

  let targets = [];
  for (let i = 0; i < messages.length && targets.length < MAX_TRANSLATE_COUNT; i++) {
    let msg = messages[i];
    if (msg && msg.content && msg.content.trim().length > 1) {
      let zhCount = (msg.content.match(/[\u4e00-\u9fa5]/g) || []).length;
      if (zhCount / msg.content.length < 0.4) {
        targets.push({ index: i, text: msg.content });
      }
    }
  }

  if (targets.length === 0) {
    return $done({});
  }

  let combinedText = targets.map(t => t.text).join(SEPARATOR);
  let url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=zh-CN&dt=t&q=" + encodeURIComponent(combinedText);

  $httpClient.get({ url: url, timeout: 5000 }, function (error, response, data) {
    if (error || !response || response.status !== 200 || !data) {
      return $done({});
    }
    try {
      let res = JSON.parse(data);
      let translatedCombined = res[0].map(item => item[0]).join("");
      let translatedParts = translatedCombined.split(/\n\s*\|\|\|\s*\n/);

      if (translatedParts.length === targets.length) {
        targets.forEach((target, idx) => {
          let trans = translatedParts[idx].trim();
          if (trans && trans !== target.text.trim()) {
            messages[target.index].content += `\n> 🇨🇳 ${trans.replace(/\n/g, "\n> ")}`;
          }
        });
        return $done({ body: JSON.stringify(messages) });
      } else {
        return $done({});
      }
    } catch (e) {
      return $done({});
    }
  });
})();
