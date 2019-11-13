import React from 'react'
import { Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap'

export default ({
  controllerId,
  content,
  delay = 0,
  from = { opacity: 0 },
  to = { opacity: 1 },
  duration = 500
}, index) => (
    <Scene
      triggerElement={'#' + controllerId}
      duration={duration}
      reverse={false}
      key={index}
    >
      {(progress) => (
        progress ? (
          <Tween
            from={from}
            to={to}
            delay={delay}
          >
            {content}
          </Tween>
        ) : <div></div>
      )}
    </Scene>
  )