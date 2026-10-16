// discord_translate.js
(() => {
  "use strict";

  const DEFAULT_TRANSLATE_COUNT = 50;
  const DEFAULT_TARGET_LANGUAGE = "zh-CN";
  const MAX_TRANSLATE_COUNT_LIMIT = 1000;

  // 限制单次 GET 请求的编码后文本长度，降低 URL 过长导致请求失败的风险
  const MAX_ENCODED_TEXT_LENGTH = 6000;

  // 原文分隔符，用于将合并请求的译文还原为独立消息
  const SEPARATOR = "\n|||\n";

  // 读取模块参数：翻译条目数量|翻译目标语言
  const args = typeof $argument === "string"
    ? $argument.split("|")
    : [];

  const parsedCount = Number((args[0] || "").trim());

  const MAX_TRANSLATE_COUNT =
    Number.isInteger(parsedCount) && parsedCount > 0
      ? Math.min(parsedCount, MAX_TRANSLATE_COUNT_LIMIT)
      : DEFAULT_TRANSLATE_COUNT;

  const requestedLanguage = (args[1] || "").trim();

  const TARGET_LANGUAGE =
    /^[a-zA-Z0-9-]+$/.test(requestedLanguage)
      ? requestedLanguage
      : DEFAULT_TARGET_LANGUAGE;

  // 目标语言对应的地区旗帜
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
    "en-IN": "🇮🇳",

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

  // 检查响应体
  const body = $response.body;

  if (typeof body !== "string" || !body) {
    return $done({});
  }

  let messages;

  try {
    messages = JSON.parse(body);
  } catch (error) {
    return $done({});
  }

  // Discord 消息接口正常返回数组
  if (!Array.isArray(messages) || messages.length === 0) {
    return $done({});
  }

  // 筛选需要翻译的消息
  const targets = [];
  let combinedText = "";

  for (
    let i = 0;
    i < messages.length &&
    targets.length < MAX_TRANSLATE_COUNT;
    i++
  ) {
    const msg = messages[i];

    if (
      !msg ||
      typeof msg.content !== "string"
    ) {
      continue;
    }

    const originalText = msg.content;

    if (originalText.trim().length <= 1) {
      continue;
    }

    // 保留原有逻辑：中文占比低于 40% 才进行翻译
    const chineseCount =
      (originalText.match(/[\u4e00-\u9fff]/g) || []).length;

    if (chineseCount / originalText.length >= 0.4) {
      continue;
    }

    // 避免合并后的 GET 请求过长
    const candidateText = combinedText
      ? combinedText + SEPARATOR + originalText
      : originalText;

    if (
      encodeURIComponent(candidateText).length >
      MAX_ENCODED_TEXT_LENGTH
    ) {
      // 单条文本过长时跳过；已有文本时结束本批筛选
      if (targets.length === 0) {
        continue;
      }

      break;
    }

    combinedText = candidateText;

    targets.push({
      index: i,
      text: originalText
    });
  }

  if (targets.length === 0) {
    return $done({});
  }

  // 构造 Google 翻译请求
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
        typeof data !== "string" ||
        !data
      ) {
        return $done({});
      }

      let result;

      try {
        result = JSON.parse(data);
      } catch (parseError) {
        return $done({});
      }

      // 校验 Google 翻译响应结构
      if (
        !Array.isArray(result) ||
        !Array.isArray(result[0])
      ) {
        return $done({});
      }

      let translatedCombined;

      try {
        translatedCombined = result[0]
          .map(segment => {
            return Array.isArray(segment) &&
              typeof segment[0] === "string"
              ? segment[0]
              : "";
          })
          .join("");
      } catch (error) {
        return $done({});
      }

      if (!translatedCombined) {
        return $done({});
      }

      // 还原每条消息的独立译文
      const translatedParts = translatedCombined.split(
        /\n\s*\|\|\|\s*\n/
      );

      // 多条消息无法准确拆分时，不修改原始响应，避免译文错位
      if (translatedParts.length !== targets.length) {
        return $done({});
      }

      let modified = false;

      targets.forEach((target, index) => {
        const translatedText =
          translatedParts[index].trim();

        if (
          !translatedText ||
          translatedText === target.text.trim()
        ) {
          return;
        }

        // 追加译文并为每行添加引用格式
        const formattedTranslation = translatedText
          .split(/\r?\n/)
          .map(line => "> " + line)
          .join("\n");

        messages[target.index].content +=
          "\n> " + TRANSLATE_FLAG + " " +
          formattedTranslation.slice(2);

        modified = true;
      });

      if (!modified) {
        return $done({});
      }

      return $done({
        body: JSON.stringify(messages)
      });
    }
  );
})();
