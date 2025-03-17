// web-element-block.js
// Claude编写的用于屏蔽包子漫画网站上的广告和不需要的元素，主要域名为baozimh.com和twmanga.com

const $ = {};

// 获取当前域名
function getCurrentDomain() {
  // 从URL中提取域名
  const url = $request.url;
  const match = url.match(/https?:\/\/([^\/]+)/);
  if (match && match[1]) {
    return match[1];
  }
  return "";
}

// 根据域名生成对应的CSS
function generateCSS(domain) {
  // 默认的CSS
  let css = "";
  
  // baozimh.com的CSS规则
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
  }
  // twmanga.com的CSS规则
  else if (domain.includes("twmanga.com")) {
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

// 获取需要定期检查的选择器
function getSelectors(domain) {
  if (domain.includes("baozimh.com")) {
    return '.action-buttons.position-relative.chapter-goto, .recommend, .footer, h3[style="margin: 0 0 12px; padding: 0;"], .m-page-bottom';
  }
  else if (domain.includes("twmanga.com")) {
    return '.ucfad_async, .div_close_ads, .mobadsq, div[style="overflow:hidden; flex: 1;"], div[style=" width: 170px; margin: 0 auto; text-align: center;"], .recommend, #interstitial_fade';
  }
  return '';
}

// 主函数 - 修改CSS
function modifyCSS() {
  const domain = getCurrentDomain();
  const css = generateCSS(domain);
  const selectors = getSelectors(domain);
  
  if (!css || !selectors) {
    return '';
  }

  // 创建和插入样式的脚本
  return `
    (function() {
      let style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = \`${css}\`;
      document.head.appendChild(style);
      
      // 定期检查并移除可能动态加载的元素
      setInterval(() => {
        document.querySelectorAll('${selectors}').forEach(el => {
          el.style.display = 'none';
        });
      }, 2000);
    })();
  `;
}

// 获取响应体
let html = $response.body;

// 将CSS注入到响应体
const scriptToInject = modifyCSS();

// 只有在有脚本需要注入时才修改响应
if (scriptToInject) {
  html = html.replace('</head>', `<script>${scriptToInject}</script></head>`);
}

// 返回修改后的响应体
$done({body: html});
