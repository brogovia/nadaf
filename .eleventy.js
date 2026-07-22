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
    if (linkUrl === "/fr/") {
      return currentUrl === "/fr/";
    }
    return currentUrl.startsWith(linkUrl);
  });

  // Add global data for language
  eleventyConfig.addGlobalData("lang", "fr");

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
    // Set template engines
    markdownTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"],
    htmlTemplateEngine: "njk"
  };
}
