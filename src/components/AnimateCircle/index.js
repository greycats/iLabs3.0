import React from 'react'
import styled from 'styled-components'
import AnimationPlayer from 'components/AnimationPlayer'

const Circle = styled.div`
  width: 6vw;
  height: 6vw;
  border-radius: 100%;
  background-color: gray;
`

export default ({
  duration = 0.7,
  startOpacity = .1,
  endOpacity = .1,
  startScale = 3,
  tempScale = 8,
  endScale = 7.45,
  id
}) => {
  return (
    <AnimationPlayer
      target={
        <Circle />
      }
      id={id}
      delay={2}
      duration={duration}
      animations = {
       [
         {
           from: {
            transform: `scale(${startScale})`,
            opacity: startOpacity
           },
           to: {
            transform: `scale(${tempScale})`,
            opacity: endOpacity
           },
           delay: 0.2,
           duration: 1,
         },
         {
           to: {
            transform: `scale(${endScale})`,
           }
         }
       ]
      }
    />
  )
}