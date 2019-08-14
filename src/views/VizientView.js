import Handlebars from 'handlebars'
import _ from 'lodash'
import ScrollMagic from 'ScrollMagic'
import AbstractView from './AbstractView'
import EmitterManager from '../scripts/EmitterManager'
import PreloadManager from '../scripts/PreloadManager'
import { Device } from '../helpers/Device'
import getDATA from '../datas/data'

export default class VizientView extends AbstractView {
  constructor(obj) {
    super()
    this.initSprit = []
    this.controller = new ScrollMagic.Controller()
    this.init = this.init.bind(this)
    this.transitionIn = this.transitionIn.bind(this)
    this.startScene()
  }

  init(screenReadyCB) {
    let template = Handlebars.compile(
      PreloadManager.getResult('tpl-vizient-content')
    )
    let html = template(getDATA().vizient)
    this.ui.uiContent.className = ''
    this.ui.uiContent.classList.add('ui-content', 'is-project')
    this.ui.uiContent.innerHTML = html
    screenReadyCB()
    TweenMax.set(this.ui.uiContent, { display: 'block' })
  }

  transitionIn() {}

  transitionOut(dest) {
    const tl = new TimelineMax({ delay: 0 })
    tl.add(() => {
      EmitterManager.emit('view:transition:out')
    }, 0)
  }
}
