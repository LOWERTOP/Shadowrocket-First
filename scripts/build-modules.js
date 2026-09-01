/**
 * ShadowStore 数据聚合构建引擎
 * 针对 README 默认分支设计，负责拉取各开源仓库、解析元数据、匹配图标并生成 modules.json
 */

const fs = require('fs');
const path = require('path');

const CONFIG = {
    REPO_README_URL: "https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/README/README.md",
    REPO_README_BACKUP: "https://raw.githubusercontent.com/LOWERTOP/Shadowrocket-First/main/README.md",
    FMZ_TREE_API: "https://api.github.com/repos/fmz200/wool_scripts/git/trees/main?recursive=1",
    ZIRAWELL_README_URL: "https://raw.githubusercontent.com/zirawell/R-Store/main/README.md",
    ZIRAWELL_TREE_API: "https://api.github.com/repos/zirawell/R-Store/git/trees/main?recursive=1",
    ICONS_JSON_URL: "https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/icons-all.json",
    LUESTR_TREE_API: "https://api.github.com/repos/luestr/IconResource/git/trees/main?recursive=1",
    CONCURRENCY: 12
};

const APP_ALIASES = {
    "私库": ["github"], "🅲🅻🅴🅰🅽🅴🆁": ["github"], "证书": ["github"], "解密": ["github"], "🅳🅴🆅": ["github"], "红果": ["play"], "流媒体": ["netflix"], "影视": ["netflix"], "大师兄": ["netflix"], "talkatone": ["talkatone"],
    "苹果": ["apple"], "apple": ["apple"], "谷歌": ["google"], "微软": ["microsoft"],
    "油管": ["youtube"], "youtube": ["youtube"], "电报": ["telegram"], "推特": ["twitter", "x"],
    "奈飞": ["netflix"], "网飞": ["netflix"], "迪士尼": ["disney"], "cmcc": ["中国移动"],
    "小米": ["xiaomi", "mi"], "米家": ["xiaomi", "mihome", "mi"], "call": ["googlevoice"],
    "xiaomi": ["xiaomi", "mi"], "mihome": ["xiaomi", "mihome"], "ali": ["alibaba"], "阿里": ["alibaba"], "阿里系": ["alibaba"],
    "京东": ["jd", "jingdong"], "哔哩哔哩": ["bilibili", "b站", "bili"], "b站": ["bilibili"], "bili": ["bilibili"],
    "微信": ["weixin", "wechat"], "微博": ["weibo"], "知乎": ["zhihu"], "script": ["script-hub"],
    "小红书": ["xhs", "xiaohongshu", "rednot", "redbook"], "rednot": ["xhs", "xiaohongshu", "rednot", "redbook"], "抖音": ["douyin", "tiktok"], "快手": ["kuaishou"],
    "网易云": ["netease", "cloudmusic"], "百度": ["baidu"], "高德": ["amap", "gaode"],
    "腾讯": ["tencent"], "美团": ["meituan"], "拼多多": ["pdd", "pinduoduo"],
    "闲鱼": ["xianyu"], "咸鱼": ["xianyu"], "饿了么": ["eleme"], "爱奇艺": ["iqiyi"],
    "优酷": ["youku"], "淘宝": ["taobao"], "豆瓣": ["douban"], "贴吧": ["tieba"],
    "夸克": ["quark"], "12306": ["12306"], "高德地图": ["amap"]
};

const FLAG_CODES = new Set([
    "cn", "us", "hk", "tw", "jp", "kr", "sg", "uk", "gb", "de", "fr", "ca",
    "ru", "au", "mo", "vn", "th", "ph", "my", "in", "id", "br", "cl", "ar",
    "mx", "nl", "se", "no", "fi", "ch", "at", "it", "es", "pt", "tr", "ua",
    "za", "nz", "ie", "pl", "ro", "cz", "hu", "gr", "bg", "hr", "sk", "il",
    "china", "taiwan", "hongkong", "japan", "korea", "singapore", "usa",
    "united_states", "united_kingdom", "germany", "france", "russia", "australia"
]);

