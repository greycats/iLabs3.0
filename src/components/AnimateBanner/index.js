import React, { useEffect, useState, useRef } from 'react'
import _ from 'lodash'
import ScrollMagic from 'scrollmagic'
import logo from 'assets/imgs/logo.svg'
import history from 'history.js'

import { hashCode } from 'utils'

const global = { LAYOUT: {} }

global.LAYOUT.width = window.innerWidth

export const AnimateBanner = ({ children, ...props }) => {
  const [renderId] = useState(hashCode('banner'))
  const [initSprit, setInitSprit] = useState([])
  const [pixiApp] = useState(new PIXI.Application({
    antialias: true,
    backgroundColor: 0x2c2c2c,
    forceCanvas: true,
    width: window.innerWidth,
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
    if (initSprit.length === 0) {
      contentAnim()
    }
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
      minWidth: window.isPC ? '1280px' : '100vw'
    }}>
      <div id={renderId} ref={bgRef} style={{
        position: 'absolute',
        top: 0,
        zIndex: window.isPC ? -1 : 0
      }} />
      <img src={logo} className="logo-img" alt="" onClick={() => {
        history.push('/')
      }}/>
      {children}
    </div>
  )
}
export default AnimateBanner