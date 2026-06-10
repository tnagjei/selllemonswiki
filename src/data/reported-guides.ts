// input: None
// output: evidenceNotice, competitorSources, and reported data grids for codes, progression, income-sources, rebirths, and deals
// pos: /Users/tangjei/Documents/建站/游戏站/selllemonswiki/src/data/reported-guides.ts (更新规则：文件变更需同步本注释与所属目录 README)
const pendingSourceLabel = "Pending: community-reported, not independently verified";

export const evidenceNotice = {
  title: "Evidence boundaries",
  body: "This site separates verified evidence from community-reported and pending information. Third-party pages are research signals only. Do not present active codes, income source stats, rebirth multipliers, or deal rates as verified unless official, Roblox API, or in-game proof exists.",
  verifiedLabel: "Verified: official Roblox page, Roblox public API, official channel, or in-game proof.",
  communityReportedLabel: "Community-reported, not independently verified.",
  pendingLabel: "Pending: not enough evidence yet."
};

export const competitorSources = [
  {
    label: "selllemonswiki.com",
    url: "https://selllemonswiki.com/",
    evidenceLevel: "community-reported",
    note: "Research signal only. Do not copy claims without independent verification."
  },
  {
    label: "selllemons.net",
    url: "https://selllemons.net/",
    evidenceLevel: "community-reported",
    note: "Research signal only. Do not copy claims without independent verification."
  },
  {
    label: "selllemons.wiki",
    url: "https://selllemons.wiki/",
    evidenceLevel: "community-reported",
    note: "Research signal only. Do not copy claims without independent verification."
  }
];

export const reportedCodeRows = [];

export const reportedProgression = [
  {
    title: "Early game growth",
    description: "Community reports mention early growth paths. This is tracked as a research lead until exact starting flow, milestones, costs, and outcomes are verified.",
    status: "pending",
    sourceLabel: pendingSourceLabel
  },
  {
    title: "Mid-game expansion",
    description: "Community reports mention expansion paths during progression. Exact unlock order, requirements, costs, and outcomes are pending verification.",
    status: "pending",
    sourceLabel: pendingSourceLabel
  },
  {
    title: "Rebirth progression",
    description: "Community reports mention progression links to rebirth. Requirements, reset behavior, bonuses, and outcomes are tracked as research leads until verified.",
    status: "pending",
    sourceLabel: pendingSourceLabel
  }
];

export const reportedIncomeSources = [
  {
    name: "Lemon Stand",
    description: "Community reports mention a Lemon Stand income source, but availability, unlock timing, cost, and income rate are pending verification.",
    status: "pending",
    sourceLabel: pendingSourceLabel
  },
  {
    name: "Lemon Dash",
    description: "Community reports mention Lemon Dash as an income source, but unlock timing, cost, income rate, and gameplay outcome are pending verification.",
    status: "pending",
    sourceLabel: pendingSourceLabel
  },
  {
    name: "Lemon Depot",
    description: "Community reports mention Lemon Depot as an income source, but availability, unlock timing, cost, and multiplier details are pending verification.",
    status: "pending",
    sourceLabel: pendingSourceLabel
  }
];

export const reportedRebirthInfo = [
  {
    title: "Rebirth mechanic",
    description: "Community reports mention a rebirth mechanic. Exact requirements, reset behavior, bonuses, multipliers, and progression outcomes are pending verification.",
    status: "pending",
    sourceLabel: pendingSourceLabel
  },
  {
    title: "Rebirth bonuses",
    description: "Community reports mention rebirth-linked bonuses. Exact bonus types, values, unlocks, and long-term effects are pending verification.",
    status: "pending",
    sourceLabel: pendingSourceLabel
  }
];

export const reportedDeals = [
  {
    title: "NPC haggling",
    description: "Community reports mention NPC haggling during deals. Exact trigger conditions, pricing outcomes, strategies, and success rates are pending verification.",
    status: "pending",
    sourceLabel: pendingSourceLabel
  },
  {
    title: "Deal multipliers",
    description: "Community reports mention variable deal outcomes. Exact rates, probabilities, requirements, and result ranges are pending verification.",
    status: "pending",
    sourceLabel: pendingSourceLabel
  }
];
