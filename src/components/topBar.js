import React from "react"
import { useStaticQuery, graphql } from "gatsby"



function TopBar() {
    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                instagramURL
                indiegogoURL
              }
            }
          }
        `
      )
    return(
        <div id="topBarContainer">
        <ul>
            <li id="top1"><a href={ site.siteMetadata.instagramURL } target="_blank">INSTAGRAM</a></li>
            <li id="top2">FILM NAME</li>
            <li id="top3"><a href={ site.siteMetadata.indiegogoURL } target="_blank">INDIEGOGO</a></li>
        </ul>
        </div>
    )
}
export default TopBar
