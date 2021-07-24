import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Work in progress.</p>
      <StaticImage
        alt="Normal Map"
        src="../images/test.png"
      />
    </Layout>
  )
}
export default IndexPage