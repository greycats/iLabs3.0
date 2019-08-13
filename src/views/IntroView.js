import Handlebars from 'handlebars'
import _ from 'lodash'
import ScrollMagic from 'ScrollMagic'
import AbstractView from './AbstractView'
import EmitterManager from '../scripts/EmitterManager'
import PreloadManager from '../scripts/PreloadManager'
import { Device } from '../helpers/Device'
import getDATA from '../datas/data'

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
    console.log('asd', PreloadManager.getResult('project-vizient-img'))
    let html = template(getDATA().intro)
    this.ui.uiContent.className = ''
    this.ui.uiContent.classList.add('ui-content', 'is-intro')
    this.ui.uiContent.innerHTML = html
    screenReadyCB()
    EmitterManager.on('resize', this.initPixiAnim)
  }

  transitionIn() {
    this.initContent()
    this.contentAnim()
    this.projectAnim()
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
      backgroundColor: 0x2c2c2c,
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
    const draw = total => {
      const outputSprite = []
      startPointList = _.sampleSize(startPointList, total)
      _.forEach(startPointList, ([x, y]) => {
        // [x, y] = [x, y].map(i => i / 2)
        let graphic = new PIXI.Graphics()
        graphic.beginFill(0, 0)
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
        let amInst
        const anim = () =>
          TweenMax.to(sprite, 20, {
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
          let tl = new TimelineMax()
          amInst.kill(null, sprite)
          tl.to(
            sprite,
            1,
            {
              pixi: {
                scale: 0,
                alpha: 0,
                rotation: 180,
              },
            },
            'a1'
          ).to(
            sprite,
            1,
            {
              pixi: {
                scale: _.random(0.5, 1.5),
                alpha: op1,
                rotation: _.random(-100, 100),
              },
            },
            'a1+=1'
          )
          tl.eventCallback('onComplete', () => {
            tl.kill()
            anim()
              .yoyo(true)
              .repeat(-1)
          })
          // let a1 = TweenMax.to(sprite, 1, {
          //   pixi: {
          //     scale: 0,
          //     alpha: 0,
          //     rotation: 360,
          //   },
          // })
          // a1.eventCallback('onComplete', () =>
          //   sprite.destroy({ children: true })
          // )
          // count--
          // if (count <= 3) {
          //   draw(total - count)
          //   count = total
          // }
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
        amInst = anim()
          .yoyo(true)
          .repeat(-1)
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
          '.header-sec',
          2,
          { height: 0 },
          { height: '386px' },
          'step1+=1'
        )
        .fromTo(
          '.content-left-bg',
          0.4,
          { left: '-1000' },
          { left: '0' },
          'step1+=.8'
        )
        .fromTo(
          '.content-title',
          2,
          { height: 0 },
          { height: '160px' },
          'step1+=1'
        )

    new ScrollMagic.Scene({ triggerElement: '.main' })
      .addTo(this.controller)
      .on('start', tl)
  }

  setScrollAnim(elementSelector) {
    new ScrollMagic.Scene()
      .triggerElement(elementSelector)
      .addTo(this.controller)
      .on('start', e => {
        const targets = e.target.triggerElement().querySelectorAll('.mask')
        TweenMax.staggerTo(_.shuffle(targets), 0.5, { css: { width: 0 } }, 0.02)
      })
    document.querySelectorAll('.project-item').forEach((element, index) => {
      let hoverTL = new TimelineMax()
      const arrowSec = element.querySelector('.arrow-sec')
      const lineSVG = element.querySelector('.line')
      const arrowSVG = element.querySelector('.arrow')
      hoverTL.set(arrowSec, { css: { height: '0', width: '0' } })
      element.addEventListener('mouseenter', () => {
        if (hoverTL.reversed()) return hoverTL.restart()
        hoverTL
          .to(
            arrowSec,
            0.5,
            { css: { height: '60px', width: '60px' } },
            'step1'
          )
          .fromTo(
            lineSVG,
            0.3,
            { attr: { d: 'M0 8H00' } },
            { attr: { d: 'M0 8H20' } },
            'step1+=.3'
          )
          .fromTo(
            arrowSVG,
            0.2,
            { attr: { d: 'M20 8L20 8L20 8' } },
            { attr: { d: 'M13 1L20 8L13 15' } },
            'step1+=.6'
          )
      })
      element.addEventListener('mouseleave', () => {
        hoverTL.reverse()
      })
    })
  }

  projectAnim() {
    const projectItems = document.getElementsByClassName('project-item')

    _.each(projectItems, (item, index) => {
      this.setScrollAnim(`#project-item-${index}`)

      if (index % 2 !== 0) {
        const projectItem = document.getElementById(`project-item-${index}`)
        projectItem.classList.add('sink-item')
      }
    })
  }
}
