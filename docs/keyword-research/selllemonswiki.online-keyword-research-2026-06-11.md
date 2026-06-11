# selllemonswiki.online 关键词研究与站点检测报告：2026-06-11

## 报告封面

| 字段 | 内容 |
|------|------|
| 站点 | https://selllemonswiki.online/ |
| 本地仓库 | /Users/tangjei/Documents/建站/游戏站/selllemonswiki |
| 分析日期 | 2026-06-11 |
| 执行方法 | site-keyword-research skill |
| 分析范围 | 68 个 Google Suggest 原始词和竞品词，过滤为 42 个相关词，20 词分层，10 词 SERP 详析，3 个优先方向 |
| 数据边界 | Google Suggest（Google 搜索联想）和搜索结果页结构估算，不包含 Ahrefs、Semrush、GSC、搜索量或外链数 |

## 第一章：站点定位分析

### 1.1 站点基础信息

| 字段 | 内容 |
|------|------|
| 域名 | selllemonswiki.online |
| 站点类型 | Roblox 游戏攻略内容站 |
| 核心主题 | Sell Lemons codes（兑换码），progression（进度路线），rebirth（重生），income sources（收入来源），sewer key / UFO key（隐藏钥匙） |
| 目标用户 | Roblox Sell Lemons 玩家，尤其是找兑换码、新手路线、快速赚钱、隐藏钥匙、重生和升级顺序的玩家 |
| 主要功能 | 首页 wiki hub，codes 页，progression 页，income sources 页，rebirths 页，deals/secrets 页，beginner guide 页，money fast 页，best upgrades 页 |

### 1.2 首页 SEO 信号

| 字段 | 内容 |
|------|------|
| Title | Sell Lemons Wiki \| Codes, Rebirth, Progression & Upgrades |
| Meta description | Roblox Sell Lemons game guide covering codes, hidden keys, rebirth system, upgrades, and core gameplay mechanics. |
| Sitemap | 12 个 URL，可访问 |
| robots.txt | 常规抓取允许，sitemap 已声明 |
| llms.txt | 已声明核心页面和站点定位 |
| 索引迹象 | `site:selllemonswiki.online sell lemons` 可检出首页 |

### 1.3 站点检测结论

Counter: 反方意见是，这个站不是“先扩关键词就能增长”的状态。当前最大风险不是关键词不够，而是可信度受损。

🚨 Verifiable（可验证）：所有主要页面顶部都出现 `High Server Load! Click here to verify your browser & secure active codes!` 的外链提示，目标域名是 `effectivecpmnetwork.com`。本地代码定位如下：

| 文件 | 行号 | 问题 |
|------|------|------|
| src/components/Header.astro | 11 到 16 | 全站公告条直接链接 `siteConfig.analytics.smartLink` |
| src/data/config.ts | 39 到 42 | 配置了 `effectivecpmnetwork.com` 和 `pl29708726.effectivecpmnetwork.com` 脚本 |
| src/pages/codes.astro | 20 到 33 | codes 页文案声称“验证后解锁 hidden active codes”，与页面正文“不伪造 active codes”的证据边界冲突 |

🚨 Judgment（主观判断）：这类“验证浏览器领取隐藏 active codes”的文案对 Roblox 攻略站伤害很大。它会让用户怀疑站点是广告跳转站，也会削弱 codes 页“不编造兑换码”的可信度。

🚨 Confidence ≠ Correctness（盲目自信）：我不能仅凭抓取结果断言它一定被 Google 降权，但它是明确的用户信任风险，并且会降低点击后的留存。

## 第二章：递归关键词树扩展记录

### 2.1 种子词

