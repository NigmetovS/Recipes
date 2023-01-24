/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
  title: "Simply Recipes",
  description: "Nice and clean recipes site",
  author: "@nigmetov",
  person: {name:"nigmetov", age:28},
  simpleData: ["item 1", "item 2"],
  complexData: [
    {name:"nigmetov", age:29},
    {name:"karimova", age:28},
  ],

  },
  plugins: [`gatsby-plugin-styled-components`, `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `j9cbkmoxz6pv`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    `gatsby-plugin-image`,
  ],
    
}