let remoteIconsMap = {};

function cleanText(value) {
    return String(value ?? "").replace(/\\n/g, " ").replace(/\\r/g, "").replace(/\\t/g, " ").replace(/\s+/g, " ").trim();
}

function isFlagKey(key, url = "") {
    if (!key && !url) return false;
    const k = (key || "").toLowerCase().trim();
    const u = (url || "").toLowerCase().trim();
    if (FLAG_CODES.has(k)) return true;
    const flagKeywords = ["flag", "flags", "国旗", "node", "节点", "country", "countries", "region", "regions", "geoip"];
    if (flagKeywords.some(w => k.includes(w) || u.includes(w))) return true;
    if (/\/(?:flags?|countries|regions|country)\//i.test(u)) return true;
    if (/[_\-/](?:cn|us|hk|tw|jp|kr|sg|gb|uk|de|fr|ru|au|mo|ca)\.(?:png|jpg|jpeg|svg|webp)/i.test(u)) return true;
    return false;
}

function isInvalidOr404(text) {
    if (!text) return false;
    const t = String(text);
    return /404\s*:\s*Not\s*Found/i.test(t) ||
           /404\s+Not\s+Found/i.test(t) ||
           /Cannot\s+GET/i.test(t) ||
           /(?:已失效|此模块已失效|资源已失效|链接已失效|文件已删除|文件不存在|404\s*失效)/i.test(t);
}

function normalizeRawURL(url) {
    if (!url) return "";
    let value = url.trim().replace(/^<|>$/g, "").replace(/&amp;/g, "&");
    value = value.replace(/\\([#_~`*])/g, "$1");

    if (value.includes("url=")) {
        const match = value.match(/[?&]url=([^&]+)/i) || value.match(/url=([^&]+)/i);
        if (match) {
            try { value = decodeURIComponent(match[1]); } catch(e) {}
        }
    }
    if (value.includes("install?module=")) {
        const match = value.match(/install\?module=([^&]+)/i);
        if (match) {
            try { value = decodeURIComponent(match[1]); } catch(e) {}
        }
    }

    value = value.replace(/#/g, "%23").replace(/\s+/g, "%20");

    try {
        const parsed = new URL(value);
        if (parsed.hostname === "raw.githubusercontent.com") return parsed.href;
        if (parsed.hostname === "github.com") {
            const parts = parsed.pathname.split("/").filter(Boolean);
            const rawIndex = parts.indexOf("raw") !== -1 ? parts.indexOf("raw") : parts.indexOf("blob");
            if (parts.length >= 4 && rawIndex === 2) {
                return `https://raw.githubusercontent.com/${parts[0]}/${parts[1]}/${parts[3]}/${parts.slice(4).join("/")}${parsed.search}`;
            }
        }
        return parsed.href;
    } catch { return value; }
}

function getModuleNameFromURL(rawURL) {
    if (!rawURL) return "";
    try {
        const cleanURL = String(rawURL).split(/[?#]/)[0];
        const parts = cleanURL.split("/").filter(Boolean);
        const last = parts.pop() || "";
        let decoded = decodeURIComponent(last);
        return decoded.replace(/\.(?:sgmodule|srmodule|module)$/i, "").trim();
    } catch {
        return "";
    }
}

function resolveFallbackName(fallbackName, rawURL) {
    if (fallbackName && fallbackName !== "未命名模块" && fallbackName.trim()) {
        return fallbackName.trim();
    }
    return getModuleNameFromURL(rawURL) || "未命名模块";
}

async function fetchWithTimeout(url, options = {}, timeoutMs = 8000) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    const headers = { ...options.headers };
    
    if (process.env.GITHUB_TOKEN && url.includes("api.github.com")) {
        headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
        headers["User-Agent"] = "ShadowStore-Builder";
    }

    try {
        const response = await fetch(url, { ...options, headers, signal: controller.signal });
        return response;
    } finally {
        clearTimeout(timer);
    }
}

async function fetchRawText(url, isPartial = true) {
    if (isPartial) {
        try {
            const response = await fetchWithTimeout(url, { headers: { 'Range': 'bytes=0-2047' } }, 5000);
            if (response.status === 404) return "404: Not Found";
            if (response.ok || response.status === 206) return await response.text();
        } catch (e) {}
    }
    try {
        const fallbackRes = await fetchWithTimeout(url, {}, 8000);
        if (fallbackRes.status === 404) return "404: Not Found";
        if (fallbackRes.ok) return await fallbackRes.text();
    } catch (err) {}
    throw new Error(`无法获取资源: ${url}`);
}

async function loadLuestrIcons() {
    try {
        const res = await fetchWithTimeout(CONFIG.LUESTR_TREE_API, {}, 8000);
        if (res.ok) {
            const data = await res.json();
            if (data && Array.isArray(data.tree)) {
                for (const item of data.tree) {
                    const pathName = item.path || "";
                    if (item.type === "blob" && /\.(?:png|jpg|jpeg|svg|webp)$/i.test(pathName)) {
                        const fileName = pathName.split("/").pop().replace(/\.(?:png|jpg|jpeg|svg|webp)$/i, "");
                        const url = `https://raw.githubusercontent.com/luestr/IconResource/main/${pathName}`;
                        if (!isFlagKey(fileName, url)) {
                            const cleanName = fileName.trim().toLowerCase();
                            if (cleanName.length >= 2 && !remoteIconsMap[cleanName]) {
                                remoteIconsMap[cleanName] = url;
                            }
                        }
                    }
                }
            }
        }
    } catch (e) {
        console.warn("⚠️ IconResource 图标库拉取跳过:", e.message);
    }
}

async function loadZirawellIcons() {
    try {
        const res = await fetchWithTimeout(CONFIG.ZIRAWELL_TREE_API, {}, 8000);
        if (res.ok) {
            const data = await res.json();
            if (data && Array.isArray(data.tree)) {
                for (const item of data.tree) {
                    const pathName = item.path || "";
                    if (item.type === "blob" && /^Res\/Icon\//i.test(pathName) && /\.(?:png|jpg|jpeg|svg|webp)$/i.test(pathName)) {
                        const fileName = pathName.split("/").pop().replace(/\.(?:png|jpg|jpeg|svg|webp)$/i, "");
                        const url = `https://raw.githubusercontent.com/zirawell/R-Store/main/${pathName}`;
                        if (!isFlagKey(fileName, url)) {
                            const cleanName = fileName.trim().toLowerCase();
                            if (cleanName.length >= 2 && !remoteIconsMap[cleanName]) {
                                remoteIconsMap[cleanName] = url;
                            }
                        }
                    }
                }
            }
        }
    } catch (e) {
        console.warn("⚠️ Zirawell 图标库拉取跳过:", e.message);
    }
}

async function loadRemoteIcons() {
    try {
        const response = await fetchWithTimeout(CONFIG.ICONS_JSON_URL, {}, 8000);
        if (response.ok) {
            const data = await response.json();
            const extractUrl = (item) => {
                if (typeof item === 'string') return item;
                if (typeof item === 'object' && item !== null) {
                    return item.icon || item.url || item.src || item.img || item.path || item.link || "";
                }
                return "";
            };

            const extractName = (item) => {
                if (typeof item === 'object' && item !== null) {
                    return item.name || item.title || item.label || item.id || item.app || "";
                }
                return "";
            };

            const addMap = (name, url) => {
                if (name && typeof name === 'string' && url && typeof url === 'string' && url.length > 5) {
                    if (isFlagKey(name, url)) return;
                    const cleanName = name.trim().toLowerCase();
                    if (cleanName.length < 2) return;
                    remoteIconsMap[cleanName] = url.trim();
                    const baseName = cleanName.replace(/[_-]?\d+$/, "").trim();
                    if (baseName && baseName.length >= 2 && !remoteIconsMap[baseName]) {
                        remoteIconsMap[baseName] = url.trim();
                    }
                }
            };

            if (Array.isArray(data)) {
                data.forEach(item => addMap(extractName(item), extractUrl(item)));
            } else if (data && typeof data === 'object') {
                const list = data.icons || data.data || data.list;
                if (Array.isArray(list)) {
                    list.forEach(item => addMap(extractName(item), extractUrl(item)));
                } else {
                    Object.entries(data).forEach(([k, v]) => addMap(k, extractUrl(v)));
                }
            }
        }
    } catch (e) {
        console.warn("⚠️ JSON 图标库加载异常:", e.message);
    }
    await Promise.all([
        loadLuestrIcons(),
        loadZirawellIcons()
    ]);
}

function findIconInMap(key) {
    if (!key) return "";
    const lowerKey = key.toLowerCase().trim();
    if (!lowerKey || lowerKey.length < 2) return "";

    if (remoteIconsMap[lowerKey] && !isFlagKey(lowerKey, remoteIconsMap[lowerKey])) {
        return remoteIconsMap[lowerKey];
    }

    const baseKey = lowerKey.replace(/[_-]?\d+$/, "").trim();
    if (baseKey && baseKey.length >= 2 && remoteIconsMap[baseKey] && !isFlagKey(baseKey, remoteIconsMap[baseKey])) {
        return remoteIconsMap[baseKey];
    }

    for (const [iconKey, iconUrl] of Object.entries(remoteIconsMap)) {
        if (isFlagKey(iconKey, iconUrl)) continue;
        const cleanIconKey = iconKey.replace(/[_-]?\d+$/, "").trim();
        if (cleanIconKey === lowerKey || (baseKey && cleanIconKey === baseKey)) {
            return iconUrl;
        }
    }
    return "";
}

function getMatchedIcon(name) {
    if (!name) return "";
    const lowerName = name.trim().toLowerCase();
    if (!lowerName) return "";

    if (lowerName.includes("youtube") || lowerName.includes("油管") || lowerName.includes("ytb")) {
        const ytIcon = findIconInMap("youtube");
        if (ytIcon && !isFlagKey("youtube", ytIcon)) return ytIcon;
    }

    if (lowerName.includes("小米") || lowerName.includes("米家") || lowerName.includes("xiaomi") || lowerName.includes("mihome")) {
        const miIcon = findIconInMap("xiaomi") || findIconInMap("mihome") || findIconInMap("mi");
        if (miIcon && !isFlagKey("xiaomi", miIcon)) return miIcon;
    }

    let matched = findIconInMap(lowerName);
    if (matched && !isFlagKey(lowerName, matched)) return matched;

    const cleanName = lowerName
        .replace(/(去广告|净化|移除|破解|签到|脚本|模块|解锁|自动|净化版|修复|增强|vip|pro|lite|hd|edge|plus|v\d+)/g, "")
        .replace(/[-_.\s]/g, "")
        .trim();

    if (cleanName && cleanName.length >= 2) {
        matched = findIconInMap(cleanName);
        if (matched && !isFlagKey(cleanName, matched)) return matched;
    }

    for (const [cnKeyword, enKeys] of Object.entries(APP_ALIASES)) {
        if (lowerName.includes(cnKeyword.toLowerCase())) {
            for (const key of enKeys) {
                matched = findIconInMap(key);
                if (matched && !isFlagKey(key, matched)) return matched;
            }
        }
    }

    for (const [iconName, iconUrl] of Object.entries(remoteIconsMap)) {
        if (!iconName || iconName.length < 3 || isFlagKey(iconName, iconUrl)) continue;
        const baseIconName = iconName.replace(/[_-]?\d+$/, "").trim();
        if (baseIconName.length < 3 || isFlagKey(baseIconName, iconUrl)) continue;

        if (lowerName.includes(iconName) || lowerName.includes(baseIconName)) {
            return iconUrl;
        }
    }
    return "";
}

function parseRepositoryModules(markdown) {
    if (!markdown) return [];
    const result = [];
    let currentHeading = "";
    const lines = markdown.split(/\r?\n/);

    for (const rawLine of lines) {
        const line = rawLine.trim();
        if (!line) continue;

        const headingMatch = line.match(/^(?:#{1,6}|\*|-|\+)\s*(?:\[([^\]]+)\]|`([^`]+)`|([^\n(#*]+))/);
        if (headingMatch) {
            const rawTitle = (headingMatch[1] || headingMatch[2] || headingMatch[3] || "").trim();
            const cleanTitle = cleanText(rawTitle.replace(/[*`_#]/g, "").replace(/^[🚀📁📦\s]+/, ""));
            if (cleanTitle && cleanTitle.length >= 2) currentHeading = cleanTitle;
        }

        let decodedLine = line;
        for (let i = 0; i < 2; i++) {
            try {
                const next = decodeURIComponent(decodedLine);
                if (next === decodedLine) break;
                decodedLine = next;
            } catch (e) { break; }
        }

        const rawRegex = /(https?:\/\/[^\s)\]"'<>]+?\.(?:sgmodule|srmodule|module)(?:[^\s)\]"'<>]*)?)/ig;
        let match;
        while ((match = rawRegex.exec(decodedLine)) !== null) {
            let rawURL = match[1].replace(/[),\]"'<>]+$/g, "");
            rawURL = normalizeRawURL(rawURL);
            if (!rawURL || !/\.(?:sgmodule|srmodule|module)(?:$|[?#%])/i.test(rawURL)) continue;

            result.push({
                name: getModuleNameFromURL(rawURL) || currentHeading || "未命名模块",
                rawURL
            });
        }
    }

    const seen = new Set();
    return result.filter(item => {
        const key = item.rawURL.toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
}

async function fetchFMZModules() {
    const modules = [];
    try {
        const res = await fetchWithTimeout(CONFIG.FMZ_TREE_API, {}, 8000);
        if (res.ok) {
            const data = await res.json();
            if (data && Array.isArray(data.tree)) {
                for (const item of data.tree) {
                    const pathName = item.path || "";
                    if (item.type === "blob" && pathName.startsWith("Shadowrocket/module/") && /\.(?:sgmodule|srmodule|module)$/i.test(pathName)) {
                        const fileName = pathName.split("/").pop().replace(/\.(?:sgmodule|srmodule|module)$/i, "");
                        const rawURL = normalizeRawURL(`https://raw.githubusercontent.com/fmz200/wool_scripts/main/${pathName}`);
                        modules.push({ name: fileName, rawURL });
                    }
                }
            }
        }
    } catch (e) {
        console.warn("⚠️ FMZ 模块拉取跳过:", e.message);
    }
    return modules;
}

async function fetchZirawellModules() {
    const modules = [];
    try {
        const readme = await fetchRawText(CONFIG.ZIRAWELL_README_URL, false);
        const fromReadme = parseRepositoryModules(readme);
        fromReadme.forEach(m => modules.push(m));
    } catch (e) {}

    try {
        const res = await fetchWithTimeout(CONFIG.ZIRAWELL_TREE_API, {}, 8000);
        if (res.ok) {
            const data = await res.json();
            if (data && Array.isArray(data.tree)) {
                for (const item of data.tree) {
                    const pathName = item.path || "";
                    if (item.type === "blob" && pathName.startsWith("Rule/Surge/") && /\.(?:sgmodule|srmodule|module)$/i.test(pathName)) {
                        const fileName = pathName.split("/").pop().replace(/\.(?:sgmodule|srmodule|module)$/i, "");
                        const rawURL = normalizeRawURL(`https://raw.githubusercontent.com/zirawell/R-Store/main/${pathName}`);
                        modules.push({ name: fileName, rawURL });
                    }
                }
            }
        }
    } catch (e) {
        console.warn("⚠️ Zirawell 模块拉取跳过:", e.message);
    }
    return modules;
}

function parseGitHubRawURL(rawURL) {
    try {
        const url = new URL(rawURL);
        if (url.hostname === "raw.githubusercontent.com" || url.hostname === "github.com") {
            const parts = url.pathname.split("/").filter(Boolean);
            if (parts.length >= 2) {
                return { owner: parts[0], repo: parts[1], fullName: `${parts[0]}/${parts[1]}`, url: `https://github.com/${parts[0]}/${parts[1]}` };
            }
        }
    } catch { return null; }
    return null;
}

function getSourceRepoInfo(rawURL, githubInfo) {
    if (githubInfo) return { name: githubInfo.repo, url: githubInfo.url };
    try {
        const url = new URL(rawURL);
        return { name: url.hostname, url: url.origin };
    } catch {
        return { name: "开源仓库", url: "#" };
    }
}

function getAuthorFromURL(rawURL, githubInfo) {
    if (githubInfo) return { name: githubInfo.owner, url: `https://github.com/${encodeURIComponent(githubInfo.owner)}`, username: githubInfo.owner };
    try {
        const url = new URL(rawURL);
        const host = url.hostname.toLowerCase().replace(/^www\./, "");
        const parts = host.split(".");
        const domain = parts.length >= 2 ? parts[0] : host;
        return { name: domain, url: url.origin, username: "" };
    } catch {
        return { name: "作者信息识别失败", url: "", username: "" };
    }
}

function parseModuleMetadata(text, fallbackName, rawURL = "") {
    const metadata = {};
    const lines = text.split(/\r?\n/);

    for (let i = 0; i < Math.min(lines.length, 100); i++) {
        const line = lines[i].trim();
        if (!line) continue;

        if (line.startsWith("#!")) {
            const match = line.match(/^#!\s*([a-zA-Z0-9_-]+)\s*=\s*(.*)$/i);
            if (match) metadata[match[1].trim().toLowerCase()] = cleanText(match[2]);
            continue;
        }

        const commentMatch = line.match(/^(?:#|\/\/)\s*@?(?:name|规则名称|模块名称)\s*[:=]\s*(.+)$/i);
        if (commentMatch && !metadata.name) {
            metadata.name = cleanText(commentMatch[1]);
        }
    }

    const declaredName = metadata.name || "";
    const resolvedName = declaredName || resolveFallbackName(fallbackName, rawURL);

    return {
        name: resolvedName,
        declaredName,
        description: metadata.desc || "",
        icon: metadata.icon || ""
    };
}

function generateDescription(metadata, rawText) {
    if (metadata.description) return metadata.description;
    const lines = rawText.split(/\r?\n/);
    const comments = [];
    for (let i = 0; i < Math.min(lines.length, 40); i++) {
        let line = lines[i].trim();
        if (!line || line.startsWith("#!") || line.startsWith("//")) continue;
        if (line.startsWith("#")) {
            line = line.replace(/^#+\s*/, "").trim();
            if (line && !/^[-=*]+$/.test(line) && line.length >= 4) comments.push(line);
        }
    }
    if (comments.length) return comments.slice(0, 2).join(" ");
    return `${metadata.name} 模块信息获取失败，请自行判断该模块的作用和有效性。`;
}

function resolveIconURL(icon, rawURL) {
    if (!icon) return "";
    icon = icon.trim();
    if (isFlagKey("", icon)) return "";
    if (icon.startsWith("data:")) return icon;
    if (/^https?:\/\//i.test(icon)) return normalizeRawURL(icon);
    try { 
        const safeIcon = icon.replace(/#/g, "%23").replace(/\s+/g, "%20");
        return new URL(safeIcon, rawURL).href; 
    } catch { return ""; }
}

function extractIconKeyFromPath(iconStr) {
    if (!iconStr) return "";
    try {
        const clean = iconStr.split(/[?#]/)[0].trim();
        const fileName = clean.split("/").pop() || "";
        return fileName.replace(/\.(?:png|jpg|jpeg|svg|webp)$/i, "").trim().toLowerCase();
    } catch {
        return "";
    }
}

function resolveModuleIcon(metadata, rawURL) {
    let rawIcon = metadata.icon ? metadata.icon.trim() : "";

    if (rawIcon) {
        const key = extractIconKeyFromPath(rawIcon);
        if (key) {
            const matchedVerifiedIcon = findIconInMap(key);
            if (matchedVerifiedIcon) return matchedVerifiedIcon;
        }

        let fixedIcon = rawIcon;
        if (fixedIcon.includes("zirawell/R-Store")) {
            fixedIcon = fixedIcon
                .replace("/master/", "/main/")
                .replace("/Rule/Res/Icon/", "/Res/Icon/")
                .replace("/Icon/", "/Res/Icon/");
        }

        const resolved = resolveIconURL(fixedIcon, rawURL);
        if (resolved && !resolved.includes("/Rule/Res/Icon/")) {
            return resolved;
        }
    }

    if (metadata.declaredName) {
        const matched = getMatchedIcon(metadata.declaredName);
        if (matched) return matched;
    }

    const fileName = getModuleNameFromURL(rawURL);
    if (fileName) {
        const matched = getMatchedIcon(fileName);
        if (matched) return matched;
    }

    if (metadata.name) {
        const matched = getMatchedIcon(metadata.name);
        if (matched) return matched;
    }

    return "";
}

function createInstallURL(rawURL) { 
    return "shadowrocket://install?module=" + encodeURIComponent(rawURL); 
}

function getPinnedRank(item) {
    if (!item) return 9999;
    const rawURL = (item.rawURL || "").toLowerCase();
    if (rawURL.includes("ddgksf2013.top")) return 9999;

    const name = (item.name || "").toLowerCase().replace(/[\s_\-.]/g, "");
    const isFromMyRepo = Boolean(item.fromMyRepo || rawURL.includes("lowertop"));

    if (isFromMyRepo) {
        if (name.includes("scripthub") || rawURL.includes("script-hub") || rawURL.includes("scripthub")) return 1;
        if (name.includes("substore") || rawURL.includes("sub-store") || rawURL.includes("substore")) return 2;
        if (name.includes("boxjs") || rawURL.includes("boxjs") || name.includes("box.js")) return 3;
    }
    return 9999;
}

function sortPinnedModules(list) {
    if (!Array.isArray(list)) return [];
    return [...list].sort((a, b) => getPinnedRank(a) - getPinnedRank(b));
}

async function fetchModule(item) {
    const githubInfo = parseGitHubRawURL(item.rawURL);
    const sourceInfo = getSourceRepoInfo(item.rawURL, githubInfo);
    const urlAuthor = getAuthorFromURL(item.rawURL, githubInfo);
    const avatarUrl = githubInfo ? `https://github.com/${encodeURIComponent(githubInfo.owner)}.png?size=64` : "";
    const fromMyRepo = item.fromMyRepo || false;

    try {
        const rawText = await fetchRawText(item.rawURL, true);
        const metadata = parseModuleMetadata(rawText, item.name, item.rawURL);
        const description = generateDescription(metadata, rawText);

        if (description && description.includes("已合并至")) return null;
        
        const icon = resolveModuleIcon(metadata, item.rawURL);

        const isDubious = isInvalidOr404(rawText) || isInvalidOr404(description);
        let authorAvatar = urlAuthor.username
            ? `https://github.com/${encodeURIComponent(urlAuthor.username)}.png?size=64`
            : avatarUrl;

        const _searchKeywords = [metadata.name, description, urlAuthor.name, sourceInfo.name].join(" ").toLowerCase();

        return {
            name: metadata.name,
            rawURL: item.rawURL,
            description,
            author: urlAuthor,
            authorAvatar,
            icon,
            sourceName: sourceInfo.name,
            sourceURL: sourceInfo.url,
            installURL: createInstallURL(item.rawURL),
            isDubious,
            fromMyRepo,
            _searchKeywords
        };
    } catch (error) {
        const resolvedName = resolveFallbackName(item.name, item.rawURL);
        const fallbackDescription = `${resolvedName || "该模块"} 模块信息获取失败，请自行判断该模块的作用和有效性。`;
        if (fallbackDescription.includes("已合并至")) return null;

        const fallbackIconUrl = getMatchedIcon(resolvedName) ? resolveIconURL(getMatchedIcon(resolvedName), item.rawURL) : "";
        const _searchKeywords = [resolvedName, fallbackDescription, urlAuthor.name, sourceInfo.name].join(" ").toLowerCase();

        return {
            name: resolvedName,
            rawURL: item.rawURL,
            description: fallbackDescription,
            author: urlAuthor,
            authorAvatar: avatarUrl,
            icon: fallbackIconUrl,
            sourceName: sourceInfo.name,
            sourceURL: sourceInfo.url,
            installURL: createInstallURL(item.rawURL),
            isDubious: true,
            fromMyRepo,
            _searchKeywords
        };
    }
}

async function processModulesPool(items) {
    const results = new Array(items.length);
    let currentIndex = 0;
    async function worker() {
        while (true) {
            const index = currentIndex++;
            if (index >= items.length) return;
            results[index] = await fetchModule(items[index]);
            if (index % 25 === 0 || index === items.length - 1) {
                console.log(`⏳ 抓取进度: ${Math.min(index + 1, items.length)}/${items.length}`);
            }
        }
    }
    const workerCount = Math.min(CONFIG.CONCURRENCY, items.length);
    await Promise.all(Array.from({ length: workerCount }, () => worker()));
    return results.filter(Boolean);
}

async function main() {
    console.log("🚀 开始拉取上游数据与图标库...");
    
    let repoMarkdown = "";
    try { repoMarkdown = await fetchRawText(CONFIG.REPO_README_URL, false); } catch (e) {}
    if (!repoMarkdown) {
        try { repoMarkdown = await fetchRawText(CONFIG.REPO_README_BACKUP, false); } catch (e2) {}
    }

    const [fmzModules, zirawellModules] = await Promise.all([
        fetchFMZModules(),
        fetchZirawellModules(),
        loadRemoteIcons()
    ]);

    const localModules = parseRepositoryModules(repoMarkdown).map(m => ({ ...m, fromMyRepo: true }));

    const seenURLs = new Set();
    let sourceModules = [...localModules, ...zirawellModules, ...fmzModules].filter(item => {
        if (!item.rawURL || !/\.(?:sgmodule|srmodule|module)(?:$|[?#%])/i.test(item.rawURL) || seenURLs.has(item.rawURL.toLowerCase())) return false;
        seenURLs.add(item.rawURL.toLowerCase());
        return true;
    });

    console.log(`📦 共发现 ${sourceModules.length} 个独立模块，开始并发处理...`);
    sourceModules = sortPinnedModules(sourceModules);

    const finalModules = await processModulesPool(sourceModules);
    const sortedResult = sortPinnedModules(finalModules);

    const outputPath = path.join(__dirname, '..', 'modules.json');
    fs.writeFileSync(outputPath, JSON.stringify(sortedResult, null, 2), 'utf-8');
    
    console.log(`✅ 构建完成！共输出 ${sortedResult.length} 个模块至 ${outputPath}`);
}

main().catch(err => {
    console.error("❌ 构建发生严重错误:", err);
    process.exit(1);
});
