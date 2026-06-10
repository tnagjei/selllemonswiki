// input: All main source files, configurations, pages, and components in the repository
// output: Test execution results via tap reporter asserting codebase integrity and public-content constraints
// pos: /Users/tangjei/Documents/建站/游戏站/selllemonswiki/tests/template.test.mjs (更新规则：文件变更需同步本注释与所属目录 README)
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function exists(file) {
  return fs.existsSync(file);
}

function includesInsensitive(text, needle) {
  return text.toLowerCase().includes(needle.toLowerCase());
}

const blockedToolSlug = "ex" + "ploit";
const wikiSlugs = ["", "codes", "progression", "income-sources", "rebirths", "deals"];
const corePageFiles = [
  "src/pages/index.astro",
  "src/pages/codes.astro",
  "src/pages/progression.astro",
  "src/pages/income-sources.astro",
  "src/pages/rebirths.astro",
  "src/pages/deals.astro"
];
const systemPageFiles = [
  "src/pages/about.astro",
  "src/pages/contact.astro",
  "src/pages/editorial-policy.astro",
  "src/pages/privacy.astro",
  "src/pages/terms.astro"
];
const publicContentFiles = [
  "src/content/home.ts",
  "src/data/reported-guides.ts",
  "src/content/system-pages.ts",
  "src/components/Header.astro",
  "src/components/Footer.astro",
  "src/components/RelatedGuides.astro",
  ...corePageFiles
];
const forbiddenPublicPhrases = [
  "value list",
  "tier list",
  "classes",
  "weapons",
  "Astro Roblox wiki hub",
  "Roblox guide template",
  "template default",
  "template route"
];
const forbiddenPublicRoutes = [
  "/classes/",
  "/weapons/",
  "/tier-list/",
  "/value-list/",
  "/scripts/",
  "/macros/",
  "/executor/",
  `/${blockedToolSlug}/`,
  "/guide/",
  "/updates/"
];

test("required Sell Lemons Wiki files exist", () => {
  const requiredFiles = [
    "astro.config.mjs",
    "package.json",
    "src/data/config.ts",
    "src/data/game.ts",
    "src/data/reported-guides.ts",
    "src/content/home.ts",
    "src/content/system-pages.ts",
    "src/lib/navigation.ts",
    "src/components/Header.astro",
    "src/components/Footer.astro",
    "src/components/RelatedGuides.astro",
    "scripts/generate-seo-files.mjs",
    "scripts/validate-template.mjs",
    "scripts/validate-static-export.mjs",
    "scripts/init-new-site.mjs",
    "scripts/audit-new-site.mjs",
    "public/icon.svg",
    "public/hero-placeholder.svg",
    ...corePageFiles,
    ...systemPageFiles
  ];

  for (const file of requiredFiles) {
    assert.equal(exists(file), true, `${file} should exist`);
  }
});

test("package scripts keep full validation chain", () => {
  const packageJson = JSON.parse(read("package.json"));

  assert.equal(packageJson.scripts.build, "node scripts/generate-favicons.mjs && astro build && node scripts/generate-seo-files.mjs");
  assert.equal(packageJson.scripts["init:new-site"], "node scripts/init-new-site.mjs");
  assert.equal(packageJson.scripts["validate:template"], "node scripts/validate-template.mjs");
  assert.equal(packageJson.scripts["validate:static-export"], "node scripts/validate-static-export.mjs");
  for (const command of ["audit:new-site", "validate:template", "npm test", "npm run build", "validate:static-export"]) {
    assert.ok(packageJson.scripts.check.includes(command), `check script must include ${command}`);
  }
});

test("core config remains locked to Sell Lemons v1 scope", () => {
  const config = read("src/data/config.ts");

  for (const exact of [
    'siteName: "Sell Lemons Wiki"',
    'gameName: "Sell Lemons"',
    'siteDomain: "https://selllemonswiki.online"',
    'contactEmail: "tangjei414@gmail.com"',
    'completedCoreSlugs: ["", "codes", "progression", "income-sources", "rebirths", "deals"]',
    'navigationSlugs: ["", "codes", "progression", "income-sources", "rebirths", "deals"]',
    'systemSlugs: ["about", "contact", "editorial-policy"]'
  ]) {
    assert.ok(config.includes(exact), `config must include ${exact}`);
  }

  for (const slug of ["classes", "weapons", "tier-list", "value-list"]) {
    assert.equal(config.includes(`"${slug}"`), false, `${slug} must not be in config public slugs`);
  }
});

test("game data keeps only verified fixed facts and no fake active code defaults", () => {
  const game = read("src/data/game.ts");

  for (const exact of [
    'title: "Sell Lemons"',
    'rootPlaceId: "79268393072444"',
    'creatorName: "BloxByte Games"',
    'robloxUrl: "https://www.roblox.com/games/79268393072444/Sell-Lemons"',
    "verifiedActiveCodes: []",
    "communityReportedCodes: []"
  ]) {
    assert.ok(game.includes(exact), `game data must include ${exact}`);
  }
});

test("homepage trending searches stay inside v1 intent coverage", () => {
  const home = read("src/content/home.ts");

  for (const phrase of [
    "Sell Lemons codes",
    "Sell Lemons guide",
    "Sell Lemons wiki",
    "Sell Lemons progression",
    "Sell Lemons income sources",
    "Sell Lemons rebirths",
    "Sell Lemons deals"
  ]) {
    assert.ok(home.includes(phrase), `homepage search terms must include ${phrase}`);
  }

  for (const forbidden of ["value list", "tier list", "classes", "weapons"]) {
    assert.equal(includesInsensitive(home, forbidden), false, `homepage must not include ${forbidden}`);
  }
});

