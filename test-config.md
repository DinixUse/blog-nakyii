---
layout: blog
title: 配置测试页面
---

# 配置测试页面

这个页面用于测试背景图片和透明度配置是否正常工作。

## 配置内容

- 页面背景图片：{{ site.page_background }}
- 侧边栏背景不透明度：{{ site.sidebar_background_opacity }}
- 页面背景不透明度：{{ site.page_background_opacity }}

## 预期效果

1. 页面应该显示背景图片
2. 侧边栏背景透明度应该为 0.5（50%）
3. 页面背景透明度应该为 0.5（50%）

如果看到这个页面，说明配置已经正确加载。