| 种子 | 来源 | 说明 |
|------|------|------|
| sell lemons roblox | 首页主题 | 主游戏词 |
| sell lemons codes | 首页和 codes 页 | 兑换码需求 |
| sell lemons wiki | 首页 title | 站点定位词 |
| sell lemons guide | 首页和 SERP | 泛攻略词 |
| sell lemons rebirth | rebirths 页 | 核心系统词 |
| sell lemons evolution | 首页 FAQ 和竞品 | 中后期系统词 |
| sell lemons ascension | 首页 FAQ 和竞品 | 终局系统词 |
| sell lemons ufo key | deals 页和 SERP | 隐藏钥匙词 |
| sell lemons sewer key | deals 页和 SERP | 隐藏钥匙词 |
| sell lemons money fast | money-fast 页 | 快速赚钱词 |
| sell lemons best upgrades | best-upgrades 页 | 升级优先级词 |
| sell lemons income sources | income-sources 页 | 机制词 |

### 2.2 扩展结果

| 指标 | 结果 |
|------|------|
| Google Suggest 原始唯一词 | 68 |
| 过滤后相关词 | 42 |
| 过滤掉的词 | 真实柠檬销售、本地商店、二手车 lemon 语义、宏和脚本类高风险词 |
| 补充来源 | SERP 竞品页面和站点现有页面 |
| 收敛说明 | Google Suggest 很快收敛，未达到 80 到 100 目标词，因此用竞品词和站点主题词补齐分层 |

## 第三章：完整候选词库

来源标注：

| 标签 | 含义 |
|------|------|
| [RS] | Google Suggest（Google 搜索联想），按 skill 归入真实搜索推荐 |
| [竞品] | SERP 竞争页面或竞品站功能中出现 |
| [AI-主题] | 基于站点主题扩展，需人工验证 |

| # | 关键词 | 来源 | 深度 | 保留原因 |
|---|--------|------|------|----------|
| 1 | sell lemons roblox | [RS] | depth=1 | 主游戏词 |
| 2 | sell lemons wiki | [RS] | depth=1 | 站点定位词 |
| 3 | sell lemons roblox wiki | [RS] | depth=1 | 首页目标词 |
| 4 | sell lemons guide | [RS] | depth=1 | 泛攻略入口 |
| 5 | sell lemons roblox guide | [RS] | depth=1 | 泛攻略入口 |
| 6 | sell lemons codes | [AI-主题] | depth=1 | codes 页核心词，SERP 竞争强 |
| 7 | sell lemons rebirth | [RS] | depth=1 | 核心系统词 |
| 8 | sell lemons evolution | [RS] | depth=1 | 中后期系统词 |
| 9 | sell lemons evolution guide | [RS] | depth=2 | 更明确攻略意图 |
| 10 | sell lemons ascension | [RS] | depth=1 | 终局系统词 |
| 11 | sell lemons ufo key | [RS] | depth=1 | 隐藏任务词 |
| 12 | sell lemons how to get ufo key | [RS] | depth=2 | 强问题意图 |
| 13 | sell lemons ufo key map | [RS] | depth=2 | 地图型需求 |
| 14 | sell lemons sewer key | [RS] | depth=1 | 隐藏任务词 |
| 15 | sell lemons roblox sewer key | [RS] | depth=2 | Roblox 修饰更精确 |
| 16 | sell lemons sewer maze | [RS] | depth=1 | 地图和路线需求 |
| 17 | sell lemons sewer maze map | [RS] | depth=2 | 低竞图文机会 |
| 18 | sell lemons roblox sewer maze | [RS] | depth=2 | 视频密集 SERP，可做图文替代 |
| 19 | sell lemons maze | [RS] | depth=1 | 泛隐藏地图词 |
| 20 | sell lemons maze map | [RS] | depth=2 | 低竞地图机会 |
| 21 | sell lemons lever sequence | [竞品] | depth=2 | 竞品工具和视频都覆盖 |
| 22 | sell lemons good samaritan | [RS] | depth=2 | badge 需求 |
| 23 | sell lemons hidden badges | [RS] | depth=2 | 徽章集合页机会 |
| 24 | sell lemons badges | [RS] | depth=1 | 徽章集合页机会 |
| 25 | sell lemons purity fruit | [竞品] | depth=2 | 终局稀有目标 |
| 26 | sell lemons staircase | [RS] | depth=2 | ascension 前置需求 |
| 27 | sell lemons void | [RS] | depth=2 | evolution 机制词 |
| 28 | sell lemons void evolution | [RS] | depth=2 | 更明确系统词 |
| 29 | sell lemons money guide | [RS] | depth=2 | money-fast 页可承接 |
| 30 | sell lemons money fast | [AI-主题] | depth=1 | 现有页面目标词 |
| 31 | sell lemons fastest money method | [竞品] | depth=2 | Sportskeeda 和 YouTube 覆盖 |
| 32 | sell lemons best upgrades | [AI-主题] | depth=1 | 现有页面目标词 |
| 33 | sell lemons all upgrades | [RS] | depth=2 | 机制清单需求 |
| 34 | sell lemons income sources | [竞品] | depth=1 | Fandom 页面已有结构 |
| 35 | sell lemons investors | [RS] | depth=2 | rebirth/evolution 经济词 |
| 36 | sell lemons powers | [RS] | depth=2 | Fandom 低内容深度 |
| 37 | sell lemons forever purchase | [RS] | depth=2 | ascension 后高意图词 |
| 38 | sell lemons profit calculator | [竞品] | depth=2 | 工具型页面，竞品有明显优势 |
| 39 | sell lemons rebirth calculator | [竞品] | depth=2 | 工具型页面，转化和留存强 |
| 40 | sell lemons badge tracker | [竞品] | depth=2 | 工具型页面，竞品有明显优势 |
| 41 | sell lemons patch notes | [竞品] | depth=2 | Fandom 有更新页，可做更新时间线 |
| 42 | sell lemons discord | [RS] | depth=2 | 外部链接和官方信息需求 |

