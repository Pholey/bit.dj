export default class SiteStore {
  constructor() {
    this.bindActions(this.alt.actions.Site)
  }

  state = {
    hamburgerOpen: false
  }

  onToggleHamburger() {
    this.state.hamburgerOpen = !this.state.hamburgerOpen
  }
}
