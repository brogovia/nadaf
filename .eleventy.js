export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/static/styles.css");
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
}