剔除词：

| 关键词 | 原因 |
|--------|------|
| sell lemons script pastebin | exploit / script 风险，站点 config 已有 blockedSlugs |
| sell lemons macro | 自动化作弊风险，不建议做攻略页 |
| how to sell lemons | 容易跑偏到真实柠檬销售 |
| does wawa sell lemons | 与 Roblox 无关 |
| does carmax sell lemons reddit | 二手车 lemon 语义，与站点无关 |

## 第四章：关键词分层矩阵

### 4.1 20 词入围表

| # | 关键词 | 来源 | 类型 | 意图 | 层级 | 入围 10 词 |
|---|--------|------|------|------|------|------------|
| 1 | sell lemons wiki | [RS] | 品牌类 | Navigational（导航型） | 核心词 | 否 |
| 2 | sell lemons codes | [AI-主题] | codes | Informational（信息型） | 核心词 | 是 |
| 3 | sell lemons roblox guide | [RS] | 攻略 | Informational（信息型） | 核心词 | 否 |
| 4 | sell lemons ufo key | [RS] | 隐藏任务 | Informational（信息型） | 中尾词 | 是 |
| 5 | sell lemons sewer key | [RS] | 隐藏任务 | Informational（信息型） | 中尾词 | 是 |
| 6 | sell lemons maze map | [RS] | 地图 | Informational（信息型） | 长尾词 | 是 |
| 7 | sell lemons sewer maze map | [RS] | 地图 | Informational（信息型） | 长尾词 | 是 |
| 8 | sell lemons lever sequence | [竞品] | 解谜 | Informational（信息型） | 长尾词 | 是 |
| 9 | sell lemons evolution guide | [RS] | 系统攻略 | Informational（信息型） | 中尾词 | 是 |
| 10 | sell lemons ascension | [RS] | 系统攻略 | Informational（信息型） | 中尾词 | 是 |
| 11 | sell lemons rebirth | [RS] | 系统攻略 | Informational（信息型） | 中尾词 | 否 |
| 12 | sell lemons fastest money method | [竞品] | 赚钱攻略 | Informational（信息型） | 长尾词 | 是 |
| 13 | sell lemons best upgrades | [AI-主题] | 升级顺序 | Commercial Investigation（比较型） | 中尾词 | 是 |
| 14 | sell lemons income sources | [竞品] | 机制清单 | Informational（信息型） | 长尾词 | 否 |
| 15 | sell lemons profit calculator | [竞品] | 工具 | Transactional（工具使用型） | 长尾词 | 是 |
| 16 | sell lemons rebirth calculator | [竞品] | 工具 | Transactional（工具使用型） | 长尾词 | 是 |
| 17 | sell lemons badge tracker | [竞品] | 工具 | Transactional（工具使用型） | 长尾词 | 否 |
| 18 | sell lemons purity fruit | [竞品] | 终局目标 | Informational（信息型） | 长尾词 | 否 |
| 19 | sell lemons forever purchase | [RS] | 终局机制 | Informational（信息型） | 长尾词 | 否 |
| 20 | sell lemons powers | [RS] | 系统机制 | Informational（信息型） | 长尾词 | 否 |

