import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap'
import CommonTitle from 'components/CommonTitle'
import CountUp from 'react-countup'
import Img from '../../assets/imgs/in.svg'
import './index.sass'

export default ({
  story = [],
  dataList = [],
  controllerId = 'the-story-trigger'
}) => {
  return (
    <div>
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
              triggerElement={'#' + controllerId}
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
                                <img src={Img} />
                              </div>
                              <div className="number">
                                <CountUp
                                  start={0}
                                  end={progress >= (0.5 + index / 10) ? item.number : 0}
                                  duration={1}
                                  suffix={item.suffix}
                                  delay={1000}
                                >
                                  {({ countUpRef }) => (
                                    <div>
                                      <span ref={countUpRef} />
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