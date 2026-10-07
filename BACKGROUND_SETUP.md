# 页面背景图片设置

这个博客现在支持自定义页面背景图片功能。

## 如何设置背景图片

1. 打开 `_config.yml` 文件
2. 找到 `page_background` 配置项
3. 设置你的背景图片URL：

```yaml
page_background: "https://example.com/your-background-image.jpg"
```

4. 保存文件

## 功能说明

- 背景图片会覆盖整个页面，不仅仅是文章区域
- 背景图片会自动适应屏幕大小（cover）
- 背景图片会居中显示
- 背景图片会固定在视口中（不会随页面滚动而移动）

## 示例

```yaml
page_background: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
```

## 注意事项

- 确保图片URL是有效的
- 建议使用高质量的图片以获得最佳效果
- 图片格式支持：jpg, png, webp等常见格式
- 如果不需要背景图片，可以将 `page_background` 设置为空字符串：`page_background: ""`

## 透明度设置

博客支持两个透明度配置选项：

```yaml
# 侧边栏背景不透明度 (0.0 - 1.0)
# 0.0 = 完全透明, 1.0 = 完全不透明
sidebar_background_opacity: 0.95

# 页面背景不透明度 (0.0 - 1.0) 
# 0.0 = 完全透明, 1.0 = 完全不透明
page_background_opacity: 1.0
```

### 透明度说明

- **侧边栏背景不透明度**：控制侧边栏背景的透明程度
  - 设置为 `0.0` 时侧边栏完全透明
  - 设置为 `1.0` 时侧边栏完全不透明
  - 默认值：`0.95`

- **页面背景不透明度**：控制页面背景图片的透明程度
  - 设置为 `0.0` 时背景图片完全透明（显示页面背景色）
  - 设置为 `1.0` 时背景图片完全不透明
  - 默认值：`1.0`

### 示例配置

```yaml
# 页面背景图片
page_background: "https://example.com/your-background.jpg"

# 透明度设置
sidebar_background_opacity: 0.9
page_background_opacity: 0.8
```