### 4.2 分层概览

| 层级 | 数量 | 词 |
|------|------|----|
| 核心词 | 3 | sell lemons wiki, sell lemons codes, sell lemons roblox guide |
| 中尾词 | 6 | sell lemons ufo key, sell lemons sewer key, sell lemons evolution guide, sell lemons ascension, sell lemons rebirth, sell lemons best upgrades |
| 长尾词 | 11 | sell lemons maze map, sell lemons sewer maze map, sell lemons lever sequence, sell lemons fastest money method, sell lemons income sources, sell lemons profit calculator, sell lemons rebirth calculator, sell lemons badge tracker, sell lemons purity fruit, sell lemons forever purchase, sell lemons powers |

### 4.3 来源统计

| 来源 | 数量 | 占比 |
|------|------|------|
| [RS] Google Suggest | 12 | 60% |
| [竞品] SERP 竞品 | 6 | 30% |
| [AI-主题] 站点主题 | 2 | 10% |

## 第五章：10 词 SERP 详细分析

竞争度评分说明：5 到 10 为低竞争，11 到 17 为中竞争，18 到 25 为高竞争。评分基于搜索结果结构、结果类型、视频密度、强站数量和内容深度估算。

### 5.1 sell lemons maze map

| 维度 | 现状 | 得分 |
|------|------|------|
| 广告主数量 | 无明显广告主 | 1 |
| Featured Snippet | 未稳定观察到 | 1 |
| 视频结果 | 多个 YouTube 结果覆盖 maze / sewer | 3 |
| 高权重站 | Pro Game Guides、YouTube、Fandom | 3 |
| 前 10 内容深度 | 多数是视频或局部攻略，缺少清晰地图页 | 2 |

综合得分：10/25，低竞争。

竞争者快照：

| 排名类型 | 域名 | 类型 | 内容深度 |
|----------|------|------|----------|
| 视频 | youtube.com | 视频攻略 | 中 |
| 攻略 | progameguides.com | 图文攻略 | 深 |
| Wiki | sell-lemons-roblox.fandom.com | Wiki | 薄到中 |

机会总结：用户要的是“路线图”，不是长文。当前站点有 deals/secrets 综合页，但缺少独立 `/sewer-maze-map/` 或 `/maze-map/` 页面。

### 5.2 sell lemons sewer maze map

| 维度 | 现状 | 得分 |
|------|------|------|
| 广告主数量 | 无明显广告主 | 1 |
| Featured Snippet | 未稳定观察到 | 1 |
| 视频结果 | YouTube 密集 | 3 |
| 高权重站 | Pro Game Guides、YouTube | 3 |
| 前 10 内容深度 | 图文路线页不足 | 2 |

综合得分：10/25，低竞争。

机会总结：比 `ufo key` 更低竞争，因为词更窄。建议做“图片路线 + lever 顺序 + 错误重置提醒”的独立页。

