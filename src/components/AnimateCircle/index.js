import React from 'react'
import styled from 'styled-components'
import { Tween, Timeline } from 'react-gsap'

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: gray;
`

export default ({
  duration = 0.7,
  startOpacity = .1,
  endOpacity = .1,
  startScale = 3,
  tempScale = 8,
  endScale = 7.45
}) => {
  return (
    <Timeline
      target={
        <Circle></Circle>
      }
    >
      <Tween
        duration={duration}
        from={
          {
            css: {
              transform: `scale(${startScale})`,
              opacity: startOpacity
            }
          }
        }
        to={
          {
            css: {
              transform: `scale(${tempScale})`,
              opacity: endOpacity
            }
          }
        }
      >
      </Tween>
      <Tween
        duration={duration}
        to={
          {
            css: {
              transform: `scale(${endScale})`,
            }
          }
        }
      >
      </Tween>
    </Timeline>
  )
}