import cookie from "react-cookie"

export default class SessionStore {
  constructor() {
    this.bindActions(this.alt.actions.Session)
  }
}
