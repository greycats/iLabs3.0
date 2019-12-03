import React, { Fragment } from 'react'
import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

const CarouselWrap = styled.div`
  .carousel {
    .slide {
      background: transparent;
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
  ]
}) => {
  console.log(list)
  return (
    <CarouselWrap>
      <Carousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
        centerSlidePercentage={90}
        transitionTime={500}
        centerMode
        emulateTouch
      >
        {list}
      </Carousel>
    </CarouselWrap>
  )
}