import AbstractView from './AbstractView'
import EmitterManager from '../scripts/EmitterManager'
import PreloadManager from '../scripts/PreloadManager'
import { Device } from '../helpers/Device'
import Handlebars from 'handlebars'
import DATA from '../datas/data.json'

export default class IntroView extends AbstractView {
  constructor(obj) {
    super()
    this.init = this.init.bind(this)
    this.transitionIn = this.transitionIn.bind(this)
    this.startScene()
  }

  init(screenReadyCB) {
    let template = Handlebars.compile(
      PreloadManager.getResult('tpl-intro-content')
    )
    let html = template(DATA.intro)
    console.log('html', html)
    this.ui.uiContent.className = ''
    this.ui.uiContent.classList.add('ui-content', 'is-intro')
    this.ui.uiContent.innerHTML = html
    screenReadyCB()
  }

  transitionIn() {
    this.ui.uiContent.style.display = 'block'
  }
}
