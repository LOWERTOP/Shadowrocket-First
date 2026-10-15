// discord_translate.js
(() => {
  const DEFAULT_TRANSLATE_COUNT = 50;
  const DEFAULT_TARGET_LANGUAGE = "zh-CN";
  const SEPARATOR = "\n|||\n";

  const args = typeof $argument === "string"
    ? $argument.split("|")
    : [];

  const parsedCount = parseInt(args[0], 10);
  const MAX_TRANSLATE_COUNT =
    Number.isFinite(parsedCount) && parsedCount > 0
      ? Math.min(parsedCount, 1000)
      : DEFAULT_TRANSLATE_COUNT;

  const TARGET_LANGUAGE =
    args[1] && /^[a-zA-Z0-9-]+$/.test(args[1])
      ? args[1]
      : DEFAULT_TARGET_LANGUAGE;

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

  for (
    let i = 0;
    i < messages.length && targets.length < MAX_TRANSLATE_COUNT;
    i++
  ) {
    let msg = messages[i];

    if (msg && msg.content && msg.content.trim().length > 1) {
      let zhCount =
        (msg.content.match(/[\u4e00-\u9fa5]/g) || []).length;

      if (zhCount / msg.content.length < 0.4) {
        targets.push({
          index: i,
          text: msg.content
        });
      }
    }
  }

  if (targets.length === 0) {
    return $done({});
  }

  let combinedText = targets
    .map(t => t.text)
    .join(SEPARATOR);

  let url =
    "https://translate.googleapis.com/translate_a/single" +
    "?client=gtx&sl=auto&tl=" +
    encodeURIComponent(TARGET_LANGUAGE) +
    "&dt=t&q=" +
    encodeURIComponent(combinedText);

  $httpClient.get(
    { url: url, timeout: 5000 },
    function (error, response, data) {
      if (
        error ||
        !response ||
        response.status !== 200 ||
        !data
      ) {
        return $done({});
      }

      try {
        let res = JSON.parse(data);
        let translatedCombined = res[0]
          .map(item => item[0])
          .join("");

        let translatedParts = translatedCombined.split(
          /\n\s*\|\|\|\s*\n/
        );

        if (translatedParts.length === targets.length) {
          targets.forEach((target, idx) => {
            let trans = translatedParts[idx].trim();

            if (trans && trans !== target.text.trim()) {
              messages[target.index].content +=
                `\n> 🌐 ${trans.replace(/\n/g, "\n> ")}`;
            }
          });

          return $done({
            body: JSON.stringify(messages)
          });
        }

        return $done({});
      } catch (e) {
        return $done({});
      }
    }
  );
})();
