import React from "react"
import cx from "classnames"

export class Modal extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="title">{this.props.title}</div>
        <div className="profile-photo">
          <img src="/images/user-test.jpg"></img>
        </div>
      </div>
    )
  }
}
