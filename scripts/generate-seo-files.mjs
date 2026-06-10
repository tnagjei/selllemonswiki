// input: Config and game metadata files (src/data/config.ts, src/data/game.ts)
// output: dist/sitemap.xml, dist/robots.txt, dist/llms.txt, dist/llms-full.txt
// pos: /Users/tangjei/Documents/建站/游戏站/selllemonswiki/scripts/generate-seo-files.mjs (更新规则：文件变更需同步本注释与所属目录 README)
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const distDir = path.join(root, "dist");
const configText = fs.readFileSync(path.join(root, "src/data/config.ts"), "utf8");
const gameText = fs.readFileSync(path.join(root, "src/data/game.ts"), "utf8");

function extractString(source, key, fallback = "") {
  const match = source.match(new RegExp(`${key}:\\s*["']([^"']*)["']`, "m"));
  return match?.[1] || fallback;
}

function extractArray(source, key) {
  const match = source.match(new RegExp(`${key}:\\s*\\[([^\\]]*)\\]`, "m"));
  if (!match) return [];
  return Array.from(match[1].matchAll(/["']([^"']*)["']/g)).map((item) => item[1]);
}

function cleanBaseUrl(value) {
  return value.replace(/\/+$/g, "");
}

function absoluteUrl(baseUrl, routePath) {
  const normalizedPath = routePath.startsWith("/") ? routePath : `/${routePath}`;
  return `${cleanBaseUrl(baseUrl)}${normalizedPath}`;
}

function routePath(slug) {
  return slug ? `/${slug}/` : "/";
}

const siteName = extractString(configText, "siteName", "Example Game Guide");
const gameName = extractString(configText, "gameName", "Example Roblox Game");
const siteDomain = extractString(configText, "siteDomain", "https://example.com");
const primaryKeyword = extractString(configText, "primaryKeyword", "Example Roblox Game guide");
const launchMode = extractString(configText, "launchMode", "minimal");
const completedLocales = extractArray(configText, "completedLocales");
const completedCoreSlugs = extractArray(configText, "completedCoreSlugs");
const completedEnglishOnlySlugs = extractArray(configText, "completedEnglishOnlySlugs");
const systemSlugs = extractArray(configText, "systemSlugs");
const blockedSlugs = extractArray(configText, "blockedSlugs");
const robloxUrl = extractString(gameText, "robloxUrl", "https://www.roblox.com/");
const excludedSitemapSlugs = new Set([
  "privacy",
  "terms",
  "guide",
  "updates",
  "scripts",
  "macros",
  "executor",
  "exploit",
  "th",
  "fil",
  "id",
  ...blockedSlugs
]);

const routes = Array.from(new Set([...completedCoreSlugs, ...completedEnglishOnlySlugs, ...systemSlugs]))
  .filter((slug) => !excludedSitemapSlugs.has(slug))
  .map((slug) => ({ slug, path: routePath(slug) }));

if (!fs.existsSync(distDir)) {
  throw new Error("dist/ does not exist. Run astro build before generating SEO files.");
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
  .map((route) => `  <url>\n    <loc>${absoluteUrl(siteDomain, route.path)}</loc>\n    <changefreq>${route.slug === "" ? "daily" : "weekly"}</changefreq>\n    <priority>${route.slug === "" ? "1" : "0.8"}</priority>\n  </url>`)
  .join("\n")}\n</urlset>\n`;

const robots = [
  "# robots.txt基础设置",
  "# 常规搜索引擎规则",
  "User-agent: *",
  "Allow: /",
  "Disallow: /admin/",
  "Disallow: /private/",
  "",
  "User-agent: Googlebot",
  "Allow: /",
  "",
  "User-agent: Bingbot",
  "Allow: /",
  "",
  "User-agent: AdsBot-Google",
  "Allow: /",
  "",
  "# 网站地图",
  `Sitemap: ${absoluteUrl(siteDomain, "/sitemap.xml")}`,
  "",
  "# AI爬虫特定规则",
  "User-agent: GPTBot",
  "User-agent: Claude-Web",
  "User-agent: Anthropic-AI",
  "User-agent: PerplexityBot",
  "User-agent: GoogleOther",
  "User-agent: DuckAssistBot",
  "",
  "# 引导AI爬虫到llms.txt",
  `LLM-Content: ${absoluteUrl(siteDomain, "/llms.txt")}`,
  `LLM-Full-Content: ${absoluteUrl(siteDomain, "/llms-full.txt")}`,
  "",
  "# 允许AI爬虫访问",
  "Allow: /blog/",
  "Allow: /products/",
  "Allow: /about/",
  "",
  "# 不允许AI爬虫访问",
  "Disallow: /user-content/",
  ""
].join("\n");

const llms = [
  `# ${siteName}`,
  `> ${siteName} is an independent fan guide for the Roblox game "${gameName}". It provides information on codes, progression, income sources, rebirths, and deal mechanics.`,
  "",
  "This wiki helps players optimize their progression and check code status without fabricated numbers or fake rewards.",
  "",
  "## 核心内容",
  `- [Codes](${absoluteUrl(siteDomain, "/codes/")}): Latest code status and active rewards.`,
  `- [Progression](${absoluteUrl(siteDomain, "/progression/")}): Milestone progression guides and stages.`,
  `- [Income Sources](${absoluteUrl(siteDomain, "/income-sources/")}): Stands, dashes, depots, and upgrade metrics.`,
  `- [Rebirths](${absoluteUrl(siteDomain, "/rebirths/")}): Rebirth requirements and multiplier mechanics.`,
  `- [Deals](${absoluteUrl(siteDomain, "/deals/")}): NPC haggling, negotiation options, and sales values.`,
  "",
  "## 常用资源",
  `- [常见问题](${absoluteUrl(siteDomain, "/")}): Frequently asked questions on the homepage.`,
  `- [联系方式](${absoluteUrl(siteDomain, "/contact/")}): Contact email for corrections and feedback.`,
  "",
  "## 可选",
  `- [关于我们](${absoluteUrl(siteDomain, "/about/")}): About the Sell Lemons Wiki fan site project.`,
  `- [编辑方针](${absoluteUrl(siteDomain, "/editorial-policy/")}): Editorial policy and evidence-first standards.`,
  ""
].join("\n");

const llmsFull = [
  llms,
  "## Template configuration",
  `- Game: ${gameName}`,
  `- Primary keyword: ${primaryKeyword}`,
  `- Launch mode: ${launchMode}`,
  `- Completed locales: ${completedLocales.join(", ")}`,
  `- Completed core slugs: ${completedCoreSlugs.join(", ")}`,
  `- Roblox URL: ${robloxUrl}`,
  ""
].join("\n");

fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(distDir, "robots.txt"), robots);
fs.writeFileSync(path.join(distDir, "llms.txt"), llms);
fs.writeFileSync(path.join(distDir, "llms-full.txt"), llmsFull);

console.log(`Generated ${routes.length} sitemap route(s).`);
console.log("Generated static SEO files in dist/.");
