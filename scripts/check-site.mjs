import fs from "node:fs";
import path from "node:path";

const SITE = path.resolve("_site");
const LANGS = ["fr", "en", "ar"];
const PAGES = ["", "services/", "produits/", "contact/", "mentions-legales/"];
const EXTRA = ["contact/merci/"];

const errors = [];
const warnings = [];

function fail(msg) {
  errors.push(msg);
}

function warn(msg) {
  warnings.push(msg);
}

function read(rel) {
  const full = path.join(SITE, rel);
  if (!fs.existsSync(full)) {
    fail(`Missing file: ${rel}`);
    return null;
  }
  return fs.readFileSync(full, "utf8");
}

function exists(rel) {
  return fs.existsSync(path.join(SITE, rel));
}

function pagePath(lang, page) {
  return path.join(lang, page, "index.html");
}

function assertOneMatch(html, pattern, label, rel) {
  const matches = html.match(pattern) || [];
  if (matches.length !== 1) {
    fail(`${rel}: expected exactly 1 ${label}, found ${matches.length}`);
  }
}

function assertMatch(html, pattern, label, rel) {
  if (!pattern.test(html)) {
    fail(`${rel}: missing ${label}`);
  }
}

function collectInternalLinks(html) {
  const links = new Set();
  const re = /(?:href|src)=["'](\/[^"'#?]*)/g;
  let match;
  while ((match = re.exec(html))) {
    links.add(match[1]);
  }
  return [...links];
}

function resolveSitePath(urlPath) {
  const clean = urlPath.split("#")[0].split("?")[0];
  if (clean === "/" || clean === "") {
    return "index.html";
  }
  const noSlash = clean.replace(/^\//, "").replace(/\/$/, "");
  const asFile = noSlash;
  const asIndex = path.join(noSlash, "index.html");
  if (exists(asFile)) return asFile;
  if (exists(asIndex)) return asIndex;
  return null;
}

console.log("Running NADAF site checks…\n");

if (!fs.existsSync(SITE)) {
  console.error("_site/ not found. Run `npm run build` first.");
  process.exit(1);
}

// --- Core artifacts ---
assertMatch(read("robots.txt") || "", /Sitemap:\s*https:\/\/www\.nadaf\.eco\/sitemap\.xml/, "sitemap reference", "robots.txt");
const sitemap = read("sitemap.xml") || "";
assertMatch(sitemap, /xmlns:xhtml=/, "xhtml namespace for hreflang", "sitemap.xml");
for (const lang of LANGS) {
  assertMatch(sitemap, new RegExp(`https://www\\.nadaf\\.eco/${lang}/`), `${lang} homepage in sitemap`, "sitemap.xml");
  assertMatch(sitemap, new RegExp(`hreflang="${lang}"`), `hreflang ${lang}`, "sitemap.xml");
}

// --- Assets ---
const css = read("static/css/main.css") || "";
const js = read("static/js/main.js") || "";
if (css && css.includes("@import")) {
  fail("static/css/main.css still contains @import (expected bundled CSS)");
}
if (css && css.length > 80_000) {
  warn(`CSS bundle is large (${css.length} bytes)`);
}
if (js && /Ouvrir le menu|Close menu/.test(js) && js.includes("  ")) {
  // Minified JS may still contain strings; just check it exists and has menu logic
}
assertMatch(js || "", /mobile-menu-toggle|location-map/, "interactive handlers", "static/js/main.js");
assertMatch(css || "", /@media/, "responsive media queries", "static/css/main.css");

for (const flag of ["flag-fr.svg", "flag-en.svg", "flag-ar.svg"]) {
  if (!exists(`static/images/icons/${flag}`)) {
    fail(`Missing flag: ${flag}`);
  }
}

// --- Pages ---
const allPageRels = [];
for (const lang of LANGS) {
  for (const page of [...PAGES, ...EXTRA]) {
    allPageRels.push(pagePath(lang, page));
  }
}

for (const rel of allPageRels) {
  const html = read(rel);
  if (!html) continue;

  const lang = rel.slice(0, 2);
  assertMatch(html, new RegExp(`<html[^>]*lang="${lang}"`), `lang="${lang}"`, rel);
  if (lang === "ar") {
    assertMatch(html, /dir="rtl"/, 'dir="rtl"', rel);
  } else {
    assertMatch(html, /dir="ltr"/, 'dir="ltr"', rel);
  }

  assertOneMatch(html, /<h1[\s>]/g, "<h1>", rel);
  assertMatch(html, /<header[\s>]/, "<header>", rel);
  assertMatch(html, /<nav[\s>]/, "<nav>", rel);
  assertMatch(html, /<main[\s>]/, "<main>", rel);
  assertMatch(html, /<footer[\s>]/, "<footer>", rel);
  assertMatch(html, /<title>[^<]{8,}<\/title>/, "non-empty <title>", rel);
  assertMatch(html, /<meta name="description" content="[^"]{20,}"/, "meta description", rel);
  assertMatch(html, /rel="canonical"/, "canonical", rel);
  assertMatch(html, /hreflang="fr"/, "hreflang fr", rel);
  assertMatch(html, /hreflang="en"/, "hreflang en", rel);
  assertMatch(html, /hreflang="ar"/, "hreflang ar", rel);
  assertMatch(html, /hreflang="x-default"/, "hreflang x-default", rel);
  assertMatch(html, /class="lang-switcher"/, "language switcher", rel);
  assertMatch(html, /class="skip-link"/, "skip link", rel);
  assertMatch(html, /mobile-menu-toggle/, "mobile menu toggle", rel);
  assertMatch(html, /location-map-trigger/, "location map trigger", rel);

  if (/TODO|FIXME|lorem ipsum|placeholder text/i.test(html)) {
    fail(`${rel}: contains placeholder/TODO content`);
  }

  // Language switcher targets must exist
  for (const code of LANGS) {
    const alt = rel.replace(/^(fr|en|ar)\//, `${code}/`);
    if (!exists(alt)) {
      fail(`${rel}: missing alternate ${alt}`);
    }
  }

  // Internal links resolve
  for (const href of collectInternalLinks(html)) {
    if (href.startsWith("/static/")) {
      if (!exists(href.replace(/^\//, ""))) {
        fail(`${rel}: broken asset ${href}`);
      }
      continue;
    }
    if (!resolveSitePath(href)) {
      fail(`${rel}: broken internal link ${href}`);
    }
  }
}

// --- Contact forms ---
for (const lang of LANGS) {
  const rel = pagePath(lang, "contact/");
  const html = read(rel);
  if (!html) continue;
  for (const field of ["name", "email", "phone", "subject", "message"]) {
    assertMatch(html, new RegExp(`id="${field}"[^>]*required|required[^>]*id="${field}"`), `required #${field}`, rel);
  }
  assertMatch(html, /formsubmit\.co/, "form action", rel);
  assertMatch(html, new RegExp(`/${lang}/contact/merci/`), "thank-you redirect", rel);
}

// --- Root redirect ---
const root = read("index.html") || "";
assertMatch(root, /\/fr\//, "redirect to /fr/", "index.html");

// --- Report ---
if (warnings.length) {
  console.log("Warnings:");
  for (const w of warnings) console.log(`  - ${w}`);
  console.log("");
}

if (errors.length) {
  console.error(`FAILED with ${errors.length} error(s):`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}

console.log(`OK — checked ${allPageRels.length} pages, robots, sitemap, assets.`);
