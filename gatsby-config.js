module.exports = {
  siteMetadata: {
    description: "Personal page of Charlie Say",
    locale: "en",
    title: "Charlie Say",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "gh-inspired",
      },
    },
  ],
}
