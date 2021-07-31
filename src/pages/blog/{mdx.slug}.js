import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Seo from "../../components/Seo"

const BlogPostTemplate = ({data, location}) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title} location={location}>
      <Seo title={data.mdx.frontmatter.title} description={data.mdx.excerpt} />
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <GatsbyImage
        image={image}
        alt=""
      />
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    mdx(slug: {eq: $slug}) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        tags
      }
      excerpt
    }
  }
`

export default BlogPostTemplate