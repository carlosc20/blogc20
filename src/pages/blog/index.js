import React, { useState } from "react"
import Layout from "../../components/Layout"
import FilterList from "../../components/FilterList"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"
import ProjectCard from "../../components/ProjectCard"

const BlogPage = ({data, location}) => {

  const allPosts = data.allMdx.nodes

  const uniquePostTags = new Set()
  allPosts.forEach(node => {
    node.frontmatter.tags.forEach(tag => {
      uniquePostTags.add(tag)
    })
  })

  const [selectedPostTags, setSelectedPostTags] = useState(new Set())

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
    const newSet = selectedPostTags
    setSelectedPostTags(newSet)
  }

  function setAllSelected(state) {
    if(state) {
      const newSet = selectedPostTags.clear()
      setSelectedPostTags(newSet)
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
      <FilterList
        filters={Array.from(uniquePostTags).sort()}
        onChange={setSelected}
        onChangeAll={setAllSelected}
        isFilterSelected={isTagSelected}
        areAllFiltersSelected={areAllTagsSelected()}
      />
      <ul>
        { allPosts.filter(shouldPostDisplay).map(node => {
          return (
            <li className="py-2" key={node.slug}>
              <ProjectCard
                title={node.frontmatter.title} 
                link={node.slug}
                date={node.frontmatter.date}
                tags={node.frontmatter.tags}
              />
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