import React from 'react'

import AnimationPlayer from 'components/AnimationPlayer'
import { AnimateBanner } from 'components/AnimateBanner'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import GoToArrow from 'components/GoToArrow'
import { bannerList, CarouselWrap, onFade, dotOnClick } from '../../Banner'
import history from 'history.js'
import logo from 'assets/imgs/logo.svg'

export const MobileCarouselWrap = styled.div`
  &>div {
    height: 100vh;
    .dot-wrap {
      left: 0;
      right: 0;
      bottom: 25px;
      flex-direction: unset;
      justify-content: center;
      .video-dot {
        margin: 0 5px;
      }
    }
  }
`
const BannerItem = ({ itemData = {} }) => {
  return (
    <div className="video-wrap">
      <div style={{
        backgroundColor: '#070608',
        position: 'relative',
        height: '100%'
      }}>
        <video
          className="banner-video"
          // autoPlay
          muted
          preload="true"
          webkit-playsinline="true"
          playsInline={true}
          x5-video-player-type="h5"
          x-webkit-airplay="true"
        >
          <source src={itemData.mobileVideo} type="video/mp4" />
        </video>
      </div>

      <div style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%',
        height: '100%'
      }}>
        <div className="header-sec">
          {itemData.mobileTitle || itemData.title}
          <p>{itemData.intro}</p>
          <GoToArrow text={itemData.btn} isWhite={true} onClick={() => {
            history.push('/contact')
          }}></GoToArrow>
        </div>
      </div>
    </div >
  )
}

export default () => {
  setTimeout(() => {
    onFade(0)
  })
  return (
    <div className="main intro" style={{
      position: 'relative',
      minHeight: '100vh',
      background: '#111'
    }}>
      <img src={logo} className="logo-img" alt="" onClick={() => {
        history.push('/')
      }} />
      <LazyLoad placeholder={<div style={{
        position: 'absolute',
        top: 0,
        width: '100%',
        minHeight: '800px',
        zIndex: 0
      }}
      >
        <AnimateBanner height={'100vh'} />
      </div>} >
        <MobileCarouselWrap>
          <CarouselWrap>
            {
              bannerList.map((item, index) => (
                <BannerItem itemData={item} key={index} />
              ))
            }
            <div className="dot-wrap">
              <span className="video-dot" onClick={() => dotOnClick(0)}></span>
              <span className="video-dot" onClick={() => dotOnClick(1)}></span>
              <span className="video-dot" onClick={() => dotOnClick(2)}></span>
            </div>
          </CarouselWrap>
        </MobileCarouselWrap>
      </LazyLoad>
    </div>
  )
}