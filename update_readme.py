import os
import time
from datetime import datetime, timezone, timedelta

def get_latest_timestamp():
    """获取最新的时间戳（东八区时间，精确到分钟）"""
    latest_time = 0
    for root, _, files in os.walk("."):
        for file in files:
            file_path = os.path.join(root, file)
            if os.path.isfile(file_path) and not file_path.startswith("./.git"):
                file_mtime = os.path.getmtime(file_path)
                if file_mtime > latest_time:
                    latest_time = file_mtime
    # 将时间从 UTC 转换为东八区时间
    utc_time = datetime.fromtimestamp(latest_time, tz=timezone.utc)
    local_time = utc_time.astimezone(timezone(timedelta(hours=8)))
    return local_time.strftime("%Y-%m-%d %H:%M")  # 去除秒，精确到分钟

def update_readme(timestamp):
    """更新 README.md 文件中的时间戳"""
    readme_path = "README.md"
    with open(readme_path, "r", encoding="utf-8") as file:
        content = file.read()

    # 定位 `> ` 更新时间 ``
    marker = "> ` 更新时间 `"
    position = content.find(marker)
    if position != -1:
        # 找到标记后面的时间戳部分
        time_start = position + len(marker) + 1  # 时间戳起点（跳过空格）
        newline_position = content.find("\n", time_start)  # 查找行尾

        # 提取现有时间戳
        existing_timestamp = content[time_start:newline_position].strip() if newline_position != -1 else ""

        # 如果时间戳已经是最新的，退出
        if existing_timestamp == timestamp:
            print("时间戳已是最新，无需更新。")
            return

        # 延时 3 分钟
        print("检测到文件更新，等待 3 分钟后更新时间戳...")
        time.sleep(180)

        # 替换时间戳为最新的时间
        new_content = content[:time_start] + timestamp + content[newline_position:]
    else:
        # 如果没有找到标记，报错提示用户
        print(f"未找到标记 {marker}，请确保 README.md 中包含该标记。")
        return

    # 写入更新后的内容
    with open(readme_path, "w", encoding="utf-8") as file:
        file.write(new_content)
    print("README.md 文件已更新。")

if __name__ == "__main__":
    latest_timestamp = get_latest_timestamp()
    update_readme(latest_timestamp)
