import React, { useState } from "react"
import Layout from "../../components/layout"
import PostFilterList from "../../components/post-filter-list"
import { Link, graphql } from "gatsby"

const BlogPage = ({data}) => {

  const allPosts = data.allMdx.nodes

  const uniquePostTags = new Set()
  allPosts.forEach(node => {
    node.frontmatter.tags.forEach(tag => {
      uniquePostTags.add(tag)
    })
  })

  const [selectedPostTags, setSelectedPostTags] = useState(new Set())
  const [postsToDisplay, setPostsToDisplay] = useState(allPosts)

  const shouldPostDisplay = node => {
    // When no filters are selected, show all posts
    if (selectedPostTags.size === 0) {
      return true
    }

    // Check if one of the node's tags is in the set of selected filters
    return node.frontmatter.tags.some(tag => selectedPostTags.has(tag))
  }

  const addFilter = () => filterName => {
    const newFilterList = selectedPostTags.add(filterName)
    setSelectedPostTags(newFilterList)
    setPostsToDisplay(allPosts.filter(shouldPostDisplay))
  }

  const removeFilter = () => filterName => {
    const newFilterList = selectedPostTags
    newFilterList.delete(filterName)
    setSelectedPostTags(newFilterList)
    setPostsToDisplay(allPosts.filter(shouldPostDisplay))
  }



  return (
    <Layout pageTitle="My Blog Posts">
      <PostFilterList
        filters={Array.from(uniquePostTags).sort()}
        onAdd={addFilter(selectedPostTags, setSelectedPostTags)}
        onRemove={removeFilter(selectedPostTags, setSelectedPostTags)}
      />
      <ul>
        { postsToDisplay.map(node => {
          return (
            <li key={node.slug}>
              <article>
                <h2>
                  <Link to={node.slug}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p>Posted: {node.frontmatter.date}</p>
                <p>Tags: {node.frontmatter.tags.toString()}</p>
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
          tags
        }
        slug
      }
    }
  }
`

export default BlogPage