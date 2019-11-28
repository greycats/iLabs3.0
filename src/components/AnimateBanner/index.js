import React, { useEffect, useState, useRef } from 'react'
import _ from 'lodash'
import ScrollMagic from 'scrollmagic'
import CommonTitle from 'components/CommonTitle'
import AnimateList from 'components/AnimateList'
import logo from 'logo.svg'

import { hashCode } from 'utils'

const global = { LAYOUT: {} }

global.LAYOUT.width = window.innerWidth

const controller = new ScrollMagic.Controller()
export default () => {
  const [initSprit, setInitSprit] = useState([])
  const [pixiApp] = useState(new PIXI.Application({
    antialias: true,
    backgroundColor: 0x2c2c2c,
    forceCanvas: true,
    width: global.LAYOUT.width,
    height: 800,
  }))
  // const [sprite] = useState(new PIXI.Sprite(pixiApp.renderer.generateTexture(graphic)))

  const bgRef = useRef(null)

  // let initSprit
  function initContent() {
    TweenMax.set('#pixi-bg', { 'margin-left': '-100vw' })
    setInitSprit(initPixiAnim())
  }

  const resizeCB = () => {
    pixiApp.renderer.resize(window.innerWidth, 800)
  }
  useEffect(() => {
    window.addEventListener('resize', resizeCB)
    return () => window.removeEventListener('resize', resizeCB)
  }, [])

  function initPixiAnim() {
    document.querySelector('#pixi-bg canvas') && document.querySelector('#pixi-bg canvas').remove()

    bgRef.current.appendChild(pixiApp.view)

    const pathList = [[0, 0, 50, 60, 100, 50], [0, 0, -60, 100, 60, 100], [0, 0, 40, 100, 100, 60], [0, 0, 50, 100, 100, 50]]
    let startPointList = []
    for (let x = -20; x < global.LAYOUT.width; x += 150) {
      for (let y = -20; y < 800 + 50; y += 150) {
        startPointList.push([x, y])
      }
    }
    const _total = ~~(window.innerWidth / 120)
    // let count = _total
    const draw = total => {
      const outputSprite = []
      startPointList = _.sampleSize(startPointList, total)
      _.forEach(startPointList, ([x, y]) => {
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
        const anim = () => {
          return TweenMax.to(sprite, 20, {
            pixi: {
              x: x + _.random(-100, 200),
              y: y + _.random(-50, 80),
              scale: _.random(0.5, 1.5),
              alpha: op1,
              rotation: _.random(-100, 100),
              skewX: _.random(-30, 30),
            },
          })
        }
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
            // .repeat(-1)
          })
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

  function contentAnim() {
    const tl = () =>
      new TimelineMax({ paused: false })
        .fromTo('#pixi-bg', 0.4, { 'margin-left': '-100vw' }, { 'margin-left': 0 }, 'step1')
        .staggerTo(initSprit, 0.2, { pixi: { x: '-=500' } }, 0.001, 'step1-=.4')
        .staggerTo(initSprit, 1.5, { pixi: { x: '+=100' } }, 0.01, 'step1+=.5')
        .fromTo('.header-sec', 2, { height: 0 }, { height: '386px' }, 'step1+=1')
        .fromTo('.content-left-bg', 0.4, { left: '-1000' }, { left: '0' }, 'step1+=.8')
        .fromTo('.content-title', 2, { height: 0 }, { height: '160px' }, 'step1+=1')

    new ScrollMagic.Scene({ triggerElement: '.main' }).addTo(controller).on('start', tl)
  }

  function setScrollAnim(elementSelector) {
    try {
      new ScrollMagic.Scene()
        .triggerElement(elementSelector)
        .addTo(controller)
        .on('start', e => {
          const targets = e.target.triggerElement().querySelectorAll('.mask')
          TweenMax.staggerTo(_.filter(_.shuffle(targets), item => item !== null), 0.5, { css: { width: 0 } }, 0.02)
        })
    } catch (error) {
    }
    document.querySelectorAll('.project-item').forEach((element) => {
      let hoverTL = new TimelineMax()
      const arrowSec = element.querySelector('.arrow-sec')
      const lineSVG = element.querySelector('.line')
      const arrowSVG = element.querySelector('.arrow')
      hoverTL.set(arrowSec, { css: { height: '0', width: '0' } })
      element.addEventListener('mouseenter', () => {
        if (hoverTL.reversed()) return hoverTL.restart()
        hoverTL
          .to(arrowSec, 0.5, { css: { height: '60px', width: '60px' } }, 'step1')
          .fromTo(lineSVG, 0.3, { attr: { d: 'M0 8H00' } }, { attr: { d: 'M0 8H20' } }, 'step1+=.3')
          .fromTo(arrowSVG, 0.2, { attr: { d: 'M20 8L20 8L20 8' } }, { attr: { d: 'M13 1L20 8L13 15' } }, 'step1+=.6')
      })
      element.addEventListener('mouseleave', () => {
        hoverTL.reverse()
      })
    })
  }

  function projectAnim() {
    const projectItems = document.getElementsByClassName('project-item-wrapper')

    _.each(projectItems, (item, index) => {
      setTimeout(() => {
        try {
          setScrollAnim(`#project-item-${index}`)
        } catch (error) {

        }
      }, index * 100)
    })
  }

  useEffect(() => {
    initContent()
    setTimeout(() => {
      projectAnim()
    }, 500)
  }, [])
  useEffect(() => {
    contentAnim()
  }, [initSprit])

  const titleData = {
    title: 'Featured work',
    intro: 'Explore some of our latest projects.'
  }
  return (
    <div className="main intro ui-content">
      <div id="pixi-bg" ref={bgRef} />
      <div className="header-sec">
        <h1 className="bold">
          Experiences <br />
          Matters.
        </h1>
        <p>
          Welcome to Interactive Labs. We're a full stack digital consulting studio that crafts exceptional experiences
          across all industries.
        </p>
      </div>
      <div className="content">
        <div className="content-left-bg"></div>
        <div className="content-main layout-1240">
          <div style={{ height: '160px' }}>
            <CommonTitle {...titleData}></CommonTitle>
          </div>
          <AnimateList></AnimateList>
        </div>
      </div>
    </div>
  )
}

export const AnimateBanner = ({ children, ...props }) => {
  const [renderId] = useState(hashCode('banner'))
  const [initSprit, setInitSprit] = useState([])
  const [pixiApp, setPixiApp] = useState(new PIXI.Application({
    antialias: true,
    backgroundColor: 0x2c2c2c,
    forceCanvas: true,
    width: global.LAYOUT.width,
    height: props.height || 800,
  }))

  const bgRef = useRef(null)

  function initContent() {
    TweenMax.set(`#${renderId}`, { 'margin-left': '-100vw' })
    setInitSprit(initPixiAnim())
  }

  function contentAnim() {
    const tl = () =>
      new TimelineMax({ paused: false })
        .fromTo(`#${renderId}`, 0.4, { 'margin-left': '-100vw' }, { 'margin-left': 0 }, 'step1')
        .staggerTo(initSprit, 0.2, { pixi: { x: '-=500' } }, 0.001, 'step1-=.4')
        .staggerTo(initSprit, 1.5, { pixi: { x: '+=100' } }, 0.01, 'step1+=.5')

      tl()
  }

  function initPixiAnim() {
    document.querySelector(`#${renderId} canvas`) && document.querySelector(`#${renderId} canvas`).remove()

    bgRef.current.appendChild(pixiApp.view)

    const pathList = [[0, 0, 50, 60, 100, 50], [0, 0, -60, 100, 60, 100], [0, 0, 40, 100, 100, 60], [0, 0, 50, 100, 100, 50]]
    let startPointList = []
    for (let x = -20; x < global.LAYOUT.width; x += 150) {
      for (let y = -20; y < 800 + 50; y += 150) {
        startPointList.push([x, y])
      }
    }
    const _total = ~~(window.innerWidth / 120)
    // let count = _total
    const draw = total => {
      const outputSprite = []
      startPointList = _.sampleSize(startPointList, total)
      _.forEach(startPointList, ([x, y]) => {
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
        const anim = () => {
          return TweenMax.to(sprite, 20, {
            pixi: {
              x: x + _.random(-100, 200),
              y: y + _.random(-50, 80),
              scale: _.random(0.5, 1.5),
              alpha: op1,
              rotation: _.random(-100, 100),
              skewX: _.random(-30, 30),
            },
          })
        }
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
            // .repeat(-1)
          })
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

  useEffect(() => {
    initContent()
  }, [])
  useEffect(() => {
    contentAnim()
  }, [initSprit])

  const resizeCB = () => {
    pixiApp.renderer.resize(window.innerWidth, props.height || 800)
  }
  useEffect(() => {
    window.addEventListener('resize', resizeCB)
    return () => window.removeEventListener('resize', resizeCB)
  }, [])

  return (
    <div style={{
      minWidth: '1280px'
    }}>
      <div id={renderId} ref={bgRef} style={{
        position: 'absolute',
        zIndex: -1
      }}/>
        <img src={logo} className="logo-img" alt="" />
        { children }
    </div>
  )
}