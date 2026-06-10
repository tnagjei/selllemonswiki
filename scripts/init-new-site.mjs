// input: Command line arguments containing site name, game name, domain, email, iconTheme, colors, etc.
// output: Formatted Astro configuration, homepage metadata, and core pages for the new site
// pos: /Users/tangjei/Documents/建站/游戏站/selllemonswiki/scripts/init-new-site.mjs (更新规则：文件变更需同步本注释与所属目录 README)
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const args = process.argv.slice(2);
const WIKI_HUB_SLUGS = ["", "codes", "progression", "income-sources", "rebirths", "deals"];
const MINIMAL_SLUGS = [""];
const WIKI_PAGE_FILES = [
  "src/pages/codes.astro",
  "src/pages/progression.astro",
  "src/pages/income-sources.astro",
  "src/pages/rebirths.astro",
  "src/pages/deals.astro"
];
const ICON_THEMES = ["default", "magic", "farm", "anime", "combat", "racing", "simulator"];

function parseArgs(items) {
  const result = {};
  for (let i = 0; i < items.length; i += 1) {
    const item = items[i];
    if (!item.startsWith("--")) continue;
    const key = item.slice(2);
    const next = items[i + 1];
    if (!next || next.startsWith("--")) {
      result[key] = "true";
    } else {
      result[key] = next;
      i += 1;
    }
  }
  return result;
}

function usage() {
  return `Usage:\n  npm run init:new-site -- --site-name "Example Guide" --game-name "Example Game" --domain "https://example.com" --contact-email "admin@example.com" --roblox-url "https://www.roblox.com/games/123/example" --icon-theme magic\n\nRequired:\n  --site-name\n  --game-name\n  --domain\n  --contact-email\n  --roblox-url\n\nDefault launch mode:\n  wiki-hub\n\nLaunch modes:\n  --launch-mode wiki-hub\n  --launch-mode minimal\n\nOptional Roblox metadata:\n  --primary-keyword\n  --creator-name\n  --universe-id\n  --root-place-id\n  --max-players\n  --official-title\n  --genre\n\nOptional themed icon settings:\n  --icon-theme default|magic|farm|anime|combat|racing|simulator\n  --brand-color "#17241f"\n  --accent-color "#facc15"\n`;
}

function assertRequired(options, key) {
  if (!options[key] || options[key].trim() === "") {
    throw new Error(`Missing required argument: --${key}`);
  }
}

function assertHttpsUrl(label, value) {
  let parsed;
  try {
    parsed = new URL(value);
  } catch {
    throw new Error(`${label} must be a valid URL`);
  }
  if (parsed.protocol !== "https:") {
    throw new Error(`${label} must start with https://`);
  }
  return parsed.toString().replace(/\/+$/g, "");
}

function assertEmail(value) {
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) {
    throw new Error("--contact-email must be a valid email address");
  }
}

function numberOrNull(value, label) {
  if (!value) return null;
  if (!/^\d+$/.test(value)) throw new Error(`${label} must be a numeric value`);
  return Number(value);
}

