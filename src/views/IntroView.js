import Handlebars from 'handlebars'
import ScrollMagic from 'ScrollMagic'
import AbstractView from './AbstractView'
import EmitterManager from '../scripts/EmitterManager'
import PreloadManager from '../scripts/PreloadManager'
import { Device } from '../helpers/Device'
import DATA from '../datas/data.json'

export default class IntroView extends AbstractView {
  constructor(obj) {
    super()
    this.controller = new ScrollMagic.Controller()
    this.init = this.init.bind(this)
    this.transitionIn = this.transitionIn.bind(this)
    this.initContent = this.initContent.bind(this)
    this.contentAnim = this.contentAnim.bind(this)
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
    this.initContent()
    this.contentAnim()
  }

  initContent() {
    TweenMax.set('.pixi-bg', { left: '-100vw' })
    TweenMax.set(this.ui.uiContent, { display: 'block' })
  }

  contentAnim() {
    const tl = () =>
      new TimelineMax({ paused: false })
        .fromTo('.pixi-bg', 0.7, { left: '-100vw' }, { left: 0 }, 'step1')
        .fromTo(
          '.header-sec h1 ',
          0.4,
          { height: 0 },
          { height: '86px' },
          'step1+=.4'
        )
        .fromTo(
          '.content-left-bg',
          0.4,
          { left: '-50%' },
          { left: '0' },
          'step1+=.4'
        )
    new ScrollMagic.Scene({ triggerElement: '.main' })
      .addTo(this.controller)
      .on('start', tl)
  }
}
