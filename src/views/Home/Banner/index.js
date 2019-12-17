import React from 'react'

import AnimationPlayer from 'components/AnimationPlayer'
import BannerVideo from 'assets/imgs/video/homepage-banner.mp4'
import history from 'history.js'
import logo from 'logo.svg'
import LazyLoad from 'react-lazyload'

export default () => {
  const placeholder =
        <video autoPlay muted loop preload="auto">
          <source src={BannerVideo} type="video/mp4" />
        </video>

  return (
    <div className="main intro ui-content">
      <LazyLoad placeholder={placeholder} once={true} height='100%'>
        <video autoPlay muted loop>
          <source src={require('assets/imgs/2x/1 Hero/Hero-animation-1920x1080.mp4')} type="video/mp4" />
        </video>
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
        <div style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          height: '80px',
          width: '58%',
          backgroundColor: '#fff'
        }}></div>
      </div>
    </div>
  )
}