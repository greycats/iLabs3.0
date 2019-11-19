import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap'
import CommonTitle from 'components/CommonTitle'
import CountUp from 'react-countup'
import Lottie from 'react-lottie'
import './index.sass'

export default ({
  story = [],
  dataList = [],
  controllerId = 'the-story-trigger'
}) => {
  return (
    <div style={{ position: 'relative' }}>
      <div id={controllerId} />
      <div className="layout-1240 panel story-wrap">
        <div className="left-part">
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
                      height: 0
                    }}
                    to={{
                      height: '50px'
                    }}
                  >
                    <div className="title-wrap">
                      <CommonTitle title="The Story"></CommonTitle>
                    </div>
                  </Tween>
                ) : <div></div>
              )}
            </Scene>
          </Controller>
        </div>
        <div className="right-part">
          <div id="icon-trigger" style={{ position: 'absolute', top: '200px' }} />
          <Controller>
            <Scene
              triggerElement={'#' + controllerId}
              duration={500}
              reverse={false}
            >
              {(progress) => (
                <div className="text">
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
                        delay={.2}
                      >
                        {
                          story.map((item, index) => <p key={index}>{item}</p>)
                        }
                      </Tween>
                    ) : null
                  }
                </div>
              )}
            </Scene>
            <Scene
              triggerElement="#icon-trigger"
              duration={500}
              reverse={false}
            >
              {(progress) => (
                <div className="data-wrap">
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
                          dataList.map((item, index) => (
                            <div key={index} className="data-item">
                              <div className="icon">
                                <Lottie
                                  options={{
                                    autoplay: true,
                                    animationData: item.img,
                                    rendererSettings: {
                                      preserveAspectRatio: 'xMidYMid slice'
                                    }
                                  }}
                                  isPaused={progress <= (0.5 + index / 20)}
                                  height={86}
                                  width={86}
                                />
                              </div>
                              <div className="number">
                                <CountUp
                                  start={0}
                                  end={progress >= (0.5 + index / 20) ? item.number : 0}
                                  duration={1}
                                  decimals={item.decimals || 0}
                                >
                                  {({ countUpRef }) => (
                                    <div>
                                      <span ref={countUpRef} />
                                      {item.suffix}
                                    </div>
                                  )}
                                </CountUp>
                                  <p>{item.name}</p>
                              </div>
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
      </div>
    </div>
  )
}