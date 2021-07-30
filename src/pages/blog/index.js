import React, { useState } from "react"
import Layout from "../../components/layout"
import PostFilterList from "../../components/post-filter-list"
import { Link, graphql } from "gatsby"
import Seo from "../../components/seo"

const BlogPage = ({data, location}) => {

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

  function setSelected(tag, state) {
    if(state) {
      selectedPostTags.add(tag);
    } else {
      selectedPostTags.delete(tag);
    }
    setSelectedPostTags(selectedPostTags)
    setPostsToDisplay(allPosts.filter(shouldPostDisplay))
  }

  function setAllSelected(state) {
    if(state) {
      setSelectedPostTags(new Set([]))
      setPostsToDisplay(allPosts)
    }
  }

  function isTagSelected(tag) {
    return selectedPostTags.has(tag)
  }

  function areAllTagsSelected() {
    return selectedPostTags.size === 0 || selectedPostTags.size === uniquePostTags.size
  }

  // add pagination
  // https://tailwindui.com/components/application-ui/navigation/pagination

  // interesting
  // https://tailwindui.com/components/application-ui/overlays/slide-overs


  // https://www.npmjs.com/package/react-infinite-scroll-component

  return (
    <Layout pageTitle="Projects" location={location}>
      <Seo title="Projects" />
      <PostFilterList
        filters={Array.from(uniquePostTags).sort()}
        onChange={setSelected}
        onChangeAll={setAllSelected}
        isTagSelected={isTagSelected}
        areAllTagsSelected={areAllTagsSelected()}
      />
      <ul>
        { postsToDisplay.map(node => {
          return (
            <li className="py-2" key={node.slug}>
              <article className="mx-auto bg-white rounded-xl shadow-md overflow-hidden" >
                <div className="p-8">
                  <h2>
                    <Link className="block text-lg leading-tight font-medium text-black hover:underline font-semibold" to={node.slug}>
                      {node.frontmatter.title}
                    </Link>
                  </h2>
                  <p className="text-gray-500" ><b>Posted:</b> {node.frontmatter.date}</p>
                  <p className="text-gray-500" ><b>Tags:</b> {node.frontmatter.tags.join(", ")}</p>
                </div>
              </article>
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