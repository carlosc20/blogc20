import React from "react"
import Layout from "../../components/layout"
import { Link, graphql } from "gatsby"

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        { data.allMdx.nodes.map(node => {
          return (
            <li key={node.slug}>
              <article>
                <h2>
                  <Link to={node.slug}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p>Posted: {node.frontmatter.date}</p>
              </article>
              <hr />
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query BlogPosts {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
        slug
      }
    }
  }
`

export default BlogPage