### 5.3 sell lemons lever sequence

| 维度 | 现状 | 得分 |
|------|------|------|
| 广告主数量 | 无明显广告主 | 1 |
| Featured Snippet | 未稳定观察到 | 1 |
| 视频结果 | 有 | 3 |
| 高权重站 | 竞品 sellemons.wiki 工具页，YouTube，PGG | 3 |
| 前 10 内容深度 | 工具型结果少 | 2 |

综合得分：10/25，低竞争。

机会总结：这是最适合做轻工具的词。页面应把 Blue / Red / Green / Purple 的步骤做成可勾选流程，而不是只写段落。

### 5.4 sell lemons ufo key

| 维度 | 现状 | 得分 |
|------|------|------|
| 广告主数量 | 无明显广告主 | 1 |
| Featured Snippet | 可能由 PGG 抢占 | 3 |
| 视频结果 | YouTube 很密集 | 3 |
| 高权重站 | Pro Game Guides、YouTube、Fandom | 4 |
| 前 10 内容深度 | PGG 深，视频多 | 4 |

综合得分：15/25，中竞争。

竞争者快照：

| 域名 | 类型 | 内容深度 |
|------|------|----------|
| progameguides.com | 图文攻略 | 深 |
| youtube.com | 视频攻略 | 中 |
| sell-lemons-roblox.fandom.com | Wiki | 薄到中 |

机会总结：单独抢这个词难度中等。更好的切入是“UFO key map”和“Good Samaritan badge”组合页。

### 5.5 sell lemons sewer key

| 维度 | 现状 | 得分 |
|------|------|------|
| 广告主数量 | 无明显广告主 | 1 |
| Featured Snippet | 未稳定观察到 | 1 |
| 视频结果 | YouTube 多 | 3 |
| 高权重站 | PGG、YouTube、Fandom | 4 |
| 前 10 内容深度 | 混合 | 3 |

综合得分：12/25，中竞争。

机会总结：可与 sewer maze map 和 lever sequence 形成三页内链集群。

### 5.6 sell lemons evolution guide

| 维度 | 现状 | 得分 |
|------|------|------|
| 广告主数量 | 无明显广告主 | 1 |
| Featured Snippet | 未稳定观察到 | 1 |
| 视频结果 | 有 | 3 |
| 高权重站 | Fandom、YouTube | 3 |
| 前 10 内容深度 | Fandom 有机制说明，但攻略型页不多 | 3 |

综合得分：11/25，中竞争。

机会总结：现有站点 rebirths 页包含 evolution，但缺少独立 evolution guide。可以拆出 `/evolution/`，解释 fruit loop、42x speed、Void altar、何时 evolve。

### 5.7 sell lemons ascension

| 维度 | 现状 | 得分 |
|------|------|------|
| 广告主数量 | 无明显广告主 | 1 |
| Featured Snippet | 未稳定观察到 | 1 |
| 视频结果 | 有多个近期视频 | 3 |
| 高权重站 | Fandom、YouTube | 3 |
| 前 10 内容深度 | Fandom 偏薄，视频多 | 2 |

综合得分：10/25，低竞争。

机会总结：Fandom 有 ascension 定义，但深度不足。站点首页 FAQ 已经有 ascension 内容，适合扩成独立页。

### 5.8 sell lemons fastest money method

| 维度 | 现状 | 得分 |
|------|------|------|
| 广告主数量 | 无明显广告主 | 1 |
| Featured Snippet | 可能由 Sportskeeda 类媒体抢占 | 3 |
| 视频结果 | YouTube 密集 | 3 |
| 高权重站 | Sportskeeda、YouTube、Pro Game Guides | 4 |
| 前 10 内容深度 | 多数为泛技巧，缺少表格化路线 | 3 |

综合得分：14/25，中竞争。

机会总结：现有 `/money-fast/` 能承接，但需要降低夸张词，强化路线表和“新手 0 到 manager”的步骤。

