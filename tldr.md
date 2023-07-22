# tldr

> 简化过的 man 帮助手册。
> 更多信息：<https://tldr.sh>.

- 获取一个命令的用例（提示：这就是你怎么得到本信息的）：

`tldr {{command}}`

- 展示 Linux 下 tar 的 tldr 文档：

`tldr -p {{linux}} {{tar}}`

- 获取一个 Git 子命令的帮助：

`tldr {{git checkout}}`

- 更新本地页面（如果客户端支持缓存）：

`tldr -u`

> 常用示例：

- 获得命令帮助：

`tldr {{command}}`

- 获得子命令帮助：

`tldr {{command subcommand}}`

- 更新本地库缓存：

`tldr -u`

- 指定对应系统的命令帮助：

`tldr {{command}} {{--linux | --windows | --osx | --sunos}}`

- 指定颜色主题展示命令帮助：

`tldr {{command}} -t {{simple | base16 | ocean}}`
