import { siteConfig } from "../data/config";

export const wikiLinks = [
  { title: "Codes", slug: "codes", description: "Track code status without inventing active rewards. No verified active codes are listed yet." },
  { title: "Progression", slug: "progression", description: "Research reported growth paths, milestones, and strategies." },
  { title: "Income Sources", slug: "income-sources", description: "Track reported income sources without fabricating costs or multipliers." },
  { title: "Rebirths", slug: "rebirths", description: "Research reported rebirth mechanics and bonuses." },
  { title: "Deals", slug: "deals", description: "Track reported deal and haggling mechanics without fabricating rates or prices." }
];

export const homeContent = {
  title: `${siteConfig.siteName} | Roblox Wiki Hub`,
  description: `${siteConfig.siteName} is an evidence-first Roblox wiki hub for ${siteConfig.gameName} codes, progression, income sources, rebirths, and deals.`,
  hero: {
    eyebrow: "Roblox wiki hub",
    title: `${siteConfig.gameName} Wiki Hub`,
    lede: "Community-reported information is labeled as unverified until official, Roblox API, or in-game proof exists.",
    primaryAction: "Open Roblox page"
  },
  quickFacts: [
    { label: "Game type", value: "Simulator" },
    { label: "Developer", value: "BloxByte Games (verified via Roblox page)" },
    { label: "Evidence policy", value: "Verified / community-reported / pending" },
    { label: "Default language", value: "English" }
  ],
  trendingSearches: [
    `${siteConfig.gameName} codes`,
    `${siteConfig.gameName} guide`,
    `${siteConfig.gameName} wiki`,
    `${siteConfig.gameName} beginners guide`,
    `${siteConfig.gameName} Roblox`,
    `${siteConfig.gameName} value list`
  ],
  wikiLinks,
  guideMap: [
    { step: "1", title: "Start from the hub", body: "The homepage links directly to every completed guide page." },
    { step: "2", title: "Move through guide pages", body: "Each guide page links back to the hub and to related guide pages." },
    { step: "3", title: "Keep evidence labels visible", body: "Every page shows whether information is verified, community-reported, or pending." }
  ],
  faq: [
    { q: "Are community-reported codes verified?", a: "No. They are research signals until independently confirmed by official or in-game evidence." },
    { q: "Can this wiki add more pages?", a: "Yes. New guide pages are added when enough community-reported or verified information is available." },
    { q: "Is this site affiliated with the game developer?", a: "No. This is an independent fan guide not affiliated with Roblox Corporation or BloxByte Games." }
  ]
};
