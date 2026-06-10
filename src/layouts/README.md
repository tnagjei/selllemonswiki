# src/layouts
- 用途：定义网站的公共 HTML 外层布局结构，包装并传递 Meta 元素和样式引用。
- 关键入口：`SiteLayout.astro`
- 边界/依赖：作为所有 `src/pages/` 中 Astro 路由的统一包装器，控制搜索引擎索引及 Canonical 头设置。
> 一旦本目录内容变化，请更新本文件

## Files
- SiteLayout.astro：基础页面外壳组件，渲染标准头部、公共导航栏、内容占位符及网站页脚。
