# 磁力链接补全 (Magnet Link Completer)

Chrome 扩展：选中网页中的哈希字符串，右键一键补全 `magnet:?xt=urn:btih:` 前缀并复制到剪贴板。

## 功能

- 选中网页文本 → 右键 → **补全磁力链接并复制**
- 纯哈希（如 `a1b2c3...`）自动补全为 `magnet:?xt=urn:btih:a1b2c3...`
- 已带 `magnet:?` 开头的文本保持原样，不会重复拼接
- 复制成功后页面顶部显示提示
- 使用 Manifest V3

## 安装（开发者模式）

1. 下载本项目 zip 或 `git clone` 到本地
2. Chrome 打开 `chrome://extensions`
3. 右上角开启 **开发者模式**
4. 点击 **加载已解压的扩展程序**，选择本项目文件夹
5. 完成：网页中选中字符串 → 右键 → 补全磁力链接并复制

## 文件结构

```
├── manifest.json   # 扩展配置 (Manifest V3)
├── background.js   # 右键菜单 + 剪贴板写入逻辑
└── Magnet.png      # 扩展图标
```

## 使用截图

选中哈希字符串后右键菜单中出现「补全磁力链接并复制」。

## License

MIT
