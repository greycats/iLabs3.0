import { useState, useEffect } from 'react'
import ScrollMagic from 'scrollmagic'
import { getTriggerId, hashCode } from 'utils'
import _ from 'lodash'

export default (id = hashCode(), delay = 0, onStart = _.noop) => {
  const [playAnimation, setPlayAnimation] = useState(false)
  const controller = new ScrollMagic.Controller()

  const setAnimation = (elementSelector) => {
    try {
      new ScrollMagic.Scene()
        .triggerElement(elementSelector)
        .addTo(controller)
        .on('start', () => {
          if (delay > 0) {
            _.delay(setPlayAnimation, delay * 1000, true)
          } else {
            setPlayAnimation(true)
          }
          onStart()
        })
    } catch (error) {

    }
  }

  useEffect(() => {
    setAnimation(getTriggerId(id))
  }, [])

  return playAnimation
}