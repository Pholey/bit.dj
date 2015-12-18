import React from "react"
import {Route, IndexRoute} from "react-router"

import Home from "./pages/home"

import {Test1, Test2} from "./pages/test"

export default (flux) => {
  return (
    <Route>
      <Route component={Home} path="/">
        <Route component={Test1} path="/test1" />
        <Route component={Test2} path="/test2" />
      </Route>
    </Route>
  )
}
