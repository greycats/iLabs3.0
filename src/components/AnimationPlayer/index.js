import React, { Fragment, useState, useEffect } from 'react'
import _ from 'lodash'
import { Tween, Timeline } from 'react-gsap'
import ScrollMagic from 'scrollmagic'
import { getTriggerId } from 'utils'

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

export default ({
  id = `__animate_${_.random() * _.random()}`,
  target = null,
  animations = [],
  onStart = _.noop
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
      <div id={id}> </div>
      {
        playAnimation
          ? <Animations target={target} animations={animations} />
          : null
      }
    </Fragment>
  )
}