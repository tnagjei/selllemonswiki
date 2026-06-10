// input: siteConfig from src/data/config.ts
// output: homeContent data structure containing static texts for the homepage
// pos: /Users/tangjei/Documents/建站/游戏站/selllemonswiki/src/content/home.ts (更新规则：文件变更需同步本注释与所属目录 README)
import { siteConfig } from "../data/config";

export const wikiLinks = [
  { title: "Codes", slug: "codes", description: "Track code status without inventing active rewards. No verified active codes are listed yet." },
  { title: "Progression", slug: "progression", description: "Research reported growth paths, milestones, and strategies." },
  { title: "Income Sources", slug: "income-sources", description: "Track reported income sources without fabricating costs or multipliers." },
  { title: "Rebirths", slug: "rebirths", description: "Research reported rebirth mechanics and bonuses." },
  { title: "Deals", slug: "deals", description: "Track reported deal and haggling mechanics without fabricating rates or prices." }
];

export const homeContent = {
  title: "Sell Lemons Wiki | Codes, Rebirth, Progression & Upgrades",
  description: "Sell Lemons Wiki covers Roblox codes, rebirths, upgrades, income sources, deals, progression tips, and practical guides for building your lemon empire.",
  hero: {
    eyebrow: "Roblox wiki hub",
    title: "Sell Lemons Wiki",
    lede: "Roblox Sell Lemons game guide covering codes, hidden keys, rebirth system, upgrades, and core gameplay mechanics.",
    primaryAction: "Open Roblox page"
  },
  quickFacts: [
    { label: "Developer", value: "BloxByte Games" },
    { label: "Platform", value: "Roblox (PC / Mobile / Console)" },
    { label: "Genre", value: "Tycoon / Idle" },
    { label: "Visits", value: "14.4M+" },
    { label: "Approval Rate", value: "95.4%" },
    { label: "Launched", value: "May 16, 2026" }
  ],
  playerReviews: [
    "I started playing for 10 minutes... ended up grinding for hours.",
    "It looks simple but gets really addictive once upgrades kick in.",
    "The money jumps after upgrades feel super satisfying.",
    "Did not expect there to be so many secrets in a lemon game lol.",
    "Perfect AFK game, I just leave it running and come back rich."
  ],
  trendingSearches: [
    "Sell Lemons codes",
    "Sell Lemons guide",
    "Sell Lemons wiki",
    "Sell Lemons progression",
    "Sell Lemons income sources",
    "Sell Lemons rebirths",
    "Sell Lemons deals"
  ],
  wikiLinks,
  progressionFunnel: [
    { step: "1", title: "Beginner Guide", desc: "Learn the basics, grow your first lemons, and build your foundation.", href: "/progression/" },
    { step: "2", title: "Make Money Fast", desc: "Discover the fastest ways to earn cash and scale your income early.", href: "/income-sources/" },
    { step: "3", title: "Best Progression", desc: "Optimize your upgrades, unlock key systems, and maximize your profits.", href: "/progression/" },
    { step: "4", title: "Rebirth Guide", desc: "Reset to gain powerful permanent boosts and accelerate your growth.", href: "/rebirths/" },
    { step: "5", title: "Deals & Haggling", desc: "Master NPC negotiation choices and strategy for better returns.", href: "/deals/" }
  ],
  secrets: [
    { name: "Sewer Key", desc: "Unlocks underground sewer system with hidden loot and rare items.", href: "/progression/" },
    { name: "UFO Key", desc: "Triggers UFO event zone with special spawn mechanics.", href: "/deals/" },
    { name: "Secret Areas", desc: "Unmarked zones with hidden interactions and rewards.", href: "/income-sources/" }
  ],
  tierListData: {
    S: {
      title: "S Tier – Essential Progression Systems",
      desc: "The most powerful systems in Sell Lemons. Essential for long-term progression.",
      items: [
        "Alien Investors -> permanent progression currency",
        "Rebirth System -> unlocks account-wide growth boosts",
        "Empire Expansion -> massive long-term income scaling",
        "Global Market Access -> highest revenue multiplier system",
        "VIP Customer Network -> top-tier profit generation mechanic"
      ]
    },
    A: {
      title: "A Tier – High Efficiency Systems",
      desc: "Improves income scaling speed and automation efficiency in mid-game progression.",
      items: [
        "LemonDash Unlock -> early cash acceleration system",
        "LemonDash Manager -> automated racing income loop",
        "Vehicle Speed Upgrades -> delivery efficiency boost",
        "Depot Manager -> base automation system"
      ]
    },
    B: {
      title: "B Tier – Mid Progress Systems",
      desc: "Useful for early-to-mid progression, but becomes less efficient once automation systems unlock.",
      items: [
        "Labs Permanent Upgrades -> long-term scaling unlock",
        "Cup Stand Upgrade -> passive income source",
        "Depot Multipliers -> temporary income spikes"
      ]
    },
    C: {
      title: "C Tier – Low Efficiency Systems",
      desc: "Basic systems that are quickly outscaled by optimized farming and automation builds.",
      items: [
        "Main Lemon Stands -> basic passive income",
        "Required Decorations -> progression blockers"
      ]
    },
    D: {
      title: "D Tier – Non-Economic Systems",
      desc: "Systems with no impact on income or progression.",
      items: [
        "Cosmetic Skins -> visual customization only",
        "Fences & Decorations -> base styling only",
        "Time Skip Items -> situational consumables"
      ]
    }
  } as Record<string, { title: string; desc: string; items: string[] }>,
  faq: [
    {
      q: "When do I unlock Rebirth?",
      a: "You unlock the Rebirth feature when your total base valuation hits roughly 50 to 100 Sextillion. Note that rebirth tracking is not strictly about how much cash you currently hold in your wallet. It calculates your total progression value, including the money you have already spent upgrading your stats and buying buttons around your base."
    },
    {
      q: "When do I unlock Evolution, and what does it do?",
      a: "Evolution unlocks later in the game, requiring a total cash/base valuation estimate between 50 to 100 Octillion, alongside reaching a specific benchmark of Investors. Activating an Evolution grants your base a massive 42x income speed buff. This means every consecutive evolution allows you to progress through the game roughly 42 times faster than the previous tier."
    },
    {
      q: "When do I unlock Remote Buy, and how much does it cost?",
      a: "Remote Buy becomes available around Evolution 6 and it costs a staggering Trigentillion Investors. The player base generally considers this specific pricing hurdle to be quite unbalanced. Trigentillion investors is a target reached only minutes before you are ready to Ascend, making the late-game Remote Buy item less impactful than it should be."
    },
    {
      q: "How do I solve the Sewer Mazes?",
      a: "There are two distinct hidden puzzles inside the Sewers: one rewards you with the UFO Key to secure the permanent 2x Investor multiplier, and the other unlocks access to the Cosmic Cash Vines. Because the maze patterns require very specific lever sequences, the fastest way to solve them is by pulling up a dedicated visual step-by-step video tutorial on YouTube or joining the Bloxs by Games Discord server to get real-time maps from community members."
    },
    {
      q: "Why do some players have a 32% Investor Multiplier?",
      a: "A standard free-to-play player can reach a maximum caps-out limit of 2% by finding the hidden sewer UFO key. High-tier leaderboard players buy the 'Double Investors' Gamepass up to 4 times, stacking it significantly. Combined with purchasing the four-stack Speed Gamepass and utilizing Remote Buy, P2W players can end up progressing over 1,000 times faster than F2P players."
    },
    {
      q: "When do I unlock the Stairway?",
      a: "You can build and unlock the Stairway for the first time once you cross into the Tredecillion cash territory."
    },
    {
      q: "When do I unlock Ascension, and what are the requirements?",
      a: "Ascension becomes available during Evolution 6. To trigger Ascension, you must fully complete construction on the Stairway and purchase every single button in your tycoon, including optional cosmetic decorations. This requires an investment of roughly Duo-Octogentillion cash and an investor count climbing into the Trigentillion range."
    },
    {
      q: "What exactly happens when I ascend?",
      a: "When you Ascend, your world resets but you receive three core rewards: a 7.77x Global Cash Multiplier, a 1x Forever Purchase Token, and a Cosmetic Halo. However, everything in the tycoon will instantly become 3.33x more expensive to purchase. Dividing your 7.77x cash increase by the 3.33x cost increase leaves you with a net 2.33x progression speed buff, which compounds exponentially every time you ascend."
    },
    {
      q: "What is a Forever Purchase and how do I get it?",
      a: "You can claim a Forever Purchase token by successfully completing an Ascension, or by purchasing it directly for 1,499 Robux. Activating this token allows you to select any single purchase button in your tycoon and make it permanently unlocked. The chosen button will stay active through all future Ascensions, removing the need to ever pay for it again."
    },
    {
      q: "What is the best first Forever Purchase?",
      a: "The most optimal candidate for your first Forever Purchase is the 42x Global Cash Upgrade button. The two separate 16x Global Cash buttons found around the base are also top-tier choices. Do not use your early tokens on the late-game Lemon X Income Source or its Manager. While they boast high raw values, their production speed is incredibly slow; you need to secure multiple Global Speed buttons first before those sources become economically efficient."
    }
  ]
};
