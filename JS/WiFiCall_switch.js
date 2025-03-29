(function() {
    // 解析传入的参数，格式例如 "group=WiFiCall,enable=true"
    let args = {};
    if ($argument) {
        $argument.split(',').forEach(function(item) {
            let parts = item.split('=');
            if (parts.length === 2) {
                args[parts[0].trim()] = parts[1].trim();
            }
        });
    }

    // 当开关开启时（enable为true）则返回对应策略
    if (args.enable && args.enable.toLowerCase() === 'true') {
        // 返回策略 WiFiCall，Shadowrocket 内部会根据该返回值选择代理节点，
        // 效果上等同于规则 "DOMAIN-SUFFIX,gspe1-ssl.ls.apple.com,WiFiCall"
        $done({policy: "WiFiCall"});
    } else {
        // 否则不做修改，继续默认走原有规则
        $done({});
    }
})();
