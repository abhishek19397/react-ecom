import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import Infoblock from '../components/Reusable/Infoblock'
import DualInfoblock from '../components/Reusable/DualInfoblock'
import CourseCart from '../components/Cart/CourseCart'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
     img={data.img.childImageSharp.fluid}
     title="I write Code"
     subtitle="Easiest way to learn programming"
     heroclass="hero-background"  
    />  
    <Infoblock heading="About us" />
    <CourseCart courses={data.mycourses} />
     <DualInfoblock heading="Our team" /> 
  </Layout>
)

export const query = graphql`
 {
   img:file(relativePath: {eq:"heromain.png"}) {
     childImageSharp{
       fluid{
         ...GatsbyImageSharpFluid_tracedSVG
       }
     }
   },
   mycourses:allContentfulCourses{
     edges{
       node{
         id
         title
         price
         category
         description{
           description
         }
         
         }
       }
     }
   }
 } 
`

export default IndexPage
