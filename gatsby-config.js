module.exports = {
  siteMetadata: {
    siteUrl: `https://about.rulim34.dev`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    'gatsby-plugin-postcss',
  ]
}
