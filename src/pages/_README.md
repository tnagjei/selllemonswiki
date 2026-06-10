# src/pages
- 用途：Astro 框架的路由和页面渲染目录，其中每个文件直接对应网站的一个公开页面。
- 关键入口：`index.astro` (首页)、各功能内页如 `codes.astro` 等
- 边界/依赖：依赖 `src/layouts/SiteLayout.astro` 作为统一的页面排版和 TDK 头骨架。
> 一旦本目录内容变化，请更新本文件

## Files
- about.astro：关于页面，包含对站点的介绍说明和独立粉丝站的声明。
- codes.astro：兑换码监控页面，呈现官方及社区反馈的最新兑换码状态。
- contact.astro：联系我们页面，提供用户纠错和合作联系渠道。
- deals.astro：交易与 NPC 议价策略指南。
- editorial-policy.astro：编辑政策与证据等级标准声明。
- income-sources.astro：罗列所有收入来源以及其升级扩张路线。
- index.astro：网站主页，承载主要指引和快捷入口。
- privacy.astro：隐私政策页面（已设置为 noindex，防止被搜索引擎抓取）。
- progression.astro：游戏的成长阶段和进度推进指南。
- rebirths.astro：重生要求、永久奖励增益以及技巧建议。
- terms.astro：使用条款页面（已设置为 noindex）。