### 5.9 sell lemons best upgrades

| 维度 | 现状 | 得分 |
|------|------|------|
| 广告主数量 | 无明显广告主 | 1 |
| Featured Snippet | 未稳定观察到 | 1 |
| 视频结果 | 有 | 3 |
| 高权重站 | selllemonswiki.com、YouTube、Fandom | 4 |
| 前 10 内容深度 | 有 tier list 竞品，竞争中等 | 4 |

综合得分：13/25，中竞争。

机会总结：现有 `/best-upgrades/` 方向正确，但需要明确“free-to-play、light spender、endgame”三个版本，否则比不过竞品 tier list。

### 5.10 sell lemons profit calculator

| 维度 | 现状 | 得分 |
|------|------|------|
| 广告主数量 | 无明显广告主 | 1 |
| Featured Snippet | 未稳定观察到 | 1 |
| 视频结果 | 少 | 1 |
| 高权重站 | sellemons.wiki 有工具，其他强站少 | 2 |
| 前 10 内容深度 | 工具结果少，机会明显 | 2 |

综合得分：7/25，低竞争。

机会总结：这是最高价值工具词。竞品 `sellemons.wiki` 已经把 calculator、rebirth planner、badge tracker 做成差异化信号。当前站点没有工具页，缺口明显。

## 第六章：综合机会矩阵

| 关键词 | 来源 | 层级 | 竞争度 | 内容机会 | 商业价值 | 综合推荐 |
|--------|------|------|--------|----------|----------|----------|
| sell lemons profit calculator | [竞品] | 长尾词 | 低 | 5/5 | 5/5 | Top 1 |
| sell lemons maze map | [RS] | 长尾词 | 低 | 5/5 | 4/5 | Top 2 |
| sell lemons lever sequence | [竞品] | 长尾词 | 低 | 5/5 | 4/5 | Top 3 |
| sell lemons ascension | [RS] | 中尾词 | 低 | 4/5 | 4/5 | 优先 |
| sell lemons sewer maze map | [RS] | 长尾词 | 低 | 5/5 | 3/5 | 优先 |
| sell lemons evolution guide | [RS] | 中尾词 | 中 | 4/5 | 4/5 | 可做 |
| sell lemons ufo key | [RS] | 中尾词 | 中 | 4/5 | 4/5 | 可做 |
| sell lemons sewer key | [RS] | 中尾词 | 中 | 4/5 | 3/5 | 可做 |
| sell lemons fastest money method | [竞品] | 长尾词 | 中 | 3/5 | 4/5 | 优化现有页 |
| sell lemons codes | [AI-主题] | 核心词 | 高 | 2/5 | 5/5 | 保持诚实更新 |

## 第七章：Top 3 关键词定方向

### Top 1：sell lemons profit calculator

| 字段 | 内容 |
|------|------|
| 来源 | [竞品] |
| 分层 | 长尾词 |
| 竞争度 | 7/25，低竞争 |
| 为什么是现在 | 竞品已经用工具抢占差异化，当前站点仍是纯内容页 |

机会描述：Roblox tycoon 玩家不只想读攻略，他们想知道下一笔钱买哪个升级回报更高。`sellemons.wiki` 的首页已经强调 Profit Calculator（收益计算器），说明工具型需求是真实的竞争信号。

具体操作建议：

| 时间 | 动作 |
|------|------|
| 立即 | 新建 `/profit-calculator/`，先做静态计算器 MVP，输入当前 income source、现金、候选升级成本、倍率，输出优先级 |
| 1 到 2 周 | 把 income sources 页的 8 层生产系统接入计算器说明，形成内链 |
| 1 个月 | 增加 shareable result（可分享结果）和 preset builds（预设路线） |

落地页要素：

