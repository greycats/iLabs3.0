import React, { Fragment } from 'react'

import AnimationPlayer, { LottieAnimation } from 'components/AnimationPlayer'
import CommonTitle from 'components/CommonTitle'

export default ({
  intro = '',
  title = '',
  description = '',
  style = {},
  lottieIcon = null
}) => {
  return (
    <div style={style}>
      <div className="layout-1240 panel" style={{ position: 'relative' }}>
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
          <div style={{
            display: 'flex'
          }}>
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
            <div style={{
              width: '35%',
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#656565',
              marginLeft: '80px'
            }}>
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
                      delay: .6
                    }
                  ]
                }
              />
            </div>

          </div>
          <div style={{height: '775px'}}>
            {
              lottieIcon ?
                <LottieAnimation
                  triggerRelativePosition={{
                    top: '-200px'
                  }}
                  options={{
                    autoplay: true,
                    animationData: lottieIcon,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice'
                    }
                  }}
                  height={'800px'}
                  width={'100%'}
                /> : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}