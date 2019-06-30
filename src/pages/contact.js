import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import Infoblock from '../components/Reusable/Infoblock'
import DualInfoblock from '../components/Reusable/DualInfoblock'
import CourseCart from '../components/Cart/CourseCart'

const IndexPage = () => (
  <Layout>
         <DualInfoblock heading="Our team" /> 
  </Layout>
)


export default IndexPage
