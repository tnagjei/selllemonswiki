// input: None
// output: siteConfig object containing main layout config, site name, domain, social metadata, and brand assets
// pos: /Users/tangjei/Documents/建站/游戏站/selllemonswiki/src/data/config.ts (更新规则：文件变更需同步本注释与所属目录 README)
export const siteConfig = {
  siteName: "Sell Lemons Wiki",
  gameName: "Sell Lemons",
  siteDomain: "https://selllemonswiki.online",
  contactEmail: "tangjei414@gmail.com",
  primaryKeyword: "Sell Lemons wiki",
  launchMode: "wiki-hub",
  defaultLocale: "en",
  availableLocales: ["en", "th", "fil", "id"],
  completedLocales: ["en"],
  coreSlugs: ["", "codes", "progression", "income-sources", "rebirths", "deals"],
  completedCoreSlugs: ["", "codes", "progression", "income-sources", "rebirths", "deals"],
  englishOnlySlugs: [],
  completedEnglishOnlySlugs: [],
  systemSlugs: ["about", "contact", "editorial-policy"],
  blockedSlugs: ["scripts", "macros", "executor", "exploit"],
  navigationSlugs: ["", "codes", "progression", "income-sources", "rebirths", "deals"],
  publisher: {
    displayName: "Sell Lemons Wiki Team",
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
    googleAnalyticsId: "G-PM2981L1DT",
    adsenseClient: "",
    clarityId: "x576g94ju8",
    thirdPartyAdScripts: [],
    smartLink: "https://www.effectivecpmnetwork.com/bd1dpr43?key=37a38b995720f98233d9fa8cde15c66",
    nativeBannerScript: "https://pl29708726.effectivecpmnetwork.com/c02c96835811063bd6ef36dd598ac1ae/invoke.js",
    nativeBannerContainerId: "container-c02c96835811063bd6ef36dd598ac1ae"
  },
  assets: {
    icon: "/icon.svg",
    hero: "/sell_lemons_hero_main.png",
    iconTheme: "simulator",
    brandColor: "#236b2e",
    accentColor: "#facc15"
  }
};

