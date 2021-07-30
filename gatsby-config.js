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
            "gatsby-plugin-postcss",
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
                name: `Blogc20`,
                short_name: `Blogc20`,
                start_url: `/`,
                background_color: `#6b37bf`,
                theme_color: `#6b37bf`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`,
              }
            },
            "gatsby-plugin-offline",
            "gatsby-plugin-react-helmet",
            "gatsby-plugin-fontawesome-css",
  ],
};
