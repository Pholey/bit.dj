import Alt from "alt"

// Actions
import SessionActions from "./actions/session"

// Stores
import SessionStore from "./stores/session"

export default class Flux extends Alt {
  constructor() {
    super()

    // Add action creators
    this.addActions("Session", SessionActions)

    // Add stores
    this.addStore("Session", SessionStore)

    // If in development; instantiate the ALT development tool
    if (process.env.NODE_ENV === "development") {
      require("alt/utils/chromeDebug")(this)
    }
  }
}
