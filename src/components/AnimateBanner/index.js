import React, { useEffect } from 'react'
import _ from 'lodash'
import * as PIXI from 'pixi.js-legacy'

const global = { LAYOUT: {}}

global.LAYOUT.width = window.innerWidth

export default () => {
  function initPixiAnim() {
    document.querySelector('#pixi-bg canvas') && document.querySelector('#pixi-bg canvas').remove()

    const container = document.getElementById('pixi-bg')
    const pixiApp = new PIXI.Application({
      antialias: true,
      backgroundColor: 0x2c2c2c,
      forceCanvas: true,
      width: global.LAYOUT.width,
      height: 800,
    })
    container.append(pixiApp.view)

    const pathList = [[0, 0, 50, 60, 100, 50], [0, 0, -60, 100, 60, 100], [0, 0, 40, 100, 100, 60], [0, 0, 50, 100, 100, 50]]
    let startPointList = []
    for (let x = -20; x < global.LAYOUT.width; x += 150) {
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
  useEffect(() => {
    initPixiAnim()
  }, [])
  return (
    <div id="pixi-bg"/>
  )
}