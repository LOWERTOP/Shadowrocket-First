import os
from datetime import datetime, timezone, timedelta

def get_latest_timestamp():
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
    return local_time.strftime("%Y-%m-%d %H:%M:%S")

def update_readme(timestamp):
    readme_path = "README.md"
    with open(readme_path, "r", encoding="utf-8") as file:
        content = file.read()

    # 查找 > ` 更新时间 ` 位置，并插入时间戳
    position = content.find("> ` 更新时间 `")  # 找到更新时间的标记
    if position != -1:
        # 从 > ` 更新时间 ` 开始，找到换行符的位置
        newline_position = content.find("\n", position)
        # 将 > ` 更新时间 ` 后面的内容替换为时间戳
        new_content = content[:newline_position] + f"\n> ` 更新时间 ` {timestamp}" + content[newline_position + 1:]
    else:
        # 如果没有找到标记，可以选择将其添加到文件末尾或指定位置
        new_content = content + f"\n> ` 更新时间 ` {timestamp}"

    with open(readme_path, "w", encoding="utf-8") as file:
        file.write(new_content)

if __name__ == "__main__":
    latest_timestamp = get_latest_timestamp()
    update_readme(latest_timestamp)
