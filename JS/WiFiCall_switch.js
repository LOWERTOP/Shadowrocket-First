(function() {
    // 解析传入的参数，格式示例："group=WiFiCall,enable=true"
    let args = {};
    if ($argument) {
        $argument.split(',').forEach(function(item) {
            let parts = item.split('=');
            if (parts.length === 2) {
                args[parts[0].trim()] = parts[1].trim();
            }
        });
    }

    // 检查开关状态及代理组名称
    if (args.enable && args.enable.toLowerCase() === 'true' && args.group) {
        // 当地区定位开关开启时，返回指定的代理组
        // 注意：Shadowrocket 的脚本环境允许通过返回 policy 来切换代理策略
        $done({policy: args.group});
    } else {
        // 否则，保持默认处理（可以直接返回空对象，表示不做修改）
        $done({});
    }
})();
