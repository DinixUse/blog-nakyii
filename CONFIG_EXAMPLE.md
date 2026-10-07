# 博客配置示例

这个文件展示了 `_config.yml` 中的所有可用配置选项。

## 完整配置示例

```yaml
# 博客基本信息
title: Nakyii's Blog
markdown: kramdown
url: "https://dinixuse.github.io/"
baseurl: "/blog-nakyii"

# 页面背景图片设置
page_background: "https://example.com/your-background-image.jpg" # 设置你的背景图片URL
sidebar_background_opacity: 0.95 # 侧边栏背景不透明度 (0.0 - 1.0)
page_background_opacity: 1.0 # 页面背景不透明度 (0.0 - 1.0)

# 作者信息
author:
  name: Nakyii
  email: dinix_never@outlook.com

# 插件配置
plugins:
  - jemoji
  - jekyll-seo-tag
  - jekyll-sitemap
  - jekyll-feed

# 集合配置
collections_dir: all_collections
collections:
  posts:
    output: true

# 默认配置
defaults:
  - scope:
      path: "_posts"
    values:
      layout: "post"
      permalink: /posts/:title/

# 排除文件
exclude: ["sitemap.xml", "feed.xml", "LICENSE", "README.md"]
```

## 配置说明

### 页面背景设置

- `page_background`: 页面背景图片URL
  - 留空字符串 `""` 表示不使用背景图片
  - 支持jpg、png、webp等常见格式
  - 图片会自动适应屏幕大小并居中显示

- `sidebar_background_opacity`: 侧边栏背景不透明度
  - 范围：0.0 - 1.0
  - 0.0 = 完全透明
  - 1.0 = 完全不透明
  - 默认值：0.95

- `page_background_opacity`: 页面背景不透明度
  - 范围：0.0 - 1.0
  - 0.0 = 背景图片完全透明（显示页面背景色）
  - 1.0 = 背景图片完全不透明
  - 默认值：1.0

### 其他配置

- `title`: 博客标题
- `markdown`: Markdown处理器
- `url`: 网站完整URL
- `baseurl`: 网站基础路径
- `author`: 作者信息
- `plugins`: 启用的Jekyll插件
- `collections_dir`: 集合目录
- `collections`: 集合配置
- `defaults`: 默认配置
- `exclude`: 构建时排除的文件

## 常用配置示例

### 1. 完全透明侧边栏
```yaml
sidebar_background_opacity: 0.0
page_background_opacity: 1.0
```

### 2. 半透明侧边栏 + 半透明背景
```yaml
sidebar_background_opacity: 0.7
page_background_opacity: 0.8
```

### 3. 不透明侧边栏 + 高度透明背景
```yaml
sidebar_background_opacity: 1.0
page_background_opacity: 0.3
```

### 4. 默认设置
```yaml
sidebar_background_opacity: 0.95
page_background_opacity: 1.0
```