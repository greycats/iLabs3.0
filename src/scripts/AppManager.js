import EmitterManager from './EmitterManager'
import RouterManager from './RouterManager'
import bean from 'bean'
import PreloadManager from './PreloadManager'
import { Device } from '../helpers/Device'
import { isTouch, preventLink } from '../helpers/utils'
import { Power0 } from 'gsap'

class AppManager {
  constructor() {
    this.ui = {}
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
    this.preloadFiles()
    bean['on'](window, 'resize orientationchange', this.resizeHandler)
    // this.start()
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
  }

  endPreload() {
    this.tl.stop()
    this.tl1.set('#Polystar_1', {
      drawSVG: '0',
    })
    this.tl1.to('#Polystar_1', 1.2, {
      drawSVG: '100%',
    })
    this.tl1.set('#Shape_10', { x: -200, scaleX: 0 })
    this.tl1.to('#Shape_10', 0.5, { x: -200, scaleX: 3, drawSVG: '100%' })
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
      1,
      {
        fill: 'white',
        scale: 100,
        transformOrigin: 'center',
      },
      'smallAnim+=0.5'
    )
    this.tl1.set('.preload', { css: { display: 'none' } })
  }

  preloadFiles() {
    PreloadManager.loadManifest([
      // template hbs
      {
        id: 'tpl-intro-content',
        src: `${global.BASE}/templates/introContent.hbs`,
      },
      {
        id: 'tpl-vizient-content',
        src: `${global.BASE}/templates/vizientContent.hbs`,
      },
      //images
      {
        id: 'project-vizient-img',
        src: `${global.BASE}/imgs/vizient-1.png`,
      },
      {
        id: 'client-greatschools-img',
        src: `${global.BASE}/imgs/client-greatschools.png`,
      },
      {
        id: 'client-dictionary-img',
        src: `${global.BASE}/imgs/client-dictionary.png`,
      },
      {
        id: 'client-vizient-img',
        src: `${global.BASE}/imgs/client-vizient.png`,
      },
      {
        id: 'client-xealth-img',
        src: `${global.BASE}/imgs/client-xealth.png`,
      },
      {
        id: 'client-portal-img',
        src: `${global.BASE}/imgs/client-portal.png`,
      },
      {
        id: 'client-cision-img',
        src: `${global.BASE}/imgs/client-cision.png`,
      },
      {
        id: 'client-joist-img',
        src: `${global.BASE}/imgs/client-joist.png`,
      },
      {
        id: 'client-cherwell-img',
        src: `${global.BASE}/imgs/client-cherwell.png`,
      },
      {
        id: 'client-crew-img',
        src: `${global.BASE}/imgs/client-crew.png`,
      },
      {
        id: 'client-pared-img',
        src: `${global.BASE}/imgs/client-pared.png`,
      },
      {
        id: 'client-bombfell-img',
        src: `${global.BASE}/imgs/client-bombfell.png`,
      },
      {
        id: 'client-wine-img',
        src: `${global.BASE}/imgs/client-wine.png`,
      },
      {
        id: 'work-collab-img',
        src: `${global.BASE}/imgs/work-collab.png`,
      },
      {
        id: 'work-iterative-img',
        src: `${global.BASE}/imgs/work-iteractive.png`,
      },
      {
        id: 'work-flexible-img',
        src: `${global.BASE}/imgs/work-flexible.png`,
      },
      {
        id: 'work-data-img',
        src: `${global.BASE}/imgs/work-data.png`,
      },
    ])

    PreloadManager.on(
      'complete',
      () => {
        if (process.env.NODE_ENV !== 'production') {
          // if (false) {
          TweenMax.set('.preload', { css: { display: 'none' } })
          this.start()
        } else {
          PreloadManager.off('progress')
          this.endPreload()
          this.tl1.eventCallback('onComplete', this.start)
        }
      },
      this,
      true
    )
  }

  start() {
    console.log('start')
    this.ui = {
      uiContent: document.querySelector('.ui-content'),
    }
    RouterManager.start()
  }

  resizeHandler() {
    Device.touch = isTouch()

    if (Device.touch) document.body.classList.add('is-touch')
    else document.body.classList.remove('is-touch')
    const _width = window.innerWidth >= 1920 ? 1920 : window.innerWidth
    EmitterManager.emit('resize', _width, window.innerHeight)
    global.LAYOUT.width = _width
    TweenMax.set(document.body, {
      width: _width,
      height: window.innerHeight,
    })
  }

  callbackInit() {
    if (this.initiated === true) {
      TweenMax.delayedCall(0.1, () => {
        console.log('transitionIn')
        RouterManager.currentPage.transitionIn(!RouterManager.fromUrl) // GL issues ???
      })
    } else {
      this.initiated = true
      document.body.classList.add('is-init')
      TweenMax.delayedCall(0.1, () => {
        console.log('transitionIn')
        RouterManager.currentPage.transitionIn(!RouterManager.fromUrl) // GL issues ???
      })
    }
  }
}
export default new AppManager()
