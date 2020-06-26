module.exports = {
  siteMetadata: {
    title: `Daniela Giorgio | Frontend Developer`,
    description: `I am Daniela, and I like building high performance websites through carefully crafted design and creating awesome user experiences.`,
    author: `Daniela Giorgio`,
    keywords: `daniela giorgio, frontend, portfolio, web portfolio, gatsby portfolio, web developer, frontend developer, software engineer, voirs`,
    siteUrl: `https://danielagiorgio.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `babel-plugin-styled-components`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-goatcounter`,
      options: {
        code: 'voirs',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DanielaGiorgio`,
        short_name: `DanielaGiorgio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-remark-external-links',
      options: {
        target: '_blank',
        rel: 'nofollow noopener noreferrer',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-use-dark-mode`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
