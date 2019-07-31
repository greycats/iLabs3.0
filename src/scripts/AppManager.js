import EmitterManager from './EmitterManager'
import RouterManager from './RouterManager'
import { Device } from '../helpers/Device'
import { isTouch, preventLink } from '../helpers/utils'
import { Power0 } from 'gsap'

class AppManager {
  constructor() {
    this.initiated = false
    this.tl = new TimelineMax()
    this.tl1 = new TimelineMax()
    this.drawLoading = this.drawLoading.bind(this)
    this.preload = this.preload.bind(this)
    this.start = this.start.bind(this)
    this.resizeHandler = this.resizeHandler.bind(this)
  }

  preload() {
    this.resizeHandler()
    this.drawLoading()
    this.start()
  }

  drawLoading() {
    TweenMax.killTweensOf(['.preload'])
    this.tl.set('#Polystar_1', {
      strokeDasharray: '100 300',
      strokeDashoffset: 0,
      opacity: 1,
    })
    this.tl.set('.st0', {
      drawSVG: 0,
      opacity: 1,
    })
    this.tl.to('#Polystar_1', 1.8, {
      strokeDashoffset: -800,
      repeat: -1,
      ease: Power0.easeNone,
    })
    const endPreload = () => {
      this.tl.stop()
      this.tl1.set('#Polystar_1', {
        drawSVG: '0',
      })
      this.tl1.to('#Polystar_1', 1.5, {
        drawSVG: '100%',
      })
      this.tl1.set('#Shape_10', { x: -200, scaleX: 0 })
      this.tl1.to('#Shape_10', 0.8, { x: -200, scaleX: 3, drawSVG: '100%' })
      this.tl1.to('#Shape_10', 0.5, { x: 0, scaleX: 1 })
      this.tl1.fromTo(
        '.line1',
        0.5,
        { drawSVG: '100% 100%' },
        { drawSVG: '0% 100% ' },
        'smallAnim'
      )
      this.tl1.to(
        '#Polystar_1',
        2,
        {
          fill: 'white',
          scale: 100,
          transformOrigin: 'center',
        },
        'smallAnim+=0.5'
      )
    }
    setTimeout(endPreload, 6000)
  }

  start() {
    RouterManager.start()
  }

  resizeHandler() {
    Device.touch = isTouch()

    if (Device.touch) document.body.classList.add('is-touch')
    else document.body.classList.remove('is-touch')

    EmitterManager.emit('resize', window.innerWidth, window.innerHeight)
    TweenMax.set(document.body, {
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  callbackInit() {
    if (this.initiated === true) {
      TweenMax.delayedCall(0.1, () => {
        RouterManager.currentPage.transitionIn(!RouterManager.fromUrl) // GL issues ???
      })
    } else {
      this.initiated = true
      document.body.classList.add('is-init')
      TweenMax.delayedCall(0.1, () => {
        RouterManager.currentPage.transitionIn(!RouterManager.fromUrl) // GL issues ???
      })
    }
  }
}
export default new AppManager()