| 要素 | 建议 |
|------|------|
| 页面标题 | Sell Lemons Profit Calculator：Best Upgrade ROI Tool |
| H1 | Sell Lemons Profit Calculator |
| 核心卖点 | Calculate upgrade ROI（计算升级回报），compare income sources（比较收入来源），avoid low impact purchases（避开低收益购买） |
| CTA | Calculate Best Upgrade |
| 覆盖长尾 | sell lemons rebirth calculator, sell lemons income sources, sell lemons best upgrades |
| 内链 | income-sources, best-upgrades, money-fast, rebirths |

外链机会：向 Roblox guide 资源页、calculator list、社区 wiki 讨论帖提交“free ROI calculator（免费回报计算器）”。

### Top 2：sell lemons maze map

| 字段 | 内容 |
|------|------|
| 来源 | [RS] |
| 分层 | 长尾词 |
| 竞争度 | 10/25，低竞争 |
| 为什么是现在 | 搜索结果视频多，静态地图和步骤页不足 |

机会描述：`maze map` 用户的需求是快速定位，不想看 8 到 12 分钟视频。当前 deals 页标题混合了 deals、secrets、sewer mazes、UFO keys，不能精准匹配地图词。

具体操作建议：

| 时间 | 动作 |
|------|------|
| 立即 | 新建 `/maze-map/` 或 `/sewer-maze-map/`，首屏放路线图和步骤表 |
| 1 到 2 周 | 增加 UFO key、sewer key、Good Samaritan badge 的分段锚点 |
| 1 个月 | 做移动端可缩放图，增加“我在第几步”的交互状态 |

落地页要素：

| 要素 | 建议 |
|------|------|
| 页面标题 | Sell Lemons Maze Map：Sewer Route, UFO Key and Lever Order |
| H1 | Sell Lemons Maze Map |
| 核心卖点 | Map first（地图优先），lever sequence included（含拉杆顺序），mobile readable（手机可读） |
| CTA | Open Sewer Route |
| 覆盖长尾 | sell lemons sewer maze map, sell lemons ufo key map, sell lemons sewer key |
| 内链 | deals, beginner-guide, progression |

外链机会：YouTube 视频评论区和描述替代资源，社区问答帖，wiki talk 页面。

### Top 3：sell lemons lever sequence

| 字段 | 内容 |
|------|------|
| 来源 | [竞品] |
| 分层 | 长尾词 |
| 竞争度 | 10/25，低竞争 |
| 为什么是现在 | 玩家需要一步一步执行，适合轻工具，不只是文章 |

机会描述：lever sequence（拉杆顺序）是任务中最容易出错的点。纯文字攻略容易漏步骤，交互式 checklist（勾选清单）更符合搜索意图。

具体操作建议：

| 时间 | 动作 |
|------|------|
| 立即 | 新建 `/lever-sequence/`，做 Blue、Red、Green、Purple 步骤清单 |
| 1 到 2 周 | 加入“wrong step reset（错误步骤重置）”提醒和地图锚点 |
| 1 个月 | 加入 localStorage（本地进度保存）和分享链接 |

落地页要素：

| 要素 | 建议 |
|------|------|
| 页面标题 | Sell Lemons Lever Sequence：Sewer Maze Order for UFO Key |
| H1 | Sell Lemons Lever Sequence |
| 核心卖点 | Step checklist（步骤清单），reset warnings（重置提醒），map links（地图链接） |
| CTA | Start Lever Checklist |
| 覆盖长尾 | sell lemons sewer key, sell lemons ufo key, sell lemons good samaritan |
| 内链 | maze-map, deals, rebirths |

外链机会：提交到相关 Fandom talk、YouTube 攻略视频评论、Roblox 社区问答。

## 第八章：外链策略建议

| Top 词 | 外链策略 | 具体动作 |
|--------|----------|----------|
| sell lemons profit calculator | 工具型外链 | 发布工具页后，联系 Roblox guide sites 和 calculator/resource roundups |
| sell lemons maze map | 视频替代资源 | 在相关 YouTube 攻略视频评论中提供“mobile map reference（手机地图参考）” |
| sell lemons lever sequence | 社区问答补充 | 在 Fandom talk、Reddit、Roblox 社区问题中提供步骤清单 |
| sell lemons codes | 可信更新引用 | 保持 no verified active codes（无已验证 active codes），避免虚假兑换码，争取被引用为保守来源 |

