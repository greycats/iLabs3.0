import React, { useEffect, useState } from 'react'
import CommonTitle from 'components/CommonTitle'
import AnimateCircle from 'components/AnimateCircle'
import { SectionTitleWrap, AbsolutePositionWrap } from 'components/Styled'
import { Tween, Timeline } from 'react-gsap'
import { getTriggerId } from 'utils'

import ScrollMagic from 'scrollmagic'

const controller = new ScrollMagic.Controller()

const AnimateTitle = () => (
  <Timeline
    target={
      <SectionTitleWrap>
        <div className="title-wrap">
          <CommonTitle title='Vizient Components for the Web' titleMargin='50px' />
        </div>
      </SectionTitleWrap>
    }
  >
    <Tween
      playState='play'
      from={{
        css: {
          height: 0
        }
      }}
      to={{
        css: {
          height: '94px'
        }
      }}
    >
    </Tween>
  </Timeline>
)

const AnimateText = () => (
  <Tween
    duration={0.5}
    from={{
      opacity: 0,
      top: '5px'
    }}
    to={{
      opacity: 1,
      top: '20px'
    }}
    delay={.1}
  >
    <div style={{
      width: '500px',
      position: 'absolute',
      left: '0'
    }}>
      <p>
        The Toolkit system includes the resources needed to create user interfaces consistent with the Vizient’s product principles, design language, and best practices.
      </p>
      <br />
      <p>
        Rather than focusing on pixels, developers can focus on the application logic, while designers can focus on user experiences, interactions, and flows.
      </p>
    </div>
  </Tween>
)

const CirclePosition = AbsolutePositionWrap({ right: '200px'})

export default ({ id = '__trigger_scene' }) => {
  const [playAnimation, setPlayAnimation] = useState(false)

  const setAnimation = (elementSelector) => {
    new ScrollMagic.Scene()
      .triggerElement(elementSelector)
      .addTo(controller)
      .on('start', () => {
        setPlayAnimation(true)
      })
  }

  useEffect(() => {
    setAnimation(getTriggerId(id))
  }, [])

  return (
    <div className="layout-1240 panel challenge-wrap" style={{ minHeight: '800px', position: 'relative', marginTop: '100px' }}>
      <div id={id}></div>
      <div className="title-part">
        {
          playAnimation ? <AnimateTitle /> : null
        }
        <div style={{
          position: 'relative'
        }}>
         {
           playAnimation ? <AnimateText /> : null
         }
        </div>
      </div>
        {
          playAnimation ?
          <Tween
            from={{
              bottom: '500px'
            }}
            to={{
              bottom: '400px'
            }}
          >
            <CirclePosition>
              <AnimateCircle />
            </CirclePosition>
          </Tween>
          : null
        }
    </div>
  )
}