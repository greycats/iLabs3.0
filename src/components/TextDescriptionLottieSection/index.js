import React, { Fragment } from 'react'

import AnimationPlayer, { LottieAnimation } from 'components/AnimationPlayer'
import CommonTitle from 'components/CommonTitle'

export default ({
  intro = '',
  title = '',
  description = '',
  style = {}
}) => {
  return (
    <div style={style}>
      <div className="layout-1240 panel challenge-wrap" style={{position: 'relative'}}>
        <div className="title-part">
          <AnimationPlayer
            target={
              <div className="title-wrap">
                <CommonTitle title={title} titleMargin='50px' />
              </div>
            }
            animations={
              [
                {
                  from: {
                    opacity: 0,
                    height: 0
                  },
                  to: {
                    opacity: 1,
                    height: '94px'
                  },
                  duration: .8
                }
              ]
            }
          />
          <AnimationPlayer
            target={
              <div>
                <CommonTitle intro={intro} width={495}></CommonTitle>
              </div>
            }
            animations={
              [
                {
                  from: {
                    opacity: 0
                  },
                  to: {
                    opacity: 1
                  },
                  delay: .2
                }
              ]
            }
          />
          <AnimationPlayer
            target={
              <div>
                <p>{description}</p>
              </div>
            }
            animations={
              [
                {
                  from: {
                    opacity: 0
                  },
                  to: {
                    opacity: 1
                  },
                  delay: .2
                }
              ]
            }
          />
        </div>
      </div>
    </div>
  )
}