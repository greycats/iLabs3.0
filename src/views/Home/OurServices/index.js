import React, { useState, useEffect, useRef } from 'react'
import _ from 'lodash'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'
import { getImage } from 'scripts/PreloadManager.js'
import { designListData, devListData } from 'data/services'
import { scrollTop } from 'utils/index'

import LazyLoad from 'react-lazyload'

const StyledCarousel = styled.div`
  .carousel .slider-wrapper {
    padding: 100px;
  }
  .carousel .slider-wrapper.axis-horizontal .slider .slide {
    background: transparent;
    opacity: .1;
    transition: opacity .3s ease-in-out;
  }
  .carousel .slider-wrapper.axis-horizontal .slider .slide.selected {
    opacity: 1;
    transition: opacity .5s ease-in-out .1s;
  }
  .carousel .slide img {
    padding: 10px;
  }
`

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
      <div>
        <LazyLoad placeholder={<img src={getImage('service-design-1')} once={true} />}>
          <img src={require('assets/imgs/2x/OurServices/Design-1.jpg')} />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad placeholder={<img src={getImage('service-design-2')} once={true} />}>
          <img src={require('assets/imgs/2x/OurServices/Design-2.jpg')} />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad placeholder={<img src={getImage('service-design-3')} once={true} />}>
          <img src={require('assets/imgs/2x/OurServices/Design-3.jpg')} />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad placeholder={<img src={getImage('service-design-4')} once={true} />}>
          <img src={require('assets/imgs/2x/OurServices/Design-4.jpg')} />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad placeholder={<img src={getImage('service-design-5')} once={true} />}>
          <img src={require('assets/imgs/2x/OurServices/Design-5.jpg')} />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad placeholder={<img src={getImage('service-dev-1')} once={true} />}>
          <img src={require('assets/imgs/2x/OurServices/Dev-1.jpg')} />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad placeholder={<img src={getImage('service-dev-2')} once={true} />}>
          <img src={require('assets/imgs/2x/OurServices/Dev-2.jpg')} />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad placeholder={<img src={getImage('service-dev-3')} once={true} />}>
          <img src={require('assets/imgs/2x/OurServices/Dev-3.jpg')} />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad placeholder={<img src={getImage('service-dev-4')} once={true} />}>
          <img src={require('assets/imgs/2x/OurServices/Dev-4.jpg')} />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad placeholder={<img src={getImage('service-dev-5')} once={true} />}>
          <img src={require('assets/imgs/2x/OurServices/Dev-5.jpg')} />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad placeholder={<img src={getImage('service-dev-6')} once={true} />}>
          <img src={require('assets/imgs/2x/OurServices/Dev-6.jpg')} />
        </LazyLoad>
      </div>
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
    <div>
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
                  position: 'relative'
                }} onClick={() => {
                  onClickItem(index, item)
                }}>
                <img src={item.icon} alt="" style={{
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
  // const [activeItem, setActiveItem] = useState(designListData()[0])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const scrollToList = useRef(null)

  const onResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div style={{ background: '#2c2c2c', overflow: 'hidden' }}>
      <div className="layout-1240 panel challenge-wrap">
        <div style={{
          display: 'flex'
        }}>
          <div style={{ width: '408px', marginRight: '67px' }}>
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
                scrollTop(scrollToList.current.offsetTop + 100, 200)
                setActiveIndex(index)
                setActiveItem(item)
              }}
              list={designListData()}
            />
            <br />
            <br />
            <br />
            <List
              title='Product Development'
              list={devListData()}
              activeItem={activeItem}
              onClickItem={(index, item) => {
                scrollTop(scrollToList.current.offsetTop + 100, 200)
                setActiveIndex(index + designListData().length)
                setActiveItem(item)
              }}
            />
          </div>
          <div style={{
            // width: '65%',
            flex: 1,
            // marginTop: windowWidth > 1280 ? '10%' : '25%',
            // maxWidth: windowWidth > 1280 ? '800px' : '600px'
          }}
            ref={scrollToList}
          >
            {
              activeIndex !== -1 ?
                <StyledCarousel>
                  <ServiceCarousel currentIndex={activeIndex} onChange={index => {
                    setActiveIndex(index)
                    if (index < designListData().length) {
                      setActiveItem(designListData()[index])
                    } else {
                      setActiveItem(devListData()[index - designListData().length])
                    }
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
                    <LazyLoad placeholder={<img src={getImage('service-bg')} once={true} />}>
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
