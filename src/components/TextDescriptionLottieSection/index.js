import React from 'react'

import AnimationPlayer, { LottieAnimation } from 'components/AnimationPlayer'
import CommonTitle from 'components/CommonTitle'

const isPC = window.isPC

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
        <div className="title-part" style={isPC ? {} : {height: '8.6rem'}}>
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
                    height: isPC ? '94px' : '0.6rem'
                  },
                  duration: .8
                }
              ]
            }
          />
          <div style={isPC ? {
            display: 'flex',
            justifyContent: 'space-between',
            height: '250px'
          } : {}}>
            <div>
              <AnimationPlayer
                target={
                  <div>
                    <div style={{
                      width: isPC ? '564px' : 'auto',
                      letterSpacing: '1px',
                      lineHeight: '28px',
                      marginBottom: isPC ? 0 : '0.5rem'
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
                    width: isPC ? '600px' : 'auto',
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
          {
            lottieIcon ?
              <div style={{
                height: '775px',
                position: 'relative',
                left: '-260px'
              }}>
                <LottieAnimation
                  triggerRelativePosition={{
                    top: '-200px'
                  }}
                  options={{
                    animationData: lottieIcon,
                  }}
                  height={'800px'}
                  width={'1700px'}
                />
              </div>
              : null
          }
        </div>
      </div>
    </div>
  )
}