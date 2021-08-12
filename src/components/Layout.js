import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Navbar from "./Navbar"

const Layout = ({ pageTitle, children, location }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/blog' },
  ]

  return (
    <>
      <Navbar
        navigation={navigation}
        location={location}
        >
      </Navbar>
        
      <main className="font-sans py-2 mt-16 p-4">
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>

        <div className="m-auto max-w-3xl">
          <h1 className="text-purple-900 text-3xl">{pageTitle}</h1>
          {children}
        </div>
      </main>

      <footer>
        
      </footer>
  </>)
}

export default Layout
