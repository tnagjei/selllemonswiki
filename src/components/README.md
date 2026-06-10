# src/components
- 用途：提供各个页面通用的 UI 单元以及用于 GA4 数据追踪统计的分析组件。
- 关键入口：`Header.astro`、`Footer.astro`
- 边界/依赖：依赖 `src/lib/analytics.ts` 进行无阻塞的数据打点和流量统计。
> 一旦本目录内容变化，请更新本文件

## Files
- CopyButton.astro：点击自动复制文本到剪贴板，并触发 copy_action 数据埋点。
- Footer.astro：统一底栏，展示游戏平台版权免责说明和 5 个 AdSense 必需的系统页面链接。
- Header.astro：顶栏导航组件，读取系统导航配置并支持快速语言跳转。
- HomeHero.astro：主页头图看板，展示关于当前系统状态的简明指标和进入官方游戏的按钮。
- RelatedGuides.astro：各子页面下方的内链推荐组件，实现页面间的闭环引导以优化 SEO 的三击可达原则。
- ToolEventTracker.astro：在用户操作指南输入栏时，无阻塞地向 Google Analytics 发送统计信号。
- TrackedLink.astro：包装过的链接组件，监听并向统计后台推送 outbound_link_click 等跳出信息。
