// web-element-block.js
// 用于屏蔽 baozimh.com 和 twmanga.com 网站上的广告和不需要的元素
(function() {
    // 获取当前域名
    function getCurrentDomain() {
        return window.location.host;
    }

    // 根据域名生成对应的 CSS
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

    // 获取需要定期检查的选择器
    function getSelectors(domain) {
        if (domain.includes("baozimh.com")) {
            return '.action-buttons.position-relative.chapter-goto, .recommend, .footer, h3[style="margin: 0 0 12px; padding: 0;"], .m-page-bottom';
        } else if (domain.includes("twmanga.com")) {
            return '.ucfad_async, .div_close_ads, .mobadsq, div[style="overflow:hidden; flex: 1;"], div[style=" width: 170px; margin: 0 auto; text-align: center;"], .recommend, #interstitial_fade';
        }
        return '';
    }

    // 主函数 - 注入 CSS
    function modifyCSS() {
        const domain = getCurrentDomain();
        const css = generateCSS(domain);
        const selectors = getSelectors(domain);

        if (!css || !selectors) {
            return;
        }

        // 创建 <style> 标签并插入样式
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        document.head.appendChild(style);

        // 定时检查可能动态加载的目标元素
        setInterval(() => {
            document.querySelectorAll(selectors).forEach(el => {
                el.style.display = 'none';
            });
        }, 2000);
    }

    // 执行主函数
    modifyCSS();
})();