## 第九章：立即修复清单

### 9.1 P0：去掉可疑广告验证入口

Counter: 如果继续保留“verify browser to unlock secret active codes（验证浏览器解锁隐藏兑换码）”，站点的 codes 证据边界会自相矛盾。

建议：

1. 删除或禁用 `siteConfig.analytics.smartLink`。
2. 删除 `src/pages/codes.astro` 的 secret active codes 解锁卡片。
3. 若必须保留广告，改为清晰标注的 display ad（展示广告），不要伪装成站点功能或安全验证。
4. 新增 `adPolicy: true` 或建立 `/ad-policy/`，说明广告和内容边界。

### 9.2 P1：补工具页，而不是继续扩泛攻略页

优先页面：

1. `/profit-calculator/`
2. `/sewer-maze-map/`
3. `/lever-sequence/`
4. `/ascension/`
5. `/evolution/`
6. `/badge-tracker/`

### 9.3 P1：拆分 deals 和 secrets

现有 `/deals/` 同时承载 deals、sewer mazes、UFO keys，意图混杂。建议：

| 当前 | 建议 |
|------|------|
| /deals/ | 只保留 deals / haggling / NPC offer |
| 新增 /sewer-key/ | sewer key 独立页 |
| 新增 /ufo-key/ | UFO key 独立页 |
| 新增 /maze-map/ | 地图和路线页 |
| 新增 /lever-sequence/ | 拉杆顺序轻工具 |

### 9.4 P2：多语言不要只显示 pending

首页导航显示 Thai、Filipino、Indonesian pending（待完成）。如果没有实际页面，建议暂时从首屏隐藏，避免用户误点。

## 第十章：数据说明与后续建议

### 数据来源

| 来源 | 用途 |
|------|------|
| https://selllemonswiki.online/ | 首页内容、title、meta、异常公告条 |
| https://selllemonswiki.online/sitemap.xml | URL 覆盖 |
| https://selllemonswiki.online/robots.txt | 抓取规则 |
| https://selllemonswiki.online/llms.txt | 站点声明 |
| Google Suggest | 关键词扩展 |
| 搜索结果页 | 竞争者识别和竞争度估算 |
| https://selllemons.com/codes | codes 竞品和 no active codes 参考 |
| https://sellemons.wiki/ | 工具型竞品参考 |
| https://sell-lemons-roblox.fandom.com/wiki/Income_Sources | 机制清单参考 |
| https://progameguides.com/roblox/how-to-get-ufo-key-good-samaritan-badge-in-sell-lemons-roblox/ | UFO key 图文竞品 |
| https://www.sportskeeda.com/roblox-news/how-get-money-fast-sell-lemons | money fast 竞品 |

### 后续自动化应检查

每 2 天运行时，不要只重复生成同一份关键词表。应检查以下变化：

1. Google Suggest 是否新增 codes、update、event、patch、key、calculator 相关词。
2. SERP 是否出现新的强竞品工具页。
3. `selllemonswiki.online` 是否仍有可疑广告验证入口。
4. codes 页是否仍保持 `0 verified active codes（0 个已验证 active codes）` 的证据边界。
5. 新增页面是否进入 sitemap。
6. Top 3 是否需要变化。

### 最终裁决

即使经过本次检测，我认为这个站在以下方面依然错误：

1. 用“验证浏览器解锁隐藏 active codes”的广告入口污染了 codes 页可信度。
2. 把 deals、secrets、sewer maze、UFO key 混在一个页面，导致精确搜索意图无法充分命中。
3. 缺少工具页，尤其是 profit calculator、maze map、lever sequence，这是当前竞品已经展示出来的差异化方向。
