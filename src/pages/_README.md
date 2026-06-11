# src/pages
- 用途：存放 Sell Lemons Wiki 的所有前端页面和子路由
- 关键入口：index.astro (首页), profit-calculator.astro (收益计算器), sewer-maze-map.astro (迷宫地图), lever-sequence.astro (拉杆清单), progression.astro (升级指南)
- 边界/依赖：依赖 layouts/ 目录的公共布局以及 components/ 目录的各种组件。
> 一旦本目录内容变化，请更新本文件

## Files
- index.astro：网站主页，包含游戏 data 概览、FAQ、评论及简易导航
- codes.astro：游戏兑换码页，显示最新失效和有效的激活码
- beginner-guide.astro：新手入门指引，包含起步 4 步走策略和讨价还价基础
- progression.astro：最佳升级路线，包含重生、飞升等里程碑路线规划
- money-fast.astro：快速致富秘籍，包含 LemonDash 送单加价技巧和离线倍率挂机攻略
- best-upgrades.astro：升级优先级排行，包含 S 到 D 等级的加点评估和流派加点推荐
- profit-calculator.astro：收益计算器页面，用于估算升级 ROI、目标时间、游玩时长收益和公式边界
- sewer-maze-map.astro：地下迷宫地图页，用于按 Sewer Key、UFO Key、Cosmic Cash Vine 拆分路线和恢复步骤
- lever-sequence.astro：拉杆顺序轻工具页，提供 Sewer Key 与 UFO Key 双路线本地勾选清单
- ascension.astro：飞升指南页，解释飞升前置条件、奖励和永久购买规划
- evolution.astro：进化指南页，解释 42x speed 路线、Void 规划和重置时机
- badge-tracker.astro：徽章追踪页，区分 community-reported、pending 和个人进度
- sewer-key.astro：Sewer Key 独立页，将地下入口准备从 deals 页面拆出
- ufo-key.astro：UFO Key 独立页，将 Good Samaritan 路线从 deals 页面拆出
- ad-policy.astro：广告政策页，说明广告、兑换码和内容边界
- income-sources.astro：8阶产业百科，介绍 T1 到 T8 的详细产出和升级 pro 技巧
- rebirths.astro：转生/重生指南，包含 Alien Investor 收益加成推荐 350% 重生时机
- deals.astro：交易/买卖指南，介绍如何处理游戏内的交易机制与地下迷宫钥匙
- about.astro：系统页面，关于我们
- contact.astro：系统页面，联系我们
- editorial-policy.astro：系统页面，编辑政策
- privacy.astro：系统页面，隐私政策
- terms.astro：系统页面，使用条款
