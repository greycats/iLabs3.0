import React from 'react'

import { AnimateBanner } from 'components/AnimateBanner'
import AnimationPlayer from 'components/AnimationPlayer'

export default () => {
  return (
    <div style={{
      minHeight: '690px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <AnimateBanner height={690}>
        <div style={{
          width: '300px',
          lineHeight: 1.3,
          margin: '60px auto 0'
        }}>
          <AnimationPlayer
            target={
              <div style={{
                height: 0,

              }}>
                <h1 className="bold" style={{
                  fontSize: '48px',
                  color: '#fff',
                }}>
                  Your Force <br />
                  Multiplier
            </h1>
                <p style={{color: '#fff', width: '280px', lineHeight: 1.6}}>
                  Welcome to Interactive Labs. We're a full stack digital consulting studio that crafts exceptional experiences across all industries.
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
      </div>
     </AnimateBanner>
    </div>
  )
}