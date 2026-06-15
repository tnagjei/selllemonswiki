# src/pages
- 用途：存放 Sell Lemons Wiki 的所有前端页面和子路由
- 关键入口：index.astro (首页), profit-calculator.astro (收益计算器), maze-map.astro (地图入口), sewer-maze-map.astro (迷宫地图), lever-sequence.astro (拉杆清单), progression.astro (升级指南)
- 边界/依赖：依赖 layouts/ 目录的公共布局以及 components/ 目录的各种组件。
> 一旦本目录内容变化，请更新本文件

## Files
- index.astro：网站主页，包含游戏 data 概览、FAQ、评论及简易导航
- codes.astro：游戏兑换码页，显示 0 verified active codes、Roblox codes 状态、来源冲突表、假码警报和验证渠道
- beginner-guide.astro：新手入门指引，包含起步 4 步走策略和讨价还价基础
- progression.astro：最佳升级路线，包含重生、飞升等里程碑路线规划
- money-fast.astro：快速赚钱路线页，按早期、中期、后期比较主动、离线、重置路线和视频参考风险
- best-upgrades.astro：升级优先级排行，包含普通升级、Gamepass ROI、买家类型、风险提示和视频参考
- profit-calculator.astro：收益计算器页面，用于估算升级 ROI、Gamepass ROI、目标时间、游玩时长收益、视频参考和公式边界
- maze-map.astro：Sell Lemons 总地图入口页，用于连接 surface、sewer、key route 和视频参考
- sewer-maze-map.astro：地下迷宫地图页，用于按 Sewer Key、UFO Key、Cosmic Cash Vine 拆分路线、节点地图和视频参考
- lever-sequence.astro：拉杆顺序轻工具页，提供 Sewer Key 与 UFO Key 双路线本地勾选清单、冲突说明和视频参考
- ascension.astro：终局飞升指南页，解释 Ascend/Evolution/Ascension 区别、前置、奖励代价和 Forever Purchase 规划
- evolution.astro：进化指南页，包含 reported requirements chart、42x speed、Fruit chain、重置损失、Void Portal、何时不要进化和重置层对比
- badge-tracker.astro：徽章追踪页，覆盖 24 项 reported/pending 徽章、Dad's Mission、secret badges、个人进度和视频参考
- sewer-key.astro：Sewer Key 独立页，提供 7 步拉杆路线、Cosmic Farmer Badge、失败恢复和视频参考
- ufo-key.astro：UFO Key 独立页，提供主拉杆顺序、冲突版本、Good Samaritan Badge 和视频参考
- ad-policy.astro：广告政策页，说明广告、兑换码和内容边界
- income-sources.astro：8阶产业百科，介绍 T1 到 T8 的详细产出和升级 pro 技巧
- rebirths.astro：转生/重生指南，包含 when-to-rebirth 锚点、reset 风险、community-reported 350% 区间和视频参考
- deals.astro：交易/买卖指南，介绍如何处理游戏内的交易机制与地下迷宫钥匙
- about.astro：系统页面，关于我们
- contact.astro：系统页面，联系我们
- editorial-policy.astro：系统页面，编辑政策
- privacy.astro：系统页面，隐私政策
- terms.astro：系统页面，使用条款
