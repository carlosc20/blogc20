import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Seo from "../../components/Seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const BlogPostTemplate = ({data, location}) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  // butoes das tags que vai para pagina de projetos com tag selecionada

  // botao para ver no github

  return (
    <Layout pageTitle={data.mdx.frontmatter.title} location={location}>
      <Seo title={data.mdx.frontmatter.title} description={data.mdx.excerpt} />
      <p>Posted on: {data.mdx.frontmatter.date}</p>
      <button 
        className="rounded-lg bg-gray-700 text-white text-bold py-2 px-4 my-2"
        
        href="https://github.com/carlosc20">
        <FontAwesomeIcon size="lg" icon={faGithub} aria-hidden="true" /> See on Github 
      </button>
    
      <GatsbyImage
        image={image}
        alt=""
      />
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>

      <b>See more:</b>
      <ul className="flex flex-wrap gap-3">
        {data.mdx.frontmatter.tags.map((tag) => (
            <li className={"btn-test pill"}>
              {tag}
            </li>
        ))}
      </ul>
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