function assertHexColor(label, value) {
  if (!/^#[0-9a-fA-F]{6}$/.test(value)) throw new Error(`${label} must be a hex color like #17241f`);
  return value.toLowerCase();
}

function write(file, content) {
  fs.writeFileSync(path.join(root, file), `${content.trim()}\n`);
}

function q(value) {
  return JSON.stringify(value);
}

function packageNameFromDomain(domain) {
  return domain.replace(/^https:\/\//, "").replace(/^www\./, "").replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-+|-+$/g, "").toLowerCase() || "roblox-guide-site";
}

function removeWikiPagesForMinimal() {
  for (const file of WIKI_PAGE_FILES) {
    const fullPath = path.join(root, file);
    if (fs.existsSync(fullPath)) fs.unlinkSync(fullPath);
  }
}

const options = parseArgs(args);

if (options.help === "true") {
  console.log(usage());
  process.exit(0);
}

try {
  for (const key of ["site-name", "game-name", "domain", "contact-email", "roblox-url"]) {
    assertRequired(options, key);
  }

  const siteName = options["site-name"].trim();
  const gameName = options["game-name"].trim();
  const siteDomain = assertHttpsUrl("--domain", options.domain.trim());
  const contactEmail = options["contact-email"].trim();
  const robloxUrl = assertHttpsUrl("--roblox-url", options["roblox-url"].trim());
  const launchMode = (options["launch-mode"] || "wiki-hub").trim();
  const primaryKeyword = (options["primary-keyword"] || `${gameName} guide`).trim();
  const creatorName = (options["creator-name"] || "Unknown creator").trim();
  const officialTitle = (options["official-title"] || gameName).trim();
  const genre = (options.genre || "Roblox adventure").trim();
  const universeId = numberOrNull(options["universe-id"], "--universe-id");
  const rootPlaceId = numberOrNull(options["root-place-id"], "--root-place-id");
  const maxPlayers = numberOrNull(options["max-players"], "--max-players");
  const iconTheme = (options["icon-theme"] || "default").trim();
  const brandColor = assertHexColor("--brand-color", options["brand-color"] || "#17241f");
  const accentColor = assertHexColor("--accent-color", options["accent-color"] || "#facc15");

  if (!["minimal", "wiki-hub"].includes(launchMode)) {
    throw new Error("--launch-mode must be minimal or wiki-hub");
  }
  if (!ICON_THEMES.includes(iconTheme)) {
    throw new Error(`--icon-theme must be one of: ${ICON_THEMES.join(", ")}`);
  }

  assertEmail(contactEmail);

  const completedCoreSlugs = launchMode === "wiki-hub" ? WIKI_HUB_SLUGS : MINIMAL_SLUGS;

  if (launchMode === "minimal") removeWikiPagesForMinimal();

  write(
    "src/data/config.ts",
    `export const siteConfig = {
  siteName: ${q(siteName)},
  gameName: ${q(gameName)},
  siteDomain: ${q(siteDomain)},
  contactEmail: ${q(contactEmail)},
  primaryKeyword: ${q(primaryKeyword)},
  launchMode: ${q(launchMode)},
  defaultLocale: "en",
  availableLocales: ["en", "th", "fil", "id"],
  completedLocales: ["en"],
  coreSlugs: ["", "codes", "progression", "income-sources", "rebirths", "deals"],
  completedCoreSlugs: ${JSON.stringify(completedCoreSlugs)},
  englishOnlySlugs: [],
  completedEnglishOnlySlugs: [],
  systemSlugs: ["about", "contact", "editorial-policy"],
  blockedSlugs: ["scripts", "macros", "executor", "exploit"],
  navigationSlugs: ["", "codes", "progression", "income-sources", "rebirths", "deals"],
  publisher: {
    displayName: ${q(siteName)},
    responseTime: "We usually review messages within 7 business days.",
    country: ""
  },
  systemPages: {
    about: true,
    contact: true,
    privacy: true,
    terms: true,
    editorialPolicy: true,
    adPolicy: false
  },
  analytics: {
    googleAnalyticsId: "",
    adsenseClient: "",
    clarityId: "",
    thirdPartyAdScripts: []
  },
  assets: {
    icon: "/icon.svg",
    hero: "/hero-placeholder.svg",
    iconTheme: ${q(iconTheme)},
    brandColor: ${q(brandColor)},
    accentColor: ${q(accentColor)}
  }
};`
  );

  write(
    "src/data/game.ts",
    `export const gameData = {
  robloxUrl: ${q(robloxUrl)},
  creatorName: ${q(creatorName)},
  universeId: ${universeId === null ? "null" : universeId},
  rootPlaceId: ${rootPlaceId === null ? "null" : rootPlaceId},
  maxPlayers: ${maxPlayers === null ? "null" : maxPlayers},
  officialTitle: ${q(officialTitle)},
  genre: ${q(genre)},
  sourceConfidence: [
    { label: "Roblox game page", level: "pending" },
    { label: "Roblox public API", level: "pending" },
    { label: "Official channels", level: "pending" },
    { label: "In-game checks", level: "pending" }
  ],
  codes: {
    verifiedActiveCodes: [],
    pendingCodes: [],
    communityReportedCodes: [],
    officialStatus: "No verified official active codes yet",
    verificationPolicy: "Do not publish active codes as verified without official or in-game proof."
  }
};`
  );

  write(
    "src/content/home.ts",
    `import { siteConfig } from "../data/config";

export const wikiLinks = [
  { title: "Codes", slug: "codes", description: "Track official and community-reported code status without inventing active rewards." },
  { title: "Progression", slug: "progression", description: "Research reported growth paths, milestones, and strategies." },
  { title: "Income Sources", slug: "income-sources", description: "Track reported income sources without fabricating costs or multipliers." },
  { title: "Rebirths", slug: "rebirths", description: "Research reported rebirth mechanics and bonuses." },
  { title: "Deals", slug: "deals", description: "Track reported deal and haggling mechanics without fabricating rates or prices." }
];

export const homeContent = {
  title: \`\${siteConfig.siteName} | Roblox Wiki Hub\`,
  description: \`\${siteConfig.siteName} is an evidence-first Roblox wiki hub for codes, progression, income sources, rebirths, and deals.\`,
  hero: {
    eyebrow: "Roblox wiki hub",
    title: \`\${siteConfig.gameName} Wiki Hub\`,
    lede: "Community-reported information is labeled as unverified until official, Roblox API, or in-game proof exists.",
    primaryAction: "Open Roblox page"
  },
  quickFacts: [
    { label: "Evidence policy", value: "Verified / community-reported / pending" },
    { label: "Default language", value: "English" },
    { label: "Click depth", value: "Core wiki pages stay within three clicks" }
  ],
  trendingSearches: [
    \`\${siteConfig.gameName} codes\`,
    \`\${siteConfig.gameName} progression\`,
    \`\${siteConfig.gameName} income sources\`,
    \`\${siteConfig.gameName} rebirths\`,
    \`\${siteConfig.gameName} deals\`
  ],
  wikiLinks,
  guideMap: [
    { step: "1", title: "Start from the hub", body: "The homepage links directly to every completed guide page." },
    { step: "2", title: "Move through guide pages", body: "Each guide page links back to the hub and to related guide pages." },
    { step: "3", title: "Keep evidence labels visible", body: "Every page shows whether information is verified, community-reported, or pending." }
  ],
  faq: [
    { q: "Are community-reported codes verified?", a: "No. They are research signals until independently confirmed." },
    { q: "Can the wiki hub add more pages?", a: "Yes, but every public guide page must stay linked from the hub and remain within three clicks." }
  ]
};`
  );

  write(
    "astro.config.mjs",
    `import { defineConfig } from "astro/config";

export default defineConfig({
  site: ${q(siteDomain)},
  output: "static",
  trailingSlash: "always"
});`
  );

  const packagePath = path.join(root, "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));
  packageJson.name = packageNameFromDomain(siteDomain);
  fs.writeFileSync(packagePath, `${JSON.stringify(packageJson, null, 2)}\n`);

  console.log("New Astro Roblox guide site initialized.");
  console.log(`- Site: ${siteName}`);
  console.log(`- Game: ${gameName}`);
  console.log(`- Domain: ${siteDomain}`);
  console.log(`- Launch mode: ${launchMode}`);
  console.log(`- Icon theme: ${iconTheme}`);
  console.log("Next: run npm run build, then npm run check");
} catch (error) {
  console.error("init:new-site failed:");
  console.error(`- ${error.message}`);
  console.error(usage());
  process.exit(1);
}
