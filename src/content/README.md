# src/content
- 用途：存放用于渲染首页和系统页面的核心文本，包含 FAQ 和法律条款的原始文本。
- 关键入口：`home.ts` (首页核心文案)、`system-pages.ts` (条款/隐私/联系政策文案)
- 边界/依赖：不包含页面样式与渲染逻辑，纯为数据文件，供页面组件导入渲染。
> 一旦本目录内容变化，请更新本文件

## Files
- home.ts：首页文案数据，提供快照数据、常见问题 (FAQ)、地图/工具入口列表以及趋势搜索词。
- system-pages.ts：独立粉丝站的 About, Contact, Privacy, Terms, Editorial Policy, Ad Policy 详细条款数据。
