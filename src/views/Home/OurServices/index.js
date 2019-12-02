import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'

const StyledCarousel = styled.div`
  .carousel .slider-wrapper.axis-horizontal .slider .slide {
    background: transparent;
    opacity: .1;
    transition: opacity .3s ease-in-out;
  }
  .carousel .slider-wrapper {
    padding: 100px;
  }
  .carousel .slider-wrapper.axis-horizontal .slider .slide.selected {
    opacity: 1;
    transition: opacity .5s ease-in-out .3s;
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
        <img src={require("assets/imgs/home/services/Design-1.png")} />
      </div>
      <div>
        <img src={require("assets/imgs/home/services/Design-2.png")} />
      </div>
      <div>
        <img src={require("assets/imgs/home/services/Design-3.png")} />
      </div>
      <div>
        <img src={require("assets/imgs/home/services/Design-4.png")} />
      </div>
      <div>
        <img src={require("assets/imgs/home/services/Design-5.png")} />
      </div>
      <div>
        <img src={require("assets/imgs/home/services/Dev-1.png")} />
      </div>
      <div>
        <img src={require("assets/imgs/home/services/Dev-2.png")} />
      </div>
      <div>
        <img src={require("assets/imgs/home/services/Dev-3.png")} />
      </div>
      <div>
        <img src={require("assets/imgs/home/services/Dev-4.png")} />
      </div>
      <div>
        <img src={require("assets/imgs/home/services/Dev-5.png")} />
      </div>
      <div>
        <img src={require("assets/imgs/home/services/Dev-6.png")} />
      </div>
    </Carousel>
  )
}

const List = ({
  title = '',
  list = [],
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
                  height: '80px',
                  alignItems: 'center',
                  color: '#fff',
                  fontSize: '22px',
                  cursor: 'pointer'
                }} onClick={() => {
                  onClickItem(index, item)
                }}>
                <img src={item.icon} alt="" style={{
                  marginRight: '10px',
                  marginLeft: '32px',
                  width: '32px'
                }} /> {item.text}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

const designListData = [
  {
    text: 'User Research',
    icon: require('assets/imgs/home/Design/User-Research.svg')
  },
  {
    text: 'Ideation',
    icon: require('assets/imgs/home/Design/Ideation.svg')
  },
  {
    text: 'Creative Concept',
    icon: require('assets/imgs/home/Design/Creative-Concept.svg')
  },
  {
    text: 'Visual Design',
    icon: require('assets/imgs/home/Design/Visual-Design.svg')
  },
  {
    text: 'Prototype & Interation Design',
    icon: require('assets/imgs/home/Design/Prototype.svg')
  }
]

const devListData = [
  {
    text: 'Mobile Development',
    icon: require('assets/imgs/home/Dev/Mobile-Development.svg')
  },
  {
    text: 'Fullstack Web Development',
    icon: require('assets/imgs/home/Dev/Fullstack-Web-Development.svg')
  },
  {
    text: 'Analytics and Big Data Solutions',
    icon: require('assets/imgs/home/Dev/Analytics-Big-Data.svg')
  },
  {
    text: 'Support and DevOps',
    icon: require('assets/imgs/home/Dev/Support-DevOps.svg')
  },
  {
    text: 'Technology Infrastructure Support',
    icon: require('assets/imgs/home/Dev/Technology-Infrastructure.svg')
  },
  {
    text: 'IT Security',
    icon: require('assets/imgs/home/Dev/IT-Security.svg')
  },
]

export default () => {
  const [currentIndex, setCurrentIndex] = useState(0)

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
              onClickItem={(index) => {
                setCurrentIndex(index)
              }}
              list={designListData}
            />
            <br />
            <br />
            <br />
            <List
              title='Product Development'
              list={devListData}
              onClickItem={(index) => {
                setCurrentIndex(index + designListData.length)
              }}
            />
          </div>
          <div style={{ width: '65%' }}>
            <StyledCarousel>
              <ServiceCarousel currentIndex={currentIndex} />
            </StyledCarousel>
          </div>
        </div>
      </div>
    </div>
  )
}
