import 'regenerator-runtime'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import '../styles/main.scss'
import '../styles/responsive.scss'
import '../styles/dynamic.scss'
import App from './views/app'
import swRegister from './utils/sw-register'

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main'),
  skipLink: document.querySelector('#skip-link')
})

window.addEventListener('hashchange', () => {
  document.getElementById('loading').style.display = 'none'
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
