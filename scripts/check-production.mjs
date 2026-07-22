import { execSync } from "node:child_process";

const BASE = process.env.PROD_URL || "https://www.nadaf.eco";
const errors = [];

function fail(msg) {
  errors.push(msg);
}

function fetchText(path) {
  try {
    return execSync(`curl -fsSL --max-time 15 "${BASE}${path}"`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"]
    });
  } catch (err) {
    fail(`Fetch failed ${path}: ${err.stderr || err.message}`);
    return "";
  }
}

function fetchHeaders(path) {
  try {
    return execSync(`curl -sI --max-time 15 "${BASE}${path}"`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"]
    });
  } catch (err) {
    fail(`HEAD failed ${path}: ${err.stderr || err.message}`);
    return "";
  }
}

console.log(`Checking production ${BASE}…\n`);

const rootHeaders = fetchHeaders("/");
if (!/HTTP\/2 301|HTTP\/1\.1 301|HTTP\/2 302|HTTP\/1\.1 302|HTTP\/2 200/.test(rootHeaders)) {
  fail("Root did not return a redirect or 200");
}
if (!/strict-transport-security/i.test(rootHeaders) && !/strict-transport-security/i.test(fetchHeaders("/fr/"))) {
  fail("Missing HSTS / HTTPS hardening header");
}

for (const lang of ["fr", "en", "ar"]) {
  const html = fetchText(`/${lang}/`);
  if (!html) continue;
  if (!html.includes(`lang="${lang}"`)) fail(`/${lang}/ missing lang`);
  if (lang === "ar" && !html.includes('dir="rtl"')) fail("/ar/ missing dir=rtl");
  if (!html.includes("lang-switcher")) fail(`/${lang}/ missing language switcher`);
  if (!html.includes("skip-link")) fail(`/${lang}/ missing skip link`);
  if (!/<title>[^<]{8,}<\/title>/.test(html)) fail(`/${lang}/ missing title`);
}

const robots = fetchText("/robots.txt");
if (!robots.includes("Sitemap: https://www.nadaf.eco/sitemap.xml")) {
  fail("robots.txt missing sitemap line");
}

const sitemap = fetchText("/sitemap.xml");
for (const lang of ["fr", "en", "ar"]) {
  if (!sitemap.includes(`hreflang="${lang}"`)) fail(`sitemap missing hreflang ${lang}`);
}

const cssHeaders = fetchHeaders("/static/css/main.css");
if (!/max-age=31536000/i.test(cssHeaders)) {
  fail("CSS missing long-cache header");
}

if (errors.length) {
  console.error(`FAILED with ${errors.length} error(s):`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}

console.log("OK — production checks passed.");
