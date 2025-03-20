// web-element-block.js
// 用于屏蔽 baozimh.com 和 twmanga.com 网站上的广告和不需要的元素

function getCurrentDomain() {
  const url = $request.url;
  const match = url.match(/https?:\/\/([^\/]+)/);
  return match ? match[1] : "";
}

function generateCSS(domain) {
  let css = "";
  if (domain.includes("baozimh.com")) {
    css = `
      /* 隐藏章节跳转按钮 */
      .action-buttons.position-relative.chapter-goto { display: none !important; }
      /* 隐藏推荐内容 */
      .recommend { display: none !important; }
      /* 隐藏底部 */
      .footer { display: none !important; }
      /* 隐藏特定标题 */
      h3[style="margin: 0 0 12px; padding: 0;"] { display: none !important; }
      /* 隐藏页面底部元素 */
      .m-page-bottom { display: none !important; }
    `;
  } else if (domain.includes("twmanga.com")) {
    css = `
      /* 隐藏广告元素 */
      .ucfad_async { display: none !important; }
      .div_close_ads { display: none !important; }
      .mobadsq { display: none !important; }
      div[style="overflow:hidden; flex: 1;"] { display: none !important; }
      div[style=" width: 170px; margin: 0 auto; text-align: center;"] { display: none !important; }
      /* 隐藏推荐内容 */
      .recommend { display: none !important; }
      /* 隐藏插页广告 */
      #interstitial_fade { display: none !important; }
    `;
  }
  return css;
}

function getSelectors(domain) {
  if (domain.includes("baozimh.com")) {
    return '.action-buttons.position-relative.chapter-goto, .recommend, .footer, h3[style="margin: 0 0 12px; padding: 0;"], .m-page-bottom';
  } else if (domain.includes("twmanga.com")) {
    return '.ucfad_async, .div_close_ads, .mobadsq, div[style="overflow:hidden; flex: 1;"], div[style=" width: 170px; margin: 0 auto; text-align: center;"], .recommend, #interstitial_fade';
  }
  return "";
}

function modifyHTML() {
  const domain = getCurrentDomain();
  const css = generateCSS(domain);
  const selectors = getSelectors(domain);
  
  if (!css || !selectors) {
    // 没有匹配的规则时直接返回原响应体
    return $response.body;
  }
  
  // 构造注入到页面中的脚本代码
  const scriptToInject = `
    (function() {
      var style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = \`${css}\`;
      document.head.appendChild(style);
      // 定时检查可能动态加载的目标元素
      setInterval(function() {
        document.querySelectorAll('${selectors}').forEach(function(el) {
          el.style.display = 'none';
        });
      }, 2000);
    })();
  `;
  
  // 将构造的脚本注入到 </head> 前面
  let modifiedBody = $response.body.replace('</head>', `<script>${scriptToInject}</script></head>`);
  return modifiedBody;
}

$done({ body: modifyHTML() });
