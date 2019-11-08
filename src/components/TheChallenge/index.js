import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap'
import CommonTitle from 'components/CommonTitle'
import Img from '../../assets/imgs/in.svg'
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
            {(progress) => (
              <Tween
                from={{
                  height: 0
                }}
                to={{
                  height: '94px'
                }}
                totalProgress={progress}
                paused
              >
                <div className="title-wrap">
                  <CommonTitle title={title} titleMargin='50px'></CommonTitle>
                </div>
              </Tween>
            )}
          </Scene>
        </Controller>
      </div>
      <Controller>
        <Scene
          triggerElement={'#' + controllerId}
          duration={500}
          reverse={false}
          offset={100}
        >
          {(progress) => (
            <Tween
              from={{
                opacity: 0
              }}
              to={{
                opacity: 1
              }}
              totalProgress={progress}
              paused
              delay={.5}
            >
              <div>
                <CommonTitle intro={intro} width={495}></CommonTitle>
              </div>
            </Tween>
          )}
        </Scene>
        <Scene
          triggerElement={'#' + controllerId}
          duration={500}
          reverse={false}
        >
          {(progress) => (
            <div className="content-wrap">
              <Tween
                staggerFrom={{
                  opacity: 0
                }}
                staggerTo={{
                  opacity: 1
                }}
                stagger={0.15}
                totalProgress={progress}
                paused
                delay={.8}
              >
                {
                  list.map((item, index) => (
                    <div key={index} className="challenge-item">
                      <div className="icon">
                        <img src={Img} />
                      </div>
                      <div className="name">{item.name}</div>
                      <div className="tezt">{item.text}</div>
                    </div>
                  ))
                }
              </Tween>
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  )
}