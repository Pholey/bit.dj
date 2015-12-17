import React from "react"
import {render} from "react-dom"
import {Router} from "react-router"
import {supplyFluxContext} from "alt-react"
import createBrowserHistory from "history/lib/createBrowserHistory"
import routes from "./routes"
import Alt from "./alt"

global.regeneratorRuntime = require("regenerator/runtime")
console.log("gfdgfdgdfgdsfgdsfgd")
const alt = new Alt()

function main() {
  const RouterAlt = supplyFluxContext(alt)(Router)

  // Render the application
  render(
    <RouterAlt
      history={createBrowserHistory()}
      routes={routes(alt)}
    />,
  document.getElementById("root"))
}

main()
