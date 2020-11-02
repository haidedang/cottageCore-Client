/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
      title: "My super blog",
      description: "Gatsby blog with Strapi",
      author: "Strapi team",
    },
    plugins: [{
      resolve: `gatsby-plugin-gtag`,
      options: {
        // replace `UA-XXXXXXXXX-X` with your own Google Analytics Tracking ID
        trackingId: `UA-180766053-1`,
      }
    }/* ,
      "gatsby-plugin-react-helmet",
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      }, */,
      {
        resolve: "gatsby-source-strapi",
        options: {
          apiURL: "http://localhost:1337",
          contentTypes: [
            // List of the Content Types you want to be able to request from Gatsby.
            "article",
            "category",
          ],
          queryLimit: 1000,
        },
      },
      "gatsby-transformer-sharp",
      "gatsby-plugin-sharp",
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: "gatsby-starter-default",
          short_name: "starter",
          start_url: "/",
          background_color: "#663399",
          theme_color: "#663399",
          display: "minimal-ui",
        },
      },
      "gatsby-plugin-offline",
    ],
  }