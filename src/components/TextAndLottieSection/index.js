import React, { Fragment } from 'react'

import AnimationPlayer, { LottieAnimation } from 'components/AnimationPlayer'
import CommonTitle from 'components/CommonTitle'
import classNames from 'classnames'
import './index.sass'

const lottieDuration = .8

export default ({
  intro = '',
  list = [],
  title = '',
  style = {},
  withName = true,
  lottieSize = {
    width: 86,
    height: 86
  },
  titleWidth = 495,
  itemStyle = {},
  isWhite = false
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
          height: '94px'
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
                <CommonTitle title={title} titleMargin='50px' isWhite={isWhite} />
              </div>
            }
            animations={animationOptions.title}
          />
          <AnimationPlayer
            target={
              <div>
                <CommonTitle intro={intro} width={titleWidth} isWhite={isWhite}></CommonTitle>
              </div>
            }
            animations={animationOptions.intro}
          />
        </div>
        <div className={classNames("content-wrap", { 'is-white': isWhite })}>
          {
            list.map((item, index) => {
              return (
                <div key={index} className="challenge-item" style={itemStyle}>
                  <div className="icon">
                    <LottieAnimation
                      triggerRelativePosition={{
                        top: '-200px'
                      }}
                      delay={index * lottieDuration}
                      options={{
                        autoplay: true,
                        animationData: item.img,
                        rendererSettings: {
                          preserveAspectRatio: 'xMidYMid slice'
                        }
                      }}
                      {...lottieSize}
                    />
                  </div>
                  {
                    withName ?
                      <AnimationPlayer
                        target={
                          (
                            <Fragment>
                              <div className="name">{item.name}</div>
                              <div className="tezt">{item.text}</div>
                            </Fragment>
                          )
                        }
                        triggerRelativePosition={{
                          top: '-350px'
                        }}
                        animations={[
                          {
                            from: {
                              opacity: 0
                            },
                            to: {
                              opacity: 1
                            },
                            duration: lottieDuration,
                            delay: lottieDuration * index
                          }
                        ]}
                      />
                      : null
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}