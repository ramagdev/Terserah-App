import DrawerInitiator from '../utils/drawer-initiator'
import routes from '../routes/routes'
import UrlParser from '../routes/url-parser'
import SkipLink from '../utils/skip-link'

class App {
  constructor ({ button, drawer, content, skipLink }) {
    this._button = button
    this._drawer = drawer
    this._content = content
    this._skipLink = skipLink

    this._initialAppShell()
  }

  _initialAppShell () {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content
    })

    SkipLink.init({
      skipLink: this._skipLink
    })
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    this._content.innerHTML = await page.render()
    try {
      await page.afterRender()
    } catch (error) {
      console.log(error)
    }
  }
}

export default App
