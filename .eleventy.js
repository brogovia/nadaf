export default function (eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/static");
  // Shortcode for current year
  eleventyConfig.addShortcode("year", function() {
    return new Date().getFullYear();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    // Set template engines
    markdownTemplateEngine: "njk",
    templateFormats: ["md", "njk"],
    htmlTemplateEngine: "njk"
  };
}
