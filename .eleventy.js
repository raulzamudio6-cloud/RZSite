module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("script.js");
  // Add any other assets like images if needed

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
