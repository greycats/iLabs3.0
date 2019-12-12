import React, { useRef } from 'react'

import AnimationPlayer from 'components/AnimationPlayer'
import BannerViewo from 'assets/imgs/video/homepage-banner-mobile.mp4'

export default () => {
  return (
    <div style={{
      position: 'relative',
      minHeight: '6.9rem',
      background: '#111'
    }}>
      <video
        src={BannerViewo}
        autoPlay
        loop
        muted
        preload="auto"
        webkit-playsinline="true"
        playsInline={true}
        x5-video-player-type="h5"
        x-webkit-airplay="true"
        style={{ width: '100%' }}
      />
      <div style={{
        height: '100%',
        position: 'absolute',
        top: 0, left: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 25px'
      }}>
        <div style={{
          width: '300px',
          lineHeight: 1.3,
          margin: '60px auto 0'
        }}>
          <AnimationPlayer
            triggerRelativePosition={{
              top: '-200px'
            }}
            target={
              <div style={{
                height: 0,
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  zIndex: 10
                }}>
                  <h1 className="bold" style={{
                    fontSize: '48px',
                    color: '#fff',
                  }}>
                    Your Force <br />
                    Multiplier
                    </h1>
                  <p style={{ color: '#fff', width: '280px', lineHeight: 1.6 }}>
                    Welcome to Interactive Labs. We're a full stack digital consulting studio that crafts exceptional experiences across all industries.
                    </p>
                </div>
              </div>
            }
            animations={
              [
                {
                  from: {
                    height: 0
                  },
                  to: {
                    height: '280px'
                  },
                  duration: 0.8
                }
              ]
            }
          />
        </div>
      </div>
    </div>
  )
}