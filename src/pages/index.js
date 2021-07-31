import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/Seo"

const IndexPage = ( {location} ) => {

  return (
    <Layout pageTitle="Home Page" location={location} >
      <Seo title="Home page" />
      {/* meta description */}
      <p>Work in progress.</p>
      <StaticImage
        alt="Normal Map"
        src="../images/test.png"
      />
    </Layout>
  )
}
export default IndexPage