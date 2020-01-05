module.exports = {
  siteMetadata: {
    title: `Film Site`,
    description: `A template for a film website`,
    author: `@ndrewgood`,
    instagramURL: 'http://instagram.com',
    indiegogoURL: 'http://indiegogo.com',
    team: {
      role1: {
        title: '',
        name: '',
        url: ''
      },
      role2: {
        title: '',
        name: '',
        url: ''
      },
      role3: {
        title: '',
        name: '',
        url: ''
      },
      role4: {
        title: '',
        name: '',
        url: ''
      },
      role5: {
        title: '',
        name: '',
        url: ''
      },
    }

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Film Site`,
        short_name: `film`,
        start_url: `/`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
