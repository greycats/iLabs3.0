import React, { Fragment, useState, useEffect } from 'react'
import Lottie from 'react-lottie'
import { Tween, Timeline } from 'react-gsap'
import _ from 'lodash'

import { hashCode } from 'utils'

import useAnimationPlay from 'hooks/useAnimationPlay'

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
  id = hashCode('randmom_lottie_'),
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
  },
  loop = false
}) => {
  const playAnimation = useAnimationPlay(id, delay, onStart)

  return (
    <Fragment>
      <div id={id} style={{
        position: 'relative',
        ...triggerRelativePosition
      }}/>
      {
        playAnimation
          ? <Lottie
            options={{loop, ...options}}
            height={height}
            width={width}
          />
          : null
      }
    </Fragment>
  )
}

export const multiAnimationPlayer = ({
  id = hashCode('randmom_multi_'),
  target = null,
  mulitAnimations = [],
  onStart = _.noop,
  triggerRelativePosition = {
    top: 'unset',
    right: 'unset',
    bottom: 'unset',
    left: 'unset'
  },
  delay = 0
}) => {
  const playAnimation = useAnimationPlay(id, delay, onStart)

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
  id = hashCode('randmom_common_anim_'),
  target = null,
  animations = [],
  onStart = _.noop,
  triggerRelativePosition = {
    top: 'unset',
    right: 'unset',
    bottom: 'unset',
    left: 'unset'
  },
  delay = 0
}) => {
  const playAnimation = useAnimationPlay(id, delay, onStart)

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
