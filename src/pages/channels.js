import React from "react"
import {Site} from "../components/site"
import SiteHeader from "../components/header"

class ChannelListing extends React.Component {
  render() {
    return (
      <div className="channel-listing">
        <SiteHeader title="Channels" />
        <div className="content-wrapper">
          <h1>Channels</h1>
          <div className="channel">
            <div className="cover-image-container">
              <img className="channel-image"></img>
            </div>
            <div className="channel-information">
              Channel Name
            </div>
            <div className="currently-playing">
              Nothing!
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ChannelListing
