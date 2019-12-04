import React from 'react'
import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

const CarouselWrap = styled.div`
  .carousel {
    .slide {
      background: transparent;
      .slide-item {
        display: flex;
        justify-content: center;
      }
    }

    .control-dots {
      bottom: -0.4rem;
      margin: 0;
      .dot {
        width: 13px;
        height: 13px;
        background: #000;
        box-shadow: none;
      }
    }
  }

  .carousel.carousel-slider {
    overflow: unset
  }

  .carousel .slider-wrapper {
    overflow: unset
  }

`

export default ({
  list = [
    <div key={1} style={{ width: '80vw', height: '3rem', background: '#aaa' }}></div>,
    <div key={2} style={{ width: '80vw', height: '3rem', background: '#aaa' }}></div>
  ],
  centerSlidePercentage = 100
}) => {
  console.log(list)
  return (
    <CarouselWrap>
      <Carousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        centerSlidePercentage={centerSlidePercentage}
        transitionTime={500}
        centerMode
        emulateTouch
      >
        {
          list.map((item, index) => <div className="slide-item" key={'slide' + index}>{item}</div>)
        }
      </Carousel>
    </CarouselWrap>
  )
}