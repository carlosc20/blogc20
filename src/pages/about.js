import * as React from 'react'
import Layout from '../components/Layout'
import Seo from "../components/Seo"

const AboutPage = ( {location} ) => {
  return (
    <Layout pageTitle="About Me" location={location} >
      <Seo title="About Me" />
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}
export default AboutPage