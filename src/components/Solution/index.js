import React, { Fragment } from 'react'

import AnimationPlayer, { LottieAnimation, multiAnimationPlayer } from 'components/AnimationPlayer'
import CommonTitle from 'components/CommonTitle'

import ChallengeImg from 'assets/imgs/vizient/challenge-image.png'

const intro = 'We created a fully functional UI toolkit based on a customized version of Angular Material. With a standardized interface and clear documentation we were able to cut down on operational costs, all while implementing a single uniform design language.'

const list = [
  {
    name: 'UI Toolkit',
    text: 'Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple.',
    img: require('assets/imgs/vizient/The-solution/UI Toolkit.json')
  },
  {
    name: 'Clear Documentation',
    text: 'Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple.',
    img: require('assets/imgs/vizient/The-solution/Clear Document.json')
  },
  {
    name: 'Design Language',
    text: 'Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple.',
    img: require('assets/imgs/vizient/The-solution/Designlanguage.json')
  },
]

const lottieDuration = .8

export default () => {
  return (
    <div style={{ background: `url(${ChallengeImg})`, backgroundSize: 'contain' }}>
      <div className="layout-1240 panel challenge-wrap">
        <div className="title-part">
          <AnimationPlayer
            id='anim-challenge-1'
            target={
              <div className="title-wrap">
                <CommonTitle title={'The Challenge'} titleMargin='50px' />
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
            id='anim-cha-2'
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
        </div>
        <div className="content-wrap" style={{marginTop: '150px'}}>
          {
            list.map((item, index) => {
              return (
                <div key={index} className="challenge-item">
                  <div className="icon">
                    <LottieAnimation
                      triggerRelativePosition={{
                        top: '-200px'
                      }}
                      id={`cha_lottie_${index}`}
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
                      top: '-315px'
                    }}
                    animations={
                      [
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
                      ]
                    }
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