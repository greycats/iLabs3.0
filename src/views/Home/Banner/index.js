import React from 'react'
import AnimationPlayer from 'components/AnimationPlayer'
import styled from 'styled-components'
import GoToArrow from 'components/GoToArrow'
import history from 'history.js'
import logo from 'assets/imgs/logo.svg'
import { getImage } from 'scripts/PreloadManager.js'

export const bannerList = [
  {
    title: <h1>Your Force <br />Multiplier</h1>,
    intro: 'Amplify your product development efforts, capitalize on every market opportunity or insight.',
    btn: 'Learn how',
    video: require('assets/imgs/video/dekstop/Scene 1.mp4'),
    poster: getImage('video-poster-1'),
    mobileVideo: require('assets/imgs/video/Mobile/Scene 1.mp4'),
    height: 423,
    mobileHeight: '2.55rem'
  },
  {
    title: <h1>Supporting the <br />startup ecosystem</h1>,
    mobileTitle: <h1>Supporting <br />the startup <br />ecosystem</h1>,
    intro: 'Launch compelling MVPs at breakneck speed. Work with designers and developers who have launched high quality apps that have been featured by Apple.',
    btn: 'I want to know more',
    video: require('assets/imgs/video/dekstop/Scene 2.mp4'),
    poster: getImage('video-poster-2'),
    mobileVideo: require('assets/imgs/video/Mobile/Scene 2.mp4'),
    height: 428,
    mobileHeight: '3.53rem'
  },
  {
    title: <h1>Compelling experiences that <br />deliver results</h1>,
    mobileTitle: <h1>Compelling <br />experiences that <br />deliver results</h1>,
    intro: 'Work with a team that only makes data driven decisions. Launch delightful user experiences that result in an engaged user base and hit business KPIs.',
    btn: 'I like what I hear',
    video: require('assets/imgs/video/dekstop/Scene 3.mp4'),
    poster: getImage('video-poster-3'),
    mobileVideo: require('assets/imgs/video/Mobile/Scene 3.mp4'),
    height: 433,
    mobileHeight: '3.53rem'
  }
]

export const CarouselWrap = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  background: #111;
  .video-wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    opacity: 0;
    transition: all .5s;
  }
  .dot-wrap {
    position: absolute;
    bottom: 40px;
    right: 40px;
    display: flex;
    flex-direction: column;
    .video-dot {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: #fff;
      opacity: .3;
      margin-bottom: 10px;
      transition: all .5s;
      cursor: pointer;
    }
  }
`

const BannerItem = ({ itemData = {} }) => {
  return (
    <div className="video-wrap">
      <div style={{
        height: '800px',
        backgroundColor: '#070608',
        position: 'relative'
      }}>
        <video
          className="banner-video"
          // autoPlay
          muted
          preload="true"
          poster={itemData.poster || ''}
        >
          <source src={itemData.video} type="video/mp4" />
        </video>
      </div>

      <div style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%',
        height: '100%'
      }}>
        <AnimationPlayer
          target={
            <div className="header-sec">
              {itemData.title}
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
                  height: itemData.height
                },
                duration: 0.8
              }
            ]
          }
        />
      </div>
    </div >
  )
}

let timer = null

export const onFade = (index) => {
  window.clearTimeout(timer)
  const videoList = document.getElementsByClassName('video-wrap') || []
  const dotList = document.getElementsByClassName('video-dot') || []
  if (videoList.length && dotList.length) {
    videoList[(index + 1) % 3].style.opacity = 0
    videoList[(index + 2) % 3].style.opacity = 0
    dotList[(index + 1) % 3].style.opacity = 0.3
    dotList[(index + 2) % 3].style.opacity = 0.3
    videoList[index].style.opacity = 1
    dotList[index].style.opacity = 1
    document.getElementsByClassName('banner-video')[index].play()
    timer = setTimeout(() => {
      onFade((index + 1) % 3)
    }, 5000)
  }
}
export const dotOnClick = index => {
  onFade(index)
}

export default () => {
  setTimeout(() => {
    onFade(0)
  })
  return (
    <div className="main intro ui-content">
      <img src={logo} className="logo-img" alt="" onClick={() => {
        history.push('/')
      }} />
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
  )
}