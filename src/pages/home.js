import React from "react"
import {Site} from "../components/site"

class Home extends React.Component {
  render() {
    return (
      <Site>
        <main className="site-main">
          {this.props.children}
        </main>
      </Site>
    )
  }
}

export default Home
