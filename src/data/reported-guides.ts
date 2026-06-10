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
    description: "Community reports suggest players start with a single income source and expand by purchasing upgrades. Specific milestones and costs are pending verification.",
    status: "community-reported",
    sourceLabel: "Community-reported, not independently verified"
  },
  {
    title: "Mid-game expansion",
    description: "Community reports mention multiple income sources become available as players progress. Exact unlock order and requirements are pending verification.",
    status: "community-reported",
    sourceLabel: "Community-reported, not independently verified"
  },
  {
    title: "Rebirth progression",
    description: "Community reports suggest a rebirth system provides permanent bonuses. Details are tracked on the Rebirths page.",
    status: "community-reported",
    sourceLabel: "Community-reported, not independently verified"
  }
];

export const reportedIncomeSources = [
  {
    name: "Lemon Stand",
    description: "Community reports describe this as an early income source available at the start of the game.",
    status: "community-reported",
    sourceLabel: "Community-reported, not independently verified"
  },
  {
    name: "Lemon Dash",
    description: "Community reports describe this as an additional income source unlocked through progression.",
    status: "community-reported",
    sourceLabel: "Community-reported, not independently verified"
  },
  {
    name: "Lemon Depot",
    description: "Community reports describe this as a higher-tier income source. Costs and multipliers are not verified.",
    status: "community-reported",
    sourceLabel: "Community-reported, not independently verified"
  }
];

export const reportedRebirthInfo = [
  {
    title: "Rebirth mechanic",
    description: "Community reports suggest players can reset progress in exchange for permanent bonuses. Specific requirements and multipliers are pending verification.",
    status: "community-reported",
    sourceLabel: "Community-reported, not independently verified"
  },
  {
    title: "Rebirth bonuses",
    description: "Community reports mention income multipliers and unlocks tied to rebirth count. Exact values are pending verification.",
    status: "pending",
    sourceLabel: "Pending: not enough evidence yet"
  }
];

export const reportedDeals = [
  {
    title: "NPC haggling",
    description: "Community reports describe a negotiation mechanic when selling to NPCs. Specific pricing outcomes and strategies are pending verification.",
    status: "community-reported",
    sourceLabel: "Community-reported, not independently verified"
  },
  {
    title: "Deal multipliers",
    description: "Community reports mention variable deal outcomes. Exact rates and probabilities are pending verification.",
    status: "pending",
    sourceLabel: "Pending: not enough evidence yet"
  }
];

export const reportedValueRows = [
  {
    item: "Upgrade priority research",
    priority: "Research only",
    status: "pending",
    sourceLabel: "Pending: not enough evidence yet",
    note: "Do not present as verified trading value, upgrade cost, or income rate."
  }
];
