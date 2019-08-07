import Handlebars from 'handlebars'
import _ from 'lodash'
import ScrollMagic from 'ScrollMagic'
import AbstractView from './AbstractView'
import EmitterManager from '../scripts/EmitterManager'
import PreloadManager from '../scripts/PreloadManager'
import { Device } from '../helpers/Device'
import DATA from '../datas/data.json'

export default class IntroView extends AbstractView {
  constructor(obj) {
    super()
    this.initSprit = []
    this.controller = new ScrollMagic.Controller()
    this.init = this.init.bind(this)
    this.transitionIn = this.transitionIn.bind(this)
    this.initContent = this.initContent.bind(this)
    this.contentAnim = this.contentAnim.bind(this)
    this.initPixiAnim = this.initPixiAnim.bind(this)
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
    EmitterManager.on('resize', this.initPixiAnim)
  }

  transitionIn() {
    this.initContent()
    this.contentAnim()
  }

  initContent() {
    TweenMax.set('#pixi-bg', { 'margin-left': '-100vw' })
    TweenMax.set(this.ui.uiContent, { display: 'block' })
    this.initSprit = this.initPixiAnim()
  }

  initPixiAnim() {
    document.querySelector('#pixi-bg canvas') &&
      document.querySelector('#pixi-bg canvas').remove()
    const container = document.getElementById('pixi-bg')
    const pixiApp = new PIXI.Application({
      antialias: true,
      forceCanvas: true,
      width: window.innerWidth,
      height: 800,
    })
    container.append(pixiApp.view)

    const pathList = [
      [0, 0, 50, 60, 100, 50],
      [0, 0, -60, 100, 60, 100],
      [0, 0, 40, 100, 100, 60],
      [0, 0, 50, 100, 100, 50],
    ]
    let startPointList = []
    for (let x = -20; x < window.innerWidth; x += 150) {
      for (let y = -20; y < 800 + 50; y += 150) {
        startPointList.push([x, y])
      }
    }
    const _total = ~~(window.innerWidth / 120)
    let count = _total
    console.log('_total', _total)
    const draw = total => {
      const outputSprite = []
      startPointList = _.sampleSize(startPointList, total)
      _.forEach(startPointList, ([x, y]) => {
        // [x, y] = [x, y].map(i => i / 2)
        let graphic = new PIXI.Graphics()
        graphic.beginFill(0)
        const [op0, op1] = _.sampleSize([0.2, 0.4, 0.6, 0.8, 1], 2)
        graphic.lineStyle(2, 0xffffff, 1)
        const scaleRandom = _.random(0.2, 2)
        graphic.drawPolygon(_.sample(pathList).map(i => scaleRandom * i))
        graphic.endFill()
        const texture = pixiApp.renderer.generateTexture(graphic)
        const sprite = new PIXI.Sprite(texture)
        sprite.anchor.set(0.5)
        sprite.x = x
        sprite.y = y
        sprite.interactive = true
        sprite.buttonMode = true
        sprite.alpha = op0
        const anim = TweenMax.to(sprite, 20, {
          pixi: {
            x: x + _.random(-100, 200),
            y: y + _.random(-50, 80),
            scale: _.random(0.5, 1.5),
            alpha: op1,
            rotation: _.random(-100, 100),
            skewX: _.random(-30, 30),
          },
        })
        sprite.on('pointerdown', () => {
          let a1 = TweenMax.to(sprite, 1, {
            pixi: {
              scale: 0,
              alpha: 0,
              rotation: 360,
            },
          })
          a1.eventCallback('onComplete', () =>
            sprite.destroy({ children: true })
          )
          count--
          if (count <= 3) {
            draw(total - count)
            count = total
          }
        })
        sprite.on('pointerover', () => {
          let a1 = TweenMax.to(sprite, 0.5, {
            pixi: {
              alpha: 1,
              skewX: 0,
            },
          })
        })
        sprite.on('pointerout', () => {
          let a1 = TweenMax.to(sprite, 0.5, {
            pixi: {
              alpha: 1,
            },
          })
        })
        anim.yoyo(true).repeat(-1)
        outputSprite.push(sprite)
        pixiApp.stage.addChild(sprite)
      })
      return outputSprite
    }

    return draw(_total)
  }

  contentAnim() {
    console.log('this.initSprit', this.initSprit)
    const tl = () =>
      new TimelineMax({ paused: false })
        .fromTo(
          '#pixi-bg',
          0.4,
          { 'margin-left': '-100vw' },
          { 'margin-left': 0 },
          'step1'
        )
        .staggerTo(
          this.initSprit,
          0.2,
          { pixi: { x: '-=500' } },
          0.001,
          'step1-=.4'
        )
        .staggerTo(
          this.initSprit,
          1.5,
          { pixi: { x: '+=100' } },
          0.01,
          'step1+=.5'
        )
        .fromTo(
          '.header-sec h1 ',
          2,
          { height: 0 },
          { height: '386px' },
          'step1+=1'
        )
        .fromTo(
          '.content-left-bg',
          0.4,
          { left: '-50%' },
          { left: '0' },
          'step1+=.8'
        )

    new ScrollMagic.Scene({ triggerElement: '.main' })
      .addTo(this.controller)
      .on('start', tl)
  }
}
