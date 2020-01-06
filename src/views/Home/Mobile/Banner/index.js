import React from 'react'

import { Carousel } from 'react-responsive-carousel'
import AnimationPlayer from 'components/AnimationPlayer'
import { AnimateBanner } from 'components/AnimateBanner'
import LazyLoad from 'react-lazyload'
import GoToArrow from 'components/GoToArrow'
import { bannerList } from 'views/Home/Banner/index.js'
import history from 'history.js'
import logo from 'assets/imgs/logo.svg'


const BannerItem = ({ itemData = {} }) => {
  return (
    <div>
      <div style={{
        backgroundColor: '#070608',
        position: 'relative'
      }}>
        <video
          className="banner-video"
          autoPlay
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
        {/* <AnimationPlayer
          target={
            <div className="header-sec">
              {itemData.mobileTitle || itemData.title}
              <p>{itemData.intro}</p>
              <GoToArrow text={itemData.btn} isWhite={true} onClick={() => {
                history.push('/contact')
              }}></GoToArrow>
            </div>
          }
          animations={
            [
              {
                to: {
                  height: itemData.mobileHeight
                },
                duration: 0.8
              }
            ]
          }
        /> */}
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
  const onSwipeChange = (index) => {
    document.getElementsByClassName('banner-video')[index + 1].play()
  }
  return (
    <div className="main intro" style={{
      position: 'relative',
      minHeight: '6.9rem',
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
        <AnimateBanner height={800} />
      </div>} >
        <Carousel
          // selectedItem={activeIndex}
          showThumbs={false}
          showArrows={false}
          autoPlay
          interval={5000}
          stopOnHover={false}
          infiniteLoop
          onChange={onSwipeChange}
          showStatus={false}
          // transitionTime={800}
          swipeable={false}
        >
          {
            bannerList.map((item, index) => (
              <BannerItem itemData={item} key={index} />
            ))
          }
        </Carousel>
      </LazyLoad>
    </div>
  )
}