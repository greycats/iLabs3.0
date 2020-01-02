import React, { useState, useEffect, useRef } from 'react'
import _ from 'lodash'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import drop from 'lodash/drop'
import dropRight from 'lodash/dropRight'
import min from 'lodash/min'
import max from 'lodash/max'
import styled from 'styled-components'
import { getImage } from 'scripts/PreloadManager.js'
import { serviceData } from 'data/services'
import { scrollTop } from 'utils/index'

import LazyLoad from 'react-lazyload'

const designLength = 5

const StyledCarousel = styled.div`
  .carousel.carousel-slider {
    overflow: unset;
  }
  .carousel .slider-wrapper {
    padding: 0 ${(max([min([window.innerWidth, 1920]), 1366]) - 525 - 699) / 2}px;
    overflow: unset;
  }
  .carousel .slider-wrapper.axis-horizontal .slider .slide {
    background: transparent;
    opacity: .1;
    transition: opacity .3s ease-in-out;
    padding: 0 10px;
  }
  .carousel .slider-wrapper.axis-horizontal .slider .slide.selected {
    opacity: 1;
    transition: opacity .5s ease-in-out .1s;
  }
  .carousel .slide {
    min-width: auto !important;
  }
`

const CarouselCardStyle = styled.div`
  background: #f5f5f5;
  width: 679px;
  .text-wrap {
    display: flex;
    align-items: flex-start;
    padding: 60px;
    text-align: left;
    .icon {
      width: 44px;
      margin-right: 68px;
    }
    .title {
      font-size: 44px;
      color: #2c2c2c;
      letter-spacing: 1.6px;
      line-height: 1.4;
      margin-bottom: 20px;
    }
    .text {
      font-size: 24px;
      letter-spacing: 1px;
      color: #2c2c2c;
      opacity: 0.6;
      line-height: 1.4
    }
  }
  img {
    display: block;
    width: 100%;
  }
`

const CarouselCard = ({
  item = {}
}) => (
    <CarouselCardStyle>
      <div className="text-wrap">
        <img src={item.blackIcon} alt="" className="icon" />
        <div>
          <div className="title">{item.text}</div>
          <div className="text">{item.detail}</div>
        </div>
      </div>
      <LazyLoad placeholder={<img src={item.placeholder} />}>
        <img src={require(`assets/imgs/2x/OurServices/${item.text}.jpg`)} />
      </LazyLoad>
    </CarouselCardStyle>
  )

const ServiceCarousel = ({
  currentIndex = 0,
  onChange
}) => {
  return (
    <Carousel
      selectedItem={currentIndex}
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      infiniteLoop={true}
      centerMode={true}
      centerSlidePercentage={100}
      transitionTime={800}
      swipeable={false}
      onClickItem={index => onChange(index)}
    >
      {
        serviceData().map((item, index) => (
          <CarouselCard item={item} key={index} />
        ))
      }
    </Carousel>
  )
}

const List = ({
  title = '',
  list = [],
  activeItem = null,
  onClickItem = () => { }
}) => {
  return (
    <div style={{ marginBottom: '25px' }}>
      <p style={{
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: '30px',
        lineHeight: 1.4
      }}>{title}</p>
      <div>
        {
          list.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  height: '44px',
                  alignItems: 'center',
                  color: '#fff',
                  fontSize: '16px',
                  lineHeight: '28px',
                  cursor: 'pointer',
                  position: 'relative',
                  opacity: _.isEqual(activeItem, item) ? 1 : 0.5
                }}
                onClick={() => {
                  onClickItem(index, item)
                }}>
                <img src={item.whiteIcon} alt="" style={{
                  marginRight: '17px',
                  marginLeft: '32px',
                  width: '32px'
                }} /> {item.text}
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: _.isEqual(activeItem, item) ? '90%' : '0',
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.16)',
                  transition: _.isEqual(activeItem, item) ? 'width .5s ease' : null,
                  borderRadius: '6px'
                }} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default () => {
  const [activeIndex, setActiveIndex] = useState(-1)
  const [activeItem, setActiveItem] = useState(null)
  // const [activeItem, setActiveItem] = useState(serviceData()[0])
  const scrollToList = useRef(null)

  const onResize = () => {
    const width = max([min([window.innerWidth, 1920]), 1366]) - 525
    const sliderWrapper = document.getElementsByClassName('slider-wrapper')
    if (sliderWrapper.length) {
      document.getElementsByClassName('carousel-wrap')[0].style.width = width + 'px'
      document.getElementsByClassName('slider-wrapper')[0].style.padding = `0 ${(width - 699) / 2}px`
    }
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  const serviceList = serviceData()
  return (
    <div style={{ background: '#262626', overflow: 'hidden', transition: 'all .3' }}>
      <div className="panel"
        style={{
          maxWidth: '1920px',
          position: 'relative',
          margin: '0 auto',
          overflow: 'hidden'
        }}
        ref={scrollToList}
      >
        <div style={{
          width: '5000px',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: '-4474px',
          background: '#2C2C2C',
          zIndex: 1
        }}></div>
        <div style={{
          display: 'flex',
          position: 'relative',
          paddingLeft: '50px'
        }}>
          <div
            style={{
              width: '408px',
              marginRight: '67px',
              zIndex: 2
            }}
          >
            <p
              style={{
                fontSize: '44px',
                lineHeight: 1,
                fontWeight: 'bold',
                color: '#fff',
                marginBottom: '27px'
              }}
            >Our services</p>
            <p style={{
              color: '#fff',
              fontSize: '24px',
              lineHeight: '1.5',
              marginBottom: '64px',
              opacity: 0.56
            }}>Our multidisciplinary team of 70+ can execute on all key areas of the product development cycle.</p>
            <List
              title='Product Design'
              activeItem={activeItem}
              onClickItem={(index, item) => {
                scrollTop(scrollToList.current.offsetTop, 200)
                setActiveIndex(index)
                setActiveItem(item)
              }}
              list={dropRight(serviceList, serviceList.length - designLength)}
            />
            <List
              title='Product Development'
              list={drop(serviceList, designLength)}
              activeItem={activeItem}
              onClickItem={(index, item) => {
                scrollTop(scrollToList.current.offsetTop, 200)
                setActiveIndex(index + designLength)
                setActiveItem(item)
              }}
            />
          </div>
          <div style={{
            width: 699 + (max([min([window.innerWidth, 1920]), 1366]) - 525 - 699),
            height: '1060px'
            // marginTop: windowWidth > 1280 ? '10%' : '25%',
            // maxWidth: windowWidth > 1280 ? '800px' : '600px'
          }}
            className="carousel-wrap"
          >
            {
              activeIndex !== -1 ?
                <StyledCarousel>
                  <ServiceCarousel currentIndex={activeIndex} onChange={index => {
                    setActiveIndex(index)
                    setActiveItem(serviceList[index])
                  }} />
                </StyledCarousel>
                :
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    width: '1266px',
                    top: 0,
                    left: 0
                  }}>
                    <LazyLoad placeholder={<img src={getImage('service-bg')} />}>
                      <img src={require('assets/imgs/2x/OurServices/service-bg.png')} />
                    </LazyLoad>
                  </div>
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
