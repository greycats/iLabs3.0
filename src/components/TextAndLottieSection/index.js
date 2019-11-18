import React, { Fragment } from 'react'

import AnimationPlayer, { LottieAnimation, animations } from 'components/AnimationPlayer'
import CommonTitle from 'components/CommonTitle'
import 'components/TheChallenge/index.sass'

const lottieDuration = .8

export default ({
  intro = '',
  list = [],
  title = '',
  style = {}
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
                <CommonTitle title={title} titleMargin='50px' />
              </div>
            }
            animations={animationOptions.title}
          />
          <AnimationPlayer
            target={
              <div>
                <CommonTitle intro={intro} width={495}></CommonTitle>
              </div>
            }
            animations={animationOptions.intro}
          />
        </div>
        <div className="content-wrap" style={{ marginTop: '150px' }}>
          {
            list.map((item, index) => {
              return (
                <div key={index} className="challenge-item">
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
                      height={86}
                      width={86}
                    />
                  </div>
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
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}