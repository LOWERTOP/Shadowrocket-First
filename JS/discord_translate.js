// discord_translate.js
(() => {
  const DEFAULT_TRANSLATE_COUNT = 50;
  const DEFAULT_TARGET_LANGUAGE = "zh-CN";
  const SEPARATOR = "\n|||\n";

  // 读取模块参数：翻译条目数量|翻译目标语言
  const args = typeof $argument === "string"
    ? $argument.split("|")
    : [];

  const parsedCount = Number(args[0]);
  const MAX_TRANSLATE_COUNT =
    Number.isInteger(parsedCount) && parsedCount > 0
      ? Math.min(parsedCount, 1000)
      : DEFAULT_TRANSLATE_COUNT;

  const targetLanguage = (args[1] || "").trim();
  const TARGET_LANGUAGE =
    /^[a-zA-Z0-9-]+$/.test(targetLanguage)
      ? targetLanguage
      : DEFAULT_TARGET_LANGUAGE;

  // 根据目标语言显示对应的地区旗帜
  const LANGUAGE_FLAGS = {
    "zh-CN": "🇨🇳",
    "zh-SG": "🇸🇬",
    "zh-TW": "🇹🇼",
    "zh-HK": "🇭🇰",
    "en": "🇺🇸",
    "en-US": "🇺🇸",
    "en-GB": "🇬🇧",
    "en-AU": "🇦🇺",
    "en-CA": "🇨🇦",
    "ja": "🇯🇵",
    "ko": "🇰🇷",
    "fr": "🇫🇷",
    "fr-CA": "🇨🇦",
    "de": "🇩🇪",
    "es": "🇪🇸",
    "es-MX": "🇲🇽",
    "pt": "🇧🇷",
    "pt-BR": "🇧🇷",
    "pt-PT": "🇵🇹",
    "ru": "🇷🇺",
    "it": "🇮🇹",
    "nl": "🇳🇱",
    "pl": "🇵🇱",
    "tr": "🇹🇷",
    "th": "🇹🇭",
    "vi": "🇻🇳",
    "id": "🇮🇩",
    "ms": "🇲🇾",
    "ar": "🇸🇦",
    "hi": "🇮🇳",
    "uk": "🇺🇦",
    "sv": "🇸🇪",
    "da": "🇩🇰",
    "no": "🇳🇴",
    "fi": "🇫🇮",
    "cs": "🇨🇿",
    "el": "🇬🇷",
    "he": "🇮🇱",
    "ro": "🇷🇴",
    "hu": "🇭🇺"
  };

  const TRANSLATE_FLAG =
    LANGUAGE_FLAGS[TARGET_LANGUAGE] || "🌐";

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

  // 筛选需要翻译的消息
  const targets = [];

  for (
    let i = 0;
    i < messages.length &&
    targets.length < MAX_TRANSLATE_COUNT;
    i++
  ) {
    const msg = messages[i];

    if (
      msg &&
      typeof msg.content === "string" &&
      msg.content.trim().length > 1
    ) {
      const zhCount =
        (msg.content.match(/[\u4e00-\u9fa5]/g) || []).length;

      // 保留原有逻辑：中文占比低于 40% 才进行翻译
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

  // 合并文本，减少翻译请求次数
  const combinedText = targets
    .map(target => target.text)
    .join(SEPARATOR);

  const url =
    "https://translate.googleapis.com/translate_a/single" +
    "?client=gtx&sl=auto&tl=" +
    encodeURIComponent(TARGET_LANGUAGE) +
    "&dt=t&q=" +
    encodeURIComponent(combinedText);

  $httpClient.get(
    {
      url: url,
      timeout: 5000
    },
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
        const res = JSON.parse(data);

        const translatedCombined = res[0]
          .map(item => item[0])
          .join("");

        const translatedParts = translatedCombined.split(
          /\n\s*\|\|\|\s*\n/
        );

        if (translatedParts.length !== targets.length) {
          return $done({});
        }

        // 将译文追加至原始消息，并显示对应旗帜
        targets.forEach((target, idx) => {
          const trans = translatedParts[idx].trim();

          if (trans && trans !== target.text.trim()) {
            messages[target.index].content +=
              `\n> ${TRANSLATE_FLAG} ` +
              trans.replace(/\n/g, "\n> ");
          }
        });

        return $done({
          body: JSON.stringify(messages)
        });
      } catch (err) {
        return $done({});
      }
    }
  );
})();
