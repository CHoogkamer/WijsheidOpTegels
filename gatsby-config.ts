import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Wijsheid op Tegels`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wijsheid op Tegels`,
        short_name: `Wijsheid`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#162545`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // Path to your favicon
      },
    },
  ],
};

export default config;