import React from 'react'

import AnimationPlayer from 'components/AnimationPlayer'
import { AnimateBanner } from 'components/AnimateBanner'
// import BannerVideo from 'assets/imgs/video/homepage-banner.mp4'
import history from 'history.js'
import logo from 'logo.svg'
import LazyLoad from 'react-lazyload'

export default () => {
  // const placeholder = () => {
  //   return (
  //     <video autoPlay muted loop preload="auto">
  //       <source src={BannerVideo} type="video/mp4" />
  //     </video>
  //   )
  // }

  return (
    <div className="main intro ui-content">
      {/* <div style={{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}>
        <AnimateBanner height={680} />
      </div> */}
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
            <source src={require('assets/imgs/2x/1 Hero/Hero-animation-1920x1080.mp4')} type="video/mp4" />
          </video>
          <div style={{
            position: 'absolute',
            left: '-4300px',
            bottom: 0,
            height: '80px',
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
        <img src={logo} className="logo-img" alt="" onClick={() => {
          history.push('/')
        }} />
        <AnimationPlayer
          target={
            <div className="header-sec layout-1240 panel">
              <h1 className="bold">
                Your Force <br /> Multiplier
            </h1>
              <p>
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
        {/* <div style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          height: '80px',
          width: '58%',
          backgroundColor: '#fff'
        }}></div> */}
      </div>
    </div>
  )
}