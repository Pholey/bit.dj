import React from "react"
import cx from "classnames"
import connectToStores from "../lib/connectToStores"

class SiteHeader extends React.Component {
  static contextTypes = {
    flux: React.PropTypes.object.isRequired,
  }

  static stores = ["Site"]

  onToggleHamburger = () => {
    this.context.flux.actions.Site.toggleHamburger()
  }

  render() {
    let hamburgerIcon = <i className="fa fa-bars" />
    if (this.props.Site.hamburgerOpen) {
      hamburgerIcon = null
    }

    return (
      <div className="header">
        <div onClick={this.onToggleHamburger} className="hamburger-menu-icon">
          {hamburgerIcon}
        </div>
        <div className="title">{this.props.title}</div>
        <div className="profile-photo">
          <img src="/images/superior_profile_pic.jpg"></img>
        </div>
      </div>
    )
  }
}

export default connectToStores(SiteHeader)
