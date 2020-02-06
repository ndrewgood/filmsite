/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"

import "../scss/index.scss"

class Layout extends React.Component  {
  constructor(props) {
    super(props);
  }



  render() {
    const { children } = this.props;
    return (
      <>
      <div>
        <main>{children}</main>
      </div>
    </>
    )
  }
}

export default Layout
