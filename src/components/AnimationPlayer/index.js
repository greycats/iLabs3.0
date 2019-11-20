import React, { Fragment, useState, useEffect } from 'react'
import Lottie from 'react-lottie'
import { Tween, Timeline } from 'react-gsap'
import CountUp from 'react-countup'
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
  width = 'auto',
  height = 'auto',
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
      }} />
      {
        playAnimation
          ? <Lottie
            options={{ loop, ...options }}
            height={height}
            width={width}
          />
          : null
      }
    </Fragment>
  )
}

export const CountUpAnimation = ({
  id = hashCode('randmom_countup_'),
  delay = 0,
  onStart = _.noop,
  triggerRelativePosition = {
    top: 'unset',
    right: 'unset',
    bottom: 'unset',
    left: 'unset'
  },
  end = 0,
  decimals = 0,
  duration = 2,
  suffix = ''
}) => {
  const playAnimation = useAnimationPlay(id, delay, onStart)

  return (
    <Fragment>
      <div id={id} style={{
        position: 'relative',
        ...triggerRelativePosition
      }} />
      {
        playAnimation ?
          <CountUp
            start={0}
            end={end}
            duration={duration}
            decimals={decimals}
            delay={0}
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
                {suffix}
              </div>
            )}
          </CountUp>
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
      }} />
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
      }} />
      {
        playAnimation
          ? <Animations target={target} animations={animations} />
          : null
      }
    </Fragment>
  )
}
