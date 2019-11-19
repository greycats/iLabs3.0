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
            display: 'flex',
            justifyContent: 'space-between',
            height: '250px'
          }}>
            <div>
              <AnimationPlayer
                target={
                  <div>
                    <div style={{
                      width: '564px',
                      letterSpacing: '1px',
                      lineHeight: '28px'
                    }}>{intro}</div>
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
            <div>
              <AnimationPlayer
                target={
                  <div style={{
                    width: '600px',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    lineHeight: '38px'
                  }}>
                    {description}
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
          <div style={{
            height: '775px',
            position: 'relative',
            left: '-260px'
          }}>
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
                  width={'1700px'}
                /> : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}