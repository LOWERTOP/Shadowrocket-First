[<img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/01.png" width="100%" height="100%">](https://github.com/LOWERTOP/Shadowrocket-First)

[![README in English](https://img.shields.io/static/v1?label=README&message=in%20English&color=grey&logo=googletranslate&logoColor=white&labelColor=red&messageColor=white)](https://translate.google.com/translate?hl=en&sl=zh-CN&tl=en&u=https://lowertop.github.io/Shadowrocket-First/ "README in English via Google Translate")

> [!CAUTION]
> 
> **禁止使用本仓任何内容违法或牟利！<br>
> 如需转载请 `标明作者` 或 `注明来源`**

------

# [Shadowrocket-First 简介](https://lowertop.github.io/Shadowrocket-First)

[![GitHub Repo stars](https://img.shields.io/github/stars/LOWERTOP/Shadowrocket-First?style=flat&logo=github&logoColor=white&label=星标次数&labelColor=grey&color=blue)](https://github.com/LOWERTOP/Shadowrocket-First/stargazers "已被星标")
[![GitHub forks](https://img.shields.io/github/forks/LOWERTOP/Shadowrocket-First?style=flat&logo=github&logoColor=white&label=复刻次数&labelColor=grey&color=blue)](https://github.com/LOWERTOP/Shadowrocket-First/forks "已被复刻")
[![GitHub last commit](https://img.shields.io/github/last-commit/LOWERTOP/Shadowrocket-First?style=flat&logo=github&label=更新时间&color=blue "更新时间")](https://lowertop.github.io/Shadowrocket-First "查看发布页面")

> [!NOTE]
> 
> 本仓库主要提供 `Shadowrocket/小火箭` 相关内容，包含多种 `配置文件` `模块` `规则集` `脚本` 等配置，同时提供多种原创 `小火箭配色/主题/皮肤`。若有软件使用疑问可查看 **[小火箭使用手册](https://github.com/LOWERTOP/Shadowrocket)**
>
> > 若您是相关索引的原作者或权利人，且不希望内容被引用，可点击 [此处](https://t.me/LowerTopBot) 要求剔除

`项目目录`
> * `01` · **[Shadowrocket 自制配置](#shadowrocket-自制配置)**
> * `02` · **[Shadowrocket 收集配置](#shadowrocket-收集配置)**
> * `03` · **[Shadowrocket 配色文件](#shadowrocket-配色文件)**
> * `04` · **[非标准链接的重定向跳转](#非标准链接重定向跳转)**

`项目更新`
> * 新增 [综合服务及去广告模块](#综合服务及去广告模块)
> * 新增 [英美地区 Wi-Fi Calling 模块](#wi-fi-calling)
> * 新增 [DeepSeek 规则与模块](#deepseek)
> * 新增 [多个原生模块](#原生模块) 及 [其他模块集](#模块合集与其他仓库)
> * 新增 [常用服务解锁检测](#常用服务解锁检测)
> * 更新 [部分规则集兼容性](https://github.com/LOWERTOP/Shadowrocket-First/pull/4) 感谢：[UncleDeron](https://github.com/UncleDeron)
> * 原创 [配色文件](#shadowrocket-配色文件) 增至 30 个
> * 设置 [TCP 缓冲区计算器](https://lowertop.github.io/Shadowrocket-First/TCP-Cal.html) [原仓库](https://github.com/BlackSheep-cry/TCP-Optimization-Tool) [调优原帖](https://www.nodeseek.com/post-197087-1)

------

# [Shadowrocket 自制配置](#shadowrocket-自制配置)

> [!NOTE]
> 
> 本单元为自制内容，是为 `特定软件或服务` 所制作的模块、规则集等内容，如有需要请自行取用

### [Talkatone](#talkatone)

> 由于 Talkatone 的特殊性，[本模块](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/Talkatone.sgmodule) 对其使用的不同地址进行分流，以降低该 APP 对不同代理节点的敏感度，使其可以在绝大多数节点下正常使用。本模块包含去广告规则，能够去除软件内的第三方广告。除模块外还提供该服务的 [直连规则集](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/TalkatoneDirect.list)、[仅代理规则集](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/TalkatoneProxyOnly.list)、[去广告规则集](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/TalkatoneAntiAds.list) 以及 [全局代理规则集](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/TalkatoneProxy.list) 等。其中 `全局代理规则集` 为包含该服务全部地址的规则集，该集对代理节点要求较高，不推荐普通用户使用。其他规则集需互相搭配使用，相关用法请查阅内部说明
> 
>_**注意：本模块仅适用于 Talkatone 登陆后使用，不适用于软件注册**_
> 
> [![安装模块 Talkatone](https://img.shields.io/static/v1?label=安装模块&message=Talkatone&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/Talkatone.sgmodule "一键安装本模块")
> [![规则文件 去广告规则](https://img.shields.io/static/v1?label=规则文件&message=去广告规则&color=grey&logo=todoist&logoColor=white&labelColor=%2325A162&messageColor=white)](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/TalkatoneAntiAds.list "点击访问规则集")

### [DeepSeek](#deepseek)

> DeepSeek 的服务在某些特定地区必须使用手机号注册和登陆使用，本仓提供 [分流模块](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/DeepSeek.sgmodule) 和 [代理规则](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/DeepSeek.list)，可以解锁使用邮箱、谷歌账号等方式注册与登录该服务。同时，模块中屏蔽了部分 **可能** 涉嫌传输个人信息的地址，以某种程度上避免部分个人信息上传
> 
> [![安装模块 DeepSeek](https://img.shields.io/static/v1?label=安装模块&message=DeepSeek&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/DeepSeek.sgmodule "一键安装本模块")
> [![规则文件 DeepSeek](https://img.shields.io/static/v1?label=规则文件&message=DeepSeek&color=grey&logo=todoist&logoColor=white&labelColor=%2325A162&messageColor=white)](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/DeepSeek.list "点击访问规则集")

### [Wi-Fi Calling](#wi-fi-calling)

> Wi-Fi Calling 相关 `测试` 配置，包含适用于美国、英国等地区 SIM 卡的相关模块和规则集，原则上使用后打开飞行模式后再关闭飞行模式进行联网应该就能正常开启 Wi-Fi calling。模块内置有代理分组，使用正则表达式自动将所需的地区节点选取到该分组，并使用 URL-TEST 的类型自动进行节点选择，其前提是拥有的节点的名称内包含地区关键词，若节点名称不包含地区关键词，可以使用规则集不使用模块，以规则集的形式直接指定所需节点
> 
> **`美国地区`**
> > 确认适用于 Ultra Mobile，原则上适用 T-Mobile 的 SIM 卡，可选 [模块](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/WiFiCallingUS.sgmodule) 或 [规则集](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/WiFiCallingUS.list)
> > 
> > [![安装模块 WiFiCall-US](https://img.shields.io/static/v1?label=安装模块&message=WiFiCall-US&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/WiFiCallingUS.sgmodule "一键安装本模块")
> > [![规则文件 WiFiCall-US](https://img.shields.io/static/v1?label=规则文件&message=WiFiCall-US&color=grey&logo=todoist&logoColor=white&labelColor=%2325A162&messageColor=white)](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/WiFiCallingUS.list "点击访问规则集")
>
> **`英国地区`**
> > 原则上适用于 Giffgaff、CMLink 以及沃达丰的 SIM 卡，可选 [模块](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/WiFiCallingUK.sgmodule) 或 [规则集](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/WiFiCallingUK.list)
> > 
> > [![安装模块 WiFiCall-UK](https://img.shields.io/static/v1?label=安装模块&message=WiFiCall-UK&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/WiFiCallingUK.sgmodule "一键安装本模块")
> > [![规则文件 WiFiCall-UK](https://img.shields.io/static/v1?label=规则文件&message=WiFiCall-UK&color=grey&logo=todoist&logoColor=white&labelColor=%2325A162&messageColor=white)](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/WiFiCallingUK.list "点击访问规则集")

### [综合服务及去广告模块](#综合服务及去广告模块)

> 本 [模块](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/AntiAD.sgmodule) 和 [规则集](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/AntiAD.list) 以去广告为主，使用了 [app2smile](https://github.com/app2smile) 和 [fmz200](https://github.com/fmz200) 的部分脚本。模块已包含本仓的 **Spotify** 模块和 **Talkatone** 模块，同时包含：包子漫画网页、夸克、阿里云盘、百度网盘、Blued、e充电、移动、联通、招商银行、掌上生活、一淘、闲鱼、小蚁、小米有品、瑞幸咖啡等去广告内容。规则集仅包含部分补充规则。本内容除故障外不提供定制反馈
>
> [![安装模块 AntiAD](https://img.shields.io/static/v1?label=安装模块&message=AntiAD&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/AntiAD.sgmodule "一键安装本模块")
> [![规则文件 AntiAD](https://img.shields.io/static/v1?label=规则文件&message=AntiAD&color=grey&logo=todoist&logoColor=white&labelColor=%2325A162&messageColor=white)](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/AntiAD.list "点击访问规则集")

### [咪咕直播源模块](#咪咕直播源模块)

> 群友 ["---///"")/"](https://t.me/insterestingtimes) 咨询了一个 [APTV](https://t.me/AptvPlayer) 全运营商使用移动咪咕直播源观看 IPTV 的问题。原方案是 [PIXMAN](https://pixman.io/) 的 [Coding](https://pixman.io/coding) 提供的 [自制DNS映射](https://pixman.io/topics/37) 方案，并由 [YanG-1989](https://github.com/YanG-1989/m3u/blob/main/hosts.txt) 优化，以解决非移动用户访问咪咕源的错误解析问题。但测试中发现原贴中需要解析的域名并未出现在我所在的地区，而是出现了其他域名，导致方案无效，在将该域名进行映射后可以在非移动网络下正常观看。所以原方案似乎并不适用于所有非移动用户或不同地区的用户，并且我网络环境下该服务似乎对公共DNS也很敏感。所以制作了一个 [代理模块](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/CMCCiTV.sgmodule)，包含了必要的规则、DNS覆写、以及地址映射，理论上应该支持所有运营商使用咪咕直播源。现在提供 `Beta` 版本欢迎试用，如果发现在当地网络环境下还存在类似问题，可以进入模块文本根据说明进行调整
>
> [![安装模块 CMCCiTV](https://img.shields.io/static/v1?label=安装模块&message=CMCCiTV&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/CMCCiTV.sgmodule "一键安装本模块")

### [反追踪模块](#反追踪模块)

> 来源于 [SunsetMkt](https://github.com/SunsetMkt) 的 [anti-ip-attribution](https://github.com/SunsetMkt/anti-ip-attribution) 仓库，是针对部分网站显示 IP 归属地的反跟踪规则模块。需要注意 [本模块](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/AntiIPtracking.sgmodule) 为测试版，作者无法保证本模块一定能起到作用，甚至可能存在触发账号风控的风险。同时，其中规则存在多种策略，可能造成相应网站走代理或分流失效。详细说明参见 [相关备注](https://raw.githubusercontent.com/SunsetMkt/anti-ip-attribution/refs/heads/main/rules.yaml)
> 
> _**注意：请谨慎使用本模块**_
>
> [![安装模块 AntiIPtracking](https://img.shields.io/static/v1?label=安装模块&message=AntiIPtracking&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/AntiIPtracking.sgmodule "一键安装本模块")

------

# [Shadowrocket 收集配置](#shadowrocket-收集配置)

> [!NOTE]
> 
> 本单元内容为收集自可信来源的 `手册` `配置` `模块` `规则` `脚本` 等，可放心食用
>
> > * 使用大多数模块仅在 [全局路由](https://github.com/LOWERTOP/Shadowrocket#%E5%85%A8%E5%B1%80%E8%B7%AF%E7%94%B1%E5%8C%BA%E5%88%AB) 设置为 `配置` 模式时生效
> > * 使用大多数模块须正确 [开启解密](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#https%E8%A7%A3%E5%AF%86)，启用模块后部分 APP 须重装
> > * 切换配置文件需要重新 [开启解密](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#https%E8%A7%A3%E5%AF%86)，为避免重复解密可使用 [证书模块](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E8%AF%81%E4%B9%A6%E6%A8%A1%E5%9D%97)
> > * [更新配置文件](https://github.com/LOWERTOP/Shadowrocket?tab=readme-ov-file#%E6%9B%B4%E6%96%B0%E9%85%8D%E7%BD%AE) 会造成自定义规则丢失，一般不建议更新
> > * 需要关注去广告规则或模块可能存在的 `误杀`

### [使用手册](#使用手册)

> [Shadowrocket 使用手册](https://github.com/LOWERTOP/Shadowrocket) 可视为小火箭的教程或文档。本手册基于官方群组使用的关键词列表进行优化，使其逐步完善为使用手册以供参阅
>
> [![教程文档 使用手册](https://img.shields.io/static/v1?label=教程文档&message=使用手册&color=grey&logo=gitbook&logoColor=white&labelColor=%23B6AB7A&messageColor=white)](https://github.com/LOWERTOP/Shadowrocket "点击查阅")

### [懒人配置](#懒人配置)

> 本配置文件以官方群组使用的懒人配置为基础进行维护。[懒人配置](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket/main/lazy_group.conf) 是专为 **`懒人`** 打造的开箱即用的配置文件，不仅内置了详尽的注释文本，且经过精心调整内置设置以适应绝大多数用户的需求，适合几乎任何阶段的用户使用，是除默认配置外首推的配置文件
>
> _**注意：更新配置文件会覆盖对配置文件做过的修改，例如规则集或代理分组设置，详细说明参见 [使用手册](https://github.com/LOWERTOP/Shadowrocket#%E8%87%AA%E5%8A%A8%E6%9B%B4%E6%96%B0)**_
> 
> [![安装配置 懒人配置](https://img.shields.io/static/v1?label=安装配置&message=懒人配置&color=grey&logo=googledocs&logoColor=white&labelColor=orange&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://config/add/https://raw.githubusercontent.com/LOWERTOP/Shadowrocket/main/lazy_group.conf "一键安装本配置文件")


### [分流规则](#分流规则)

> 本页提供 [blackmatrix7](https://github.com/blackmatrix7) 维护的分类非常细致的各代理软件分流规则的原仓入口，是现阶段首推的代理规则集
> 
> _**注意：使用时请务必阅读相应的配置建议**_
> 
> [![规则检索 分流规则集](https://img.shields.io/static/v1?label=规则检索&message=分流规则集&color=grey&logo=dask&logoColor=white&labelColor=%2325A162&messageColor=white)](https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Shadowrocket "点击查看分类")

### [去广告规则](#去广告规则)

> [Cats-Team](https://github.com/Cats-Team) 维护的 [去广告规则](https://github.com/Cats-Team/AdRules)，维护相对及时，将其添加为规则集，并将策略设置为 `Reject` 即可使用
> 
> [Johnshall](https://github.com/Johnshall) 维护了多款 [配置文件](https://github.com/Johnshall/Shadowrocket-ADBlock-Rules-Forever)，可将其 [仅去广告配置](https://raw.githubusercontent.com/Johnshall/Shadowrocket-ADBlock-Rules-Forever/refs/heads/release/sr_ad_only.conf) 作为去广告规则集或 [包含配置](https://github.com/LOWERTOP/Shadowrocket#%E6%89%A9%E5%B1%95%E9%85%8D%E7%BD%AE) 使用
> 
> [ACL4SSR](https://github.com/ACL4SSR) 维护的 [去广告规则](https://github.com/ACL4SSR/ACL4SSR/tree/master)，其 [BanAD 规则](https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/refs/heads/master/Clash/BanAD.list) 包含常见广告关键字、广告联盟，几乎没有副作用，可以放心使用。另外还有取自 Adblock 的 [EasyListChina 规则](https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/refs/heads/master/Clash/BanEasyListChina.list) 等内容
> 
> [![规则文件 Cats-Team](https://img.shields.io/static/v1?label=规则文件&message=Cats-Team&color=grey&logo=todoist&logoColor=white&labelColor=%2325A162&messageColor=white)](https://raw.githubusercontent.com/Cats-Team/AdRules/main/adrules.list "点击访问规则集")
> [![规则文件 Johnshall](https://img.shields.io/static/v1?label=规则文件&message=Johnshall&color=grey&logo=todoist&logoColor=white&labelColor=%2325A162&messageColor=white)](https://raw.githubusercontent.com/Johnshall/Shadowrocket-ADBlock-Rules-Forever/refs/heads/release/sr_ad_only.conf "点击访问规则集")
> [![规则文件 BanAD](https://img.shields.io/static/v1?label=规则文件&message=BanAD&color=grey&logo=todoist&logoColor=white&labelColor=%2325A162&messageColor=white)](https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/refs/heads/master/Clash/BanAD.list "点击访问规则集")
> [![规则文件 EasyListChina](https://img.shields.io/static/v1?label=规则文件&message=EasyListChina&color=grey&logo=todoist&logoColor=white&labelColor=%2325A162&messageColor=white)]([https://raw.githubusercontent.com/Johnshall/Shadowrocket-ADBlock-Rules-Forever/refs/heads/release/sr_ad_only.conf](https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/refs/heads/master/Clash/BanEasyListChina.list) "点击访问规则集")

### [原生模块](#原生模块)

> 以下模块为原生支持小火箭的第三方高可用性模块，并验证过可用性，模块蓝色标题为模块直链地址，也可点击其一键安装按钮安装使用
> 
> **[墨鱼去广告模块](https://raw.githubusercontent.com/ddgksf2013/Modules/main/Adblock.sgmodule)**
> 
> > 来自 [Cuttlefish 墨鱼](https://github.com/ddgksf2013/ddgksf2013)，模块为多服务整合模块，同时也提供以下可自由搭配的单独模块：[墨鱼去开屏](https://raw.githubusercontent.com/ddgksf2013/Modules/refs/heads/main/Adblock/StartUpAds.sgmodule)、[高德地图](https://raw.githubusercontent.com/ddgksf2013/Modules/refs/heads/main/Adblock/AmapAds.sgmodule)、[哔哩哔哩](https://raw.githubusercontent.com/ddgksf2013/Modules/refs/heads/main/Adblock/BilibiliAds.sgmodule)、[微博](https://raw.githubusercontent.com/ddgksf2013/Modules/refs/heads/main/Adblock/WeiboAds.sgmodule)、[知乎](https://raw.githubusercontent.com/ddgksf2013/Modules/refs/heads/main/Adblock/ZhihuAds.sgmodule)、[小红书](https://raw.githubusercontent.com/ddgksf2013/Modules/refs/heads/main/Adblock/XiaoHongShuAds.sgmodule)、[网易云](https://raw.githubusercontent.com/ddgksf2013/Modules/refs/heads/main/Adblock/NeteaseAds.sgmodule)、[喜马拉雅](https://raw.githubusercontent.com/ddgksf2013/Modules/refs/heads/main/Adblock/XimalayaAds.sgmodule)、[什么值得买](https://raw.githubusercontent.com/ddgksf2013/Modules/refs/heads/main/Adblock/SmzdmAds.sgmodule)、[菜鸟](https://raw.githubusercontent.com/ddgksf2013/Modules/refs/heads/main/Adblock/CainiaoAds.sgmodule)、[彩云天气](https://raw.githubusercontent.com/ddgksf2013/Modules/refs/heads/main/Adblock/CaiYunAds.sgmodule) 等
> >   
> > [![安装模块 墨鱼去广告](https://img.shields.io/static/v1?label=安装模块&message=墨鱼去广告&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/ddgksf2013/Modules/main/Adblock.sgmodule "一键安装本模块")
>
> **[融合模块](https://raw.githubusercontent.com/XiangwanGuan/Shadowrocket/main/Module.sgmodule)**
> 
> > 本模块由 [XiangwanGuan 向晚](https://github.com/XiangwanGuan) 维护，可以去除多种软件的广告，详情参阅 [模块介绍](https://github.com/XiangwanGuan/Shadowrocket?tab=readme-ov-file#%E8%9E%8D%E5%90%88%E6%A8%A1%E5%9D%97%E4%BB%8B%E7%BB%8D)
> >   
> > [![安装模块 融合去广告](https://img.shields.io/static/v1?label=安装模块&message=融合去广告&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/XiangwanGuan/Shadowrocket/main/Module.sgmodule "一键安装本模块")
> 
> **[Spotify 模块](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/Spotify.sgmodule)**
> 
> > 本仓维护的 Spotify 模块，主要上游脚本来自 [app2smile](https://github.com/app2smile)。本模块已尝试修复原代码中的不兼容部分并增加部分去广告规则，软件音质不能设置为超高，分流节点须同注册地保持一致，其他功能说明请参阅 [备注](https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/Spotify.sgmodule)
> >   
> > [![安装模块 Spotify 模块](https://img.shields.io/static/v1?label=安装模块&message=Spotify%20模块&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/Spotify.sgmodule "一键安装本模块")
> 
> **[YouTube 去广告模块](https://raw.githubusercontent.com/iab0x00/ProxyRules/refs/heads/main/Rewrite/YouTubeNoAd.sgmodule)**
> 
> > 本模块由 [iab](https://github.com/iab0x00) 维护，支持去除该软件的各类广告并提供画中画功能，同时支持 Youtube Music 去广告
> > 
> > _**注意：Apple TV 版 YouTube 不支持解密，不可使用类似模块**_
> >   
> > [![安装模块 YouTube 去广告](https://img.shields.io/static/v1?label=安装模块&message=YouTube%20去广告&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/iab0x00/ProxyRules/refs/heads/main/Rewrite/YouTubeNoAd.sgmodule "一键安装本模块")
> 
> **[京东历史比价模块](https://raw.githubusercontent.com/iab0x00/ProxyRules/refs/heads/main/Rewrite/JD_Price.sgmodule)**
> 
> > 本模块由 [iab](https://github.com/iab0x00) 维护，点击商品详情或下滑进入详情触发比价通知。须开启小火箭通知权限，且并非所有商品都有历史价格
> >   
> > [![安装模块 京东历史比价](https://img.shields.io/static/v1?label=安装模块&message=京东历史比价&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/iab0x00/ProxyRules/refs/heads/main/Rewrite/JD_Price.sgmodule "一键安装本模块")
>
> **[微博轻享版去广告模块](https://raw.githubusercontent.com/iab0x00/ProxyRules/refs/heads/main/Rewrite/WeiBoIntl.sgmodule)**
> 
> > 本模块由 [iab](https://github.com/iab0x00) 维护，可以去除开屏、时间线及我的页面广告
> >   
> > [![安装模块 微博轻享版](https://img.shields.io/static/v1?label=安装模块&message=微博轻享版&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/iab0x00/ProxyRules/refs/heads/main/Rewrite/WeiBoIntl.sgmodule "一键安装本模块")
> 
> **[滴滴去广告模块](https://raw.githubusercontent.com/iab0x00/ProxyRules/refs/heads/main/Rewrite/DidiNoAd.sgmodule)**
> 
> > 本模块由 [iab](https://github.com/iab0x00) 维护，可以去除滴滴的开屏广告及内部广告页面
> >   
> > [![安装模块 滴滴去广告](https://img.shields.io/static/v1?label=安装模块&message=滴滴去广告&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/iab0x00/ProxyRules/refs/heads/main/Rewrite/DidiNoAd.sgmodule "一键安装本模块")
> 
> **[酷安去广告模块](https://raw.githubusercontent.com/iab0x00/ProxyRules/refs/heads/main/Rewrite/Coolapk.sgmodule)**
> 
> > 本模块由 [iab](https://github.com/iab0x00) 维护，可以去除酷安 APP 的开屏广告和时间线广告
> >   
> > [![安装模块 酷安去广告](https://img.shields.io/static/v1?label=安装模块&message=酷安去广告&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/iab0x00/ProxyRules/refs/heads/main/Rewrite/Coolapk.sgmodule "一键安装本模块")
> 
> **[贴吧去广告模块](https://raw.githubusercontent.com/app2smile/rules/master/module/tieba.sgmodule)**
> 
> > 本模块来自 [app2smile](https://github.com/app2smile)，详细内容参见模块 [备注](https://raw.githubusercontent.com/app2smile/rules/master/module/tieba.sgmodule)，该模块的有效性请自行测试
> >   
> > [![安装模块 贴吧去广告](https://img.shields.io/static/v1?label=安装模块&message=贴吧去广告&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/app2smile/rules/master/module/tieba.sgmodule "一键安装本模块")

### [模块合集与其他仓库](#模块合集与其他仓库)

> 某不愿透漏姓名的 __`热心网友`__ 依据 [可莉](https://github.com/luestr/ProxyResource) 的公开模块制作的小火箭专用的模块大合集，可进入页面根据需要挑选，安装前请认真阅读说明
> 
> [![模块仓库 模块大合集](https://img.shields.io/static/v1?label=模块仓库&message=模块大合集&color=grey&logo=dask&logoColor=white&labelColor=blue&messageColor=white)](https://shadowrocket.module.huksy88.sbs "点击查看模块")
> 
> [Cuttlefish 墨鱼](https://github.com/ddgksf2013/ddgksf2013) 维护的可适用小火箭的模块仓库，包含高德、B站、彩云、菜鸟、微博等，自行进入选择安装
>
> [![模块仓库 Cuttlefish](https://img.shields.io/static/v1?label=模块仓库&message=Cuttlefish&color=grey&logo=dask&logoColor=white&labelColor=blue&messageColor=white)](https://github.com/ddgksf2013/Modules/tree/main/Adblock "点击查看模块")
>
> [blackmatrix7](https://github.com/blackmatrix7) 维护的原生模块仓库，如有需要请自行进入选择安装
>   
> [![模块仓库 blackmatrix7](https://img.shields.io/static/v1?label=模块仓库&message=blackmatrix7&color=grey&logo=dask&logoColor=white&labelColor=blue&messageColor=white)](https://github.com/blackmatrix7/ios_rule_script/tree/master/rewrite/Shadowrocket "点击查看模块")
>
> [QingRex](https://github.com/QingRex) 维护的仓库，其内容不一定与小火箭完全兼容，请自行测试是否需要借助 [Script-Hub](#进阶用法) 进行转换
>
> [![其他仓库 QingRex](https://img.shields.io/static/v1?label=其他仓库&message=QingRex&color=grey&logo=dask&logoColor=white&labelColor=%23506365&messageColor=white)](https://github.com/QingRex/LoonKissSurge/tree/main/Surge "点击查看模块")
> 
> [fmz200](https://github.com/fmz200) 维护的仓库，其内容非原生支持小火箭，需要借助 [Script-Hub](#进阶用法) 方可添加到小火箭中
>
> [![其他仓库 fmz200](https://img.shields.io/static/v1?label=其他仓库&message=fmz200&color=grey&logo=dask&logoColor=white&labelColor=%23506365&messageColor=white)](https://github.com/fmz200/wool_scripts "点击查看模块")
>

### [筛选订阅脚本](#筛选订阅脚本)

> [kiwi707](https://github.com/kiwi707) 制作的 `筛选/规范订阅节点` 脚本，该脚本异常强大，可根据需要过滤节点并将保留的节点的名称进行标准化和格式化
> 
> _使用方法：打开下方脚件链接后复制所有内容，粘贴至 `订阅页面` 的 `过滤` 区域，参考 [说明](https://github.com/kiwi707/Shadow-Rocket) 修改后保存即可_
>   
> [![脚本文件 筛选与修改](https://img.shields.io/static/v1?label=脚本文件&message=筛选与修改&color=grey&logo=javascript&logoColor=grey&labelColor=%23F7DF1E&messageColor=grey)](https://raw.githubusercontent.com/kiwi707/Shadow-Rocket/refs/heads/main/FilterScript "点击查看脚本内容")

### [常用服务解锁检测](#常用服务解锁检测)

> 由 [Kristen](https://t.me/iam_Kristen) 和 [Sage](https://t.me/huskydb) 各制作有 `解锁检测快捷指令`，可用来检测各流媒体服务的解锁地区或可用性，也可以检测 ChatGPT、TikTok、YouTube 等服务的解锁地区或状态以及 IP 归属地等。脚本检测会根据你的分流规则进行测试，安装后运行即可，若出现错误请多试几次。其中 K 版是各服务统一通知结果，S 版是不同服务分别通知结果
>   
> [![快捷指令 解锁检测 K](https://img.shields.io/static/v1?label=快捷指令&message=解锁检测%20K&color=grey&logo=removedotbg&logoColor=white&labelColor=%23855DCD&messageColor=grey)](https://www.icloud.com/shortcuts/c2ccf142aeb649cd955dad8a4c02d3cf "点击安装快捷指令")
> [![快捷指令 解锁检测 S](https://img.shields.io/static/v1?label=快捷指令&message=解锁检测%20S&color=grey&logo=removedotbg&logoColor=white&labelColor=%23855DCD&messageColor=grey)](https://www.icloud.com/shortcuts/0bd31373228d4c94be224d2477c38148 "点击安装快捷指令")
>
> [Sage](https://t.me/huskydb) 另有提供 `常用服务解锁检测` 服务。安装 [模块](https://raw.githubusercontent.com/huskydsb/Shadowrocket/refs/heads/main/Sgmodule/流媒体解锁测试.module) 后访问 [链接](https://streaming.test/)，根据页面服务内容进行可视化操作即可。现阶段支持检测的服务内容包括：YouTube、NETFLIX、OpenAI、TikTok、Disney+、Spotify、Scamalytics、Bing、bilibili、Steam、动画疯、Niconico动画、Google Play、维基百科编辑、Starz、iQIYI、DAZN、派拉蒙+、ViuTV、Now E、KKTV、LINE TV、IPv6 检测、DNS 检测等，以上解锁检测以实际访问为准
>
> [![首先安装 检测模块](https://img.shields.io/static/v1?label=首先安装&message=检测模块&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/huskydsb/Shadowrocket/refs/heads/main/Sgmodule/流媒体解锁测试.module "一键安装本模块")
> [![其次访问 检测页面](https://img.shields.io/static/v1?label=其次访问&message=检测页面&color=grey&logo=html5&logoColor=white&labelColor=%23E34F26&messageColor=white)](https://streaming.test/ "点击访问检测页面")

### [进阶用法](#进阶用法)

> 在当前的 iOS 平台上，想要实现较为高级的功能和操作，往往需要借助 **[Script-Hub](https://github.com/Script-Hub-Org/Script-Hub/wiki)**、 **[Sub-Store](https://github.com/sub-store-org/Sub-Store/tree/master/config)** 和 **[BoxJs](https://docs.boxjs.app/)** 这三个工具来实现。为了能够顺利使用这些工具，用户需要满足以下三个基本前置条件：
> 
> > * **配置 MITM 功能**：通过启用中间人攻击，用户可以拦截和分析网络流量，从而实现更复杂的代理操作
> > * **编写或使用相应的脚本**：脚本是实现定制化功能的关键，用户需要根据需求编写脚本或使用现成的脚本
> > * **安装并信任相关的安全证书**：为了确保数据传输的安全性，用户必须安装并信任程序所需的安全证书
>   
> 只有在满足这三个条件后，用户才能充分发挥上述工具在代理应用中的高级玩法和功能<br>
> 点击下方徽章可一键安装相应模块，详细用法请点击上文中的蓝色超链跳转查看
>
> [![安装模块 Script-Hub](https://img.shields.io/static/v1?label=安装模块&message=Script-Hub&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/modules/script-hub.rocket.module "一键安装本模块")
> [![安装模块 Sub-Store](https://img.shields.io/static/v1?label=安装模块&message=Sub-Store&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/sub-store-org/Sub-Store/master/config/Surge-Noability.sgmodule "一键安装本模块")
> [![安装模块 BoxJs](https://img.shields.io/static/v1?label=安装模块&message=BoxJs&color=grey&logo=educative&logoColor=white&labelColor=blue&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/redirect.html?url=shadowrocket://install?module=https://raw.githubusercontent.com/chavyleung/scripts/master/box/rewrite/boxjs.rewrite.surge.sgmodule "一键安装本模块")

------

# [Shadowrocket 配色文件](#shadowrocket-配色文件)

> [!NOTE]
> 
> 本单元为小火箭配色文件相关内容。项目出发点是作者在使用小火箭的过程中对小火箭的配色逐渐感到单调，借助本身是设计出身，遂制作了几个配色文件，没想到反响挺好，后就借助本平台逐步发布以下原创设计的配色文件以满足需求
>
> `极其鸣谢` 快捷指令作者：[iab](https://github.com/iab0x00)<br>
> `特别鸣谢` 提供建议好友：[Sage](https://t.me/huskydb)

`效果示例：TermiusDark`

> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/RenderingTermiusDark.png" width="100%" height="100%"> 
> 
> <details>
> <summary>点击查看其他配色示例</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/110301.png" width="100%" height="100%"> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/110302.png" width="100%" height="100%"> 
> 
> </details>

------

### [Shadowrocket 原创配色](#shadowrocket-原创配色)

> [!IMPORTANT]
> 
> 小火箭原创配色文件已更新至 30 个<br>
> 需要注意：因苹果系统限制，小火箭部分细节图标不可自定义，且会跟随系统颜色模式改变。建议在使用 `亮底色` 时搭配浅色模式，使用 `暗底色` 时搭配深色模式

> [!TIP]
> 
> * __配色一键安装：__ 选择所需配色，点击 `一键安装`，允许跳转后点击 `使用` 即可
> * __复制代码安装：__ 复制所需 `shadowrocket://color?*` 配色代码，在 `配置` 页点击 `✚` 号，粘贴并应用
> * __快捷指令安装：__ [点击安装快捷指令](https://www.icloud.com/shortcuts/9189e0bfe6fa49eaa1653f7f90459f30)，运行该 `快捷指令` 并选择配色安装
> * __恢复默认配色：__ `APP-设置-颜色-重设颜色`

------

#### Shadowrocket EpicLight
> `Epic 清晨` <sup> `亮底色` <sup>
> 
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%23F2F2F2&logo=renovate&logoColor=grey&labelColor=%23F2F2F2&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=EpicLight "亮底色配色")
> 
> ```ruby
> shadowrocket://color?NavigationBarColor=%23FFFFFF&NavigationBar2Color=%23FFFFFF&NavigationBarTextColor=%23262626&NavigationBar2TextColor=%23262626&TabBarColor=%23FFFFFF&TabBarBorderColor=%23FFFFFF&TabBarSelectedColor=%23262626&TabBarUnselectedColor=%239F9FA1&TableBackgroundColor=%23FFFFFF&TableCellBackgroundColor=%23F2F2F2&TableCellSelectedBackgroundColor=%23F2F2F2&TableSeparatorColor=%23FFFFFF&TextFieldTextColor=%23535353&PlaceholderColor=%23535353&TextLabelTextColor=%23262626&DetailLabelTextColor=%23535353&TextLabelDeleteColor=%23E8886D&HeaderFooterTextColor=%239F9FA1&SearchFieldBackgroundColor=%23F2F2F2&IndicatorColor=%23CCCCCC&ButtonIconColor=%23535353&ButtonNormalColor=%23535353&ButtonNormal2Color=%23535353&ButtonNormal3Color=%23535353&ButtonHighlightedColor=%23CCCCCC&ButtonHighlighted2Color=%23CCCCCC&ButtonHighlighted3Color=%23202024&ButtonDisabledColor=%23202024&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2326BBFF&PingTimeoutTextColor=%23E8886D&DefaultDotColor=%2326BBFF&HUDBackgroundColor=%23F2F2F2&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/EpicLight.PNG" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket BrightGold
> `亮金色` <sup> `亮底色` <sup>
> 
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%23D38301&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=white)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=BrightGold "亮底色配色")
> 
> ```ruby
> shadowrocket://color?NavigationBarColor=%23F7F7F7&NavigationBar2Color=%23F7F7F7&NavigationBarTextColor=%23D38301&NavigationBar2TextColor=%23D38301&TabBarColor=%23F7F7F7&TabBarBorderColor=%23F7F7F7&TabBarSelectedColor=%23D38301&TabBarUnselectedColor=%23D1C0A2&TableBackgroundColor=%23FFFFFF&TableCellBackgroundColor=%23F7F7F7&TableCellSelectedBackgroundColor=%23F7F7F7&TableSeparatorColor=%23FFFFFF&TextFieldTextColor=%23D38301&PlaceholderColor=%23D4A763&TextLabelTextColor=%23D38301&DetailLabelTextColor=%23D4A763&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23D4A763&SearchFieldBackgroundColor=%23F7F7F7&IndicatorColor=%23D4A763&ButtonIconColor=%23D38301&ButtonNormalColor=%23D38301&ButtonNormal2Color=%23D38301&ButtonNormal3Color=%23D38301&ButtonHighlightedColor=%23FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23FFFFFF&ButtonDisabledColor=%23FFFFFF&ButtonDisabled2Color=%23FFFFFF&PingSuccessTextColor=%23D4A763&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23D38301&HUDBackgroundColor=%23F7F7F7&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/01BrightGold.png" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket GitHubLight
> `GitHub 白昼` <sup> `亮底色` <sup>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%23F0F1F3&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23161B22)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=GitHubLight "亮底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%23FFFFFF&NavigationBar2Color=%23FFFFFF&NavigationBarTextColor=%23161B22&NavigationBar2TextColor=%23161B22&TabBarColor=%23F0F1F3&TabBarBorderColor=%23F0F1F3&TabBarSelectedColor=%23161B22&TabBarUnselectedColor=%2365161B22&TableBackgroundColor=%23FFFFFF&TableCellBackgroundColor=%23F0F1F3&TableCellSelectedBackgroundColor=%23F0F1F3&TableSeparatorColor=%23FFFFFF&TextFieldTextColor=%2359616B&PlaceholderColor=%2359616B&TextLabelTextColor=%23202328&DetailLabelTextColor=%23959BA4&TextLabelDeleteColor=%23E8886D&HeaderFooterTextColor=%23959BA4&SearchFieldBackgroundColor=%23F0F1F3&IndicatorColor=%23F2F7FC&ButtonIconColor=%23959BA4&ButtonNormalColor=%23959BA4&ButtonNormal2Color=%23959BA4&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23161B22&ButtonDisabledColor=%23161B22&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23E8886D&DefaultDotColor=%23DBB556&HUDBackgroundColor=%23F0F1F3&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/GitHubLight.PNG" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket V2EXDay
> `V2EX 白昼` <sup> `亮底色` <sup>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%23F5F5F5&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23555555)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=V2EXDay "亮底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%23FFFFFF&NavigationBar2Color=%23FFFFFF&NavigationBarTextColor=%23555555&NavigationBar2TextColor=%23555555&TabBarColor=%23FFFFFF&TabBarBorderColor=%23FFFFFF&TabBarSelectedColor=%23555555&TabBarUnselectedColor=%23CCCCCC&TableBackgroundColor=%23FFFFFF&TableCellBackgroundColor=%23F5F5F5&TableCellSelectedBackgroundColor=%23F5F5F5&TableSeparatorColor=%23FFFFFF&TextFieldTextColor=%23555555&PlaceholderColor=%23555555&TextLabelTextColor=%23555555&DetailLabelTextColor=%23778087&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23778087&SearchFieldBackgroundColor=%23F5F5F5&IndicatorColor=%23555555&ButtonIconColor=%23555555&ButtonNormalColor=%23555555&ButtonNormal2Color=%23555555&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23555555&HUDBackgroundColor=%23FFFFFF&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/V2EXDAY.PNG" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket EcoGreen
> `生态绿` <sup> `亮底色` <sup>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%23DDE1DD&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%2347634E)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=EcoGreen "亮底色配色")
> 
> ```ruby
> shadowrocket://color?NavigationBarColor=%23DDE1DD&NavigationBar2Color=%23DDE1DD&NavigationBarTextColor=%2347634E&NavigationBar2TextColor=%2347634E&TabBarColor=%23FFFFFF&TabBarBorderColor=%23FFFFFF&TabBarSelectedColor=%2347634E&TabBarUnselectedColor=%236747634E&TableBackgroundColor=%23FFFFFF&TableCellBackgroundColor=%23DDE1DD&TableCellSelectedBackgroundColor=%23DDE1DD&TableSeparatorColor=%23FFFFFF&TextFieldTextColor=%2347634E&PlaceholderColor=%2347634E&TextLabelTextColor=%2347634E&DetailLabelTextColor=%23ACAAA7&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23ACAAA7&SearchFieldBackgroundColor=%23DDE1DD&IndicatorColor=%2347634E&ButtonIconColor=%2347634E&ButtonNormalColor=%2347634E&ButtonNormal2Color=%23FFCC40&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23FFCC40&HUDBackgroundColor=%23DDE1DD&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/EcoGreen.PNG" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket IceCream
> `淡粉色` <sup> `亮底色` <sup>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%23FFEBF4&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23F5197B)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=IceCream "亮底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%23FFFFFF&NavigationBarTextColor=%23F5197B&NavigationBar2TextColor=%23F5197B&TabBarColor=%23FFD7E9&TabBarBorderColor=%23FFD7E9&TabBarSelectedColor=%23F5197B&TabBarUnselectedColor=%2367F5197B&TableBackgroundColor=%23FFFFFF&TableCellBackgroundColor=%23FFEBF4&TableCellSelectedBackgroundColor=%23FFD7E9&TableSeparatorColor=%23FFFFFF&TextFieldTextColor=%2399F5197B&PlaceholderColor=%23FFD7E9&TextLabelTextColor=%23F5197B&DetailLabelTextColor=%2399F5197B&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%2399F5197B&SearchFieldBackgroundColor=%23FFEBF4&IndicatorColor=%23F5197B&ButtonIconColor=%23F5197B&ButtonNormalColor=%23F5197B&ButtonNormal2Color=%23F5197B&ButtonNormal3Color=%23F5197B&ButtonHighlightedColor=%23FFEBF4&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23FFFFFF&ButtonDisabledColor=%23FFEBF4&ButtonDisabled2Color=%23FFEBF4&PingSuccessTextColor=%23F5197B&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23F5197B&HUDBackgroundColor=%23FFEBF4&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/02IceCream.png" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket Elegant
> `典雅灰` <sup> `亮底色` <sup>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%23EBEBEB&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23383838)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Elegant "亮底色配色")
> 
> ```ruby
> shadowrocket://color?NavigationBarColor=%2300FFFFFF&NavigationBar2Color=%23FFFFFF&NavigationBarTextColor=%23383838&NavigationBar2TextColor=%23383838&TabBarColor=%23383838&TabBarBorderColor=%2300FFFFFF&TabBarSelectedColor=%23FFFFFF&TabBarUnselectedColor=%2380D7D7D7&TableBackgroundColor=%23FFFFFF&TableCellBackgroundColor=%23EBEBEB&TableCellSelectedBackgroundColor=%23EBEBEB&TableSeparatorColor=%23FFFFFF&TextFieldTextColor=%239E9E9E&PlaceholderColor=%23D7D7D7&TextLabelTextColor=%23383838&DetailLabelTextColor=%239E9E9E&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%239E9E9E&SearchFieldBackgroundColor=%23EBEBEB&IndicatorColor=%23383838&ButtonIconColor=%23383838&ButtonNormalColor=%23383838&ButtonNormal2Color=%23383838&ButtonNormal3Color=%23383838&ButtonHighlightedColor=%23FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23FFFFFF&ButtonDisabledColor=%23FFFFFF&ButtonDisabled2Color=%23FFFFFF&PingSuccessTextColor=%23383838&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23383838&HUDBackgroundColor=%23EBEBEB&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/08Elegant.png" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket Cloudy
> `多云色` <sup> `亮底色` <sup>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%23D5DDE0&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23303548)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Cloudy "亮底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%23D5DDE0&NavigationBar2Color=%23D5DDE0&NavigationBarTextColor=%23303548&NavigationBar2TextColor=%23303548&TabBarColor=%23D5DDE0&TabBarBorderColor=%23D5DDE0&TabBarSelectedColor=%23303548&TabBarUnselectedColor=%2367303548&TableBackgroundColor=%23D5DDE0&TableCellBackgroundColor=%234DBFC6C9&TableCellSelectedBackgroundColor=%23BFC6C9&TableSeparatorColor=%23D5DDE0&TextFieldTextColor=%23303548&PlaceholderColor=%23303548&TextLabelTextColor=%23303548&DetailLabelTextColor=%23454445&TextLabelDeleteColor=%23FF6B6E&HeaderFooterTextColor=%2377787D&SearchFieldBackgroundColor=%2377787D&IndicatorColor=%23FFFFFF&ButtonIconColor=%23303548&ButtonNormalColor=%23303548&ButtonNormal2Color=%23303548&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2326B66B&PingTimeoutTextColor=%23FF6B6E&DefaultDotColor=%23303548&HUDBackgroundColor=%23BFC6C9&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/Cloudy.PNG" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket AyuLight
> `香鱼色` <sup> `亮底色` <sup>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%23FAFAFA&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%235C6773)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=AyuLight "亮底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%23FAFAFA&NavigationBar2Color=%23FAFAFA&NavigationBarTextColor=%235C6773&NavigationBar2TextColor=%235C6773&TabBarColor=%23FAFAFA&TabBarBorderColor=%23FAFAFA&TabBarSelectedColor=%235C6773&TabBarUnselectedColor=%23655C6773&TableBackgroundColor=%23FAFAFA&TableCellBackgroundColor=%23F1F1F1&TableCellSelectedBackgroundColor=%23F1F1F1&TableSeparatorColor=%23FAFAFA&TextFieldTextColor=%235C6773&PlaceholderColor=%235C6773&TextLabelTextColor=%235C6773&DetailLabelTextColor=%23ABB1B6&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23ABB1B6&SearchFieldBackgroundColor=%23F5F5F5&IndicatorColor=%23FAFAFA&ButtonIconColor=%235C6773&ButtonNormalColor=%235C6773&ButtonNormal2Color=%235C6773&ButtonNormal3Color=%23ABB1B6&ButtonHighlightedColor=%23FAFAFA&ButtonHighlighted2Color=%23FAFAFA&ButtonHighlighted3Color=%235C6773&ButtonDisabledColor=%235C6773&ButtonDisabled2Color=%23FAFAFA&PingSuccessTextColor=%23339918&PingTimeoutTextColor=%23FD691D&DefaultDotColor=%23FD691D&HUDBackgroundColor=%23FFFFFF&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/AyuLight.PNG" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket Solarized
> `烈日色` <sup> `亮底色` <sup>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%23FDF6E4&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23657B83)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Solarized "亮底色配色")
> 
> ```ruby
> shadowrocket://color?NavigationBarColor=%23FDF6E4&NavigationBar2Color=%23FDF6E4&NavigationBarTextColor=%23657B83&NavigationBar2TextColor=%23657B83&TabBarColor=%23FDF6E4&TabBarBorderColor=%23FDF6E4&TabBarSelectedColor=%23657B83&TabBarUnselectedColor=%2366657B83&TableBackgroundColor=%23FDF6E4&TableCellBackgroundColor=%23F3ECDB&TableCellSelectedBackgroundColor=%23F3ECDB&TableSeparatorColor=%23FDF6E4&TextFieldTextColor=%23657B83&PlaceholderColor=%23657B83&TextLabelTextColor=%23657B83&DetailLabelTextColor=%23ABB1B6&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23ABB1B6&SearchFieldBackgroundColor=%23FDF6E4&IndicatorColor=%23F3ECDB&ButtonIconColor=%23657B83&ButtonNormalColor=%23657B83&ButtonNormal2Color=%23657B83&ButtonNormal3Color=%23ABB1B6&ButtonHighlightedColor=%23FDF6E4&ButtonHighlighted2Color=%23FDF6E4&ButtonHighlighted3Color=%23657B83&ButtonDisabledColor=%23657B83&ButtonDisabled2Color=%23FDF6E4&PingSuccessTextColor=%23339918&PingTimeoutTextColor=%23FD691D&DefaultDotColor=%23FD691D&HUDBackgroundColor=%23F3ECDB&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/Solarized.PNG" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket LightOwl
> `鸮腹色` <sup> `亮底色` <sup>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%23FBFBFB&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23403F52)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=LightOwl "亮底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%23FBFBFB&NavigationBar2Color=%23FBFBFB&NavigationBarTextColor=%23403F52&NavigationBar2TextColor=%23403F52&TabBarColor=%23FBFBFB&TabBarBorderColor=%23FBFBFB&TabBarSelectedColor=%23403F52&TabBarUnselectedColor=%2366403F52&TableBackgroundColor=%23FBFBFB&TableCellBackgroundColor=%23EFF1F2&TableCellSelectedBackgroundColor=%23EFF1F2&TableSeparatorColor=%23FBFBFB&TextFieldTextColor=%23403F52&PlaceholderColor=%2390A7B1&TextLabelTextColor=%23403F52&DetailLabelTextColor=%2390A7B1&TextLabelDeleteColor=%23D15499&HeaderFooterTextColor=%2390A7B1&SearchFieldBackgroundColor=%23FBFBFB&IndicatorColor=%2390A7B1&ButtonIconColor=%23403F52&ButtonNormalColor=%23403F52&ButtonNormal2Color=%23403F52&ButtonNormal3Color=%23403F52&ButtonHighlightedColor=%23FBFBFB&ButtonHighlighted2Color=%23FBFBFB&ButtonHighlighted3Color=%23FBFBFB&ButtonDisabledColor=%23FBFBFB&ButtonDisabled2Color=%23FBFBFB&PingSuccessTextColor=%2352eeb9&PingTimeoutTextColor=%23D15499&DefaultDotColor=%2352eeb9&HUDBackgroundColor=%23FBFBFB&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/LightOwl.PNG" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket SnowTop
> `雪顶色` <sup> `亮底色` <sup>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%23E5E6EC&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%234C4F68)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=SnowTop "亮底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%23E5E6EC&NavigationBar2Color=%23E5E6EC&NavigationBarTextColor=%234C4F68&NavigationBar2TextColor=%234C4F68&TabBarColor=%23E5E6EC&TabBarBorderColor=%23E5E6EC&TabBarSelectedColor=%234C4F68&TabBarUnselectedColor=%237F4C4F68&TableBackgroundColor=%23EFF1F5&TableCellBackgroundColor=%23E5E6EC&TableCellSelectedBackgroundColor=%23E5E6EC&TableSeparatorColor=%23FAFAFA&TextFieldTextColor=%234C4F68&PlaceholderColor=%234C4F68&TextLabelTextColor=%234C4F68&DetailLabelTextColor=%23858A9B&TextLabelDeleteColor=%23DB8A7A&HeaderFooterTextColor=%23858A9B&SearchFieldBackgroundColor=%23F5F5F5&IndicatorColor=%23FAFAFA&ButtonIconColor=%234C4F68&ButtonNormalColor=%234C4F68&ButtonNormal2Color=%234C4F68&ButtonNormal3Color=%23858A9B&ButtonHighlightedColor=%23FAFAFA&ButtonHighlighted2Color=%23FAFAFA&ButtonHighlighted3Color=%234C4F68&ButtonDisabledColor=%234C4F68&ButtonDisabled2Color=%23FAFAFA&PingSuccessTextColor=%23D15499&PingTimeoutTextColor=%23DB8A7A&DefaultDotColor=%23DB8A7A&HUDBackgroundColor=%23FFFFFF&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/SnowTop.PNG" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket RomeDay
> `假日色` <sup> `亮底色` <sup>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%23F5E8E7&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23622229)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=RomeDay "亮底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%23F5E8E7&NavigationBar2Color=%23F5E8E7&NavigationBarTextColor=%23622229&NavigationBar2TextColor=%23622229&TabBarColor=%23F5E8E7&TabBarBorderColor=%23F5E8E7&TabBarSelectedColor=%23622229&TabBarUnselectedColor=%2367622229&TableBackgroundColor=%23F5E8E7&TableCellBackgroundColor=%23EEE0DF&TableCellSelectedBackgroundColor=%23EEE0DF&TableSeparatorColor=%23F5E8E7&TextFieldTextColor=%23622229&PlaceholderColor=%23AB8587&TextLabelTextColor=%23622229&DetailLabelTextColor=%23AB8587&TextLabelDeleteColor=%23D15499&HeaderFooterTextColor=%23AB8587&SearchFieldBackgroundColor=%23EEE0DF&IndicatorColor=%23AB8587&ButtonIconColor=%23622229&ButtonNormalColor=%23622229&ButtonNormal2Color=%23622229&ButtonNormal3Color=%23622229&ButtonHighlightedColor=%23F5E8E7&ButtonHighlighted2Color=%23F5E8E7&ButtonHighlighted3Color=%23F5E8E7&ButtonDisabledColor=%23F5E8E7&ButtonDisabled2Color=%23F5E8E7&PingSuccessTextColor=%2320817B&PingTimeoutTextColor=%23D15499&DefaultDotColor=%2320817B&HUDBackgroundColor=%23F5E8E7&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/RomeDay.PNG" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket PeachFresh
> `鲜桃色` <sup> `亮底色` <sup>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%23F4C1A0&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23510603)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Peach "亮底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%23F4C1A0&NavigationBar2Color=%23F4C1A0&NavigationBarTextColor=%23510603&NavigationBar2TextColor=%23510603&TabBarColor=%23F4C1A0&TabBarBorderColor=%23F4C1A0&TabBarSelectedColor=%23510603&TabBarUnselectedColor=%2366510603&TableBackgroundColor=%23F4C1A0&TableCellBackgroundColor=%23E9B898&TableCellSelectedBackgroundColor=%23E9B898&TableSeparatorColor=%23F4C1A0&TextFieldTextColor=%23510603&PlaceholderColor=%23896852&TextLabelTextColor=%23510603&DetailLabelTextColor=%23896852&TextLabelDeleteColor=%23B2390F&HeaderFooterTextColor=%23896852&SearchFieldBackgroundColor=%23E9B898&IndicatorColor=%23896852&ButtonIconColor=%23510603&ButtonNormalColor=%23510603&ButtonNormal2Color=%23510603&ButtonNormal3Color=%23510603&ButtonHighlightedColor=%23F4C1A0&ButtonHighlighted2Color=%23F4C1A0&ButtonHighlighted3Color=%23F4C1A0&ButtonDisabledColor=%23F4C1A0&ButtonDisabled2Color=%23F4C1A0&PingSuccessTextColor=%2366A06C&PingTimeoutTextColor=%23B2390F&DefaultDotColor=%23B2390F&HUDBackgroundColor=%23F4C1A0&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/Peach.PNG" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket LightBlue
> `远峰蓝` <sup> `亮底色` <sup>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%23F0F3FA&logo=renovate&logoColor=grey&labelColor=%23F0F3FA&messageColor=%23395886)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=LightBlue "亮底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%23F0F3FA&NavigationBar2Color=%23F0F3FA&NavigationBarTextColor=%23395886&NavigationBar2TextColor=%23395886&TabBarColor=%23F0F3FA&TabBarBorderColor=%23F0F3FA&TabBarSelectedColor=%23395886&TabBarUnselectedColor=%2366395886&TableBackgroundColor=%23F0F3FA&TableCellBackgroundColor=%23D5DEEF&TableCellSelectedBackgroundColor=%23D5DEEF&TableSeparatorColor=%23F0F3FA&TextFieldTextColor=%23395886&PlaceholderColor=%23628ECB&TextLabelTextColor=%23395886&DetailLabelTextColor=%23628ECB&TextLabelDeleteColor=%23B2390F&HeaderFooterTextColor=%23628ECB&SearchFieldBackgroundColor=%23F0F3FA&IndicatorColor=%23628ECB&ButtonIconColor=%23395886&ButtonNormalColor=%23395886&ButtonNormal2Color=%23395886&ButtonNormal3Color=%23395886&ButtonHighlightedColor=%23F0F3FA&ButtonHighlighted2Color=%23F0F3FA&ButtonHighlighted3Color=%23F0F3FA&ButtonDisabledColor=%23F0F3FA&ButtonDisabled2Color=%23F0F3FA&PingSuccessTextColor=%2366A06C&PingTimeoutTextColor=%23B2390F&DefaultDotColor=%23395886&HUDBackgroundColor=%23F0F3FA&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/LightBlue.PNG" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket EpicDark
> `Epic 暗黑` <sub> `暗底色` <sub>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%23343338&logo=renovate&logoColor=white&labelColor=gray&messageColor=%2380BAFF)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=EpicDark "暗底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%23202024&NavigationBar2Color=%23202024&NavigationBarTextColor=%23CCCCCC&NavigationBar2TextColor=%23CCCCCC&TabBarColor=%23202024&TabBarBorderColor=%23202024&TabBarSelectedColor=%23CCCCCC&TabBarUnselectedColor=%23646464&TableBackgroundColor=%23202024&TableCellBackgroundColor=%23343338&TableCellSelectedBackgroundColor=%23343338&TableSeparatorColor=%23202024&TextFieldTextColor=%23CCCCCC&PlaceholderColor=%23646464&TextLabelTextColor=%23CCCCCC&DetailLabelTextColor=%23646464&TextLabelDeleteColor=%23E8886D&HeaderFooterTextColor=%23646464&SearchFieldBackgroundColor=%23343338&IndicatorColor=%23CCCCCC&ButtonIconColor=%239F9FA1&ButtonNormalColor=%239F9FA1&ButtonNormal2Color=%239F9FA1&ButtonNormal3Color=%23646464&ButtonHighlightedColor=%23CCCCCC&ButtonHighlighted2Color=%23CCCCCC&ButtonHighlighted3Color=%23202024&ButtonDisabledColor=%23202024&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2326BBFF&PingTimeoutTextColor=%23E8886D&DefaultDotColor=%2326BBFF&HUDBackgroundColor=%23343338&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/EpicDark.PNG" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket Chrome
> `金属灰` <sub> `暗底色` <sub>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%2380BAFF&logo=renovate&logoColor=white&labelColor=gray&messageColor=%2380BAFF)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Chrome "暗底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%2327282B&NavigationBar2Color=%2327282B&NavigationBarTextColor=%23FFFFFF&NavigationBar2TextColor=%23FFFFFF&TabBarColor=%2327282B&TabBarBorderColor=%2327282B&TabBarSelectedColor=%2380BAFF&TabBarUnselectedColor=%23B3B3B3&TableBackgroundColor=%2327282B&TableCellBackgroundColor=%2333363B&TableCellSelectedBackgroundColor=%2333363B&TableSeparatorColor=%2345464B&TextFieldTextColor=%23FFFFFF&PlaceholderColor=%2380BAFF&TextLabelTextColor=%23FFFFFF&DetailLabelTextColor=%2377787D&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%2377787D&SearchFieldBackgroundColor=%2333363B&IndicatorColor=%23FFFFFF&ButtonIconColor=%2380BAFF&ButtonNormalColor=%23FFFFFF&ButtonNormal2Color=%23CCFFFFFF&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2380BAFF&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%2380BAFF&HUDBackgroundColor=%2327282B&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/03Chrome.png" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket BlueSky
> `深空蓝` <sub> `暗底色` <sub>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%232473BD&logo=renovate&logoColor=white&labelColor=gray&messageColor=%23ADBBC8)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=BlueSky "暗底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%23181E26&NavigationBar2Color=%23181E26&NavigationBarTextColor=%23ADBBC8&NavigationBar2TextColor=%232473BD&TabBarColor=%23181E26&TabBarBorderColor=%2300000000&TabBarSelectedColor=%232473BD&TabBarUnselectedColor=%23ADBBC8&TableBackgroundColor=%23181E26&TableCellBackgroundColor=%23202935&TableCellSelectedBackgroundColor=%23202935&TableSeparatorColor=%23181E26&TextFieldTextColor=%23ADBBC8&PlaceholderColor=%234F6077&TextLabelTextColor=%23ADBBC8&DetailLabelTextColor=%234F6077&TextLabelDeleteColor=%232473BD&HeaderFooterTextColor=%234F6077&SearchFieldBackgroundColor=%23202935&IndicatorColor=%23ADBBC8&ButtonIconColor=%232473BD&ButtonNormalColor=%23ADBBC8&ButtonNormal2Color=%23ADBBC8&ButtonNormal3Color=%23ADBBC8&ButtonHighlightedColor=%23ADBBC8&ButtonHighlighted2Color=%23ADBBC8&ButtonHighlighted3Color=%23202935&ButtonDisabledColor=%23ADBBC8&ButtonDisabled2Color=%23ADBBC8&PingSuccessTextColor=%232473BD&PingTimeoutTextColor=%234F6077&DefaultDotColor=%232473BD&HUDBackgroundColor=%23202935&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/04BlueSky.png" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket GodenDark
> `暗金色` <sub> `暗底色` <sub>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%23D4A763&logo=renovate&logoColor=white&labelColor=gray&messageColor=grey)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=GodenDark "暗底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%232C2B31&NavigationBar2Color=%232C2B31&NavigationBarTextColor=%23D4A763&NavigationBar2TextColor=%23D4A763&TabBarColor=%232C2B31&TabBarBorderColor=%232C2B31&TabBarSelectedColor=%23D4A763&TabBarUnselectedColor=%23D1C0A2&TableBackgroundColor=%232C2B31&TableCellBackgroundColor=%2338373D&TableCellSelectedBackgroundColor=%2338373D&TableSeparatorColor=%232C2B31&TextFieldTextColor=%23D4A763&PlaceholderColor=%23D1C0A2&TextLabelTextColor=%23D4A763&DetailLabelTextColor=%23D1C0A2&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23D1C0A2&SearchFieldBackgroundColor=%2338373D&IndicatorColor=%23D1C0A2&ButtonIconColor=%23D4A763&ButtonNormalColor=%23D4A763&ButtonNormal2Color=%23D4A763&ButtonNormal3Color=%23D4A763&ButtonHighlightedColor=%23FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23FFFFFF&ButtonDisabledColor=%23FFFFFF&ButtonDisabled2Color=%23FFFFFF&PingSuccessTextColor=%23D1C0A2&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23D1C0A2&HUDBackgroundColor=%2338373D&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/05GodenDark.png" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket Fluoresce
> `荧光色` <sub> `暗底色` <sub>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%23B4FE5F&logo=renovate&logoColor=white&labelColor=gray&messageColor=grey)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Fluoresce "暗底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%232C2B31&NavigationBar2Color=%232C2B31&NavigationBarTextColor=%23B4FE5F&NavigationBar2TextColor=%23B4FE5F&TabBarColor=%232C2B31&TabBarBorderColor=%232C2B31&TabBarSelectedColor=%23B4FE5F&TabBarUnselectedColor=%234E7A27&TableBackgroundColor=%232C2B31&TableCellBackgroundColor=%2338373D&TableCellSelectedBackgroundColor=%2338373D&TableSeparatorColor=%232C2B31&TextFieldTextColor=%23B4FE5F&PlaceholderColor=%234E7A27&TextLabelTextColor=%23B4FE5F&DetailLabelTextColor=%234E7A27&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%234E7A27&SearchFieldBackgroundColor=%2338373D&IndicatorColor=%234E7A27&ButtonIconColor=%23B4FE5F&ButtonNormalColor=%23B4FE5F&ButtonNormal2Color=%23B4FE5F&ButtonNormal3Color=%23B4FE5F&ButtonHighlightedColor=%23FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23FFFFFF&ButtonDisabledColor=%23FFFFFF&ButtonDisabled2Color=%23FFFFFF&PingSuccessTextColor=%23B4FE5F&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23B4FE5F&HUDBackgroundColor=%2338373D&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/06Fluoresce.png" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket TermiusDark
> `终端绿` <sub> `暗底色` <sub>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%2321B869&logo=renovate&logoColor=white&labelColor=gray&messageColor=%2321B869)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=TermiusDark "暗底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%23141729&NavigationBar2Color=%23141729&NavigationBarTextColor=%2321B869&NavigationBar2TextColor=%2321B869&TabBarColor=%23141729&TabBarBorderColor=%23141729&TabBarSelectedColor=%2321B869&TabBarUnselectedColor=%236621B869&TableBackgroundColor=%23141729&TableCellBackgroundColor=%23141729&TableCellSelectedBackgroundColor=%23141729&TableSeparatorColor=%233321B869&TextFieldTextColor=%2321B869&PlaceholderColor=%236621B869&TextLabelTextColor=%2321B869&DetailLabelTextColor=%236621B869&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%236621B869&SearchFieldBackgroundColor=%23141729&IndicatorColor=%2321B869&ButtonIconColor=%2321B869&ButtonNormalColor=%2321B869&ButtonNormal2Color=%2321B869&ButtonNormal3Color=%2321B869&ButtonHighlightedColor=%2321B869&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23FFFFFF&ButtonDisabledColor=%236621B869&ButtonDisabled2Color=%236621B869&PingSuccessTextColor=%2321B869&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%2321B869&HUDBackgroundColor=%233321B869&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/07TermiusDark.png" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket Sunset
> `余晖紫` <sub> `暗底色` <sub>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%239B50DC&logo=renovate&logoColor=white&labelColor=gray&messageColor=grey)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Sunset "暗底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%2330304C&NavigationBar2Color=%2330304C&NavigationBarTextColor=%23FFFFFF&NavigationBar2TextColor=%239B50DC&TabBarColor=%2330304C&TabBarBorderColor=%2300FFFFFF&TabBarSelectedColor=%23FFFFFF&TabBarUnselectedColor=%239B50DC&TableBackgroundColor=%2327273F&TableCellBackgroundColor=%2330304C&TableCellSelectedBackgroundColor=%2330304C&TableSeparatorColor=%2327273F&TextFieldTextColor=%23B3B3B3&PlaceholderColor=%23B3B3B3&TextLabelTextColor=%23FFFFFF&DetailLabelTextColor=%239B50DC&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%239B50DC&SearchFieldBackgroundColor=%2333363B&IndicatorColor=%23B3B3B3&ButtonIconColor=%239B50DC&ButtonNormalColor=%239B50DC&ButtonNormal2Color=%239B50DC&ButtonNormal3Color=%239B50DC&ButtonHighlightedColor=%23B3B3B3&ButtonHighlighted2Color=%23B3B3B3&ButtonHighlighted3Color=%23B3B3B3&ButtonDisabledColor=%23B3B3B3&ButtonDisabled2Color=%23B3B3B3&PingSuccessTextColor=%23FFFFFF&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%239B50DC&HUDBackgroundColor=%2330304C&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/09Sunset.png" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket Rose
> `玫瑰红` <sub> `暗底色` <sub>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%23BE1451&logo=renovate&logoColor=white&labelColor=gray&messageColor=grey)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Rose "暗底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%238E0C36&NavigationBar2Color=%238E0C36&NavigationBarTextColor=%23FFFFFF&NavigationBar2TextColor=%23FFFFFF&TabBarColor=%238E0C36&TabBarBorderColor=%238E0C36&TabBarSelectedColor=%23FFFFFF&TabBarUnselectedColor=%23BE1451&TableBackgroundColor=%238E0C36&TableCellBackgroundColor=%23BE1451&TableCellSelectedBackgroundColor=%23BE1451&TableSeparatorColor=%238E0C36&TextFieldTextColor=%23FFFFFF&PlaceholderColor=%23FFFFFF&TextLabelTextColor=%23FFFFFF&DetailLabelTextColor=%23ADADAD&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23ADADAD&SearchFieldBackgroundColor=%2333363B&IndicatorColor=%23FFFFFF&ButtonIconColor=%23FFFFFF&ButtonNormalColor=%23FFFFFF&ButtonNormal2Color=%238E0C36&ButtonNormal3Color=%238E0C36&ButtonHighlightedColor=%23FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23FFFFFF&ButtonDisabledColor=%23FFFFFF&ButtonDisabled2Color=%23FFFFFF&PingSuccessTextColor=%23FFFFFF&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23FFFFFF&HUDBackgroundColor=%2327282B&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/10Rose.png" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket Violet
> `紫罗兰` <sub> `暗底色` <sub>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%2348426D&logo=renovate&logoColor=white&labelColor=gray&messageColor=%23F0C38E)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=Violet "暗底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%23312C51&NavigationBar2Color=%23312C51&NavigationBarTextColor=%23F0C38E&NavigationBar2TextColor=%23F0C38E&TabBarColor=%23312C51&TabBarBorderColor=%23312C51&TabBarSelectedColor=%23F0C38E&TabBarUnselectedColor=%2367F0C38E&TableBackgroundColor=%2348426D&TableCellBackgroundColor=%23312C51&TableCellSelectedBackgroundColor=%23312C51&TableSeparatorColor=%2348426D&TextFieldTextColor=%23F0C38E&PlaceholderColor=%23F0C38E&TextLabelTextColor=%23F0C38E&DetailLabelTextColor=%23F1AA9B&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23F1AA9B&SearchFieldBackgroundColor=%23312C51&IndicatorColor=%23F0C38E&ButtonIconColor=%23F0C38E&ButtonNormalColor=%23F0C38E&ButtonNormal2Color=%23F0C38E&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23F0C38E&HUDBackgroundColor=%23312C51&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/Violet.PNG" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket KanagawaWave
> `神奈川夜` <sub> `暗底色` <sub>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%2336363E&logo=renovate&logoColor=white&labelColor=gray&messageColor=%23F0C38E)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=KanagawaWave "暗底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%231F1F28&NavigationBar2Color=%231F1F28&NavigationBarTextColor=%23D2CDB2&NavigationBar2TextColor=%23D2CDB2&TabBarColor=%231F1F28&TabBarBorderColor=%231F1F28&TabBarSelectedColor=%23D2CDB2&TabBarUnselectedColor=%2366D2CDB2&TableBackgroundColor=%231F1F28&TableCellBackgroundColor=%2336363E&TableCellSelectedBackgroundColor=%2336363E&TableSeparatorColor=%231F1F28&TextFieldTextColor=%23D2CDB2&PlaceholderColor=%23D2CDB2&TextLabelTextColor=%23D2CDB2&DetailLabelTextColor=%2377787D&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%2377787D&SearchFieldBackgroundColor=%2336363E&IndicatorColor=%23D2CDB2&ButtonIconColor=%23D2CDB2&ButtonNormalColor=%23D2CDB2&ButtonNormal2Color=%23D2CDB2&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23D2CDB2&HUDBackgroundColor=%2327282B&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/KanagawaWave.PNG" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket KanagawaGray
> `神奈川灰` <sub> `暗底色` <sub>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%2336363E&logo=renovate&logoColor=white&labelColor=gray&messageColor=%23F0C38E)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=KanagawaGray "暗底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%232A2B32&NavigationBar2Color=%232A2B32&NavigationBarTextColor=%23D2CDB2&NavigationBar2TextColor=%23D2CDB2&TabBarColor=%232A2B32&TabBarBorderColor=%232A2B32&TabBarSelectedColor=%23D2CDB2&TabBarUnselectedColor=%2366D2CDB2&TableBackgroundColor=%232A2B32&TableCellBackgroundColor=%2336363E&TableCellSelectedBackgroundColor=%2336363E&TableSeparatorColor=%232A2B32&TextFieldTextColor=%23D2CDB2&PlaceholderColor=%23D2CDB2&TextLabelTextColor=%23D2CDB2&DetailLabelTextColor=%2377787D&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%2377787D&SearchFieldBackgroundColor=%2336363E&IndicatorColor=%23D2CDB2&ButtonIconColor=%23D2CDB2&ButtonNormalColor=%23D2CDB2&ButtonNormal2Color=%23D2CDB2&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%23D2CDB2&HUDBackgroundColor=%232A2B32&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/KanagawaGray.PNG" width="100%" height="100%">
> 
> </details>

------
#### Shadowrocket CyberPurple
> `赛博紫` <sub> `暗底色` <sub>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%23483F68&logo=renovate&logoColor=white&labelColor=gray&messageColor=%23F0C38E)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=CyberPurple "暗底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%23332A57&NavigationBar2Color=%23332A57&NavigationBarTextColor=%23D2CDB2&NavigationBar2TextColor=%23D2CDB2&TabBarColor=%23332A57&TabBarBorderColor=%23332A57&TabBarSelectedColor=%23D2CDB2&TabBarUnselectedColor=%23564F73&TableBackgroundColor=%23332A57&TableCellBackgroundColor=%23483F68&TableCellSelectedBackgroundColor=%23483F68&TableSeparatorColor=%23332A57&TextFieldTextColor=%23D2CDB2&PlaceholderColor=%23D2CDB2&TextLabelTextColor=%23D2CDB2&DetailLabelTextColor=%2377787D&TextLabelDeleteColor=%23FF9998&HeaderFooterTextColor=%2377787D&SearchFieldBackgroundColor=%23483F68&IndicatorColor=%23FFFFFF&ButtonIconColor=%23D2CDB2&ButtonNormalColor=%23D2CDB2&ButtonNormal2Color=%23CCFFFFFF&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%232A9089&PingTimeoutTextColor=%23FF9998&DefaultDotColor=%23D2CDB2&HUDBackgroundColor=%23483F68&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/CyberPurple.PNG" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket GitHubDark
> `GitHub 暗夜` <sub> `暗底色` <sub>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%2322282F&logo=renovate&logoColor=white&labelColor=gray&messageColor=%23F0C38E)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=GitHubDark "暗底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%23161B22&NavigationBar2Color=%23161B22&NavigationBarTextColor=%23F2F7FC&NavigationBar2TextColor=%23F2F7FC&TabBarColor=%23161B22&TabBarBorderColor=%23161B22&TabBarSelectedColor=%23F2F7FC&TabBarUnselectedColor=%23959BA4&TableBackgroundColor=%23161B22&TableCellBackgroundColor=%2322282F&TableCellSelectedBackgroundColor=%2322282F&TableSeparatorColor=%23161B22&TextFieldTextColor=%23F2F7FC&PlaceholderColor=%23F2F7FC&TextLabelTextColor=%23F2F7FC&DetailLabelTextColor=%23959BA4&TextLabelDeleteColor=%23E8886D&HeaderFooterTextColor=%23959BA4&SearchFieldBackgroundColor=%2322282F&IndicatorColor=%23F2F7FC&ButtonIconColor=%23959BA4&ButtonNormalColor=%23959BA4&ButtonNormal2Color=%23959BA4&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23161B22&ButtonDisabledColor=%23161B22&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23E8886D&DefaultDotColor=%23DBB556&HUDBackgroundColor=%2322282F&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/GitHubDark.PNG" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket V2EXNight
> `V2EX 暗夜` <sub> `暗底色` <sub>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%2318222D&logo=renovate&logoColor=white&labelColor=gray&messageColor=%23F0C38E)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=V2EXNight "暗底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%2318222D&NavigationBar2Color=%2318222D&NavigationBarTextColor=%239CAEC7&NavigationBar2TextColor=%239CAEC7&TabBarColor=%2318222D&TabBarBorderColor=%2318222D&TabBarSelectedColor=%239CAEC7&TabBarUnselectedColor=%23669CAEC7&TableBackgroundColor=%2322303F&TableCellBackgroundColor=%2318222D&TableCellSelectedBackgroundColor=%2318222D&TableSeparatorColor=%2322303F&TextFieldTextColor=%239CAEC7&PlaceholderColor=%239CAEC7&TextLabelTextColor=%239CAEC7&DetailLabelTextColor=%23738292&TextLabelDeleteColor=%23ED402E&HeaderFooterTextColor=%23738292&SearchFieldBackgroundColor=%2318222D&IndicatorColor=%239CAEC7&ButtonIconColor=%239CAEC7&ButtonNormalColor=%239CAEC7&ButtonNormal2Color=%239CAEC7&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23FFFFFF&ButtonHighlighted3Color=%23000000&ButtonDisabledColor=%2327282B&ButtonDisabled2Color=%2380FFFFFF&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23CF5747&DefaultDotColor=%239CAEC7&HUDBackgroundColor=%2322303F&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/V2EXNIGHT.PNG" width="100%" height="100%">
> 
> </details>

------

#### Shadowrocket AtomDark
> `原子灰` <sub> `暗底色` <sub>
>
> [![配色文件 一键安装](https://img.shields.io/static/v1?label=配色文件&message=一键安装&color=%231E2127&logo=renovate&logoColor=white&labelColor=gray&messageColor=%23F0C38E)](https://lowertop.github.io/Shadowrocket-First/theme.html?target=AtomDark "暗底色配色")
>
> ```ruby
> shadowrocket://color?NavigationBarColor=%231E2127&NavigationBar2Color=%231E2127&NavigationBarTextColor=%23ABB2BF&NavigationBar2TextColor=%23ABB2BF&TabBarColor=%231E2127&TabBarBorderColor=%231E2127&TabBarSelectedColor=%23ABB2BF&TabBarUnselectedColor=%2366ABB2BF&TableBackgroundColor=%231E2127&TableCellBackgroundColor=%23262A31&TableCellSelectedBackgroundColor=%23262A31&TableSeparatorColor=%231E2127&TextFieldTextColor=%23ABB2BF&PlaceholderColor=%23ABB2BF&TextLabelTextColor=%23ABB2BF&DetailLabelTextColor=%23656973&TextLabelDeleteColor=%23D15295&HeaderFooterTextColor=%23656973&SearchFieldBackgroundColor=%23262A31&IndicatorColor=%23ABB2BF&ButtonIconColor=%23ABB2BF&ButtonNormalColor=%23ABB2BF&ButtonNormal2Color=%23ABB2BF&ButtonNormal3Color=%2377787D&ButtonHighlightedColor=%2399FFFFFF&ButtonHighlighted2Color=%23656973&ButtonHighlighted3Color=%231E2127&ButtonDisabledColor=%231E2127&ButtonDisabled2Color=%231E2127&PingSuccessTextColor=%2396B96B&PingTimeoutTextColor=%23D15295&DefaultDotColor=%23ABB2BF&HUDBackgroundColor=%231E2127&v=1.0
> ```
> 
> <details>
> <summary>效果截图</summary>
> 
> <img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/AtomDark.PNG" width="100%" height="100%">
> 
> </details>

------

_To Be Continued..._

> `配色文件以实际效果为准，实际更新可能存在调整`

<img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/RenderingBrightGold.png" width="100%" height="100%">

------

### [Shadowrocket 颜色配置描述翻译](#shadowrocket-颜色配置描述翻译)

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
> 本单元为 URL Redirector 非标准链接重定向跳转相关内容，主要服务于向 GitHub 等网站发布内容的作者朋友们。本服务的出发点是作者在使用 `GitHub` 进行小火箭配置设置期间，发现本页不能使用 `URL-Schemes` 的链接作为超链一键安装，也就是本页不支持非标准链接的超链，遂萌生了使用 `HTML` 进行跳转的想法，后经 `GPT` 帮助实现本单元初步设想和现有功能。GitHub 中也有其他类似功能的仓库，可以自行翻阅
>
> 本服务虽然主要指向 `非标准链接` 的跳转，但是例如 `HTTP` `HTTPS` 等类型的 `标准链接` 自然也是支持跳转。另外小火箭配色文件的设置链接和普通链接编码不同，使用本项目跳转小火箭配色链接可能存在解码问题，除此之外暂未发现其他链接跳转不正常的案例

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

### [Shadowrocket 一键安装跳转链接](#shadowrocket-一键安装跳转链接)

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

### [Shadowrocket URL-Schemes](#shadowrocket-url-schemes)
  
> 请使用相应内容替换代码中的 `大括号及其内容`
>  
> `启动 VPN 隧道`
> 
> ```ruby
> shadowrocket://connect
> ```
>
> ```ruby
> shadowrocket://open
> ```
>
> `停止 VPN 隧道`
>  
> ```ruby
> shadowrocket://disconnect
> ```
>
> ```ruby
> shadowrocket://close
> ```
>
> `切换 VPN 开关状态`
> 
> ```ruby
> shadowrocket://toggle
> ```
>
> `使用特定节点`
> 
> ```ruby
> shadowrocket://select?s={节点名称}
> ```
>
> `添加 订阅/节点`
> 
> ```ruby
> shadowrocket://add/{url}
> ```
>
> `安装/使用 配置`
> 
> ```ruby
> shadowrocket://config/add/{url}
> ```
>
> `安装/使用 模块`
>  
> ```ruby
> shadowrocket://install?module={url}
> ```
>
> `切换全局路由（代理/配置/直连/场景）`
> 
> ```ruby
> shadowrocket://route/proxy
> ```
>
> ```ruby
> shadowrocket://route/config
> ```
>
> ```ruby
> shadowrocket://route/direct
> ```
>
> ```ruby
> shadowrocket://route/scene
> ```
>
> `安装/使用 配色`
> 
> ```ruby
> shadowrocket://color?{配色设置}
> ```

------

**Copyright © LOWERTOP**

[<img src="https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/refs/heads/main/img/01.BTM.png" width="100%" height="100%">](https://lowertop.github.io/Shadowrocket-First)
