# src/lib
- 用途：存放通用库、SEO 工具模块及多语言路由生成器等公共辅助脚本。
- 关键入口：`analytics.ts` (前端打点脚本)、`seo.ts` (JSON-LD 辅助)
- 边界/依赖：不包含样式或 Astro 页面结构，纯为 JS/TS 纯逻辑层工具，被各页面和组件广泛调用。
> 一旦本目录内容变化，请更新本文件

## Files
- analytics.ts：Google Analytics (GA4) 的统计核心，过滤非法参数并阻止个人隐私泄露。
- navigation.ts：定义当前 wiki-hub 可导出的所有内链与语言环境列表。
- seo.ts：自动构造符合 Schema.org 规范的网页结构化 JSON-LD 数据，以便搜索引擎抓取解析。
