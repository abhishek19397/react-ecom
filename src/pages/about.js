import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import Infoblock from '../components/Reusable/Infoblock'
import DualInfoblock from '../components/Reusable/DualInfoblock'
import TeamphotoSection from '../components/About/TeamphotoSection'

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
     img={data.img.childImageSharp.fluid}
     title="About Ecommerce"
     subtitle=""
     heroclass="about-background"  
    />
    <DualInfoblock heading="A message from CEO" />  
    <Infoblock heading="About our vision" />
    <TeamphotoSection />  
  </Layout>
)

export const query = graphql`
 {
   img:file(relativePath: {eq:"about.png"}) {
     childImageSharp{
       fluid{
         ...GatsbyImageSharpFluid_tracedSVG
       }
     }
   }
 } 
`

export default AboutPage
