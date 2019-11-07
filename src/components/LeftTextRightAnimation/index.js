import React from 'react'
import CommonTitle from 'components/CommonTitle'
import { SectionTitleWrap } from 'components/Styled'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap'
import { getTriggerId } from 'utils'

export default ({ id = '__trigger_scene' }) => {
  return (
    <div className="layout-1240 panel challenge-wrap" style={{ minHeight: '600px' }}>
      <div id={id}></div>
      <div className="title-part">
        <Controller>
          <Scene
            triggerElement={getTriggerId(id)}
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
                <SectionTitleWrap>
                  <div className="title-wrap">
                    <CommonTitle title='Vizient Components for the Web' titleMargin='50px' />
                  </div>
                </SectionTitleWrap>
              </Tween>
            )}
          </Scene>
        </Controller>
        <div style={{
          position: 'relative'
        }}>
          <Controller>
            <Scene
              triggerElement={getTriggerId(id)}
              duration={500}
              reverse={false}
            >
              {(progress) => (
                <Tween
                  from={{
                    // css: {
                    opacity: 0,
                    top: '15px'
                    // }
                  }}
                  to={{
                    // css: {
                    opacity: 1,
                    top: '20px'
                    // }
                  }}
                  paused
                  totalProgress={progress}
                  delay={1500}
                >
                  <div style={{
                    width: '500px',
                    position: 'absolute',
                    left: '0'
                  }}>
                    <p>
                      The Toolkit system includes the resources needed to create user interfaces consistent with the Vizient’s product principles, design language, and best practices.
                 </p>
                    <br />
                    <p>
                      Rather than focusing on pixels, developers can focus on the application logic, while designers can focus on user experiences, interactions, and flows.
                </p>
                  </div>
                </Tween>
              )}
            </Scene>
          </Controller>
        </div>
      </div>
    </div>
  )
}