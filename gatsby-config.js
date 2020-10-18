/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    plugins: [
      {
        resolve: `gatsby-plugin-gtag`,
        options: {
          // replace `UA-XXXXXXXXX-X` with your own Google Analytics Tracking ID
          trackingId: `UA-180766053-1`,
        },
      },
    ],
  }
