import React from "react"
import {Route, IndexRoute} from "react-router"

import Home from "./pages/home"
import Site from "./components/site"

import ChannelListing from "./pages/channels"

export default (flux) => {
  return (
    <Route component={Site} path="/">
      <IndexRoute component={Home}/>
      <Route component={ChannelListing} path="/channels" />
    </Route>
  )
}
