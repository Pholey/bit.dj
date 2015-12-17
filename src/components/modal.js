import React from "react"
import cx from "classnames"
export class Modal extends React.Component {
  render() {
    return (
      <div className={cx("modal", this.props.className)}>
        <div className="modal-content"></div>
      </div>
    )
  }
}
