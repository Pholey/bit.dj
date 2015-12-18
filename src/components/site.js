import React from "react"
import cx from "classnames"
import {SiteHeader} from "./header"

export default class Site extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      hamburgerOpen: false,
    }
  }

  onToggleHamburger = () => {
    this.setState({hamburgerOpen: !this.state.hamburgerOpen})
  }

  render() {
    let expandedClass = this.state.hamburgerOpen ? "expanded" : ""
    console.log("props!", this.props)
    return (
      <div className="site">
        <SiteHeader onToggleHamburger={this.onToggleHamburger} title="lel" />
        <div className="site-content">
          <div className={cx("hamburger-menu", expandedClass)}></div>
          <div className="page-container">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
