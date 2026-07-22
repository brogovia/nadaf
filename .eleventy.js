export default function (eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/static");

  // Shortcode for current year
  eleventyConfig.addShortcode("year", function() {
    return new Date().getFullYear();
  });

  // Shortcode for sitemap lastmod date
  eleventyConfig.addShortcode("buildDate", function() {
    return new Date().toISOString().split("T")[0];
  });

  // Highlight active navigation link
  eleventyConfig.addFilter("navActive", function(currentUrl, linkUrl) {
    if (/^\/(fr|en|ar)\/$/.test(linkUrl)) {
      return currentUrl === linkUrl;
    }
    return currentUrl.startsWith(linkUrl);
  });

  // Build a localized path: localeUrl('/services/', 'en') → '/en/services/'
  eleventyConfig.addFilter("localeUrl", function(path, lang) {
    const code = lang || "fr";
    if (!path || path === "/") {
      return `/${code}/`;
    }
    const clean = path.startsWith("/") ? path : `/${path}`;
    const withSlash = clean.endsWith("/") ? clean : `${clean}/`;
    return `/${code}${withSlash}`;
  });

  // Swap language prefix on current URL for the language switcher
  eleventyConfig.addFilter("alternateUrl", function(url, targetLang) {
    if (!url) {
      return `/${targetLang}/`;
    }
    return url.replace(/^\/(fr|en|ar)(?=\/|$)/, `/${targetLang}`);
  });

  // Resolve nested UI string: ui | t(lang, 'nav.home')
  eleventyConfig.addFilter("t", function(uiData, lang, key) {
    const dict = uiData?.[lang] || uiData?.fr || {};
    return key.split(".").reduce((acc, part) => {
      if (acc && typeof acc === "object" && part in acc) {
        return acc[part];
      }
      return key;
    }, dict);
  });

  // Language metadata helper
  eleventyConfig.addFilter("langMeta", function(languages, code) {
    return languages.list.find((item) => item.code === code) || languages.list[0];
  });

  // Default language (overridden by directory data fr.json / en.json / ar.json)
  eleventyConfig.addGlobalData("lang", "fr");
  eleventyConfig.addGlobalData("dir", "ltr");

  // Pages included in sitemap.xml
  eleventyConfig.addCollection("sitemap", function(collectionApi) {
    return collectionApi.getAll().filter((item) => {
      return item.url
        && !item.data.eleventyExcludeFromCollections
        && !item.data.sitemapExclude
        && !item.data.robots?.includes("noindex");
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    markdownTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"],
    htmlTemplateEngine: "njk"
  };
}
