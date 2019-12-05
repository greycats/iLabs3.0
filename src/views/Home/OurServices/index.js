import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'
import { getImage } from 'scripts/PreloadManager.js'
import { designListData, devListData } from 'data/services'

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
  currentIndex = 0
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
    >
      <div>
        <img src={getImage('service-design-1')} />
      </div>
      <div>
        <img src={getImage('service-design-2')} />
      </div>
      <div>
        <img src={getImage('service-design-3')} />
      </div>
      <div>
        <img src={getImage('service-design-4')} />
      </div>
      <div>
        <img src={getImage('service-design-5')} />
      </div>
      <div>
        <img src={getImage('service-dev-1')} />
      </div>
      <div>
        <img src={getImage('service-dev-2')} />
      </div>
      <div>
        <img src={getImage('service-dev-3')} />
      </div>
      <div>
        <img src={getImage('service-dev-4')} />
      </div>
      <div>
        <img src={getImage('service-dev-5')} />
      </div>
      <div>
        <img src={getImage('service-dev-6')} />
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
        marginBottom: '30px'
      }}>{title}</p>
      <div>
        {
          list.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  height: '60px',
                  alignItems: 'center',
                  color: '#fff',
                  fontSize: '22px',
                  cursor: 'pointer',
                  position: 'relative'
                }} onClick={() => {
                  onClickItem(index, item)
                }}>
                <img src={item.icon} alt="" style={{
                  marginRight: '10px',
                  marginLeft: '32px',
                  width: '32px'
                }} /> {item.text}
                <div style={{
                  position: 'absolute',
                  width: _.isEqual(activeItem, item) ? '90%' : '0',
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.16)',
                  transition: _.isEqual(activeItem, item) ? 'width .5s ease' : null
                }}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default () => {
  const [activeIndex, setActiveIndex] = useState(0)
  // const [activeItem, setActiveItem] = useState(null)
  const [activeItem, setActiveItem] = useState(designListData[0])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const onResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div style={{background: '#2c2c2c'}}>
      <div className="layout-1240 panel challenge-wrap">
        <div style={{
          display: 'flex'
        }}>
          <div style={{ width: '35%',  minWidth: '650px' }}>
            <p style={{ fontSize: '44px', fontWeight: 'bold', color: '#fff', marginBottom: '40px' }}>Our services</p>
            <p style={{
              color: '#fff',
              fontSize: '24px',
              width: '490px',
              lineHeight: '1.8',
              marginBottom: '100px'
            }}>We offer a wide variety of services that cover the gamut of full stack development.</p>
            <List
              title='Product Design'
              activeItem={activeItem}
              onClickItem={(index, item) => {
                setActiveIndex(index)
                setActiveItem(item)
              }}
              list={designListData}
            />
            <br />
            <br />
            <br />
            <List
              title='Product Development'
              list={devListData}
              activeItem={activeItem}
              onClickItem={(index, item) => {
                setActiveIndex(index + designListData.length)
                setActiveItem(item)
              }}
            />
          </div>
          <div style={{
              width: '65%',
              marginTop: windowWidth > 1280 ? '10%' : '25%',
              position: 'absolute',
              left: '50%',
              maxWidth: windowWidth > 1280 ? '800px' : '600px'
            }}>
            <StyledCarousel>
              <ServiceCarousel currentIndex={activeIndex} />
            </StyledCarousel>
          </div>
        </div>
      </div>
    </div>
  )
}
