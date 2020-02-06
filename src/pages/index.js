import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundVideo from "../components/backgroundVideo"
import TopBar from "../components/topBar"
import CenterButton from "../components/centerButton"
import BottomBar from "../components/bottomBar"

class IndexPage extends React.Component  {
  constructor(props) {
    super(props);
    this.state = { 
      showTeam: false,
      showInfo: false
    };
  }
  
  toggleTeam = () => {
    this.setState({showTeam: true })
  }

  // toggleInfo = () => {
  //   this.setState(prevState => { showInfo: !prevState.showInfo })
  // }


  render() {
    let showTeam = this.state.showTeam;
    const { children, data }= this.props;
    return (      
      <Layout>
        <SEO title="Home" />
        <div id="test" className={showTeam ? 'display' : null}></div>
        <TopBar/>
        <CenterButton />
        <BottomBar passedToggleTeam={this.toggleTeam} passedToggleInfo={this.toggleInfo}/>
        <BackgroundVideo />
      </Layout>
    )
  }
}

export default IndexPage
