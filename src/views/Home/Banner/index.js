import React from 'react'
import AnimationPlayer from 'components/AnimationPlayer'
import { AnimateBanner } from 'components/AnimateBanner'
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'
import GoToArrow from 'components/GoToArrow'
import history from 'history.js'
import LazyLoad from 'react-lazyload'
import logo from 'assets/imgs/logo.svg'

export const bannerList = [
  {
    title: <h1>Your Force <br />Multiplier</h1>,
    intro: 'Amplify your product development efforts, capitalize on every market opportunity or insight.',
    btn: 'Learn how',
    video: require('assets/imgs/video/dekstop/Scene 1.mp4'),
    mobileVideo: require('assets/imgs/video/mobile/Scene 1.mp4'),
    height: 423,
    mobileHeight: '2.55rem'
  },
  {
    title: <h1>Supporting the <br />startup ecosystem</h1>,
    mobileTitle: <h1>Supporting <br />the startup <br />ecosystem</h1>,
    intro: 'Launch compelling MVPs at breakneck speed. Work with designers and developers who have launched high quality apps that have been featured by Apple.',
    btn: 'I want to know more',
    video: require('assets/imgs/video/dekstop/Scene 2.mp4'),
    mobileVideo: require('assets/imgs/video/mobile/Scene 2.mp4'),
    height: 428,
    mobileHeight: '3.53rem'
  },
  {
    title: <h1>Compelling experiences that <br />deliver results</h1>,
    mobileTitle: <h1>Compelling <br />experiences that <br />deliver results</h1>,
    intro: 'Work with a team that only makes data driven decisions. Launch delightful user experiences that result in an engaged user base and hit business KPIs.',
    btn: 'I like what I hear',
    video: require('assets/imgs/video/dekstop/Scene 3.mp4'),
    mobileVideo: require('assets/imgs/video/mobile/Scene 3.mp4'),
    height: 433,
    mobileHeight: '3.53rem'
  }
]

const CarouselWrap = styled.div`
  .carousel .slide {
    text-align: left;
  }
  .carousel .control-dots {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 40px;
    padding-bottom: 40px;
    .dot {
      width: 9px;
      height: 9px;
      margin: 5px 0;
    }
  }
`

const BannerItem = ({ itemData = {} }) => {
  return (
    <div>
      <div style={{
        minHeight: '800px',
        backgroundColor: '#070608',
        position: 'relative'
      }}>
        <video
          className="banner-video"
          autoPlay
          muted
          preload="true"
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

export default () => {
  // const [activeIndex, setActiveIndex] = useState(0)

  const onSwipeChange = (index) => {
    document.getElementsByClassName('banner-video')[index + 1].play()
  }
  return (
    <div className="main intro ui-content">
      <img src={logo} className="logo-img" alt="" onClick={() => {
        history.push('/')
      }} />
      <CarouselWrap>
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