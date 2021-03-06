module.exports = {
  siteMetadata: {
    description: 'Personal page of Charlie Say',
    locale: 'en',
    title: 'Charlie Say',
    formspreeEndpoint: 'https://formspree.io/f/xjvpopjy',
  },
  plugins: [
    {
      resolve: '@wkocjan/gatsby-theme-intro',
      options: {
        basePath: '/',
        contentPath: 'content/',
        showThemeLogo: true,
        // theme: 'gh-inspired',
        theme: 'gh-inspired',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-159295663-2',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
  ],
}
