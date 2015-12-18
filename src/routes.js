import React from "react"
import {Route, IndexRoute} from "react-router"

import Home from "./pages/home"

export default (flux) => {
  return (
    <Route>
      <Route component={Home} path="/" />
    </Route>
  )
}
