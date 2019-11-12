import React, { Fragment, useState, useEffect } from 'react'
import _ from 'lodash'
import { Tween, Timeline } from 'react-gsap'

import Lottie from 'react-lottie'
import ScrollMagic from 'scrollmagic'

import { getTriggerId } from 'utils'

const hashCode = s => 'random_anim_' + Math.abs(s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0))

export const Animations = ({
  target = null,
  animations = []
}) => {

  return (
    <Timeline
      target={target}
    >
      {
        animations.map(({ from = {}, to, delay = NaN, duration = 0.5, ...others }, index) => {
          return (
            <Tween
              key={index}
              from={from}
              to={to}
              duration={duration}
              delay={delay}
              {...others}
            >
            </Tween>
          )
        })
      }
    </Timeline>
  )
}

export const LottieAnimation = ({
  id = hashCode(`__animate_${_.random() * _.random()}_${_.random()}`),
  options = {},
  width = 100,
  height = 100,
  delay = 0,
  onStart = _.noop,
  triggerRelativePosition = {
    top: 'unset',
    right: 'unset',
    bottom: 'unset',
    left: 'unset'
  }
}) => {
  const [playAnimation, setPlayAnimation] = useState(false)
  const controller = new ScrollMagic.Controller()

  const setAnimation = (elementSelector) => {
    try {
      new ScrollMagic.Scene()
        .triggerElement(elementSelector)
        .addTo(controller)
        .on('start', () => {
          _.delay(setPlayAnimation, delay * 1000, true)
          onStart()
        })
    } catch (error) {

    }
  }

  useEffect(() => {
    setAnimation(getTriggerId(id))
  }, [])


  return (
    <Fragment>
      <div id={id} style={{
        position: 'relative',
        ...triggerRelativePosition
      }}/>
      {
        playAnimation
          ? <Lottie
            options={options}
            height={width}
            width={height}
          />
          : null
      }
    </Fragment>
  )
}

export const multiAnimationPlayer = ({
  id = hashCode(`__animate_${_.random() * _.random()}_${_.random()}`),
  target = null,
  mulitAnimations = [],
  onStart = _.noop,
  triggerRelativePosition = {
    top: 'unset',
    right: 'unset',
    bottom: 'unset',
    left: 'unset'
  }
}) => {
  const [playAnimation, setPlayAnimation] = useState(false)
  const controller = new ScrollMagic.Controller()

  const setAnimation = (elementSelector) => {
    try {
      new ScrollMagic.Scene()
        .triggerElement(elementSelector)
        .addTo(controller)
        .on('start', () => {
          setPlayAnimation(true)
          onStart()
        })
    } catch (error) {

    }
  }

  useEffect(() => {
    setAnimation(getTriggerId(id))
  }, [])

  return (
    <Fragment>
      <div id={id} style={{
        position: 'relative',
        ...triggerRelativePosition
      }}/>
      {
        playAnimation
          ? mulitAnimations.map((animations, index) => {
              return (
                <Fragment key={index}>
                  <Animations target={target} animations={animations} />
                </Fragment>
              )
            })
          : null
      }
    </Fragment>
  )
}

export default ({
  id = hashCode(`__animate_${_.random() * _.random()}_${_.random()}`),
  target = null,
  animations = [],
  onStart = _.noop,
  triggerRelativePosition = {
    top: 'unset',
    right: 'unset',
    bottom: 'unset',
    left: 'unset'
  }
}) => {
  const [playAnimation, setPlayAnimation] = useState(false)
  const controller = new ScrollMagic.Controller()

  const setAnimation = (elementSelector) => {
    try {
      new ScrollMagic.Scene()
        .triggerElement(elementSelector)
        .addTo(controller)
        .on('start', () => {
          setPlayAnimation(true)
          onStart()
        })
    } catch (error) {

    }
  }

  useEffect(() => {
    setAnimation(getTriggerId(id))
  }, [])

  return (
    <Fragment>
      <div id={id} style={{
        position: 'relative',
        ...triggerRelativePosition
      }}/>
      {
        playAnimation
          ? <Animations target={target} animations={animations} />
          : null
      }
    </Fragment>
  )
}