test("public content files do not expose removed v1 modules or public template residue", () => {
  for (const file of publicContentFiles) {
    const text = read(file);
    for (const phrase of forbiddenPublicPhrases) {
      assert.equal(includesInsensitive(text, phrase), false, `${file} must not include ${phrase}`);
    }
  }
});

test("reported guide data downgrades research leads to pending", () => {
  const reported = read("src/data/reported-guides.ts");

  for (const phrase of [
    'status: "pending"',
    'sourceLabel: pendingSourceLabel',
    'Pending: community-reported, not independently verified',
    'pending verification',
    'research lead'
  ]) {
    assert.ok(reported.includes(phrase), `reported guide data must include ${phrase}`);
  }

  for (const phrase of [
    "players start with",
    "available at the start",
    "unlocked through progression",
    "provides permanent bonuses"
  ]) {
    assert.equal(includesInsensitive(reported, phrase), false, `reported guide data must not include ${phrase}`);
  }
});

test("unsafe and removed pages do not exist", () => {
  for (const route of forbiddenPublicRoutes) {
    const pageFile = `src/pages${route}index.astro`.replace("//", "/");
    const directPageFile = `src/pages${route.slice(0, -1)}.astro`;
    assert.equal(exists(pageFile), false, `${pageFile} must not exist`);
    assert.equal(exists(directPageFile), false, `${directPageFile} must not exist`);
  }
});

test("privacy and terms are generated as HTML pages but kept out of sitemap", () => {
  const privacy = read("src/pages/privacy.astro");
  const terms = read("src/pages/terms.astro");
  const generator = read("scripts/generate-seo-files.mjs");
  const validator = read("scripts/validate-static-export.mjs");

  assert.ok(privacy.includes("noindex"));
  assert.ok(terms.includes("noindex"));
  assert.ok(privacy.includes("systemPageContent"));
  assert.ok(terms.includes("systemPageContent"));
  assert.ok(generator.includes('"privacy"'));
  assert.ok(generator.includes('"terms"'));
  assert.ok(validator.includes('"privacy"'));
  assert.ok(validator.includes('"terms"'));
});

test("footer keeps AdSense readiness trust links and contact content is wired", () => {
  const footer = read("src/components/Footer.astro");
  const systemPages = read("src/content/system-pages.ts");

  for (const fragment of ['href="/about/"', 'href="/contact/"', 'href="/privacy/"', 'href="/terms/"', 'href="/editorial-policy/"']) {
    assert.ok(footer.includes(fragment), `Footer must include ${fragment}`);
  }
  assert.ok(systemPages.includes("tangjei414@gmail.com"));
});

test("SEO file generator avoids public template residue and removed modules", () => {
  const generator = read("scripts/generate-seo-files.mjs");

  for (const required of [
    "independent fan guide for the Roblox game",
    "Site configuration",
    "Do not publish active codes, rewards, income source stats, rebirth requirements, deal rates, or official claims without verified source evidence."
  ]) {
    assert.ok(generator.includes(required), `generator must include ${required}`);
  }

  for (const phrase of ["Roblox guide template", "Astro Roblox wiki hub", "Template configuration"]) {
    assert.equal(generator.includes(phrase), false, `generator must not include ${phrase}`);
  }

  for (const slug of ["classes", "weapons", "tier-list", "value-list", "guide", "updates", "scripts", "macros", "executor"]) {
    assert.ok(generator.includes(`"${slug}"`), `generator must explicitly exclude ${slug}`);
  }
});

test("static export validator scans public outputs for forbidden routes and phrases", () => {
  const validator = read("scripts/validate-static-export.mjs");

  for (const phrase of [
    "llms.txt",
    "llms-full.txt",
    "sitemap.xml",
    "forbiddenOutputPhrases",
    "value list",
    "tier list",
    "classes",
    "weapons",
    "Roblox guide template",
    "Astro Roblox wiki hub",
    "template default",
    "template route"
  ]) {
    assert.ok(validator.includes(phrase), `validator must check ${phrase}`);
  }

  for (const route of ["/value-list/", "/tier-list/", "/classes/", "/weapons/", "/guide/", "/updates/", "/scripts/", "/macros/", "/executor/"]) {
    assert.ok(validator.includes(route), `validator must reject ${route}`);
  }
});

test("validate-template scans public source files for forbidden public phrases", () => {
  const validator = read("scripts/validate-template.mjs");

  for (const file of publicContentFiles) {
    assert.ok(validator.includes(file), `validate-template must scan ${file}`);
  }
  for (const phrase of forbiddenPublicPhrases) {
    assert.ok(validator.includes(phrase), `validate-template must check ${phrase}`);
  }
});

test("cluster pages keep related-guide wiring", () => {
  const related = read("src/components/RelatedGuides.astro");
  const home = read("src/content/home.ts");

  assert.ok(related.includes('href="/"'));
  assert.ok(related.includes("wikiLinks"));
  for (const slug of wikiSlugs.filter(Boolean)) {
    assert.ok(home.includes(`slug: "${slug}"`), `home wikiLinks must include ${slug}`);
    assert.ok(read(`src/pages/${slug}.astro`).includes("RelatedGuides"), `${slug} page must include RelatedGuides`);
  }
});
