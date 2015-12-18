import React from "react"
import cx from "classnames"

export class SiteHeader extends React.Component {
  static propTypes = {
    toggleHamburger: React.PropTypes.func,
  }
  render() {
    return (
      <div className="header">
        <div onClick={this.props.onToggleHamburger} className="hamburger-menu-icon">
          <i className="fa fa-bars" />
        </div>
        <div className="title">{this.props.title}</div>
        <div className="profile-photo">
          <img src="/images/superior_profile_pic.jpg"></img>
        </div>
      </div>
    )
  }
}
