import Alt from "alt"

// Actions
import SessionActions from "./actions/session"
import SiteActions from "./actions/site"

// Stores
import SessionStore from "./stores/session"
import SiteStore from "./stores/site"

export default class Flux extends Alt {
  constructor() {
    super()

    // Add action creators
    this.addActions("Session", SessionActions)
    this.addActions("Site", SiteActions)


    // Add stores
    this.addStore("Session", SessionStore)
    this.addStore("Site", SiteStore)

    // If in development; instantiate the ALT development tool
    if (process.env.NODE_ENV === "development") {
      require("alt/utils/chromeDebug")(this)
    }
  }
}
