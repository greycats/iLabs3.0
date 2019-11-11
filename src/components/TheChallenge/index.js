import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap'
import CommonTitle from 'components/CommonTitle'
import Lottie from 'react-lottie'
import './index.sass'

export default ({
  title = '',
  intro = '',
  list = [],
  controllerId = 'the-challenge-trigger'
}) => {
  return (
    <div className="layout-1240 panel challenge-wrap">
      <div id={controllerId} />
      <div className="title-part">
        <Controller>
          <Scene
            triggerElement={'#' + controllerId}
            duration={500}
            reverse={false}
          >
            {(progress) =>
              progress ? (
                <Tween
                  from={{
                    height: 0
                  }}
                  to={{
                    height: '94px'
                  }}
                >
                  <div className="title-wrap">
                    <CommonTitle title={title} titleMargin='50px'></CommonTitle>
                  </div>
                </Tween>
              ) : <div></div>
            }
          </Scene>
        </Controller>
      </div>
      <Controller>
        <Scene
          triggerElement={'#' + controllerId}
          duration={500}
          reverse={false}
        >
          {(progress) => (
            progress ? (
              <Tween
                from={{
                  opacity: 0
                }}
                to={{
                  opacity: 1
                }}
                delay={.2}
              >
                <div>
                  <CommonTitle intro={intro} width={495}></CommonTitle>
                </div>
              </Tween>
            ) : <div></div>
          )}
        </Scene>
        <Scene
          triggerElement={'#' + controllerId}
          duration={500}
          reverse={false}
        >
          {(progress) => (
            <div className="content-wrap">
              {
                progress ? (
                  <Tween
                    staggerFrom={{
                      opacity: 0
                    }}
                    staggerTo={{
                      opacity: 1
                    }}
                    stagger={0.15}
                    delay={.4}
                  >
                    {
                      list.map((item, index) => (
                        <div key={index} className="challenge-item">
                          <div className="icon">
                            <Lottie
                              options={{
                                autoplay: true,
                                animationData: item.img,
                                rendererSettings: {
                                  preserveAspectRatio: 'xMidYMid slice'
                                }
                              }}
                              isPaused={progress <= (0.5 + index / 10)}
                              height={86}
                              width={86}
                            />
                          </div>
                          <div className="name">{item.name}</div>
                          <div className="tezt">{item.text}</div>
                        </div>
                      ))
                    }
                  </Tween>
                ) : null
              }
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  )
}