import React from 'react'

import { AnimateBanner } from 'components/AnimateBanner'
import AnimationPlayer from 'components/AnimationPlayer'

export default () => {
  return (
    <div className="main intro ui-content">
      <AnimateBanner>
        <AnimationPlayer
          target={
            <div className="header-sec layout-1240 panel">
              <h1 className="bold">
                Experiences <br />
                Matters.
            </h1>
              <p style={{ width: '360px' }}>
                Welcome to Interactive Labs. We're a full stack digital consulting studio that crafts exceptional experiences
                across all industries.
            </p>
            </div>
          }
          animations={
            [
              {
                to: {
                  height: '280px'
                },
                duration: 0.8
              }
            ]
          }
        />
        <div style={{
          position: 'absolute',
          left: 0,
          top: '720px',
          height: '80px',
          width: '58%',
          backgroundColor: '#fff'
        }}></div>
      </AnimateBanner>
    </div>
  )
}