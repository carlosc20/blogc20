import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
const IndexPage = ( {location} ) => {

  return (
    <Layout pageTitle="Home Page" location={location} >
      <p>Work in progress.</p>
      <StaticImage
        alt="Normal Map"
        src="../images/test.png"
      />
    </Layout>
  )
}
export default IndexPage