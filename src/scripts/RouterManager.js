import EmitterManager from './EmitterManager'
import { Device } from '../helpers/Device'
import IntroView from '../views/IntroView'

class RouterManager {
  constructor() {
    this.switchView = this.switchView.bind(this)
    this.initView = this.initView.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange() {
    if (this.ready !== true) return false
    this.testUrl()
  }

  start() {
    this.currentPage = null
    this.currentRoute = null
    this.testUrl()
    EmitterManager.on('router:switch', this.switchView)
    window.addEventListener('hashchange', this.onChange, false)
    this.ready = true
  }

  testUrl() {
    const url = window.location.href

    if (/\/#about/.test(url) === true) {
      this.switchView('/about', 0, true)
    } else {
      this.switchView('/intro', 0, true)
    }
  }

  switchView(goToPage, index = 0, fromUrl = false) {
    console.log('this.currentPage', this.currentPage)
    console.log('switchView', goToPage)
    if (this.currentPage) {
      if (this.currentPage.uri === goToPage) {
        // alreay on this view
        return false
      }
    }

    if (this.isChanging === true) return false

    this.isChanging = true

    if (this.currentPage !== null) {
      this.lastPage = this.currentPage.name
      let dir = this.lastId > index ? 1 : -1
      if (goToPage === '/intro') dir = 1
      this.currentPage.transitionOut(dir)

      if (global.MENU.el.classList.contains('is-open') === true)
        global.MENU.toggleOpen(null, true) // close Menu
      if (!Device.touch) global.CURSOR.interractLeave({ color: 'reset' })

      EmitterManager.once('view:transition:out', () => {
        this.isChanging = false
        this.currentPage.destroy(true)
        this.initView(goToPage, index, false)
      })
    } else {
      this.initView(goToPage, index, true)
      this.isChanging = false
    }
  }

  initView(goToPage, index = null, fromUrl, lastPage = null) {
    console.log('initView', goToPage)

    this.fromUrl = fromUrl
    let dir
    let id
    switch (goToPage) {
      default:
        this.currentPage = new IntroView({
          gravity: true,
        })

        break
    }

    this.currentPage.uri = goToPage
    this.lastId = this.currentPage.id

    // global.MENU.update(this.currentPage.name, this.currentPage.id)

    this.fromLoad = false
  }
}

export default new RouterManager()
