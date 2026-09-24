# 友链语法使用指南

## 概述

友链语法是为 Jekyll 博客项目添加的一种自定义语法，用于在文章中生成美观的友链卡片。

## 语法格式

```
{Link}[logo图片网址][网站名称][网站简介][网站链接]
```

## 参数说明

1. **logo图片网址**：友链网站的 logo 图片链接
2. **网站名称**：友链网站的名称（建议简洁明了）
3. **网站简介**：友链网站的简短描述（建议20字以内）
4. **网站链接**：友链网站的完整 URL

## 使用示例

### 基本示例

```markdown
{Link}[https://github.com/octocat.png][GitHub][全球最大的代码托管平台][https://github.com]
```

### 多个友链

```markdown
{Link}[https://github.com/octocat.png][GitHub][全球最大的代码托管平台][https://github.com]

{Link}[https://developer.mozilla.org/static/media/logo-wordmark.1f04f4158c9c.svg][MDN Web Docs][Web开发者的权威文档][https://developer.mozilla.org]

{Link}[https://vuejs.org/logo.svg][Vue.js][渐进式JavaScript框架][https://vuejs.org]
```

### 网格布局

```markdown
<div class="friend-links-grid">
{Link}[https://github.com/octocat.png][GitHub][全球最大的代码托管平台][https://github.com]
{Link}[https://developer.mozilla.org/static/media/logo-wordmark.1f04f4158c9c.svg][MDN Web Docs][Web开发者的权威文档][https://developer.mozilla.org]
{Link}[https://vuejs.org/logo.svg][Vue.js][渐进式JavaScript框架][https://vuejs.org]
</div>
```

## 样式特点

### 视觉效果
- 卡片式设计，圆角边框
- 左侧显示 logo，右侧显示名称和简介
- 悬停时有上移和阴影效果
- 响应式设计，适配移动端

### 颜色主题
- 自动适配亮色/暗色主题
- 使用 Material Design 3 配色方案
- 文字颜色根据背景自动调整

### 交互功能
- 点击卡片跳转到对应网站
- 新窗口打开，确保安全
- 图片加载失败时显示默认 logo（网站名称首字母）

## 注意事项

1. **图片链接**：确保 logo 图片链接有效且可访问
2. **字符限制**：网站名称和简介建议简洁，避免过长
3. **特殊字符**：如果名称或简介包含特殊字符，确保正确编码
4. **链接格式**：使用完整的 URL，包括 `http://` 或 `https://`

## 技术实现

### 文件结构
- `_plugins/link_filter.rb`：自定义 Liquid 过滤器
- `_layouts/post.html`：应用过滤器到文章内容
- `assets/css/post.css`：友链卡片样式

### 解析逻辑
- 正则表达式匹配 `{Link}` 开头的语法
- 提取四个参数并生成 HTML 结构
- 应用 CSS 样式美化显示

### 错误处理
- 图片加载失败时显示默认 logo
- 参数缺失时跳过解析
- 无效链接时保持原始文本

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 自定义样式

如需自定义友链样式，可以修改 `assets/css/post.css` 中的相关 CSS 类：

```css
.friend-link-card      /* 卡片容器 */
.friend-link-wrapper   /* 链接包装器 */
.friend-link-logo      /* Logo 容器 */
.friend-link-content   /* 内容容器 */
.friend-link-name      /* 网站名称 */
.friend-link-description /* 网站简介 */
```