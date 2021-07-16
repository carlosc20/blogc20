module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Blog do Carlos",
    description: `A simple description about pandas eating lots...`,
    author: `Carlos Castro`,
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
            "gatsby-plugin-image",
            "gatsby-plugin-sharp",
            {
              resolve: "gatsby-source-filesystem",
              options: {
                name: `blog`,
                path: `${__dirname}/blog`,
              }
            },
            "gatsby-plugin-mdx",
            "gatsby-transformer-sharp",
            {
              resolve: "gatsby-plugin-manifest",
              options: {
                name: `GatsbyJS`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                background_color: `#6b37bf`,
                theme_color: `#6b37bf`,
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: `standalone`,
                icon: `src/images/icon.png`, // This path is relative to the root of the site.
              }
            },
            "gatsby-plugin-offline",
            "gatsby-plugin-react-helmet",
  ],
};
