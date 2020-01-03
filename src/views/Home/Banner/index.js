import React from 'react'

import AnimationPlayer from 'components/AnimationPlayer'
import { AnimateBanner } from 'components/AnimateBanner'
import LazyLoad from 'react-lazyload'
import Header from 'components/Header'

export default () => {
  return (
    <div className="main intro ui-content">
      <LazyLoad placeholder={<div style={{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '680px',
        zIndex: 0
      }}
      >
        <AnimateBanner height={680} />
      </div>} >
        <div style={{
          height: '680px',
          backgroundColor: '#070608',
          position: 'relative'
        }}>
          <video autoPlay muted loop style={{ width: '100%', height: '680px' }}>
            <source src={require('assets/imgs/2x/Hero/Hero-animation-1920x1080.mp4')} type="video/mp4" />
          </video>
          <div style={{
            position: 'absolute',
            left: '-4300px',
            bottom: 0,
            height: '100px',
            width: '5000px',
            backgroundColor: 'white',
            zIndex: 10
          }}></div>
        </div>
      </LazyLoad>

      <div style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%',
        height: '100%'
      }}>
        <Header isWhite={true} isFixed={false} showBg={true}/>
        <AnimationPlayer
          target={
            <div className="header-sec layout-1240 panel">
              <h1 className="bold">
                Your Force <br /> Multiplier
            </h1>
              <p>
                Amplify your product development efforts, capitalize on every market opportunity or insight.
            </p>
            </div>
          }
          animations={
            [
              {
                to: {
                  height: '320px'
                },
                duration: 0.8
              }
            ]
          }
        />
      </div>
    </div>
  )
}