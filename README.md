[![GitHub Repo stars](https://img.shields.io/github/stars/LOWERTOP/Shadowrocket-First?style=flat&logo=github&logoColor=white&label=星标次数&labelColor=grey&color=blue)](https://github.com/LOWERTOP/Shadowrocket-First/stargazers "已被星标")
[![GitHub forks](https://img.shields.io/github/forks/LOWERTOP/Shadowrocket-First?style=flat&logo=github&logoColor=white&label=复刻次数&labelColor=grey&color=blue)](https://github.com/LOWERTOP/Shadowrocket-First/forks "已被复刻")
[![GitHub last commit](https://img.shields.io/github/last-commit/LOWERTOP/Shadowrocket-First/main?style=flat&logo=github&label=更新时间&color=blue)](https://github.com/LOWERTOP/Shadowrocket-First/activity "更新记录")
[![README in English](https://img.shields.io/static/v1?label=README&message=in%20English&color=blue&logo=googletranslate&logoColor=white&labelColor=grey&messageColor=white)](https://translate.google.com/translate?hl=en&sl=zh-CN&tl=en&u=https://lowertop.github.io/Shadowrocket-First "README in English via Google Translate")

[<img src="https://lowertop.github.io/Shadowrocket-First/img/01.png" width="100%">](https://github.com/LOWERTOP/Shadowrocket-First)

> [!NOTE]
> 
> 本仓库主要提供小火箭适用的 **配置文件、模块、规则集、脚本** 等内容，同时还有多种原创的 **小火箭配色/主题/皮肤**。软件使用方面若有疑问可查看 **[小火箭使用手册](https://github.com/LOWERTOP/Shadowrocket)**
>
> > 若您是相关索引的原作者或权利人，且不希望内容被引用，可点击 [此处](https://t.me/LOWERTOP) 要求剔除

> **`项目目录`**
> * **[Shadowrocket 自建文件](#shadowrocket-自建文件)**
> * **[Shadowrocket 收集文件](#shadowrocket-收集文件)**
> * **[Shadowrocket 配色文件](#shadowrocket-配色文件)**
> * **[非标准链接的重定向跳转](#非标准链接重定向跳转)**
> 
> **`其他内容`**
> * [TCP 缓冲区计算器](https://lowertop.github.io/Shadowrocket-First/TCP-Cal.html) [调优原帖](https://www.nodeseek.com/post-197087-1) [原仓库](https://github.com/BlackSheep-cry/TCP-Optimization-Tool)

------

# [Shadowrocket 自建文件](#shadowrocket-自建文件)

> [!NOTE]
> 
> 本章主要是为 **特定软件或服务** 所制作的模块、规则集等自制内容<br>
> 各模块基本都包含有 **编辑参数** 选项，可 [进入参数编辑](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E7%BC%96%E8%BE%91%E5%8F%82%E6%95%B0) 进行调整

### [Talkatone](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/Talkatone.sgmodule)

> 近期 Talkatone 针对使用者 IP 的审查趋于严格，它使用了 `*-sjc-*.tktn.be` 这个地址对节点进行质量判断，用户可在 **[编辑参数](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E7%BC%96%E8%BE%91%E5%8F%82%E6%95%B0)** 内对 **节点质量检测** 和 **代理分流策略** 分别尝试不同的代理节点或分组，分流策略默认已设置为代理，原则上可以不做调整，但节点质量检测需要自行测试并设定为特定节点方可正常使用<br>
> 本模块包含去广告规则，能够去除软件内的第三方广告。除模块外还提供 [去广告规则集](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/TalkatoneAntiAds.list) 以及 [全局代理规则集](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/TalkatoneProxy.list)
> 
> [![安装模块 Talkatone](https://img.shields.io/static/v1?label=安装模块&message=Talkatone&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/Talkatone.sgmodule "一键安装本模块")
> [![规则文件 去广告规则](https://img.shields.io/static/v1?label=规则文件&message=去广告规则&color=grey&logo=todoist&logoColor=white&labelColor=%2325A162&messageColor=white)](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/TalkatoneAntiAds.list "点击访问规则集")

### [Emby 分流控制策略](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/EmbyProxy.module)

> 本模块为 Emby 使用场景设计，基于 Shadowrocket **[编辑参数](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E7%BC%96%E8%BE%91%E5%8F%82%E6%95%B0)** 功能实现。模块对 **服务器访问** 与 **元数据/字幕** 请求进行分流控制，旨在同时提升 **播放稳定性** 与 **刮削成功率**。同时支持补充最多 3 个非常见的 Emby 服务器域名
> 
> 模块需要通过 **[编辑参数](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E7%BC%96%E8%BE%91%E5%8F%82%E6%95%B0)**  的方式分别指定：
> 
> * Emby 实际播放、Web、API 请求所使用的策略
> * 海报、评分、演职员信息、字幕等元数据服务所使用的策略
> 
> 适用场景包括但不限于：
> * Emby 服务器直连、元数据走代理的常见组合
> * 多 Emby 私服并存的分流管理
> * 国内外混合字幕 / 元数据源的稳定访问
> 
> [![安装模块 Emby分流](https://img.shields.io/static/v1?label=安装模块&message=Emby分流&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/EmbyProxy.module "一键安装本模块")

### [DeepSeek](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/DeepSeek.sgmodule)

> DeepSeek 在某些特定地区必须使用手机号注册和登陆使用，本仓提供分流模块和代理规则，可以解锁使用邮箱、谷歌账号等方式注册与登录该服务。同时，模块中屏蔽了部分 **存疑** 地址，也支持在 **[编辑参数](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E7%BC%96%E8%BE%91%E5%8F%82%E6%95%B0)** 内设置分流的代理节点或分组
> 
> [![安装模块 DeepSeek](https://img.shields.io/static/v1?label=安装模块&message=DeepSeek&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/DeepSeek.sgmodule "一键安装本模块")
> [![规则文件 DeepSeek](https://img.shields.io/static/v1?label=规则文件&message=DeepSeek&color=grey&logo=todoist&logoColor=white&labelColor=%2325A162&messageColor=white)](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/DeepSeek.list "点击访问规则集")

### [Wi-Fi Calling](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/WiFiCallingUS.sgmodule)

> Wi-Fi Calling 相关 **测试配置**，包含适用于美国、英国等地区 SIM 卡的相关模块和规则集。模块内置有代理分组，使用正则表达式自动将所需的地区节点选取到该分组，并使用 URL-TEST 的类型自动进行节点选择。以下模块均提供 **[编辑参数](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E7%BC%96%E8%BE%91%E5%8F%82%E6%95%B0)** 功能，包含部分可选参数调整选项
> 
> **美国地区**：适用于 Ultra Mobile，原则上也适用 T-Mobile 的 SIM 卡，可选模块或规则集
> 
> [![安装模块 WiFiCall-US](https://img.shields.io/static/v1?label=安装模块&message=WiFiCall-US&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/WiFiCallingUS.sgmodule "一键安装本模块")
> [![规则文件 WiFiCall-US](https://img.shields.io/static/v1?label=规则文件&message=WiFiCall-US&color=grey&logo=todoist&logoColor=white&labelColor=%2325A162&messageColor=white)](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/WiFiCallingUS.list "点击访问规则集")
>
> **英国地区**：原则上适用于 **[Giffgaff](http://www.giffgaff.com/orders/affiliate/onone040_1742873967723)**、CMLink 以及沃达丰的 SIM 卡，可选模块或规则集。Giffgaff 的开启条件相对苛刻，查看 [官方要求](https://help.giffgaff.com/en/articles/258841-wifi-calling-and-volte)，查看 [开启教程](https://www.nodeseek.com/post-183470-1)，已知 **`iOS 26`** 暂时无法开启
> 
> [![安装模块 WiFiCall-UK](https://img.shields.io/static/v1?label=安装模块&message=WiFiCall-UK&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/WiFiCallingUK.sgmodule "一键安装本模块")
> [![规则文件 WiFiCall-UK](https://img.shields.io/static/v1?label=规则文件&message=WiFiCall-UK&color=grey&logo=todoist&logoColor=white&labelColor=%2325A162&messageColor=white)](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/WiFiCallingUK.list "点击访问规则集")

### [咪咕直播源模块](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/CMCCiTV.sgmodule)

> 群友 ["---///"")/"](https://t.me/insterestingtimes) 咨询了一个 [APTV](https://t.me/AptvPlayer) 全运营商使用移动咪咕直播源观看 IPTV 的问题。原方案是 [PIXMAN](https://pixman.io/) 的 [Coding](https://pixman.io/coding) 提供的 [自制DNS映射](https://pixman.io/topics/37) 方案，并由 [YanG-1989](https://github.com/YanG-1989/m3u/blob/main/hosts.txt) 优化，以解决非移动用户访问咪咕源的错误解析问题。本仓借鉴以上内容制作了本模块，理论上应该支持任意网络环境使用咪咕直播源观看 IPTV。模块提供 **[编辑参数](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E7%BC%96%E8%BE%91%E5%8F%82%E6%95%B0)** 功能，包含部分参数调整选项。若使用上存在问题可以尝试在 [DNS 覆写](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E4%BF%AE%E6%94%B9dns) 中添加 `114.114.114.114`
>
> [![安装模块 CMCCiTV](https://img.shields.io/static/v1?label=安装模块&message=CMCCiTV&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/CMCCiTV.sgmodule "一键安装本模块")

### [苹果助手](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/Helper.sgmodule)

> 本模块以苹果下载加速功能为主，包含 [苹果商店下载加速](https://t.me/ibilibili/994) 与 [系统升级加速](https://t.me/ibilibili/1014) 功能，应该可以改善相关下载相对缓慢的情况。模块提供 **[编辑参数](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E7%BC%96%E8%BE%91%E5%8F%82%E6%95%B0)** 功能，可根据说明自行测试和修改相关参数
>
> [![安装模块 苹果助手](https://img.shields.io/static/v1?label=安装模块&message=苹果助手&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/Helper.sgmodule "一键安装本模块")

### [证书模块](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/CA.sgmodule)

> 本模块是以 **[编辑参数](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E7%BC%96%E8%BE%91%E5%8F%82%E6%95%B0)** 功能构建的简化了创建 **[证书模块](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E8%AF%81%E4%B9%A6%E6%A8%A1%E5%9D%97)** 流程的母版模块。使用时仅需在编辑参数界面开启功能开关并填入有效证书内容即可，无需再以纯文本模式创建证书模块。参数编辑界面同时提供添加主机名及主机名插入方式的修改入口，可作为主机名解密补充或者反解密主机名使用，其他证书模块功能详情请参考 [使用手册](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E8%AF%81%E4%B9%A6%E6%A8%A1%E5%9D%97)<br>
> 同时提供以 [快捷指令](https://www.icloud.com/shortcuts/f13ca3b24ab947beb9f7c39daefc24d5) 的方式一键安装证书模块，运行快捷指令前需要先复制证书内容到剪贴板
>
> [![安装模块 证书模块](https://img.shields.io/static/v1?label=安装模块&message=证书模块&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/CA.sgmodule "一键安装本模块")
> [![快捷指令 证书模块](https://img.shields.io/static/v1?label=快捷指令&message=证书模块&color=grey&logo=removedotbg&logoColor=white&labelColor=%23855DCD&messageColor=grey)](https://www.icloud.com/shortcuts/f13ca3b24ab947beb9f7c39daefc24d5 "点击安装快捷指令")

### [反解密模块](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/Anti-MITM.sgmodule)

> 本模块基于 **[编辑参数](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E7%BC%96%E8%BE%91%E5%8F%82%E6%95%B0)** 机制设计，用于快速将特定域名排除在 MITM 解密范围之外。适用场景一般是当系统已启用包含大量解密主机名的模块或配置，但你仅需排除某一个或少数域名时，无需逐项查找或修改原有配置，只需通过本模块填写相关域名，即可快速禁用其 MITM 解密，显著减少操作成本并避免繁琐的手动调整流程
> 
> > * 在 [编辑参数](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E7%BC%96%E8%BE%91%E5%8F%82%E6%95%B0) 页面填写所需排除解密的主机名，可使用英文逗号分割填写多个所需主机名。示例 **`-www.apple.com,-www.facebook.com`**，其中 **`-`** 符号表示从解密名单中剔除该主机，不可或缺
> > * 将本模块放置于模块列表最下方以确保生效顺序
> > * 默认插入方式不建议修改，虽然支持选填 `%APPEND%` 或 `%INSERT%`
> 
> 关于主机名 MITM 反解密的疑问可以查看 [此处议题](https://github.com/LOWERTOP/Shadowrocket-First/issues/13)
>
> [![安装模块 反解密模块](https://img.shields.io/static/v1?label=安装模块&message=反解密模块&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/Anti-MITM.sgmodule "一键安装本模块")

### [私库访问模块](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/Private.module)

> 本模块是以 **[编辑参数](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E7%BC%96%E8%BE%91%E5%8F%82%E6%95%B0)** 功能构建的基于用户维度的访问 GitHub 私密仓库的多 Token 自动鉴权模块，支持配置 4 个不同的 GitHub 账号，自动匹配 `raw` 或 `gist` 文件地址中的用户名并注入对应的 Token，实现多用户、多仓库的鉴权访问，在 编辑参数 内填写所需内容即可生效
> 
> [![安装模块 私库模块](https://img.shields.io/static/v1?label=安装模块&message=私库模块&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/Private.module "一键安装本模块")

### [调试模块](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/Commands.sgmodule)

> 本模块是以 **[编辑参数](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E7%BC%96%E8%BE%91%E5%8F%82%E6%95%B0)** 功能构建的调整配置文件内部分参数、功能及隐藏参数选项的功能模块，相关参数的功能详情请参考 [使用手册](https://github.com/LOWERTOP/Shadowrocket)
> 
> [![安装模块 调试模块](https://img.shields.io/static/v1?label=安装模块&message=调试模块&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/Commands.sgmodule "一键安装本模块")

### [欧易规则集](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/okx.list)

> 自收集的 欧易/OKX 规则集，OKX 本身在中国大陆地区可以直连，且会使用 `cloudfront` 和 `cloudflare` 进行提速，本规则集尽可能收集了其使用的所有地址，将其设为直连后可能更适合在中国大陆地区使用。本集暂不确定所包含的 `cloudfront.net` 的地址是否在不同地区存在变化，如有问题欢迎反馈
>
> [![规则文件 OKX 规则集](https://img.shields.io/static/v1?label=规则文件&message=OKX%20规则集&color=grey&logo=todoist&logoColor=white&labelColor=%2325A162&messageColor=white)](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/okx.list "点击访问规则集")

------

# [Shadowrocket 收集文件](#shadowrocket-收集文件)

> [!NOTE]
> 
> 本章主要是收集自相对可信来源的 **手册、配置、模块、规则、脚本** 等，其效果请以实际为准

### [使用手册](#shadowrocket-收集文件)

> 使用手册以 **[Shadowrocket 官方群组](https://t.me/ShadowrocketApp)** 使用的关键词列表为基础进行编写，涵盖软件 90% 以上的功能说明和常见问题的解决方案，可以帮助用户更好的理解和使用 Shadowrocket 软件
>
> [![教程文档 使用手册](https://img.shields.io/static/v1?label=教程文档&message=使用手册&color=grey&logo=gitbook&logoColor=white&labelColor=%23B6AB7A&messageColor=white)](https://github.com/LOWERTOP/Shadowrocket "点击查阅")

### [懒人配置](https://lowertop.github.io/Shadowrocket/lazy_group.conf)

> 顾名思义，[懒人配置](https://lowertop.github.io/Shadowrocket/lazy_group.conf) 就是专为 **懒人** 打造的开箱即用的配置文件，发布于 [官方群组](https://t.me/ShadowrocketApp)。该配置与默认配置内置本地规则的处理形式不同，是以规则集的形式设置代理规则，并设有示例分流代理分组，其他设置也经过了精心调整，同时还备注了详尽的注释说明，相当于内置了一部使用手册，适合几乎任何阶段的用户使用，是除默认配置外首推的配置文件。配置文件的用法参见 [使用手册](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)
> 
> > **[更新配置文件](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E6%9B%B4%E6%96%B0%E9%85%8D%E7%BD%AE) 会造成自定义规则等丢失，除需要重置配置文件外不建议对其更新**
> 
> [![安装配置 懒人配置](https://img.shields.io/static/v1?label=安装配置&message=懒人配置&color=grey&logo=googledocs&logoColor=white&labelColor=orange&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://config/add/https://lowertop.github.io/Shadowrocket/lazy_group.conf "一键安装本配置文件")

### [模块收集](#shadowrocket-收集文件)

> [!TIP]
> **使用绝大多数模块仅在 [全局路由](https://github.com/LOWERTOP/Shadowrocket#%E5%85%A8%E5%B1%80%E8%B7%AF%E7%94%B1%E5%8C%BA%E5%88%AB) 设置为配置模式时生效，不含 [代理规则](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E8%A7%84%E5%88%99%E7%B1%BB%E5%9E%8B) 的模块除外**<br>
> **使用大多数模块须正确 [开启解密](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#https%E8%A7%A3%E5%AF%86)，为避免因切换配置而须重新解密可设置 [证书模块](#证书模块)**<br>
> **部分模块的生效需要清除相应的程序的缓存或者重新安装**

> **[资源解析转换方案](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/Plugin2Rocket.srmodule)**
> 
> > 本方案模块由 [iab0x00](https://github.com/iab0x00) 制作，现阶段可使小火箭直接安装并使用 [可莉插件中心](https://hub.kelee.one) 的插件/模块。本模块借助 **[Script-Hub](https://github.com/Script-Hub-Org/Script-Hub/wiki)** 的转换功能实现，为方便新手使用已内置 [Script-Hub](https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/modules/script-hub.rocket.module) 相关代码。感谢 [iab0x00](https://github.com/iab0x00)、[可莉](https://github.com/luestr) 及 [Script-Hub](https://github.com/Script-Hub-Org/Script-Hub/wiki) 的辛苦付出，本案遵循 [可莉的授权说明](https://t.me/ibilibili/1498)
> > 
> > * 安装并启用 [本模块](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/Plugin2Rocket.srmodule)
> > * 访问  [插件中心](https://hub.kelee.one/) 选择需要的插件/模块，点击安装即可
> >   
> > [![首先安装 解析模块](https://img.shields.io/static/v1?label=首先安装&message=解析模块&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/Plugin2Rocket.srmodule "一键安装本模块")
> > [![其次访问 插件中心](https://img.shields.io/static/v1?label=其次访问&message=插件中心&color=grey&logo=html5&logoColor=white&labelColor=%23E34F26&messageColor=white)](https://hub.kelee.one "访问插件中心")

> **[奶思净化合集模块](https://raw.githubusercontent.com/fmz200/wool_scripts/refs/heads/main/Surge/module/blockAds.module)**
> 
> > 本模块由 [奶思](https://github.com/fmz200) 推出的可以兼容小火箭的模块，对数百款应用或小程序进行广告拦截，详情参阅 [注释内容](https://raw.githubusercontent.com/fmz200/wool_scripts/refs/heads/main/Surge/module/blockAds.module)
> >   
> > [![安装模块 净化合集](https://img.shields.io/static/v1?label=安装模块&message=净化合集&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/fmz200/wool_scripts/refs/heads/main/Surge/module/blockAds.module "一键安装本模块")
> 
> **[墨鱼去开屏模块](https://raw.githubusercontent.com/ddgksf2013/Modules/main/Adblock/StartUpAds.sgmodule)**
> 
> > 来自 [Cuttlefish 墨鱼](https://github.com/ddgksf2013/ddgksf2013)，是以去除开屏广告为主要功能的模块，同时作者也提供 [去广告融合版模块](https://github.com/ddgksf2013/Modules/raw/main/Adblock.sgmodule) 以及可自由搭配的其他模块：[高德地图](https://raw.githubusercontent.com/ddgksf2013/Modules/refs/heads/main/Adblock/AmapAds.sgmodule)、[微博](https://raw.githubusercontent.com/ddgksf2013/Modules/refs/heads/main/Adblock/WeiboAds.sgmodule)、[知乎](https://raw.githubusercontent.com/ddgksf2013/Modules/refs/heads/main/Adblock/ZhihuAds.sgmodule)、[小红书](https://raw.githubusercontent.com/ddgksf2013/Modules/refs/heads/main/Adblock/XiaoHongShuAds.sgmodule)、[网易云](https://raw.githubusercontent.com/ddgksf2013/Modules/refs/heads/main/Adblock/NeteaseAds.sgmodule)、[喜马拉雅](https://raw.githubusercontent.com/ddgksf2013/Modules/refs/heads/main/Adblock/XimalayaAds.sgmodule)、[什么值得买](https://raw.githubusercontent.com/ddgksf2013/Modules/refs/heads/main/Adblock/SmzdmAds.sgmodule)、[菜鸟](https://raw.githubusercontent.com/ddgksf2013/Modules/refs/heads/main/Adblock/CainiaoAds.sgmodule)、[彩云天气](https://raw.githubusercontent.com/ddgksf2013/Modules/refs/heads/main/Adblock/CaiYunAds.sgmodule) 等
> > 
> > [![安装模块 墨鱼去开屏](https://img.shields.io/static/v1?label=安装模块&message=墨鱼去开屏&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/ddgksf2013/Modules/main/Adblock/StartUpAds.sgmodule "一键安装本模块")
> 
> **[Spotify 模块](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/Spotify.sgmodule)**
> 
> > 本模块原始代码来源于 [app2smile](https://github.com/app2smile)，原则上可以关闭随机播放及去除播放广告，可以使歌手/专辑列表正常展示，同时添加 **歌词翻译** 功能，可进入 **[编辑参数](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E7%BC%96%E8%BE%91%E5%8F%82%E6%95%B0)** 进行设置，**首次登录或软件更新后可能需要重启软件方可生效，极端情况下可能需要重新登录或重装**。软件音质不能设置为超高，分流节点须同注册地保持一致，其他功能说明请参阅 [备注](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/Spotify.sgmodule)。同时可选 [app2smile](https://github.com/app2smile) 和 [001ProMax](https://github.com/001ProMax) 两位的上游作者的版本
> >   
> > [![安装模块 Spotify 模块](https://img.shields.io/static/v1?label=安装模块&message=Spotify%20模块&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/Spotify.sgmodule "一键安装本模块")
> > [![安装模块 app2smile 版本](https://img.shields.io/static/v1?label=安装模块&message=app2smile%20版本&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/app2smile/rules/master/module/spotify.module "一键安装本模块")
> > [![安装模块 001ProMax 版本](https://img.shields.io/static/v1?label=安装模块&message=001ProMax%20版本&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/001ProMax/Surge/refs/heads/main/Module/AD/Spotify.sgmodule "一键安装本模块")
> 
> **[YouTube 模块](https://raw.githubusercontent.com/iab0x00/ProxyRules/refs/heads/main/Rewrite/YouTubeNoAd.sgmodule)**
> 
> > 本模块由 [iab0x00](https://github.com/iab0x00) 维护，可去除软件内各类广告并提供画中画功能（可能需要关闭 YouTube 设置中的“自动播放下一个视频”功能），同时支持 YouTube Music 去广告。模块支持 **[编辑参数](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E7%BC%96%E8%BE%91%E5%8F%82%E6%95%B0)**，安装后可点击模块进入编辑参数页面，可选是否屏蔽上传、Shorts、选段等按钮。需要注意，TV 版 YouTube 不支持解密，不可使用类似模块<br>
> > 同时提供 [Maasea](https://github.com/Maasea) 制作的 [原版模块](https://raw.githubusercontent.com/Maasea/sgmodule/refs/heads/master/YouTube.Enhance.sgmodule) 的安装路径
> >   
> > [![安装模块 YouTube 模块](https://img.shields.io/static/v1?label=安装模块&message=YouTube%20模块&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/iab0x00/ProxyRules/refs/heads/main/Rewrite/YouTubeNoAd.sgmodule "一键安装本模块")
> > [![安装模块 Maasea 版本](https://img.shields.io/static/v1?label=安装模块&message=Maasea%20版本&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/Maasea/sgmodule/refs/heads/master/YouTube.Enhance.sgmodule "一键安装本模块")
> 
> **[哔哩哔哩国际版](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/BiliIntlClean.sgmodule)**
> 
> > 本模块由 [iab0x00](https://github.com/iab0x00) 原创，使用 JQ 表达式构建，适用于哔哩哔哩国际版，即 **白色哔哩哔哩**，功能上可以移除热搜、搜索发现等内容，精简“我的”页面
> >   
> > [![安装模块 哔哩哔哩国际版](https://img.shields.io/static/v1?label=安装模块&message=哔哩哔哩国际版&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/BiliIntlClean.sgmodule "一键安装本模块")
>  
> **[滴滴出行净化模块](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/DiDiClean.sgmodule)**
> 
> > 本模块由 [iab0x00](https://github.com/iab0x00) 维护，可以去除滴滴的开屏广告及内部广告页面。模块使用 JQ 语言编写，适用于特定版本以上的小火箭
> >   
> > [![安装模块 滴滴去广告](https://img.shields.io/static/v1?label=安装模块&message=滴滴去广告&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/DiDiClean.sgmodule "一键安装本模块")
> 
> **[小红书去广告模块](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/RedBook.srmodule)**
> 
> > 本模块由 [iab0x00](https://github.com/iab0x00) 维护，可以去除小红书广告及图片、视频的水印。仅适用于 HTTP 代理模式
> >   
> > [![安装模块 小红书模块](https://img.shields.io/static/v1?label=安装模块&message=小红书模块&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/RedBook.srmodule "一键安装本模块")
>  
> **[微博轻享版模块](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/WeiboIntl.sgmodule)**
> 
> > 本模块是 [iab0x00](https://github.com/iab0x00) 维护的 微博轻享版/国际版 适用的去广告模块，可移除开屏、瀑布流、趋势页、用户中心广告等。模块使用 JQ 语言编写，适用于特定版本以上的小火箭
> >   
> > [![安装模块 微博轻享版](https://img.shields.io/static/v1?label=安装模块&message=微博轻享版&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/WeiboIntl.sgmodule "一键安装本模块")
>  
> **[微博去广告&净化](https://raw.githubusercontent.com/fmz200/wool_scripts/refs/heads/main/Surge/module/weibo.module)**
> 
> > 本模块是 [奶思](https://github.com/fmz200) 维护的微博适用的去广告模块，去除开屏广告、热门推荐、擦边诱导、每日弹窗、超话按钮提示、长文推广等，更多详情可查看模块 [备注](https://raw.githubusercontent.com/fmz200/wool_scripts/refs/heads/main/Surge/module/weibo.module)
> >   
> > [![安装模块 微博去广告](https://img.shields.io/static/v1?label=安装模块&message=微博去广告&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/fmz200/wool_scripts/refs/heads/main/Surge/module/weibo.module "一键安装本模块")
>  
> **[贴吧去广告模块](https://raw.githubusercontent.com/app2smile/rules/master/module/tieba.sgmodule)**
> 
> > 本模块来自 [app2smile](https://github.com/app2smile)，支持 **[编辑参数](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E7%BC%96%E8%BE%91%E5%8F%82%E6%95%B0)** 功能，安装后点击模块进入编辑参数页面设置，其他内容参见 [备注](https://raw.githubusercontent.com/app2smile/rules/master/module/tieba.sgmodule)
> >   
> > [![安装模块 贴吧去广告](https://img.shields.io/static/v1?label=安装模块&message=贴吧去广告&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/app2smile/rules/master/module/tieba.sgmodule "一键安装本模块")
> 
> **[机场流量查询模块](https://raw.githubusercontent.com/huskydsb/Shadowrocket/main/Sgmodule/%E6%9C%BA%E5%9C%BA%E6%B5%81%E9%87%8F%E6%9F%A5%E8%AF%A2.module)**
> 
> > 本模块由 [Sage](https://github.com/huskydsb) 制作并维护，是以 **[编辑参数](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E7%BC%96%E8%BE%91%E5%8F%82%E6%95%B0)** 为基础使用手段的定期检测订阅信息的模块，主要可以定期查询并提醒服务器订阅的当前信息，如上传流量、下载流量、流量总量、到期时间等提醒。安装后点击模块进入编辑参数页面设置，其时间间隔使用 Cron 表达式填写，其他内容参见编辑参数内的说明
> >   
> > [![安装模块 流量查询](https://img.shields.io/static/v1?label=安装模块&message=流量查询&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/huskydsb/Shadowrocket/main/Sgmodule/%E6%9C%BA%E5%9C%BA%E6%B5%81%E9%87%8F%E6%9F%A5%E8%AF%A2.module "一键安装本模块")
>
> **[京东比价模块](https://raw.githubusercontent.com/githubdulong/Script/refs/heads/master/Surge/jd_price.sgmodule)**
> 
> > 本模块来自 [MuTu](https://github.com/githubdulong)，点击商品详情或下滑进入详情触发比价，比价结果将嵌入详情页面展示。模块包含两个版本，折线展示版和表格展示版。使用本模块最好开启小火箭通知权限，首次使用请安装并打开 "慢慢买 APP "，点击 "我的" 页面，以获取 cookie。获取成功后，小火箭将弹出获取成功的通知，之后点击该模块，选择 **[编辑参数](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E7%BC%96%E8%BE%91%E5%8F%82%E6%95%B0)**，进入禁用 CK 获取。须知并非所有商品都有历史价格
> >   
> > [![安装模块 比价折线版](https://img.shields.io/static/v1?label=安装模块&message=比价折线版&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/githubdulong/Script/refs/heads/master/Surge/jd_price.sgmodule "一键安装本模块")
> > [![安装模块 比价表格版](https://img.shields.io/static/v1?label=安装模块&message=比价表格版&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/githubdulong/Script/refs/heads/master/Surge/jd_price2.sgmodule "一键安装本模块")
>  

### [解锁检测](#shadowrocket-收集文件)

> 由 [Kristen](https://t.me/iam_Kristen) 和 [Sage](https://github.com/huskydsb) 各制作有 **解锁检测快捷指令**，可用来检测各流媒体服务的解锁地区或可用性，也可以检测 ChatGPT、TikTok、YouTube 等服务的解锁地区或状态以及 IP 归属地等。脚本检测会根据你的分流规则进行测试，若出现错误请多试几次。其中 K 版是各服务统一通知结果，S 版是不同服务分别通知结果
>   
> [![快捷指令 解锁检测 K](https://img.shields.io/static/v1?label=快捷指令&message=解锁检测%20K&color=grey&logo=removedotbg&logoColor=white&labelColor=%23855DCD&messageColor=grey)](https://www.icloud.com/shortcuts/c2ccf142aeb649cd955dad8a4c02d3cf "点击安装快捷指令")
> [![快捷指令 解锁检测 S](https://img.shields.io/static/v1?label=快捷指令&message=解锁检测%20S&color=grey&logo=removedotbg&logoColor=white&labelColor=%23855DCD&messageColor=grey)](https://www.icloud.com/shortcuts/0bd31373228d4c94be224d2477c38148 "点击安装快捷指令")
>
> [Sage](https://github.com/huskydsb) 另有提供 **常用服务解锁检测** 服务。安装 [模块](https://raw.githubusercontent.com/huskydsb/Shadowrocket/refs/heads/main/Sgmodule/流媒体解锁测试.module) 后访问 [链接](https://streaming.test/)，根据页面服务内容进行可视化操作即可。现阶段支持检测的服务内容包括：YouTube、NETFLIX、OpenAI、TikTok、Disney+、Spotify、Scamalytics、Bing、bilibili、Steam、动画疯、Niconico动画、Google Play、维基百科编辑、Starz、iQIYI、DAZN、派拉蒙+、ViuTV、Now E、KKTV、LINE TV、IPv6 检测、DNS 检测等，以上解锁检测以实际访问为准
>
> [![首先安装 检测模块](https://img.shields.io/static/v1?label=首先安装&message=检测模块&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/huskydsb/Shadowrocket/refs/heads/main/Sgmodule/流媒体解锁测试.module "一键安装本模块")
> [![其次访问 检测页面](https://img.shields.io/static/v1?label=其次访问&message=检测页面&color=grey&logo=html5&logoColor=white&labelColor=%23E34F26&messageColor=white)](https://streaming.test/ "点击访问检测页面")

### [进阶用法](#shadowrocket-收集文件)

> 在当前的 iOS 平台上，想要实现较为高级的功能和操作，往往需要借助 **[Script-Hub](https://github.com/Script-Hub-Org/Script-Hub/wiki)**、 **[Sub-Store](https://github.com/sub-store-org/Sub-Store/tree/master/config)** 和 **[BoxJs](https://docs.boxjs.app/)** 这三个工具来实现。详细用法请点击各自的 **蓝色超链** 跳转查看，点击下方徽章可一键安装相应模块
>
> [![安装模块 Script-Hub](https://img.shields.io/static/v1?label=安装模块&message=Script-Hub&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/modules/script-hub.rocket.module "一键安装本模块")
> [![安装模块 Sub-Store](https://img.shields.io/static/v1?label=安装模块&message=Sub-Store&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/sub-store-org/Sub-Store/master/config/Surge-Noability.sgmodule "一键安装本模块")
> [![安装模块 BoxJs](https://img.shields.io/static/v1?label=安装模块&message=BoxJs&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/chavyleung/scripts/master/box/rewrite/boxjs.rewrite.surge.sgmodule "一键安装本模块")

### [其他仓库](#shadowrocket-收集文件)

> [iab0x00](https://github.com/iab0x00) 创建并维护的小火箭原生模块仓库，包含 YouTube、滴滴出行、酷安、小红书等软件的相关模块
>
> [![模块仓库 iab0x00](https://img.shields.io/static/v1?label=模块仓库&message=iab0x00&color=grey&logo=searxng&logoColor=white&labelColor=blue&messageColor=white)](https://github.com/iab0x00/ProxyRules "点击查看模块")
>
> [QingRex](https://github.com/QingRex) 维护的 [模块仓库](https://github.com/QingRex/LoonKissSurge)，绝大部分可兼容使用
>
> [![模块仓库 QingRex](https://img.shields.io/static/v1?label=模块仓库&message=QingRex&color=grey&logo=searxng&logoColor=white&labelColor=blue&messageColor=white)](https://surge.qingr.moe "点击查看模块")
>
> [奶思](https://github.com/fmz200) 维护的仓库，包含数百款独立模块，可安装使用 Surge 版本
>
> [![模块仓库 奶思](https://img.shields.io/static/v1?label=模块仓库&message=奶思&color=grey&logo=searxng&logoColor=white&labelColor=blue&messageColor=white)](https://github.com/fmz200/wool_scripts/blob/main/README-RULE.md "点击查看模块")
> 
> [Cuttlefish 墨鱼](https://github.com/ddgksf2013/ddgksf2013) 维护的可适用小火箭的模块仓库，包含高德、B站、彩云、菜鸟、微博等
>
> [![模块仓库 Cuttlefish](https://img.shields.io/static/v1?label=模块仓库&message=Cuttlefish&color=grey&logo=searxng&logoColor=white&labelColor=blue&messageColor=white)](https://github.com/ddgksf2013/Modules/tree/main/Adblock "点击查看模块")

### [筛选订阅脚本](#shadowrocket-收集文件)

> [kiwi707](https://github.com/kiwi707) 制作的 **筛选/规范订阅节点** 脚本，该脚本异常强大，可根据需要过滤节点并将保留的节点的名称进行标准化和格式化
> 
> _使用方法：打开下方脚件链接后复制所有内容，粘贴至 **订阅页面** 的 **[过滤](https://github.com/LOWERTOP/Shadowrocket#%E8%AE%A2%E9%98%85%E8%8A%82%E7%82%B9%E7%AD%9B%E9%80%89)** 区域，参考 [说明](https://github.com/kiwi707/Shadow-Rocket) 修改后保存即可_
>   
> [![脚本文件 筛选与修改](https://img.shields.io/static/v1?label=脚本文件&message=筛选与修改&color=grey&logo=javascript&logoColor=grey&labelColor=%23F7DF1E&messageColor=grey)](https://raw.githubusercontent.com/kiwi707/Shadow-Rocket/refs/heads/main/FilterScript "点击查看脚本内容")

### [规则收集](#shadowrocket-收集文件)

> 本页提供 [blackmatrix7](https://github.com/blackmatrix7) 维护的分类非常细致的各代理软件分流规则的入口，是现阶段首推的代理规则集，使用时务必阅读相应的配置建议
> 
> [![规则检索 分流规则集](https://img.shields.io/static/v1?label=规则检索&message=分流规则集&color=grey&logo=searxng&logoColor=white&labelColor=%2325A162&messageColor=white)](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Shadowrocket "点击查看分类")
>
> [anti-AD](https://github.com/privacy-protection-tools/anti-AD) 维护有适用于小火箭的 [去广告规则](https://raw.githubusercontent.com/privacy-protection-tools/anti-AD/master/anti-ad-surge2.txt)。其将各大著名的 hosts、ad filter lists、adblock list 等列表进行合并去重，再进行一系列的抽象化，例如主动剔除失效域名、easylist 优化模糊匹配、增强的黑白名单机制等措施，最终生成较高命中率的列表
> 
> [![规则文件 anti-AD](https://img.shields.io/static/v1?label=规则文件&message=anti-AD&color=grey&logo=todoist&logoColor=white&labelColor=%2325A162&messageColor=white)](https://raw.githubusercontent.com/privacy-protection-tools/anti-AD/master/anti-ad-surge2.txt "点击访问规则集")
> 
> [ACL4SSR](https://github.com/ACL4SSR) 维护的 [去广告规则](https://github.com/ACL4SSR/ACL4SSR/tree/master)，其 [BanAD 规则](https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/refs/heads/master/Clash/BanAD.list) 包含常见广告关键字、广告联盟，几乎没有副作用，可以放心使用。另外还有取自 Adblock 的 [EasyListChina 规则](https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/refs/heads/master/Clash/BanEasyListChina.list) 等内容
> 
> [![规则文件 BanAD](https://img.shields.io/static/v1?label=规则文件&message=BanAD&color=grey&logo=todoist&logoColor=white&labelColor=%2325A162&messageColor=white)](https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/refs/heads/master/Clash/BanAD.list "点击访问规则集")
> [![规则文件 EasyListChina](https://img.shields.io/static/v1?label=规则文件&message=EasyListChina&color=grey&logo=todoist&logoColor=white&labelColor=%2325A162&messageColor=white)](https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/refs/heads/master/Clash/BanEasyListChina.list "点击访问规则集")
>
> [Cats-Team](https://github.com/Cats-Team) 维护的 [去广告规则](https://github.com/Cats-Team/AdRules)，维护相对及时，将其添加为规则集，并将策略设置为 `Reject` 即可使用
> 
> [![规则文件 Cats-Team](https://img.shields.io/static/v1?label=规则文件&message=Cats-Team&color=grey&logo=todoist&logoColor=white&labelColor=%2325A162&messageColor=white)](https://raw.githubusercontent.com/Cats-Team/AdRules/main/adrules.list "点击访问规则集")
> 
> [iab0x00](https://github.com/iab0x00) 维护的轻量级 [去广告规则](https://raw.githubusercontent.com/iab0x00/ProxyRules/refs/heads/main/Rule/Block.txt)，包含一些常用广告域名、360、百度、字节、腾讯等多个广告商或服务的屏蔽列表
> 
> [![规则文件 AdBlock](https://img.shields.io/static/v1?label=规则文件&message=AdBlock&color=grey&logo=todoist&logoColor=white&labelColor=%2325A162&messageColor=white)](https://raw.githubusercontent.com/iab0x00/ProxyRules/refs/heads/main/Rule/Block.txt "点击访问规则集")
> 
> [iab0x00](https://github.com/iab0x00) 维护的 [交易所规则集](https://raw.githubusercontent.com/iab0x00/ProxyRules/refs/heads/main/Rule/Crypto.txt)，包含 Binane、Bitget、Bybit、OKX 等
> 
> [![规则文件 交易所规则集](https://img.shields.io/static/v1?label=规则文件&message=交易所规则集&color=grey&logo=todoist&logoColor=white&labelColor=%2325A162&messageColor=white)](https://raw.githubusercontent.com/iab0x00/ProxyRules/refs/heads/main/Rule/Crypto.txt "点击访问规则集")

------

# [Shadowrocket 配色文件](#shadowrocket-配色文件)

> [!NOTE]
> 
> 本单元主要提供作者原创的一些供 Shadowrocket 使用的配色文件
>
> **极其鸣谢** 快捷指令作者：[iab0x00](https://github.com/iab0x00)<br>
> **特别鸣谢** 提供建议好友：[Sage](https://github.com/huskydsb)

**效果示例：TermiusDark**

> <img src="https://lowertop.github.io/Shadowrocket-First/img/RenderingTermiusDark.png" width="100%"> 
> 
> <details>
> <summary>点击查看其他配色示例</summary>
> 
> <img src="https://lowertop.github.io/Shadowrocket-First/img/110301.png" width="100%"> 
> <img src="https://lowertop.github.io/Shadowrocket-First/img/110302.png" width="100%"> 
> 
> </details>

------

### [Shadowrocket 原创配色](#shadowrocket-配色文件)

> [!IMPORTANT]
> 
> 小火箭原创配色文件已更新至 30 个<br>
> 因苹果系统限制，部分细部图标不可自定义，且会跟随系统颜色模式改变。建议在使用 `亮底色` 时搭配浅色模式，使用 `暗底色` 时搭配深色模式

> [!TIP]
> 
> * __一键安装：__ 选择所需配色，根据系统版本点击对应的 **安装配色** 按钮，允许跳转后点击 **使用** 即可
> * __复制安装：__ 复制对应系统版本的 `shadowrocket://color?*` 配色代码，在 **配置** 页点击 `✚` 号，粘贴并应用
> * __快捷指令：__ 安装快捷指令 [iOS 18 及以下](https://www.icloud.com/shortcuts/d8b9d1175e0343d2ac72815e5e4c3ace)、[iOS 26 及以上](https://www.icloud.com/shortcuts/5fc36fd1fa614ba6b100192ff0504492)，运行 **快捷指令** 并选择配色安装
> * __恢复默认：__ APP - 设置 - 颜色 - 重设颜色

------

#### [Shadowrocket EpicLight](#shadowrocket-原创配色)
> `Epic 清晨` <sup> `亮底色` <sup>
> 
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%23F2F2F2&logo=renovate&logoColor=grey&labelColor=%23F2F2F2&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=EpicLight18 "亮底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%23F2F2F2&logo=renovate&logoColor=grey&labelColor=%23F2F2F2&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=EpicLight26 "亮底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/EpicLight.PNG" width="100%">
> </details>
> 
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FCFFFFFF&NavigationBar2Color=%23FFFFFF&NavigationBarTextColor=%23262626&NavigationBar2TextColor=%23262626&TabBarColor=%23FFFFFF&TabBarBorderColor=%23FFFFFF&TabBarSelectedColor=%23262626&TabBarUnselectedColor=%239F9FA1&TableBackgroundColor=%23FFFFFF&TableCellBackgroundColor=%23F2F2F2&TableCellSelectedBackgroundColor=%23FFFFFF&TableSeparatorColor=%23FFFFFF&TextFieldTextColor=%23535353&PlaceholderColor=%239F9FA1&TextLabelTextColor=%23262626&DetailLabelTextColor=%23535353&TextLabelDeleteColor=%23E8886D&HeaderFooterTextColor=%239F9FA1&SearchFieldBackgroundColor=%23F2F2F2&IndicatorColor=%23CCCCCC&ButtonIconColor=%23535353&ButtonNormalColor=%23535353&ButtonNormal2Color=%23535353&ButtonNormal3Color=%23535353&ButtonHighlightedColor=%23CCCCCC&ButtonHighlighted2Color=%23CCCCCC&ButtonHighlighted3Color=%23202024&ButtonDisabledColor=%23202024&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2326BBFF&PingTimeoutTextColor=%23E8886D&DefaultDotColor=%2326BBFF&HUDBackgroundColor=%23F2F2F2&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%23FFFFFF&NavigationBarTextColor=%23262626&NavigationBar2TextColor=%23262626&TabBarColor=%2300FFFFFF&TabBarBorderColor=%23FFFFFF&TabBarSelectedColor=%23262626&TabBarUnselectedColor=%239F9FA1&TableBackgroundColor=%23FFFFFF&TableCellBackgroundColor=%23F2F2F2&TableCellSelectedBackgroundColor=%23FFFFFF&TableSeparatorColor=%23FFFFFF&TextFieldTextColor=%23535353&PlaceholderColor=%239F9FA1&TextLabelTextColor=%23262626&DetailLabelTextColor=%23535353&TextLabelDeleteColor=%23E8886D&HeaderFooterTextColor=%239F9FA1&SearchFieldBackgroundColor=%23F2F2F2&IndicatorColor=%23CCCCCC&ButtonIconColor=%23535353&ButtonNormalColor=%23535353&ButtonNormal2Color=%23535353&ButtonNormal3Color=%23535353&ButtonHighlightedColor=%23CCCCCC&ButtonHighlighted2Color=%23CCCCCC&ButtonHighlighted3Color=%23202024&ButtonDisabledColor=%23202024&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2326BBFF&PingTimeoutTextColor=%23E8886D&DefaultDotColor=%2326BBFF&HUDBackgroundColor=%23F2F2F2&v=1.0
> ```

------

#### [Shadowrocket V2EXDay](#shadowrocket-原创配色)
> `V2EX 白昼` <sup> `亮底色` <sup>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%23F5F5F5&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23555555)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=V2EXDay18 "亮底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%23F5F5F5&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23555555)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=V2EXDay26 "亮底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/V2EXDAY.PNG" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FCFFFFFF&NavigationBar2Color=%23FFFFFF&NavigationBarTextColor=%23555555&NavigationBar2TextColor=%23555555&TabBarColor=%23FFFFFF&TabBarBorderColor=%23FFFFFF&TabBarSelectedColor=%23555555&TabBarUnselectedColor=%23CCCCCC&TableBackgroundColor=%23FFFFFF&TableCellBackgroundColor=%23F5F5F5&TableCellSelectedBackgroundColor=%23FFFFFF&TableSeparatorColor=%23FFFFFF&TextFieldTextColor=%23555555&PlaceholderColor=%23CCCCCC&TextLabelTextColor=%23555555&DetailLabelTextColor=%23778087&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23778087&SearchFieldBackgroundColor=%23F5F5F5&IndicatorColor=%23555555&ButtonIconColor=%23555555&ButtonNormalColor=%23555555&ButtonNormal2Color=%23555555&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23555555&HUDBackgroundColor=%23FFFFFF&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%23FFFFFF&NavigationBarTextColor=%23555555&NavigationBar2TextColor=%23555555&TabBarColor=%2300FFFFFF&TabBarBorderColor=%23FFFFFF&TabBarSelectedColor=%23000000&TabBarUnselectedColor=%23778087&TableBackgroundColor=%23FFFFFF&TableCellBackgroundColor=%23F5F5F5&TableCellSelectedBackgroundColor=%23FFFFFF&TableSeparatorColor=%23FFFFFF&TextFieldTextColor=%23555555&PlaceholderColor=%23CCCCCC&TextLabelTextColor=%23555555&DetailLabelTextColor=%23778087&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23778087&SearchFieldBackgroundColor=%23F5F5F5&IndicatorColor=%23555555&ButtonIconColor=%23555555&ButtonNormalColor=%23555555&ButtonNormal2Color=%23555555&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23555555&HUDBackgroundColor=%23FFFFFF&v=1.0
> ```

------

#### [Shadowrocket GitHubLight](#shadowrocket-原创配色)
> `GitHub 白昼` <sup> `亮底色` <sup>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%23F0F1F3&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23161B22)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=GitHubLight18 "亮底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%23F0F1F3&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23161B22)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=GitHubLight26 "亮底色配色")
> 
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/GitHubLight.PNG" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FCFFFFFF&NavigationBar2Color=%23FFFFFF&NavigationBarTextColor=%23161B22&NavigationBar2TextColor=%23161B22&TabBarColor=%23F0F1F3&TabBarBorderColor=%23F0F1F3&TabBarSelectedColor=%23161B22&TabBarUnselectedColor=%2365161B22&TableBackgroundColor=%23FFFFFF&TableCellBackgroundColor=%23F0F1F3&TableCellSelectedBackgroundColor=%23FFFFFF&TableSeparatorColor=%23FFFFFF&TextFieldTextColor=%2359616B&PlaceholderColor=%2365161B22&TextLabelTextColor=%23202328&DetailLabelTextColor=%23959BA4&TextLabelDeleteColor=%23E8886D&HeaderFooterTextColor=%23959BA4&SearchFieldBackgroundColor=%23F0F1F3&IndicatorColor=%23F2F7FC&ButtonIconColor=%23959BA4&ButtonNormalColor=%23959BA4&ButtonNormal2Color=%23959BA4&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23161B22&ButtonDisabledColor=%23161B22&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23E8886D&DefaultDotColor=%23DBB556&HUDBackgroundColor=%23F0F1F3&v=1.0
> ```
>
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%23FFFFFF&NavigationBarTextColor=%23161B22&NavigationBar2TextColor=%23161B22&TabBarColor=%2300FFFFFF&TabBarBorderColor=%23F0F1F3&TabBarSelectedColor=%23161B22&TabBarUnselectedColor=%2365161B22&TableBackgroundColor=%23FFFFFF&TableCellBackgroundColor=%23F0F1F3&TableCellSelectedBackgroundColor=%23FFFFFF&TableSeparatorColor=%23FFFFFF&TextFieldTextColor=%2359616B&PlaceholderColor=%2365161B22&TextLabelTextColor=%23202328&DetailLabelTextColor=%23959BA4&TextLabelDeleteColor=%23E8886D&HeaderFooterTextColor=%23959BA4&SearchFieldBackgroundColor=%23F0F1F3&IndicatorColor=%23F2F7FC&ButtonIconColor=%23959BA4&ButtonNormalColor=%23959BA4&ButtonNormal2Color=%23959BA4&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23161B22&ButtonDisabledColor=%23161B22&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23E8886D&DefaultDotColor=%23DBB556&HUDBackgroundColor=%23F0F1F3&v=1.0
> ```

------

#### [Shadowrocket BrightGold](#shadowrocket-原创配色)
> `亮金色` <sup> `亮底色` <sup>
> 
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%23D38301&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=BrightGold18 "亮底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%23D38301&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=BrightGold26 "亮底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/01BrightGold.png" width="100%">
> </details>
> 
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FCF7F7F7&NavigationBar2Color=%23F7F7F7&NavigationBarTextColor=%23D38301&NavigationBar2TextColor=%23D38301&TabBarColor=%23F7F7F7&TabBarBorderColor=%23F7F7F7&TabBarSelectedColor=%23D38301&TabBarUnselectedColor=%23D1C0A2&TableBackgroundColor=%23FFFFFF&TableCellBackgroundColor=%23F7F7F7&TableCellSelectedBackgroundColor=%23FFFFFF&TableSeparatorColor=%23FFFFFF&TextFieldTextColor=%23D38301&PlaceholderColor=%23D1C0A2&TextLabelTextColor=%23D38301&DetailLabelTextColor=%23D4A763&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23D4A763&SearchFieldBackgroundColor=%23F7F7F7&IndicatorColor=%23D4A763&ButtonIconColor=%23D38301&ButtonNormalColor=%23D38301&ButtonNormal2Color=%23D38301&ButtonNormal3Color=%23D38301&ButtonHighlightedColor=%23FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23FFFFFF&ButtonDisabledColor=%23FFFFFF&ButtonDisabled2Color=%23FFFFFF&PingSuccessTextColor=%23D4A763&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23D38301&HUDBackgroundColor=%23F7F7F7&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%23F7F7F7&NavigationBarTextColor=%23D38301&NavigationBar2TextColor=%23D38301&TabBarColor=%2300FFFFFF&TabBarBorderColor=%23F7F7F7&TabBarSelectedColor=%23D38301&TabBarUnselectedColor=%23D1C0A2&TableBackgroundColor=%23FFFFFF&TableCellBackgroundColor=%23F7F7F7&TableCellSelectedBackgroundColor=%23FFFFFF&TableSeparatorColor=%23FFFFFF&TextFieldTextColor=%23D38301&PlaceholderColor=%23D1C0A2&TextLabelTextColor=%23D38301&DetailLabelTextColor=%23D4A763&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23D4A763&SearchFieldBackgroundColor=%23F7F7F7&IndicatorColor=%23D4A763&ButtonIconColor=%23D38301&ButtonNormalColor=%23D38301&ButtonNormal2Color=%23D38301&ButtonNormal3Color=%23D38301&ButtonHighlightedColor=%23FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23FFFFFF&ButtonDisabledColor=%23FFFFFF&ButtonDisabled2Color=%23FFFFFF&PingSuccessTextColor=%23D4A763&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23D38301&HUDBackgroundColor=%23F7F7F7&v=1.0
> ```


------

#### [Shadowrocket EcoGreen](#shadowrocket-原创配色)
> `生态绿` <sup> `亮底色` <sup>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%23DDE1DD&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%2347634E)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=EcoGreen18 "亮底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%23DDE1DD&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%2347634E)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=EcoGreen26 "亮底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/EcoGreen.PNG" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FCDDE1DD&NavigationBar2Color=%23DDE1DD&NavigationBarTextColor=%2347634E&NavigationBar2TextColor=%2347634E&TabBarColor=%23FFFFFF&TabBarBorderColor=%23FFFFFF&TabBarSelectedColor=%2347634E&TabBarUnselectedColor=%236747634E&TableBackgroundColor=%23FFFFFF&TableCellBackgroundColor=%23DDE1DD&TableCellSelectedBackgroundColor=%23FFFFFF&TableSeparatorColor=%23FFFFFF&TextFieldTextColor=%2347634E&PlaceholderColor=%236747634E&TextLabelTextColor=%2347634E&DetailLabelTextColor=%236747634E&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%236747634E&SearchFieldBackgroundColor=%23DDE1DD&IndicatorColor=%2347634E&ButtonIconColor=%2347634E&ButtonNormalColor=%2347634E&ButtonNormal2Color=%23FFCC40&ButtonNormal3Color=%2347634E&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23FFCC40&HUDBackgroundColor=%23DDE1DD&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%23DDE1DD&NavigationBarTextColor=%2347634E&NavigationBar2TextColor=%2347634E&TabBarColor=%2300FFFFFF&TabBarBorderColor=%23FFFFFF&TabBarSelectedColor=%2347634E&TabBarUnselectedColor=%236747634E&TableBackgroundColor=%23FFFFFF&TableCellBackgroundColor=%23DDE1DD&TableCellSelectedBackgroundColor=%23FFFFFF&TableSeparatorColor=%23FFFFFF&TextFieldTextColor=%2347634E&PlaceholderColor=%236747634E&TextLabelTextColor=%2347634E&DetailLabelTextColor=%236747634E&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%236747634E&SearchFieldBackgroundColor=%23DDE1DD&IndicatorColor=%2347634E&ButtonIconColor=%2347634E&ButtonNormalColor=%2347634E&ButtonNormal2Color=%23FFCC40&ButtonNormal3Color=%2347634E&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23FFCC40&HUDBackgroundColor=%23DDE1DD&v=1.0
> ```

------

#### [Shadowrocket IceCream](#shadowrocket-原创配色)
> `淡粉色` <sup> `亮底色` <sup>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%23FFEBF4&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23F5197B)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=IceCream18 "亮底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%23FFEBF4&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23F5197B)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=IceCream26 "亮底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/02IceCream.png" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%23FFFFFF&NavigationBarTextColor=%23F5197B&NavigationBar2TextColor=%23F5197B&TabBarColor=%23FFD7E9&TabBarBorderColor=%23FFD7E9&TabBarSelectedColor=%23F5197B&TabBarUnselectedColor=%2367F5197B&TableBackgroundColor=%23FFFFFF&TableCellBackgroundColor=%23FFEBF4&TableCellSelectedBackgroundColor=%23FFFFFF&TableSeparatorColor=%23FFFFFF&TextFieldTextColor=%2399F5197B&PlaceholderColor=%2367F5197B&TextLabelTextColor=%23F5197B&DetailLabelTextColor=%2399F5197B&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%2399F5197B&SearchFieldBackgroundColor=%23FFEBF4&IndicatorColor=%23F5197B&ButtonIconColor=%23F5197B&ButtonNormalColor=%23F5197B&ButtonNormal2Color=%23F5197B&ButtonNormal3Color=%23F5197B&ButtonHighlightedColor=%23FFEBF4&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23FFFFFF&ButtonDisabledColor=%23FFEBF4&ButtonDisabled2Color=%23FFEBF4&PingSuccessTextColor=%23F5197B&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23F5197B&HUDBackgroundColor=%23FFEBF4&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%2300FFFFFF&NavigationBarTextColor=%23F5197B&NavigationBar2TextColor=%23F5197B&TabBarColor=%2300FFFFFF&TabBarBorderColor=%23FFD7E9&TabBarSelectedColor=%23F5197B&TabBarUnselectedColor=%2367F5197B&TableBackgroundColor=%23FFFFFF&TableCellBackgroundColor=%23FFEBF4&TableCellSelectedBackgroundColor=%23FFFFFF&TableSeparatorColor=%23FFFFFF&TextFieldTextColor=%2399F5197B&PlaceholderColor=%2367F5197B&TextLabelTextColor=%23F5197B&DetailLabelTextColor=%2399F5197B&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%2399F5197B&SearchFieldBackgroundColor=%23FFEBF4&IndicatorColor=%23F5197B&ButtonIconColor=%23F5197B&ButtonNormalColor=%23F5197B&ButtonNormal2Color=%23F5197B&ButtonNormal3Color=%23F5197B&ButtonHighlightedColor=%23FFEBF4&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23FFFFFF&ButtonDisabledColor=%23FFEBF4&ButtonDisabled2Color=%23FFEBF4&PingSuccessTextColor=%23F5197B&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23F5197B&HUDBackgroundColor=%23FFEBF4&v=1.0
> ```


------

#### [Shadowrocket Elegant](#shadowrocket-原创配色)
> `典雅灰` <sup> `亮底色` <sup>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%23EBEBEB&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23383838)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Elegant18 "亮底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%23EBEBEB&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23383838)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Elegant26 "亮底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/08Elegant.png" width="100%">
> </details>
> 
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%23FFFFFF&NavigationBarTextColor=%23383838&NavigationBar2TextColor=%23383838&TabBarColor=%23383838&TabBarBorderColor=%2300FFFFFF&TabBarSelectedColor=%23FFFFFF&TabBarUnselectedColor=%2380D7D7D7&TableBackgroundColor=%23FFFFFF&TableCellBackgroundColor=%23EBEBEB&TableCellSelectedBackgroundColor=%23FFFFFF&TableSeparatorColor=%23FFFFFF&TextFieldTextColor=%239E9E9E&PlaceholderColor=%2380D7D7D7&TextLabelTextColor=%23383838&DetailLabelTextColor=%239E9E9E&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%239E9E9E&SearchFieldBackgroundColor=%23EBEBEB&IndicatorColor=%23383838&ButtonIconColor=%23383838&ButtonNormalColor=%23383838&ButtonNormal2Color=%23383838&ButtonNormal3Color=%23383838&ButtonHighlightedColor=%23FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23FFFFFF&ButtonDisabledColor=%23FFFFFF&ButtonDisabled2Color=%23FFFFFF&PingSuccessTextColor=%23383838&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23383838&HUDBackgroundColor=%23EBEBEB&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%23FFFFFF&NavigationBarTextColor=%23383838&NavigationBar2TextColor=%23383838&TabBarColor=%2300FFFFFF&TabBarBorderColor=%2300FFFFFF&TabBarSelectedColor=%23383838&TabBarUnselectedColor=%239E9E9E&TableBackgroundColor=%23FFFFFF&TableCellBackgroundColor=%23EBEBEB&TableCellSelectedBackgroundColor=%23FFFFFF&TableSeparatorColor=%23FFFFFF&TextFieldTextColor=%239E9E9E&PlaceholderColor=%2380D7D7D7&TextLabelTextColor=%23383838&DetailLabelTextColor=%239E9E9E&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%239E9E9E&SearchFieldBackgroundColor=%23EBEBEB&IndicatorColor=%23383838&ButtonIconColor=%23383838&ButtonNormalColor=%23383838&ButtonNormal2Color=%23383838&ButtonNormal3Color=%23383838&ButtonHighlightedColor=%23FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23FFFFFF&ButtonDisabledColor=%23FFFFFF&ButtonDisabled2Color=%23FFFFFF&PingSuccessTextColor=%23383838&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23383838&HUDBackgroundColor=%23EBEBEB&v=1.0
> ```

------

#### [Shadowrocket Cloudy](#shadowrocket-原创配色)
> `多云色` <sup> `亮底色` <sup>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%23D5DDE0&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23303548)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Cloudy18 "亮底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%23D5DDE0&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23303548)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Cloudy26 "亮底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/Cloudy.PNG" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FCD5DDE0&NavigationBar2Color=%23D5DDE0&NavigationBarTextColor=%23303548&NavigationBar2TextColor=%23303548&TabBarColor=%23D5DDE0&TabBarBorderColor=%23D5DDE0&TabBarSelectedColor=%23303548&TabBarUnselectedColor=%2367303548&TableBackgroundColor=%23D5DDE0&TableCellBackgroundColor=%234DBFC6C9&TableCellSelectedBackgroundColor=%23D5DDE0&TableSeparatorColor=%23D5DDE0&TextFieldTextColor=%23303548&PlaceholderColor=%2367303548&TextLabelTextColor=%23303548&DetailLabelTextColor=%23454445&TextLabelDeleteColor=%23FF6B6E&HeaderFooterTextColor=%2377787D&SearchFieldBackgroundColor=%2377787D&IndicatorColor=%23FFFFFF&ButtonIconColor=%23303548&ButtonNormalColor=%23303548&ButtonNormal2Color=%23303548&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2326B66B&PingTimeoutTextColor=%23FF6B6E&DefaultDotColor=%23303548&HUDBackgroundColor=%23BFC6C9&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%2300FFFFFF&NavigationBarTextColor=%23303548&NavigationBar2TextColor=%23303548&TabBarColor=%2300FFFFFF&TabBarBorderColor=%23D5DDE0&TabBarSelectedColor=%23303548&TabBarUnselectedColor=%2367303548&TableBackgroundColor=%23D5DDE0&TableCellBackgroundColor=%234DBFC6C9&TableCellSelectedBackgroundColor=%23D5DDE0&TableSeparatorColor=%23D5DDE0&TextFieldTextColor=%23303548&PlaceholderColor=%2367303548&TextLabelTextColor=%23303548&DetailLabelTextColor=%23454445&TextLabelDeleteColor=%23FF6B6E&HeaderFooterTextColor=%2377787D&SearchFieldBackgroundColor=%2377787D&IndicatorColor=%23FFFFFF&ButtonIconColor=%23303548&ButtonNormalColor=%23303548&ButtonNormal2Color=%23303548&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2326B66B&PingTimeoutTextColor=%23FF6B6E&DefaultDotColor=%23303548&HUDBackgroundColor=%23BFC6C9&v=1.0
> ```

------

#### [Shadowrocket AyuLight](#shadowrocket-原创配色)
> `香鱼色` <sup> `亮底色` <sup>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%23FAFAFA&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%235C6773)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=AyuLight18 "亮底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%23FAFAFA&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%235C6773)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=AyuLight26 "亮底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/AyuLight.PNG" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FCFAFAFA&NavigationBar2Color=%23FAFAFA&NavigationBarTextColor=%235C6773&NavigationBar2TextColor=%235C6773&TabBarColor=%23FAFAFA&TabBarBorderColor=%23FAFAFA&TabBarSelectedColor=%235C6773&TabBarUnselectedColor=%23655C6773&TableBackgroundColor=%23FAFAFA&TableCellBackgroundColor=%23F1F1F1&TableCellSelectedBackgroundColor=%23FAFAFA&TableSeparatorColor=%23FAFAFA&TextFieldTextColor=%235C6773&PlaceholderColor=%23655C6773&TextLabelTextColor=%235C6773&DetailLabelTextColor=%23ABB1B6&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23ABB1B6&SearchFieldBackgroundColor=%23F5F5F5&IndicatorColor=%23FAFAFA&ButtonIconColor=%235C6773&ButtonNormalColor=%235C6773&ButtonNormal2Color=%235C6773&ButtonNormal3Color=%23ABB1B6&ButtonHighlightedColor=%23FAFAFA&ButtonHighlighted2Color=%23FAFAFA&ButtonHighlighted3Color=%235C6773&ButtonDisabledColor=%235C6773&ButtonDisabled2Color=%23FAFAFA&PingSuccessTextColor=%23339918&PingTimeoutTextColor=%23FD691D&DefaultDotColor=%23FD691D&HUDBackgroundColor=%23FFFFFF&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%2300FFFFFF&NavigationBarTextColor=%235C6773&NavigationBar2TextColor=%235C6773&TabBarColor=%2300FFFFFF&TabBarBorderColor=%23FAFAFA&TabBarSelectedColor=%235C6773&TabBarUnselectedColor=%23655C6773&TableBackgroundColor=%23FAFAFA&TableCellBackgroundColor=%23F1F1F1&TableCellSelectedBackgroundColor=%23FAFAFA&TableSeparatorColor=%23FAFAFA&TextFieldTextColor=%235C6773&PlaceholderColor=%23655C6773&TextLabelTextColor=%235C6773&DetailLabelTextColor=%23ABB1B6&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23ABB1B6&SearchFieldBackgroundColor=%23F5F5F5&IndicatorColor=%23FAFAFA&ButtonIconColor=%235C6773&ButtonNormalColor=%235C6773&ButtonNormal2Color=%235C6773&ButtonNormal3Color=%23ABB1B6&ButtonHighlightedColor=%23FAFAFA&ButtonHighlighted2Color=%23FAFAFA&ButtonHighlighted3Color=%235C6773&ButtonDisabledColor=%235C6773&ButtonDisabled2Color=%23FAFAFA&PingSuccessTextColor=%23339918&PingTimeoutTextColor=%23FD691D&DefaultDotColor=%23FD691D&HUDBackgroundColor=%23FFFFFF&v=1.0
> ```

------

#### [Shadowrocket Solarized](#shadowrocket-原创配色)
> `烈日色` <sup> `亮底色` <sup>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%23FDF6E4&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23657B83)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Solarized18 "亮底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%23FDF6E4&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23657B83)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Solarized26 "亮底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/Solarized.PNG" width="100%">
> </details>
> 
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FCFDF6E4&NavigationBar2Color=%23FDF6E4&NavigationBarTextColor=%23657B83&NavigationBar2TextColor=%23657B83&TabBarColor=%23FDF6E4&TabBarBorderColor=%23FDF6E4&TabBarSelectedColor=%23657B83&TabBarUnselectedColor=%2366657B83&TableBackgroundColor=%23FDF6E4&TableCellBackgroundColor=%23F3ECDB&TableCellSelectedBackgroundColor=%23FDF6E4&TableSeparatorColor=%23FDF6E4&TextFieldTextColor=%23657B83&PlaceholderColor=%2366657B83&TextLabelTextColor=%23657B83&DetailLabelTextColor=%23ABB1B6&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23ABB1B6&SearchFieldBackgroundColor=%23FDF6E4&IndicatorColor=%23F3ECDB&ButtonIconColor=%23657B83&ButtonNormalColor=%23657B83&ButtonNormal2Color=%23657B83&ButtonNormal3Color=%23ABB1B6&ButtonHighlightedColor=%23FDF6E4&ButtonHighlighted2Color=%23FDF6E4&ButtonHighlighted3Color=%23657B83&ButtonDisabledColor=%23657B83&ButtonDisabled2Color=%23FDF6E4&PingSuccessTextColor=%23339918&PingTimeoutTextColor=%23FD691D&DefaultDotColor=%23FD691D&HUDBackgroundColor=%23F3ECDB&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%2300FFFFFF&NavigationBarTextColor=%23657B83&NavigationBar2TextColor=%23657B83&TabBarColor=%2300FFFFFF&TabBarBorderColor=%23FDF6E4&TabBarSelectedColor=%23657B83&TabBarUnselectedColor=%2366657B83&TableBackgroundColor=%23FDF6E4&TableCellBackgroundColor=%23F3ECDB&TableCellSelectedBackgroundColor=%23FDF6E4&TableSeparatorColor=%23FDF6E4&TextFieldTextColor=%23657B83&PlaceholderColor=%2366657B83&TextLabelTextColor=%23657B83&DetailLabelTextColor=%23ABB1B6&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23ABB1B6&SearchFieldBackgroundColor=%23FDF6E4&IndicatorColor=%23F3ECDB&ButtonIconColor=%23657B83&ButtonNormalColor=%23657B83&ButtonNormal2Color=%23657B83&ButtonNormal3Color=%23ABB1B6&ButtonHighlightedColor=%23FDF6E4&ButtonHighlighted2Color=%23FDF6E4&ButtonHighlighted3Color=%23657B83&ButtonDisabledColor=%23657B83&ButtonDisabled2Color=%23FDF6E4&PingSuccessTextColor=%23339918&PingTimeoutTextColor=%23FD691D&DefaultDotColor=%23FD691D&HUDBackgroundColor=%23F3ECDB&v=1.0
> ```

------

#### [Shadowrocket LightOwl](#shadowrocket-原创配色)
> `鸮腹色` <sup> `亮底色` <sup>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%23FBFBFB&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23403F52)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=LightOwl18 "亮底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%23FBFBFB&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23403F52)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=LightOwl26 "亮底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/LightOwl.PNG" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FCFBFBFB&NavigationBar2Color=%23FBFBFB&NavigationBarTextColor=%23403F52&NavigationBar2TextColor=%23403F52&TabBarColor=%23FBFBFB&TabBarBorderColor=%23FBFBFB&TabBarSelectedColor=%23403F52&TabBarUnselectedColor=%2366403F52&TableBackgroundColor=%23FBFBFB&TableCellBackgroundColor=%23EFF1F2&TableCellSelectedBackgroundColor=%23FBFBFB&TableSeparatorColor=%23FBFBFB&TextFieldTextColor=%23403F52&PlaceholderColor=%2366403F52&TextLabelTextColor=%23403F52&DetailLabelTextColor=%2390A7B1&TextLabelDeleteColor=%23D15499&HeaderFooterTextColor=%2390A7B1&SearchFieldBackgroundColor=%23FBFBFB&IndicatorColor=%2390A7B1&ButtonIconColor=%23403F52&ButtonNormalColor=%23403F52&ButtonNormal2Color=%23403F52&ButtonNormal3Color=%23403F52&ButtonHighlightedColor=%23FBFBFB&ButtonHighlighted2Color=%23FBFBFB&ButtonHighlighted3Color=%23FBFBFB&ButtonDisabledColor=%23FBFBFB&ButtonDisabled2Color=%23FBFBFB&PingSuccessTextColor=%2352eeb9&PingTimeoutTextColor=%23D15499&DefaultDotColor=%2352eeb9&HUDBackgroundColor=%23FBFBFB&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%2300FFFFFF&NavigationBarTextColor=%23403F52&NavigationBar2TextColor=%23403F52&TabBarColor=%2300FFFFFF&TabBarBorderColor=%23FBFBFB&TabBarSelectedColor=%23403F52&TabBarUnselectedColor=%2366403F52&TableBackgroundColor=%23FBFBFB&TableCellBackgroundColor=%23EFF1F2&TableCellSelectedBackgroundColor=%23FBFBFB&TableSeparatorColor=%23FBFBFB&TextFieldTextColor=%23403F52&PlaceholderColor=%2366403F52&TextLabelTextColor=%23403F52&DetailLabelTextColor=%2390A7B1&TextLabelDeleteColor=%23D15499&HeaderFooterTextColor=%2390A7B1&SearchFieldBackgroundColor=%23FBFBFB&IndicatorColor=%2390A7B1&ButtonIconColor=%23403F52&ButtonNormalColor=%23403F52&ButtonNormal2Color=%23403F52&ButtonNormal3Color=%23403F52&ButtonHighlightedColor=%23FBFBFB&ButtonHighlighted2Color=%23FBFBFB&ButtonHighlighted3Color=%23FBFBFB&ButtonDisabledColor=%23FBFBFB&ButtonDisabled2Color=%23FBFBFB&PingSuccessTextColor=%2352EEB9&PingTimeoutTextColor=%23D15499&DefaultDotColor=%2352EEB9&HUDBackgroundColor=%23FBFBFB&v=1.0
> ```

------

#### [Shadowrocket SnowTop](#shadowrocket-原创配色)
> `雪顶色` <sup> `亮底色` <sup>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%23E5E6EC&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%234C4F68)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=SnowTop18 "亮底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%23E5E6EC&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%234C4F68)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=SnowTop26 "亮底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/SnowTop.PNG" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FCE5E6EC&NavigationBar2Color=%23E5E6EC&NavigationBarTextColor=%234C4F68&NavigationBar2TextColor=%234C4F68&TabBarColor=%23E5E6EC&TabBarBorderColor=%23E5E6EC&TabBarSelectedColor=%234C4F68&TabBarUnselectedColor=%237F4C4F68&TableBackgroundColor=%23EFF1F5&TableCellBackgroundColor=%23E5E6EC&TableCellSelectedBackgroundColor=%23EFF1F5&TableSeparatorColor=%23FAFAFA&TextFieldTextColor=%234C4F68&PlaceholderColor=%237F4C4F68&TextLabelTextColor=%234C4F68&DetailLabelTextColor=%23858A9B&TextLabelDeleteColor=%23DB8A7A&HeaderFooterTextColor=%23858A9B&SearchFieldBackgroundColor=%23F5F5F5&IndicatorColor=%23FAFAFA&ButtonIconColor=%234C4F68&ButtonNormalColor=%234C4F68&ButtonNormal2Color=%234C4F68&ButtonNormal3Color=%23858A9B&ButtonHighlightedColor=%23FAFAFA&ButtonHighlighted2Color=%23FAFAFA&ButtonHighlighted3Color=%234C4F68&ButtonDisabledColor=%234C4F68&ButtonDisabled2Color=%23FAFAFA&PingSuccessTextColor=%23D15499&PingTimeoutTextColor=%23DB8A7A&DefaultDotColor=%23DB8A7A&HUDBackgroundColor=%23FFFFFF&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%2300FFFFFF&NavigationBarTextColor=%234C4F68&NavigationBar2TextColor=%234C4F68&TabBarColor=%2300FFFFFF&TabBarBorderColor=%23E5E6EC&TabBarSelectedColor=%234C4F68&TabBarUnselectedColor=%237F4C4F68&TableBackgroundColor=%23EFF1F5&TableCellBackgroundColor=%23E5E6EC&TableCellSelectedBackgroundColor=%23EFF1F5&TableSeparatorColor=%23FAFAFA&TextFieldTextColor=%234C4F68&PlaceholderColor=%237F4C4F68&TextLabelTextColor=%234C4F68&DetailLabelTextColor=%23858A9B&TextLabelDeleteColor=%23DB8A7A&HeaderFooterTextColor=%23858A9B&SearchFieldBackgroundColor=%23F5F5F5&IndicatorColor=%23FAFAFA&ButtonIconColor=%234C4F68&ButtonNormalColor=%234C4F68&ButtonNormal2Color=%234C4F68&ButtonNormal3Color=%23858A9B&ButtonHighlightedColor=%23FAFAFA&ButtonHighlighted2Color=%23FAFAFA&ButtonHighlighted3Color=%234C4F68&ButtonDisabledColor=%234C4F68&ButtonDisabled2Color=%23FAFAFA&PingSuccessTextColor=%23D15499&PingTimeoutTextColor=%23DB8A7A&DefaultDotColor=%23DB8A7A&HUDBackgroundColor=%23FFFFFF&v=1.0
> ```

------

#### [Shadowrocket RomeDay](#shadowrocket-原创配色)
> `假日色` <sup> `亮底色` <sup>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%23F5E8E7&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23622229)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=RomeDay18 "亮底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%23F5E8E7&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23622229)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=RomeDay26 "亮底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/RomeDay.PNG" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FCF5E8E7&NavigationBar2Color=%23F5E8E7&NavigationBarTextColor=%23622229&NavigationBar2TextColor=%23622229&TabBarColor=%23F5E8E7&TabBarBorderColor=%23F5E8E7&TabBarSelectedColor=%23622229&TabBarUnselectedColor=%2367622229&TableBackgroundColor=%23F5E8E7&TableCellBackgroundColor=%23EEE0DF&TableCellSelectedBackgroundColor=%23F5E8E7&TableSeparatorColor=%23F5E8E7&TextFieldTextColor=%23622229&PlaceholderColor=%2367622229&TextLabelTextColor=%23622229&DetailLabelTextColor=%23AB8587&TextLabelDeleteColor=%23D15499&HeaderFooterTextColor=%23AB8587&SearchFieldBackgroundColor=%23EEE0DF&IndicatorColor=%23AB8587&ButtonIconColor=%23622229&ButtonNormalColor=%23622229&ButtonNormal2Color=%23622229&ButtonNormal3Color=%23622229&ButtonHighlightedColor=%23F5E8E7&ButtonHighlighted2Color=%23F5E8E7&ButtonHighlighted3Color=%23F5E8E7&ButtonDisabledColor=%23F5E8E7&ButtonDisabled2Color=%23F5E8E7&PingSuccessTextColor=%2320817B&PingTimeoutTextColor=%23D15499&DefaultDotColor=%2320817B&HUDBackgroundColor=%23F5E8E7&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%2300FFFFFF&NavigationBarTextColor=%23622229&NavigationBar2TextColor=%23622229&TabBarColor=%2300FFFFFF&TabBarBorderColor=%23F5E8E7&TabBarSelectedColor=%23622229&TabBarUnselectedColor=%2367622229&TableBackgroundColor=%23F5E8E7&TableCellBackgroundColor=%23EEE0DF&TableCellSelectedBackgroundColor=%23F5E8E7&TableSeparatorColor=%23F5E8E7&TextFieldTextColor=%23622229&PlaceholderColor=%2367622229&TextLabelTextColor=%23622229&DetailLabelTextColor=%23AB8587&TextLabelDeleteColor=%23D15499&HeaderFooterTextColor=%23AB8587&SearchFieldBackgroundColor=%23EEE0DF&IndicatorColor=%23AB8587&ButtonIconColor=%23622229&ButtonNormalColor=%23622229&ButtonNormal2Color=%23622229&ButtonNormal3Color=%23622229&ButtonHighlightedColor=%23F5E8E7&ButtonHighlighted2Color=%23F5E8E7&ButtonHighlighted3Color=%23F5E8E7&ButtonDisabledColor=%23F5E8E7&ButtonDisabled2Color=%23F5E8E7&PingSuccessTextColor=%2320817B&PingTimeoutTextColor=%23D15499&DefaultDotColor=%2320817B&HUDBackgroundColor=%23F5E8E7&v=1.0
> ```

------

#### [Shadowrocket PeachFresh](#shadowrocket-原创配色)
> `鲜桃色` <sup> `亮底色` <sup>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%23F4C1A0&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23510603)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Peach18 "亮底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%23F4C1A0&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23510603)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Peach26 "亮底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/Peach.PNG" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FCF4C1A0&NavigationBar2Color=%23F4C1A0&NavigationBarTextColor=%23510603&NavigationBar2TextColor=%23510603&TabBarColor=%23F4C1A0&TabBarBorderColor=%23F4C1A0&TabBarSelectedColor=%23510603&TabBarUnselectedColor=%2366510603&TableBackgroundColor=%23F4C1A0&TableCellBackgroundColor=%23E9B898&TableCellSelectedBackgroundColor=%23F4C1A0&TableSeparatorColor=%23F4C1A0&TextFieldTextColor=%23510603&PlaceholderColor=%2366510603&TextLabelTextColor=%23510603&DetailLabelTextColor=%23896852&TextLabelDeleteColor=%23B2390F&HeaderFooterTextColor=%23896852&SearchFieldBackgroundColor=%23E9B898&IndicatorColor=%23896852&ButtonIconColor=%23510603&ButtonNormalColor=%23510603&ButtonNormal2Color=%23510603&ButtonNormal3Color=%23510603&ButtonHighlightedColor=%23F4C1A0&ButtonHighlighted2Color=%23F4C1A0&ButtonHighlighted3Color=%23F4C1A0&ButtonDisabledColor=%23F4C1A0&ButtonDisabled2Color=%23F4C1A0&PingSuccessTextColor=%2366A06C&PingTimeoutTextColor=%23B2390F&DefaultDotColor=%23B2390F&HUDBackgroundColor=%23F4C1A0&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%2300FFFFFF&NavigationBarTextColor=%23510603&NavigationBar2TextColor=%23510603&TabBarColor=%2300FFFFFF&TabBarBorderColor=%23F4C1A0&TabBarSelectedColor=%23510603&TabBarUnselectedColor=%2366510603&TableBackgroundColor=%23F4C1A0&TableCellBackgroundColor=%23E9B898&TableCellSelectedBackgroundColor=%23F4C1A0&TableSeparatorColor=%23F4C1A0&TextFieldTextColor=%23510603&PlaceholderColor=%2366510603&TextLabelTextColor=%23510603&DetailLabelTextColor=%23896852&TextLabelDeleteColor=%23B2390F&HeaderFooterTextColor=%23896852&SearchFieldBackgroundColor=%23E9B898&IndicatorColor=%23896852&ButtonIconColor=%23510603&ButtonNormalColor=%23510603&ButtonNormal2Color=%23510603&ButtonNormal3Color=%23510603&ButtonHighlightedColor=%23F4C1A0&ButtonHighlighted2Color=%23F4C1A0&ButtonHighlighted3Color=%23F4C1A0&ButtonDisabledColor=%23F4C1A0&ButtonDisabled2Color=%23F4C1A0&PingSuccessTextColor=%2366A06C&PingTimeoutTextColor=%23B2390F&DefaultDotColor=%23B2390F&HUDBackgroundColor=%23F4C1A0&v=1.0
> ```

------

#### [Shadowrocket LightBlue](#shadowrocket-原创配色)
> `远峰蓝` <sup> `亮底色` <sup>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%23F0F3FA&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23395886)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=LightBlue18 "亮底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%23F0F3FA&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23395886)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=LightBlue26 "亮底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/LightBlue.PNG" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FCF0F3FA&NavigationBar2Color=%23F0F3FA&NavigationBarTextColor=%23395886&NavigationBar2TextColor=%23395886&TabBarColor=%23F0F3FA&TabBarBorderColor=%23F0F3FA&TabBarSelectedColor=%23395886&TabBarUnselectedColor=%2366395886&TableBackgroundColor=%23F0F3FA&TableCellBackgroundColor=%23D5DEEF&TableCellSelectedBackgroundColor=%23F0F3FA&TableSeparatorColor=%23F0F3FA&TextFieldTextColor=%23395886&PlaceholderColor=%2366395886&TextLabelTextColor=%23395886&DetailLabelTextColor=%23628ECB&TextLabelDeleteColor=%23B2390F&HeaderFooterTextColor=%23628ECB&SearchFieldBackgroundColor=%23F0F3FA&IndicatorColor=%23628ECB&ButtonIconColor=%23395886&ButtonNormalColor=%23395886&ButtonNormal2Color=%23395886&ButtonNormal3Color=%23395886&ButtonHighlightedColor=%23F0F3FA&ButtonHighlighted2Color=%23F0F3FA&ButtonHighlighted3Color=%23F0F3FA&ButtonDisabledColor=%23F0F3FA&ButtonDisabled2Color=%23F0F3FA&PingSuccessTextColor=%2366A06C&PingTimeoutTextColor=%23B2390F&DefaultDotColor=%23395886&HUDBackgroundColor=%23F0F3FA&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%2300FFFFFF&NavigationBarTextColor=%23395886&NavigationBar2TextColor=%23395886&TabBarColor=%2300FFFFFF&TabBarBorderColor=%23F0F3FA&TabBarSelectedColor=%23395886&TabBarUnselectedColor=%2366395886&TableBackgroundColor=%23F0F3FA&TableCellBackgroundColor=%23D5DEEF&TableCellSelectedBackgroundColor=%23F0F3FA&TableSeparatorColor=%23F0F3FA&TextFieldTextColor=%23395886&PlaceholderColor=%2366395886&TextLabelTextColor=%23395886&DetailLabelTextColor=%23628ECB&TextLabelDeleteColor=%23B2390F&HeaderFooterTextColor=%23628ECB&SearchFieldBackgroundColor=%23F0F3FA&IndicatorColor=%23628ECB&ButtonIconColor=%23395886&ButtonNormalColor=%23395886&ButtonNormal2Color=%23395886&ButtonNormal3Color=%23395886&ButtonHighlightedColor=%23F0F3FA&ButtonHighlighted2Color=%23F0F3FA&ButtonHighlighted3Color=%23F0F3FA&ButtonDisabledColor=%23F0F3FA&ButtonDisabled2Color=%23F0F3FA&PingSuccessTextColor=%2366A06C&PingTimeoutTextColor=%23B2390F&DefaultDotColor=%23395886&HUDBackgroundColor=%23F0F3FA&v=1.0
> ```

------

#### [Shadowrocket EpicDark](#shadowrocket-原创配色)
> `Epic 暗夜` <sub> `暗底色` <sub>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%23343338&logo=renovate&logoColor=white&labelColor=gray&messageColor=%2380BAFF)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=EpicDark18 "暗底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%23343338&logo=renovate&logoColor=white&labelColor=gray&messageColor=%2380BAFF)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=EpicDark26 "暗底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/EpicDark.PNG" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FC202024&NavigationBar2Color=%23202024&NavigationBarTextColor=%23CCCCCC&NavigationBar2TextColor=%23CCCCCC&TabBarColor=%23202024&TabBarBorderColor=%23202024&TabBarSelectedColor=%23CCCCCC&TabBarUnselectedColor=%23646464&TableBackgroundColor=%23202024&TableCellBackgroundColor=%23343338&TableCellSelectedBackgroundColor=%23202024&TableSeparatorColor=%23202024&TextFieldTextColor=%23CCCCCC&PlaceholderColor=%23646464&TextLabelTextColor=%23CCCCCC&DetailLabelTextColor=%23646464&TextLabelDeleteColor=%23E8886D&HeaderFooterTextColor=%23646464&SearchFieldBackgroundColor=%23343338&IndicatorColor=%23CCCCCC&ButtonIconColor=%239F9FA1&ButtonNormalColor=%239F9FA1&ButtonNormal2Color=%239F9FA1&ButtonNormal3Color=%23646464&ButtonHighlightedColor=%23CCCCCC&ButtonHighlighted2Color=%23CCCCCC&ButtonHighlighted3Color=%23202024&ButtonDisabledColor=%23202024&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2326BBFF&PingTimeoutTextColor=%23E8886D&DefaultDotColor=%2326BBFF&HUDBackgroundColor=%23343338&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%2300FFFFFF&NavigationBarTextColor=%23CCCCCC&NavigationBar2TextColor=%23CCCCCC&TabBarColor=%2300FFFFFF&TabBarBorderColor=%23202024&TabBarSelectedColor=%23CCCCCC&TabBarUnselectedColor=%23646464&TableBackgroundColor=%23202024&TableCellBackgroundColor=%23343338&TableCellSelectedBackgroundColor=%23202024&TableSeparatorColor=%23202024&TextFieldTextColor=%23CCCCCC&PlaceholderColor=%23646464&TextLabelTextColor=%23CCCCCC&DetailLabelTextColor=%23646464&TextLabelDeleteColor=%23E8886D&HeaderFooterTextColor=%23646464&SearchFieldBackgroundColor=%23343338&IndicatorColor=%23CCCCCC&ButtonIconColor=%239F9FA1&ButtonNormalColor=%239F9FA1&ButtonNormal2Color=%239F9FA1&ButtonNormal3Color=%23646464&ButtonHighlightedColor=%23CCCCCC&ButtonHighlighted2Color=%23CCCCCC&ButtonHighlighted3Color=%23202024&ButtonDisabledColor=%23202024&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2326BBFF&PingTimeoutTextColor=%23E8886D&DefaultDotColor=%2326BBFF&HUDBackgroundColor=%23343338&v=1.0
> ```

------

#### [Shadowrocket V2EXNight](#shadowrocket-原创配色)
> `V2EX 暗夜` <sub> `暗底色` <sub>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%2318222D&logo=renovate&logoColor=white&labelColor=gray&messageColor=%23F0C38E)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=V2EXNight18 "暗底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%2318222D&logo=renovate&logoColor=white&labelColor=gray&messageColor=%23F0C38E)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=V2EXNight26 "暗底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/V2EXNIGHT.PNG" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FC18222D&NavigationBar2Color=%2318222D&NavigationBarTextColor=%239CAEC7&NavigationBar2TextColor=%239CAEC7&TabBarColor=%2318222D&TabBarBorderColor=%2318222D&TabBarSelectedColor=%239CAEC7&TabBarUnselectedColor=%23669CAEC7&TableBackgroundColor=%2322303F&TableCellBackgroundColor=%2318222D&TableCellSelectedBackgroundColor=%2322303F&TableSeparatorColor=%2322303F&TextFieldTextColor=%239CAEC7&PlaceholderColor=%23669CAEC7&TextLabelTextColor=%239CAEC7&DetailLabelTextColor=%23738292&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23738292&SearchFieldBackgroundColor=%2318222D&IndicatorColor=%239CAEC7&ButtonIconColor=%239CAEC7&ButtonNormalColor=%239CAEC7&ButtonNormal2Color=%239CAEC7&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%239CAEC7&HUDBackgroundColor=%2322303F&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%2300FFFFFF&NavigationBarTextColor=%239CAEC7&NavigationBar2TextColor=%239CAEC7&TabBarColor=%2300FFFFFF&TabBarBorderColor=%2300FFFFFF&TabBarSelectedColor=%239CAEC7&TabBarUnselectedColor=%23669CAEC7&TableBackgroundColor=%2322303F&TableCellBackgroundColor=%2318222D&TableCellSelectedBackgroundColor=%2322303F&TableSeparatorColor=%2322303F&TextFieldTextColor=%239CAEC7&PlaceholderColor=%23669CAEC7&TextLabelTextColor=%239CAEC7&DetailLabelTextColor=%23738292&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23738292&SearchFieldBackgroundColor=%2318222D&IndicatorColor=%239CAEC7&ButtonIconColor=%239CAEC7&ButtonNormalColor=%239CAEC7&ButtonNormal2Color=%239CAEC7&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%239CAEC7&HUDBackgroundColor=%2322303F&v=1.0
> ```

------

#### [Shadowrocket GitHubDark](#shadowrocket-原创配色)
> `GitHub 暗夜` <sub> `暗底色` <sub>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%2322282F&logo=renovate&logoColor=white&labelColor=gray&messageColor=%23F0C38E)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=GitHubDark18 "暗底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%2322282F&logo=renovate&logoColor=white&labelColor=gray&messageColor=%23F0C38E)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=GitHubDark26 "暗底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/GitHubDark.PNG" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FC161B22&NavigationBar2Color=%23161B22&NavigationBarTextColor=%23F2F7FC&NavigationBar2TextColor=%23F2F7FC&TabBarColor=%23161B22&TabBarBorderColor=%23161B22&TabBarSelectedColor=%23F2F7FC&TabBarUnselectedColor=%23959BA4&TableBackgroundColor=%23161B22&TableCellBackgroundColor=%2322282F&TableCellSelectedBackgroundColor=%23161B22&TableSeparatorColor=%23161B22&TextFieldTextColor=%23F2F7FC&PlaceholderColor=%23959BA4&TextLabelTextColor=%23F2F7FC&DetailLabelTextColor=%23959BA4&TextLabelDeleteColor=%23E8886D&HeaderFooterTextColor=%23959BA4&SearchFieldBackgroundColor=%2322282F&IndicatorColor=%23F2F7FC&ButtonIconColor=%23959BA4&ButtonNormalColor=%23959BA4&ButtonNormal2Color=%23959BA4&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23161B22&ButtonDisabledColor=%23161B22&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23E8886D&DefaultDotColor=%23DBB556&HUDBackgroundColor=%2322282F&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%2300FFFFFF&NavigationBarTextColor=%23F2F7FC&NavigationBar2TextColor=%23F2F7FC&TabBarColor=%2300FFFFFF&TabBarBorderColor=%2300FFFFFF&TabBarSelectedColor=%23F2F7FC&TabBarUnselectedColor=%23959BA4&TableBackgroundColor=%23161B22&TableCellBackgroundColor=%2322282F&TableCellSelectedBackgroundColor=%23161B22&TableSeparatorColor=%23161B22&TextFieldTextColor=%23F2F7FC&PlaceholderColor=%23959BA4&TextLabelTextColor=%23F2F7FC&DetailLabelTextColor=%23959BA4&TextLabelDeleteColor=%23E8886D&HeaderFooterTextColor=%23959BA4&SearchFieldBackgroundColor=%2322282F&IndicatorColor=%23F2F7FC&ButtonIconColor=%23959BA4&ButtonNormalColor=%23959BA4&ButtonNormal2Color=%23959BA4&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23161B22&ButtonDisabledColor=%23161B22&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23E8886D&DefaultDotColor=%23DBB556&HUDBackgroundColor=%2322282F&v=1.0
> ```

------

#### [Shadowrocket KanagawaWave](#shadowrocket-原创配色)
> `神奈川夜` <sub> `暗底色` <sub>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%2336363E&logo=renovate&logoColor=white&labelColor=gray&messageColor=%23F0C38E)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=KanagawaWave18 "暗底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%2336363E&logo=renovate&logoColor=white&labelColor=gray&messageColor=%23F0C38E)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=KanagawaWave26 "暗底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/KanagawaWave.PNG" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FC1F1F28&NavigationBar2Color=%231F1F28&NavigationBarTextColor=%23D2CDB2&NavigationBar2TextColor=%23D2CDB2&TabBarColor=%231F1F28&TabBarBorderColor=%231F1F28&TabBarSelectedColor=%23D2CDB2&TabBarUnselectedColor=%2366D2CDB2&TableBackgroundColor=%231F1F28&TableCellBackgroundColor=%2336363E&TableCellSelectedBackgroundColor=%231F1F28&TableSeparatorColor=%231F1F28&TextFieldTextColor=%23D2CDB2&PlaceholderColor=%2366D2CDB2&TextLabelTextColor=%23D2CDB2&DetailLabelTextColor=%2377787D&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%2377787D&SearchFieldBackgroundColor=%2336363E&IndicatorColor=%23D2CDB2&ButtonIconColor=%23D2CDB2&ButtonNormalColor=%23D2CDB2&ButtonNormal2Color=%23D2CDB2&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23D2CDB2&HUDBackgroundColor=%2327282B&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%2300FFFFFF&NavigationBarTextColor=%23D2CDB2&NavigationBar2TextColor=%23D2CDB2&TabBarColor=%2300FFFFFF&TabBarBorderColor=%2300FFFFFF&TabBarSelectedColor=%23D2CDB2&TabBarUnselectedColor=%2366D2CDB2&TableBackgroundColor=%231F1F28&TableCellBackgroundColor=%2336363E&TableCellSelectedBackgroundColor=%231F1F28&TableSeparatorColor=%231F1F28&TextFieldTextColor=%23D2CDB2&PlaceholderColor=%2366D2CDB2&TextLabelTextColor=%23D2CDB2&DetailLabelTextColor=%2377787D&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%2377787D&SearchFieldBackgroundColor=%2336363E&IndicatorColor=%23D2CDB2&ButtonIconColor=%23D2CDB2&ButtonNormalColor=%23D2CDB2&ButtonNormal2Color=%23D2CDB2&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23D2CDB2&HUDBackgroundColor=%2327282B&v=1.0
> ```

------

#### [Shadowrocket KanagawaGray](#shadowrocket-原创配色)
> `神奈川灰` <sub> `暗底色` <sub>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%2336363E&logo=renovate&logoColor=white&labelColor=gray&messageColor=%23F0C38E)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=KanagawaGray18 "暗底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%2336363E&logo=renovate&logoColor=white&labelColor=gray&messageColor=%23F0C38E)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=KanagawaGray26 "暗底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/KanagawaGray.PNG" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FC2A2B32&NavigationBar2Color=%232A2B32&NavigationBarTextColor=%23D2CDB2&NavigationBar2TextColor=%23D2CDB2&TabBarColor=%232A2B32&TabBarBorderColor=%232A2B32&TabBarSelectedColor=%23D2CDB2&TabBarUnselectedColor=%2366D2CDB2&TableBackgroundColor=%232A2B32&TableCellBackgroundColor=%2336363E&TableCellSelectedBackgroundColor=%232A2B32&TableSeparatorColor=%232A2B32&TextFieldTextColor=%23D2CDB2&PlaceholderColor=%2366D2CDB2&TextLabelTextColor=%23D2CDB2&DetailLabelTextColor=%2377787D&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%2377787D&SearchFieldBackgroundColor=%2336363E&IndicatorColor=%23D2CDB2&ButtonIconColor=%23D2CDB2&ButtonNormalColor=%23D2CDB2&ButtonNormal2Color=%23D2CDB2&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23D2CDB2&HUDBackgroundColor=%232A2B32&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%2300FFFFFF&NavigationBarTextColor=%23D2CDB2&NavigationBar2TextColor=%23D2CDB2&TabBarColor=%2300FFFFFF&TabBarBorderColor=%2300FFFFFF&TabBarSelectedColor=%23D2CDB2&TabBarUnselectedColor=%2366D2CDB2&TableBackgroundColor=%232A2B32&TableCellBackgroundColor=%2336363E&TableCellSelectedBackgroundColor=%232A2B32&TableSeparatorColor=%232A2B32&TextFieldTextColor=%23D2CDB2&PlaceholderColor=%2366D2CDB2&TextLabelTextColor=%23D2CDB2&DetailLabelTextColor=%2377787D&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%2377787D&SearchFieldBackgroundColor=%2336363E&IndicatorColor=%23D2CDB2&ButtonIconColor=%23D2CDB2&ButtonNormalColor=%23D2CDB2&ButtonNormal2Color=%23D2CDB2&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23D2CDB2&HUDBackgroundColor=%232A2B32&v=1.0
> ```

------
#### [Shadowrocket Chrome](#shadowrocket-原创配色)
> `金属灰` <sub> `暗底色` <sub>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%2380BAFF&logo=renovate&logoColor=white&labelColor=gray&messageColor=%2380BAFF)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Chrome18 "暗底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%2380BAFF&logo=renovate&logoColor=white&labelColor=gray&messageColor=%2380BAFF)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Chrome26 "暗底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/03Chrome.png" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FC27282B&NavigationBar2Color=%2327282B&NavigationBarTextColor=%23FFFFFF&NavigationBar2TextColor=%23FFFFFF&TabBarColor=%2327282B&TabBarBorderColor=%2327282B&TabBarSelectedColor=%2380BAFF&TabBarUnselectedColor=%23B3B3B3&TableBackgroundColor=%2327282B&TableCellBackgroundColor=%2333363B&TableCellSelectedBackgroundColor=%2327282B&TableSeparatorColor=%2345464B&TextFieldTextColor=%23FFFFFF&PlaceholderColor=%23B3B3B3&TextLabelTextColor=%23FFFFFF&DetailLabelTextColor=%2377787D&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%2377787D&SearchFieldBackgroundColor=%2333363B&IndicatorColor=%23FFFFFF&ButtonIconColor=%2380BAFF&ButtonNormalColor=%23FFFFFF&ButtonNormal2Color=%23CCFFFFFF&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2380BAFF&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%2380BAFF&HUDBackgroundColor=%2327282B&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%2300FFFFFF&NavigationBarTextColor=%23FFFFFF&NavigationBar2TextColor=%23FFFFFF&TabBarColor=%2300FFFFFF&TabBarBorderColor=%2327282B&TabBarSelectedColor=%2380BAFF&TabBarUnselectedColor=%23B3B3B3&TableBackgroundColor=%2327282B&TableCellBackgroundColor=%2333363B&TableCellSelectedBackgroundColor=%2327282B&TableSeparatorColor=%2345464B&TextFieldTextColor=%23FFFFFF&PlaceholderColor=%23B3B3B3&TextLabelTextColor=%23FFFFFF&DetailLabelTextColor=%2377787D&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%2377787D&SearchFieldBackgroundColor=%2333363B&IndicatorColor=%23FFFFFF&ButtonIconColor=%2380BAFF&ButtonNormalColor=%23FFFFFF&ButtonNormal2Color=%23CCFFFFFF&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2380BAFF&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%2380BAFF&HUDBackgroundColor=%2327282B&v=1.0
> ```

------

#### [Shadowrocket BlueSky](#shadowrocket-原创配色)
> `深空蓝` <sub> `暗底色` <sub>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%232473BD&logo=renovate&logoColor=white&labelColor=gray&messageColor=%23ADBBC8)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=BlueSky18 "暗底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%232473BD&logo=renovate&logoColor=white&labelColor=gray&messageColor=%23ADBBC8)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=BlueSky26 "暗底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/04BlueSky.png" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FC181E26&NavigationBar2Color=%23181E26&NavigationBarTextColor=%23ADBBC8&NavigationBar2TextColor=%232473BD&TabBarColor=%23181E26&TabBarBorderColor=%2300000000&TabBarSelectedColor=%232473BD&TabBarUnselectedColor=%23ADBBC8&TableBackgroundColor=%23181E26&TableCellBackgroundColor=%23202935&TableCellSelectedBackgroundColor=%23181E26&TableSeparatorColor=%23181E26&TextFieldTextColor=%23ADBBC8&PlaceholderColor=%23ADBBC8&TextLabelTextColor=%23ADBBC8&DetailLabelTextColor=%234F6077&TextLabelDeleteColor=%232473BD&HeaderFooterTextColor=%234F6077&SearchFieldBackgroundColor=%23202935&IndicatorColor=%23ADBBC8&ButtonIconColor=%232473BD&ButtonNormalColor=%23ADBBC8&ButtonNormal2Color=%23ADBBC8&ButtonNormal3Color=%23ADBBC8&ButtonHighlightedColor=%23ADBBC8&ButtonHighlighted2Color=%23ADBBC8&ButtonHighlighted3Color=%23202935&ButtonDisabledColor=%23ADBBC8&ButtonDisabled2Color=%23ADBBC8&PingSuccessTextColor=%232473BD&PingTimeoutTextColor=%234F6077&DefaultDotColor=%232473BD&HUDBackgroundColor=%23202935&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%2300FFFFFF&NavigationBarTextColor=%23ADBBC8&NavigationBar2TextColor=%232473BD&TabBarColor=%2300FFFFFF&TabBarBorderColor=%2300000000&TabBarSelectedColor=%232473BD&TabBarUnselectedColor=%23ADBBC8&TableBackgroundColor=%23181E26&TableCellBackgroundColor=%23202935&TableCellSelectedBackgroundColor=%23181E26&TableSeparatorColor=%23181E26&TextFieldTextColor=%23ADBBC8&PlaceholderColor=%23ADBBC8&TextLabelTextColor=%23ADBBC8&DetailLabelTextColor=%234F6077&TextLabelDeleteColor=%232473BD&HeaderFooterTextColor=%234F6077&SearchFieldBackgroundColor=%23202935&IndicatorColor=%23ADBBC8&ButtonIconColor=%232473BD&ButtonNormalColor=%23ADBBC8&ButtonNormal2Color=%23ADBBC8&ButtonNormal3Color=%23ADBBC8&ButtonHighlightedColor=%23ADBBC8&ButtonHighlighted2Color=%23ADBBC8&ButtonHighlighted3Color=%23202935&ButtonDisabledColor=%23ADBBC8&ButtonDisabled2Color=%23ADBBC8&PingSuccessTextColor=%232473BD&PingTimeoutTextColor=%234F6077&DefaultDotColor=%232473BD&HUDBackgroundColor=%23202935&v=1.0
> ```

------

#### [Shadowrocket GodenDark](#shadowrocket-原创配色)
> `暗金色` <sub> `暗底色` <sub>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%23D4A763&logo=renovate&logoColor=white&labelColor=gray&messageColor=grey)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=GodenDark18 "暗底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%23D4A763&logo=renovate&logoColor=white&labelColor=gray&messageColor=grey)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=GodenDark26 "暗底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/05GodenDark.png" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FC2C2B31&NavigationBar2Color=%232C2B31&NavigationBarTextColor=%23D4A763&NavigationBar2TextColor=%23D4A763&TabBarColor=%232C2B31&TabBarBorderColor=%232C2B31&TabBarSelectedColor=%23D4A763&TabBarUnselectedColor=%23D1C0A2&TableBackgroundColor=%232C2B31&TableCellBackgroundColor=%2338373D&TableCellSelectedBackgroundColor=%232C2B31&TableSeparatorColor=%232C2B31&TextFieldTextColor=%23D4A763&PlaceholderColor=%23D1C0A2&TextLabelTextColor=%23D4A763&DetailLabelTextColor=%23D1C0A2&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23D1C0A2&SearchFieldBackgroundColor=%2338373D&IndicatorColor=%23D1C0A2&ButtonIconColor=%23D4A763&ButtonNormalColor=%23D4A763&ButtonNormal2Color=%23D4A763&ButtonNormal3Color=%23D4A763&ButtonHighlightedColor=%23FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23FFFFFF&ButtonDisabledColor=%23FFFFFF&ButtonDisabled2Color=%23FFFFFF&PingSuccessTextColor=%23D1C0A2&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23D1C0A2&HUDBackgroundColor=%2338373D&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%2300FFFFFF&NavigationBarTextColor=%23D4A763&NavigationBar2TextColor=%23D4A763&TabBarColor=%2300FFFFFF&TabBarBorderColor=%232C2B31&TabBarSelectedColor=%23D4A763&TabBarUnselectedColor=%23D1C0A2&TableBackgroundColor=%232C2B31&TableCellBackgroundColor=%2338373D&TableCellSelectedBackgroundColor=%232C2B31&TableSeparatorColor=%232C2B31&TextFieldTextColor=%23D4A763&PlaceholderColor=%23D1C0A2&TextLabelTextColor=%23D4A763&DetailLabelTextColor=%23D1C0A2&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23D1C0A2&SearchFieldBackgroundColor=%2338373D&IndicatorColor=%23D1C0A2&ButtonIconColor=%23D4A763&ButtonNormalColor=%23D4A763&ButtonNormal2Color=%23D4A763&ButtonNormal3Color=%23D4A763&ButtonHighlightedColor=%23FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23FFFFFF&ButtonDisabledColor=%23FFFFFF&ButtonDisabled2Color=%23FFFFFF&PingSuccessTextColor=%23D1C0A2&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23D1C0A2&HUDBackgroundColor=%2338373D&v=1.0
> ```

------

#### [Shadowrocket Fluoresce](#shadowrocket-原创配色)
> `荧光色` <sub> `暗底色` <sub>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%23B4FE5F&logo=renovate&logoColor=white&labelColor=gray&messageColor=grey)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Fluoresce18 "暗底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%23B4FE5F&logo=renovate&logoColor=white&labelColor=gray&messageColor=grey)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Fluoresce26 "暗底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/06Fluoresce.png" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FC2C2B31&NavigationBar2Color=%232C2B31&NavigationBarTextColor=%23B4FE5F&NavigationBar2TextColor=%23B4FE5F&TabBarColor=%232C2B31&TabBarBorderColor=%232C2B31&TabBarSelectedColor=%23B4FE5F&TabBarUnselectedColor=%234E7A27&TableBackgroundColor=%232C2B31&TableCellBackgroundColor=%2338373D&TableCellSelectedBackgroundColor=%232C2B31&TableSeparatorColor=%232C2B31&TextFieldTextColor=%23B4FE5F&PlaceholderColor=%234E7A27&TextLabelTextColor=%23B4FE5F&DetailLabelTextColor=%234E7A27&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%234E7A27&SearchFieldBackgroundColor=%2338373D&IndicatorColor=%234E7A27&ButtonIconColor=%23B4FE5F&ButtonNormalColor=%23B4FE5F&ButtonNormal2Color=%23B4FE5F&ButtonNormal3Color=%23B4FE5F&ButtonHighlightedColor=%23FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23FFFFFF&ButtonDisabledColor=%23FFFFFF&ButtonDisabled2Color=%23FFFFFF&PingSuccessTextColor=%23B4FE5F&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23B4FE5F&HUDBackgroundColor=%2338373D&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%2300FFFFFF&NavigationBarTextColor=%23B4FE5F&NavigationBar2TextColor=%23B4FE5F&TabBarColor=%2300FFFFFF&TabBarBorderColor=%232C2B31&TabBarSelectedColor=%23B4FE5F&TabBarUnselectedColor=%234E7A27&TableBackgroundColor=%232C2B31&TableCellBackgroundColor=%2338373D&TableCellSelectedBackgroundColor=%232C2B31&TableSeparatorColor=%232C2B31&TextFieldTextColor=%23B4FE5F&PlaceholderColor=%234E7A27&TextLabelTextColor=%23B4FE5F&DetailLabelTextColor=%234E7A27&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%234E7A27&SearchFieldBackgroundColor=%2338373D&IndicatorColor=%234E7A27&ButtonIconColor=%23B4FE5F&ButtonNormalColor=%23B4FE5F&ButtonNormal2Color=%23B4FE5F&ButtonNormal3Color=%23B4FE5F&ButtonHighlightedColor=%23FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23FFFFFF&ButtonDisabledColor=%23FFFFFF&ButtonDisabled2Color=%23FFFFFF&PingSuccessTextColor=%23B4FE5F&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23B4FE5F&HUDBackgroundColor=%2338373D&v=1.0
> ```

------

#### [Shadowrocket TermiusDark](#shadowrocket-原创配色)
> `终端绿` <sub> `暗底色` <sub>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%2321B869&logo=renovate&logoColor=white&labelColor=gray&messageColor=%2321B869)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=TermiusDark18 "暗底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%2321B869&logo=renovate&logoColor=white&labelColor=gray&messageColor=%2321B869)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=TermiusDark26 "暗底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/07TermiusDark.png" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FC141729&NavigationBar2Color=%23141729&NavigationBarTextColor=%2321B869&NavigationBar2TextColor=%2321B869&TabBarColor=%23141729&TabBarBorderColor=%23141729&TabBarSelectedColor=%2321B869&TabBarUnselectedColor=%236621B869&TableBackgroundColor=%23141729&TableCellBackgroundColor=%23141729&TableCellSelectedBackgroundColor=%23141729&TableSeparatorColor=%233321B869&TextFieldTextColor=%2321B869&PlaceholderColor=%236621B869&TextLabelTextColor=%2321B869&DetailLabelTextColor=%236621B869&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%236621B869&SearchFieldBackgroundColor=%23141729&IndicatorColor=%2321B869&ButtonIconColor=%2321B869&ButtonNormalColor=%2321B869&ButtonNormal2Color=%2321B869&ButtonNormal3Color=%2321B869&ButtonHighlightedColor=%2321B869&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23FFFFFF&ButtonDisabledColor=%236621B869&ButtonDisabled2Color=%236621B869&PingSuccessTextColor=%2321B869&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%2321B869&HUDBackgroundColor=%233321B869&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%2300FFFFFF&NavigationBarTextColor=%2321B869&NavigationBar2TextColor=%2321B869&TabBarColor=%2300FFFFFF&TabBarBorderColor=%23141729&TabBarSelectedColor=%2321B869&TabBarUnselectedColor=%236621B869&TableBackgroundColor=%23141729&TableCellBackgroundColor=%23141729&TableCellSelectedBackgroundColor=%23141729&TableSeparatorColor=%233321B869&TextFieldTextColor=%2321B869&PlaceholderColor=%236621B869&TextLabelTextColor=%2321B869&DetailLabelTextColor=%236621B869&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%236621B869&SearchFieldBackgroundColor=%23141729&IndicatorColor=%2321B869&ButtonIconColor=%2321B869&ButtonNormalColor=%2321B869&ButtonNormal2Color=%2321B869&ButtonNormal3Color=%2321B869&ButtonHighlightedColor=%2321B869&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23FFFFFF&ButtonDisabledColor=%236621B869&ButtonDisabled2Color=%236621B869&PingSuccessTextColor=%2321B869&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%2321B869&HUDBackgroundColor=%233321B869&v=1.0
> ```

------

#### [Shadowrocket Sunset](#shadowrocket-原创配色)
> `余晖紫` <sub> `暗底色` <sub>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%239B50DC&logo=renovate&logoColor=white&labelColor=gray&messageColor=grey)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Sunset18 "暗底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%239B50DC&logo=renovate&logoColor=white&labelColor=gray&messageColor=grey)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Sunset26 "暗底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/09Sunset.png" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FC30304C&NavigationBar2Color=%2330304C&NavigationBarTextColor=%23FFFFFF&NavigationBar2TextColor=%239B50DC&TabBarColor=%2330304C&TabBarBorderColor=%2300FFFFFF&TabBarSelectedColor=%23FFFFFF&TabBarUnselectedColor=%239B50DC&TableBackgroundColor=%2327273F&TableCellBackgroundColor=%2330304C&TableCellSelectedBackgroundColor=%2327273F&TableSeparatorColor=%2327273F&TextFieldTextColor=%23B3B3B3&PlaceholderColor=%239B50DC&TextLabelTextColor=%23FFFFFF&DetailLabelTextColor=%239B50DC&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%239B50DC&SearchFieldBackgroundColor=%2333363B&IndicatorColor=%23B3B3B3&ButtonIconColor=%239B50DC&ButtonNormalColor=%239B50DC&ButtonNormal2Color=%239B50DC&ButtonNormal3Color=%239B50DC&ButtonHighlightedColor=%23B3B3B3&ButtonHighlighted2Color=%23B3B3B3&ButtonHighlighted3Color=%23B3B3B3&ButtonDisabledColor=%23B3B3B3&ButtonDisabled2Color=%23B3B3B3&PingSuccessTextColor=%23FFFFFF&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%239B50DC&HUDBackgroundColor=%2330304C&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%2300FFFFFF&NavigationBarTextColor=%23FFFFFF&NavigationBar2TextColor=%239B50DC&TabBarColor=%2300FFFFFF&TabBarBorderColor=%2300FFFFFF&TabBarSelectedColor=%23FFFFFF&TabBarUnselectedColor=%239B50DC&TableBackgroundColor=%2327273F&TableCellBackgroundColor=%2330304C&TableCellSelectedBackgroundColor=%2327273F&TableSeparatorColor=%2327273F&TextFieldTextColor=%23B3B3B3&PlaceholderColor=%239B50DC&TextLabelTextColor=%23FFFFFF&DetailLabelTextColor=%239B50DC&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%239B50DC&SearchFieldBackgroundColor=%2333363B&IndicatorColor=%23B3B3B3&ButtonIconColor=%239B50DC&ButtonNormalColor=%239B50DC&ButtonNormal2Color=%239B50DC&ButtonNormal3Color=%239B50DC&ButtonHighlightedColor=%23B3B3B3&ButtonHighlighted2Color=%23B3B3B3&ButtonHighlighted3Color=%23B3B3B3&ButtonDisabledColor=%23B3B3B3&ButtonDisabled2Color=%23B3B3B3&PingSuccessTextColor=%23FFFFFF&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%239B50DC&HUDBackgroundColor=%2330304C&v=1.0
> ```

------

#### [Shadowrocket Rose](#shadowrocket-原创配色)
> `玫瑰红` <sub> `暗底色` <sub>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%23BE1451&logo=renovate&logoColor=white&labelColor=gray&messageColor=grey)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Rose18 "暗底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%23BE1451&logo=renovate&logoColor=white&labelColor=gray&messageColor=grey)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Rose26 "暗底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/10Rose.png" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FC8E0C36&NavigationBar2Color=%238E0C36&NavigationBarTextColor=%23FFFFFF&NavigationBar2TextColor=%23FFFFFF&TabBarColor=%238E0C36&TabBarBorderColor=%238E0C36&TabBarSelectedColor=%23FFFFFF&TabBarUnselectedColor=%23BE1451&TableBackgroundColor=%238E0C36&TableCellBackgroundColor=%23BE1451&TableCellSelectedBackgroundColor=%238E0C36&TableSeparatorColor=%238E0C36&TextFieldTextColor=%23FFFFFF&PlaceholderColor=%23BE1451&TextLabelTextColor=%23FFFFFF&DetailLabelTextColor=%23ADADAD&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23ADADAD&SearchFieldBackgroundColor=%2333363B&IndicatorColor=%23FFFFFF&ButtonIconColor=%23FFFFFF&ButtonNormalColor=%23FFFFFF&ButtonNormal2Color=%238E0C36&ButtonNormal3Color=%238E0C36&ButtonHighlightedColor=%23FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23FFFFFF&ButtonDisabledColor=%23FFFFFF&ButtonDisabled2Color=%23FFFFFF&PingSuccessTextColor=%23FFFFFF&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23FFFFFF&HUDBackgroundColor=%2327282B&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%2300FFFFFF&NavigationBarTextColor=%23FFFFFF&NavigationBar2TextColor=%23FFFFFF&TabBarColor=%2300FFFFFF&TabBarBorderColor=%2300FFFFFF&TabBarSelectedColor=%23FFFFFF&TabBarUnselectedColor=%238E0C36&TableBackgroundColor=%238E0C36&TableCellBackgroundColor=%23BE1451&TableCellSelectedBackgroundColor=%238E0C36&TableSeparatorColor=%238E0C36&TextFieldTextColor=%23FFFFFF&PlaceholderColor=%23BE1451&TextLabelTextColor=%23FFFFFF&DetailLabelTextColor=%23ADADAD&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23ADADAD&SearchFieldBackgroundColor=%2333363B&IndicatorColor=%23FFFFFF&ButtonIconColor=%23FFFFFF&ButtonNormalColor=%23FFFFFF&ButtonNormal2Color=%238E0C36&ButtonNormal3Color=%238E0C36&ButtonHighlightedColor=%23FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23FFFFFF&ButtonDisabledColor=%23FFFFFF&ButtonDisabled2Color=%23FFFFFF&PingSuccessTextColor=%23FFFFFF&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23FFFFFF&HUDBackgroundColor=%2327282B&v=1.0
> ```

------

#### [Shadowrocket Violet](#shadowrocket-原创配色)
> `紫罗兰` <sub> `暗底色` <sub>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%2348426D&logo=renovate&logoColor=white&labelColor=gray&messageColor=%23F0C38E)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Violet18 "暗底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%2348426D&logo=renovate&logoColor=white&labelColor=gray&messageColor=%23F0C38E)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Violet26 "暗底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/Violet.PNG" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FC312C51&NavigationBar2Color=%23312C51&NavigationBarTextColor=%23F0C38E&NavigationBar2TextColor=%23F0C38E&TabBarColor=%23312C51&TabBarBorderColor=%23312C51&TabBarSelectedColor=%23F0C38E&TabBarUnselectedColor=%2367F0C38E&TableBackgroundColor=%2348426D&TableCellBackgroundColor=%23312C51&TableCellSelectedBackgroundColor=%2348426D&TableSeparatorColor=%2348426D&TextFieldTextColor=%23F0C38E&PlaceholderColor=%2367F0C38E&TextLabelTextColor=%23F0C38E&DetailLabelTextColor=%23F1AA9B&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23F1AA9B&SearchFieldBackgroundColor=%23312C51&IndicatorColor=%23F0C38E&ButtonIconColor=%23F0C38E&ButtonNormalColor=%23F0C38E&ButtonNormal2Color=%23F0C38E&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23F0C38E&HUDBackgroundColor=%23312C51&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%2300FFFFFF&NavigationBarTextColor=%23F0C38E&NavigationBar2TextColor=%23F0C38E&TabBarColor=%2300FFFFFF&TabBarBorderColor=%2300FFFFFF&TabBarSelectedColor=%23F0C38E&TabBarUnselectedColor=%2367F0C38E&TableBackgroundColor=%2348426D&TableCellBackgroundColor=%23312C51&TableCellSelectedBackgroundColor=%2348426D&TableSeparatorColor=%2348426D&TextFieldTextColor=%23F0C38E&PlaceholderColor=%2367F0C38E&TextLabelTextColor=%23F0C38E&DetailLabelTextColor=%23F1AA9B&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23F1AA9B&SearchFieldBackgroundColor=%23312C51&IndicatorColor=%23F0C38E&ButtonIconColor=%23F0C38E&ButtonNormalColor=%23F0C38E&ButtonNormal2Color=%23F0C38E&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23F0C38E&HUDBackgroundColor=%23312C51&v=1.0
> ```

------

#### [Shadowrocket CyberPurple](#shadowrocket-原创配色)
> `赛博紫` <sub> `暗底色` <sub>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%23483F68&logo=renovate&logoColor=white&labelColor=gray&messageColor=%23F0C38E)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=CyberPurple18 "暗底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%23483F68&logo=renovate&logoColor=white&labelColor=gray&messageColor=%23F0C38E)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=CyberPurple26 "暗底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/CyberPurple.PNG" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FC332A57&NavigationBar2Color=%23332A57&NavigationBarTextColor=%23D2CDB2&NavigationBar2TextColor=%23D2CDB2&TabBarColor=%23332A57&TabBarBorderColor=%23332A57&TabBarSelectedColor=%23D2CDB2&TabBarUnselectedColor=%23564F73&TableBackgroundColor=%23332A57&TableCellBackgroundColor=%23483F68&TableCellSelectedBackgroundColor=%23332A57&TableSeparatorColor=%23332A57&TextFieldTextColor=%23D2CDB2&PlaceholderColor=%23564F73&TextLabelTextColor=%23D2CDB2&DetailLabelTextColor=%2377787D&TextLabelDeleteColor=%23FF9998&HeaderFooterTextColor=%2377787D&SearchFieldBackgroundColor=%23483F68&IndicatorColor=%23FFFFFF&ButtonIconColor=%23D2CDB2&ButtonNormalColor=%23D2CDB2&ButtonNormal2Color=%23CCFFFFFF&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%232A9089&PingTimeoutTextColor=%23FF9998&DefaultDotColor=%23D2CDB2&HUDBackgroundColor=%23483F68&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%2300FFFFFF&NavigationBarTextColor=%23D2CDB2&NavigationBar2TextColor=%23D2CDB2&TabBarColor=%2300FFFFFF&TabBarBorderColor=%2300FFFFFF&TabBarSelectedColor=%23D2CDB2&TabBarUnselectedColor=%23D2CDB2&TableBackgroundColor=%23332A57&TableCellBackgroundColor=%23483F68&TableCellSelectedBackgroundColor=%23332A57&TableSeparatorColor=%23332A57&TextFieldTextColor=%23D2CDB2&PlaceholderColor=%23564F73&TextLabelTextColor=%23D2CDB2&DetailLabelTextColor=%2377787D&TextLabelDeleteColor=%23FF9998&HeaderFooterTextColor=%2377787D&SearchFieldBackgroundColor=%23483F68&IndicatorColor=%23FFFFFF&ButtonIconColor=%23D2CDB2&ButtonNormalColor=%23D2CDB2&ButtonNormal2Color=%23CCFFFFFF&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%232A9089&PingTimeoutTextColor=%23FF9998&DefaultDotColor=%23D2CDB2&HUDBackgroundColor=%23483F68&v=1.0
> ```

------

#### [Shadowrocket AtomDark](#shadowrocket-原创配色)
> `原子灰` <sub> `暗底色` <sub>
>
> [![安装配色 iOS 18](https://img.shields.io/static/v1?label=安装配色&message=iOS%2018&color=%231E2127&logo=renovate&logoColor=white&labelColor=gray&messageColor=%23F0C38E)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=AtomDark18 "暗底色配色")
> [![安装配色 iOS 26](https://img.shields.io/static/v1?label=安装配色&message=iOS%2026&color=%231E2127&logo=renovate&logoColor=white&labelColor=gray&messageColor=%23F0C38E)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=AtomDark26 "暗底色配色")
> 
> <details>
> <summary>点击查看效果截图</summary>
> <img src="https://lowertop.github.io/Shadowrocket-First/img/AtomDark.PNG" width="100%">
> </details>
>
> `iOS 18 及以下`
> ```
> shadowrocket://color?NavigationBarColor=%23FC1E2127&NavigationBar2Color=%231E2127&NavigationBarTextColor=%23ABB2BF&NavigationBar2TextColor=%23ABB2BF&TabBarColor=%231E2127&TabBarBorderColor=%231E2127&TabBarSelectedColor=%23ABB2BF&TabBarUnselectedColor=%2366ABB2BF&TableBackgroundColor=%231E2127&TableCellBackgroundColor=%23262A31&TableCellSelectedBackgroundColor=%231E2127&TableSeparatorColor=%231E2127&TextFieldTextColor=%23ABB2BF&PlaceholderColor=%2366ABB2BF&TextLabelTextColor=%23ABB2BF&DetailLabelTextColor=%23656973&TextLabelDeleteColor=%23D15295&HeaderFooterTextColor=%23656973&SearchFieldBackgroundColor=%23262A31&IndicatorColor=%23ABB2BF&ButtonIconColor=%23ABB2BF&ButtonNormalColor=%23ABB2BF&ButtonNormal2Color=%23ABB2BF&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23656973&ButtonHighlighted3Color=%231E2127&ButtonDisabledColor=%231E2127&ButtonDisabled2Color=%231E2127&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23D15295&DefaultDotColor=%23ABB2BF&HUDBackgroundColor=%231E2127&v=1.0
> ```
> `iOS 26 及以上`
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%2300FFFFFF&NavigationBarTextColor=%23ABB2BF&NavigationBar2TextColor=%23ABB2BF&TabBarColor=%2300FFFFFF&TabBarBorderColor=%2300FFFFFF&TabBarSelectedColor=%23ABB2BF&TabBarUnselectedColor=%2366ABB2BF&TableBackgroundColor=%231E2127&TableCellBackgroundColor=%23262A31&TableCellSelectedBackgroundColor=%231E2127&TableSeparatorColor=%231E2127&TextFieldTextColor=%23ABB2BF&PlaceholderColor=%2366ABB2BF&TextLabelTextColor=%23ABB2BF&DetailLabelTextColor=%23656973&TextLabelDeleteColor=%23D15295&HeaderFooterTextColor=%23656973&SearchFieldBackgroundColor=%23262A31&IndicatorColor=%23ABB2BF&ButtonIconColor=%23ABB2BF&ButtonNormalColor=%23ABB2BF&ButtonNormal2Color=%23ABB2BF&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23656973&ButtonHighlighted3Color=%231E2127&ButtonDisabledColor=%231E2127&ButtonDisabled2Color=%231E2127&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23D15295&DefaultDotColor=%23ABB2BF&HUDBackgroundColor=%231E2127&v=1.0
> ```

------

_To Be Continued..._

> `配色文件以实际效果为准，实际更新可能存在调整`

<img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/RenderingBrightGold.png" width="100%">

------

### [Shadowrocket 颜色配置描述翻译](#shadowrocket-配色文件)

> 以下为小火箭配色描述的参考翻译，小火箭配色使用十六进制色值进行定义，可根据需要自行参考调整

`描述翻译`

> ```ruby
> NavigationBarColor / 导航栏背景色
> NavigationBar2Color / 导航栏背景色2
> NavigationBarTextColor / 导航栏文字颜色
> NavigationBar2TextColor / 导航栏文字颜色2
> TabBarColor / 标签栏背景色
> TabBarBorderColor / 标签栏边框颜色
> TabBarSelectedColor / 标签栏选中项颜色
> TabBarUnselectedColor / 标签栏未选中项颜色
> TableBackgroundColor / 表格背景颜色
> TableCellBackgroundColor / 表格单元格背景颜色
> TableCellSelectedBackgroundColor / 表格单元格选中项背景颜色
> TableSeparatorColor / 表格分隔线颜色
> TextFieldTextColor / 文本框文字颜色
> PlaceholderColor / 占位符颜色
> TextLabelTextColor / 文本标签文字颜色
> DetailLabelTextColor / 详细标签文字颜色
> TextLabelDeleteColor / 文本标签删除文字颜色
> HeaderFooterTextColor / 页眉页脚文字颜色
> SearchFieldBackgroundColor / 搜索框背景颜色
> IndicatorColor / 指示器颜色
> ButtonIconColor / 按钮图标颜色
> ButtonNormalColor / 按钮正常状态颜色
> ButtonNormal2Color / 按钮正常状态颜色2
> ButtonNormal3Color / 按钮正常状态颜色3
> ButtonHighlightedColor / 按钮高亮状态颜色
> ButtonHighlighted2Color / 按钮高亮状态颜色2
> ButtonHighlighted3Color / 按钮高亮状态颜色3
> ButtonDisabledColor / 按钮禁用状态颜色
> ButtonDisabled2Color / 按钮禁用状态颜色2
> PingSuccessTextColor / 测试Ping成功文字颜色
> PingTimeoutTextColor / 测试Ping超时文字颜色
> DefaultDotColor / 默认指示点颜色
> HUDBackgroundColor / 弹窗HUD背景颜色
> ```

------

# [非标准链接重定向跳转](#非标准链接重定向跳转)

> [!NOTE]
> 
> 本单元为 URL Redirector 非标准链接重定向跳转相关内容。其作用主要是针对部分服务不支持诸如 `URL-Schemes` 的非标准链接作为超链使用，可将非标准链接使用本页 `HTML` 进行跳转可以实现将非标链接作为标准链接嵌入的功能。另外部分特殊链接因其编码等方面和普通链接有较大差异，本服务暂无法完全兼容

> [!TIP]
> 
> 复制以下链接，粘贴在需要跳转的链接前进行访问即可
> ```ruby
> https://lowertop.github.io/Shadowrocket-First/redirect.html?url=
> ```

`示例`

> * 你想使用小火箭的 URL-Scheme `shadowrocket://install?module=` 一键安装小火箭的这个模块 `https://12345.com/67890.module`，也就是 `shadowrocket://install?module=https://12345.com/67890.module` 
> * 但是不是所有站点都支持类似地址的超链，无法完成点击跳转安装，例如本页或者 TG 就不支持……
> * 那么你就可以复制转换链接粘贴在待安装地址前访问即可，也就是【跳转链接】+【URL-Scheme】+【模块地址】。完成组合后类似这样： `https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://12345.com/67890.module`
> * 完成后即可点击跳转并成功安装

### [Shadowrocket 一键安装跳转链接](#非标准链接重定向跳转)

> 以下跳转链接后面直接跟相应文件地址
> 
> `配置文件` 的一键安装跳转链接
> ```ruby
> https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://config/add/
> ```
> `模块文件` 的一键安装跳转链接
> ```ruby
> https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=
> ```
> `订阅/节点` 的一键安装跳转链接
> ```ruby
> https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://add/
> ```

### [Shadowrocket URL-Schemes](#非标准链接重定向跳转)
  
> 请使用相应内容替换代码中的 `大括号及其内容`
>  
> `启动 VPN 隧道` 
> ```ruby
> shadowrocket://connect
> ```
> ```ruby
> shadowrocket://open
> ```
>  `停止 VPN 隧道` 
> ```ruby
> shadowrocket://disconnect
> ```
> ```ruby
> shadowrocket://close
> ```
>  `切换 VPN 开关状态` 
> ```ruby
> shadowrocket://toggle
> ```
>  `连通性测试` 
> ```ruby
> shadowrocket://connectivity-test
> ```
>  `使用特定节点` 
> ```ruby
> shadowrocket://select?s={节点名称}
> ```
>  `添加 订阅/节点` 
> ```ruby
> shadowrocket://add/{url}
> ```
>  `更新 订阅` 
> ```ruby
> shadowrocket://update-subs
> ```
>  `安装/使用 配置` 
> ```ruby
> shadowrocket://config/add/{url}
> ```
>  `安装/使用 模块` 
> ```ruby
> shadowrocket://install?module={url}
> ```
>  `切换全局路由（代理/配置/直连/场景）` 
> ```ruby
> shadowrocket://route/proxy
> ```
> ```ruby
> shadowrocket://route/config
> ```
> ```ruby
> shadowrocket://route/direct
> ```
> ```ruby
> shadowrocket://route/scene
> ```
> `安装/使用 配色` 
> ```ruby
> shadowrocket://color?{配色设置}
> ```

------

**Copyright © LOWERTOP**

[<img src="https://lowertop.github.io/Shadowrocket-First/img/01.BTM.png" width="100%">](https://lowertop.github.io/Shadowrocket-First)
