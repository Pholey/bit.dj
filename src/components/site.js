import React from "react"
import cx from "classnames"
import {SiteHeader} from "./header"
import connectToStores from "../lib/connectToStores"

import {Link} from "react-router"

class Site extends React.Component {
  static contextTypes = {
    flux: React.PropTypes.object.isRequired,
  }

  static stores = ["Site"]

  constructor() {
    super(...arguments)
  }

  toggleHamburger = () => {
    this.context.flux.actions.Site.toggleHamburger()
  }

  render() {
    let expandedClass = this.props.Site.hamburgerOpen ? "expanded" : ""

    return (
      <div className="site">
        <div className={cx("hamburger-menu", expandedClass)}>
          <div className="hamburger-menu-contents">
            <div className="header">
              <div className="title">
                <i onClick={this.toggleHamburger} className="fa fa-bars" />
                <Link to="/">bit.dj</Link>
              </div>
            </div>
            <div className="items">
              <Link to="/channels" className="nav-item">
                <i className="fa fa-hashtag"/>
                Channels
              </Link>
            </div>
          </div>
        </div>
        <div className="site-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}


export default connectToStores(Site)
