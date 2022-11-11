const EleventyVitePlugin = require('@11ty/eleventy-plugin-vite')

const vite = {
  viteOptions: {
    resolve: {
      alias: {
        '/@input': `${process.cwd()}/src`,
      },
    },
  },
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyVitePlugin, vite)
  return {
    /**
     * Why use Nunjucks?
     *
     * We recommend using Nunjucks over Liquid for nicer component shortcode syntax in your markdown
     * See our docs on passing props to components here: https://slinkity.dev/docs/component-shortcodes/#passing-props-to-shortcodes
     * Prefer liquid, or don't mind liquid's shortcode syntax? No problem!
     * Just delete this line to switch back to liquid:
     */
    markdownTemplateEngine: 'njk',
    dir: {
      /**
       * Why set an input directory?
       *
       * By default, 11ty will treat the base of your project as the input.
       * This can have some nasty consequences, like accidentally copying your README.md as a route!
       * You can manually ignore certain files from the build output. But to keep things simple,
       * We recommend setting an input directory like so:
       */
      input: 'src',
    },
  }
}
