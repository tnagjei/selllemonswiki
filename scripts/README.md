# scripts
- 用途：提供构建期本地脚本，用于在 Node 进程下自动化生成配置文件、静态 SEO 文件和运行静态断言验证。
- 关键入口：`init-new-site.mjs` (初次建站初始化)、`validate-template.mjs` (结构自检)
- 边界/依赖：仅在项目构建和开发准备阶段被 package.json 命令触发运行，不参与最终的客户端页面打包。
> 一旦本目录内容变化，请更新本文件

## Files
- audit-new-site.mjs：审核脚手架，校验旧模板残留路径、系统页面和已完成 English-only 页面文件。
- generate-favicons.mjs：依据品牌色和特色配置主题，自动批量剪切出各类高清 favicon 图标和系统图标包。
- generate-seo-files.mjs：根据 config 中已完成路由生成 sitemap.xml、robots.txt 爬虫指示器以及 llms.txt。
- init-new-site.mjs：供新开站时使用，接收命令行参数快速对整个工程的初始状态做骨架填充。
- validate-static-export.mjs：校验最终 Astro 静态导出的 dist/ 目录是否符合 config 路由、SEO 路径和内容合法性要求。
- validate-template.mjs：用于持续集成检查，确保所有页面都存在、导航定义和配置无疏漏。
