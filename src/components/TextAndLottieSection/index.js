import React, { Fragment } from 'react'

import AnimationPlayer, { LottieAnimation } from 'components/AnimationPlayer'
import CommonTitle from 'components/CommonTitle'
import classNames from 'classnames'
import './index.sass'

const lottieDuration = .8
const isPC = window.isPC

export default ({
  title = '',
  intro = '',
  introHeight = 0,
  list = [],
  style = {},
  withName = true,
  lottieSize = {
    width: 86,
    height: 86
  },
  titleWidth = 495,
  itemStyle = {},
  isWhite = false,
  withLottie = true
}) => {
  const animationOptions = {
    title: [
      {
        from: {
          opacity: 0,
          height: 0
        },
        to: {
          opacity: 1,
          height: isPC ? '60px' : '0.38rem'
        },
        duration: .8
      }
    ],
    intro: [
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
  return (
    <div style={style}>
      <div className="layout-1240 panel challenge-wrap">
        <div className="title-part">
          <AnimationPlayer
            target={
              <div className="title-wrap">
                <CommonTitle title={title} titleMargin={isPC ? '50px' : '0.01rem'} isWhite={isWhite} />
              </div>
            }
            animations={animationOptions.title}
            height={isPC ? '60px' : '0.38rem'}
          />
          <AnimationPlayer
            target={
              <div>
                <CommonTitle intro={intro} width={titleWidth} isWhite={isWhite}></CommonTitle>
              </div>
            }
            animations={animationOptions.intro}
            height={introHeight}
          />
        </div>
        {
          withLottie ?
            (
              <div className={classNames("content-wrap", { 'is-white': isWhite })}>
                {
                  list.map((item, index) => {
                    return (
                      <div key={index} className="challenge-item" style={itemStyle}>
                        <div className="icon" style={{ width: isPC ? '86px' : lottieSize.width }}>
                          <LottieAnimation
                            delay={isPC ? index * 0.2 * lottieDuration : 0}
                            options={{
                              animationData: item.img
                            }}
                            {...lottieSize}
                            wrapHeight={lottieSize.height}
                          />
                        </div>
                        {
                          withName ?
                            <AnimationPlayer
                              target={
                                (
                                  <Fragment>
                                    <div className="name" style={isWhite ? { fontSize: 20, fontFamily: 'Gilroy-Bold', letterSpacing: 1 } : null}>{item.name}</div>
                                    <div className="text">{item.text}</div>
                                  </Fragment>
                                )
                              }
                              animations={[
                                {
                                  from: {
                                    opacity: 0
                                  },
                                  to: {
                                    opacity: 1
                                  },
                                  duration: lottieDuration,
                                  delay: isPC ? index * 0.2 * lottieDuration : 0
                                }
                              ]}
                              height={isPC ? '127px' : '1.27rem'}
                            />
                            : null
                        }
                      </div>
                    )
                  })
                }
              </div>
            )
            : null
        }
      </div>
    </div>
  )
}