/*
 * Mi3D-Enhance
 * Version: 0.1
 * Author: LOWERTOP
 */

(() => {

const url = $request.url;
const args = parseArgument();

try {

    let obj = JSON.parse($response.body);

    if (/\/buttonConfig\/1(?:\?|$)/.test(url)) {
        processTab(obj);
    }

    $done({
        body: JSON.stringify(obj)
    });

} catch (e) {

    console.log("Mi3D Enhance");
    console.log(e);

    $done({});

}

function processTab(obj) {

    if (!obj || !Array.isArray(obj.data))
        return;

    const hide = {
        "首页": args.hide_home,
        "社区": args.hide_community,
        "创意": args.hide_creative,
        "消息": args.hide_message,
        "我的": args.hide_me
    };

    obj.data = obj.data.filter(item => {

        const name = item.name || "";

        if (hide[name] === true)
            return false;

        return true;

    });

}

function parseArgument() {

    let result = {};

    if (!$argument)
        return result;

    $argument.split("&").forEach(item => {

        let kv = item.split("=");

        if (kv.length != 2)
            return;

        result[kv[0]] = kv[1] == "true";

    });

    return result;

}

})();
