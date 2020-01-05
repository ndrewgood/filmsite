import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundVideo from "../components/backgroundVideo"
import TopBar from "../components/topBar"
import CenterButton from "../components/centerButton"
import BottomBar from "../components/bottomBar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="test"></div>
    <TopBar/>
    <CenterButton />
    <BottomBar/>
    <BackgroundVideo />
  </Layout>
)

export default IndexPage
