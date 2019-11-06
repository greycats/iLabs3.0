import React from 'react'
import CommonTitle from 'components/CommonTitle'
import { SectionTitleWrap } from 'components/Styled'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap'
import { getTriggerId } from 'utils'

export default ({ id = '__trigger_scene' }) => {
  return (
    <div className="layout-1240 panel challenge-wrap">
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
                    <CommonTitle title='Vizient Components for the Web' titleMargin='50px'></CommonTitle>
                  </div>
                </SectionTitleWrap>
              </Tween>
            )}
          </Scene>
        </Controller>
      </div>
    </div>
  )
}