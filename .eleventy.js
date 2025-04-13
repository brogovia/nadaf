export default function (eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/static");
  // Shortcode for current year
  eleventyConfig.addShortcode("year", function() {
    return new Date().getFullYear();
  });

  // Add global data for language
  eleventyConfig.addGlobalData("lang", "fr");

  // Redirect root to /fr/
  // Note: This might be better handled by server config, but works for basic dev
  // For production, ensure the server redirects '/' to '/fr/'
  // A simple index.html file at the root might be more robust
  // eleventyConfig.addPassthroughCopy({
  //   "./src/fr/index.md": "./index.html" // This copies content, doesn't redirect
  // });

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
