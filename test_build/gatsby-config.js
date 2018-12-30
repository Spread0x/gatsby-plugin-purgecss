module.exports = {
  plugins: [
    `gatsby-plugin-stylus`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-less`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true,
        develop: true,
        debug: true,
        whitelist: ['whitelist'],
        whitelistPatterns: [/Regex$/],
        ignore: ['ignored.css', 'ignored/']
      }
    }
  ]
};
