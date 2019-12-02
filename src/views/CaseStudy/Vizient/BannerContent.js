import React from 'react'

import { Tween, Timeline } from 'react-gsap'
import styled from 'styled-components'

import { StyledSectionWitheTitle, MobileBannerContainer } from 'components/Styled'
import { getImage } from 'scripts/PreloadManager'
import MobileBannerBg from '../../../assets/imgs/vizient/mobile/banner-bg.png'

const StyledContainer = styled.div`
  position: relative;
  height: 100%;

  .title-tip {
    width: 230px;
    font-size: 16px;
    color: #fff;
  }
`

const ServiceList = () => {
  const list = [
    'Visual Design',
    'ProtoType',
    'Web Development',
    'Product Management'
  ]

  const StyledList = styled.div`
    position: absolute;
    bottom: 10%;
    left: 0;
    color: #2c2c2c;

    .service-title {
      font-size: 14px;
      margin-bottom: 20px;
    }

    .service-item {
      font-size: 16px;
    }
  `

  return (
    <StyledList>
      <p className="service-title">SERVICES</p>
      {
        list.map((service, index) => <p className="service-item" key={index}>{service}</p>)
      }
    </StyledList>
  )
}

const ImagePosition = styled.div`
  position: absolute;
  right: 16%;
  top: 5%;
  width: 38%;
`

const TitlePosition = styled.div`
  position: absolute;
  left: 7%;
  top: 5%;
  height: 100%
`


const PCBanner = () => {
  const MacImage = getImage('banner-mac-image')
  const Mac =
    <ImagePosition>
      <img src={MacImage} alt="" style={{ width: '100%' }} />
    </ImagePosition>
  return (
    <StyledContainer>
      <TitlePosition>
        <StyledSectionWitheTitle>
          Vizient
        </StyledSectionWitheTitle>

        <p className="title-tip">
          Unifying enterprise UI for under a single banner
        </p>
        <ServiceList />
      </TitlePosition>
      <Timeline
        target={Mac}
        repeat={-1}
      >
        <Tween
          from={{ top: '13%' }} to={{ top: '14%' }}
          duration={0.7}
        ></Tween>
        <Tween
          from={{ top: '14%' }} to={{ top: '13%' }}
          duration={0.7}
        ></Tween>
      </Timeline>
    </StyledContainer>
  )
}

const MobileImagePosition = styled.div`
  position: absolute;
  right: -15%;
  width: 100%;
`

const MobileBanner = () => {
  const MacImage = getImage('banner-mac-image')
  const Mac =
    <MobileImagePosition>
      <img src={MacImage} alt="" style={{ width: '100%' }} />
    </MobileImagePosition>
  return (
    <MobileBannerContainer>
      <img src={MobileBannerBg} />
      <div className="mobile-banner-text">
        <div className="panel">
          <div className="mobile-title">Vizient</div>
          <p className="title-tip">Helping millions of parents get a great education for their child</p>
          <div className="list-title">SERVICES</div>
          <div className="list-wrap">
            <div>Design Direction</div>
            <div>Strategy</div>
            <div>Development</div>
          </div>
        </div>
      </div>
      <Timeline
        target={Mac}
        repeat={-1}
      >
        <Tween
          from={{ top: '40%' }} to={{ top: '41%' }}
          duration={0.7}
        ></Tween>
        <Tween
          from={{ top: '41%' }} to={{ top: '40%' }}
          duration={0.7}
        ></Tween>
      </Timeline>
    </MobileBannerContainer>
  )
}

export default () => {
  const isPC = window.isPC
  return isPC ? PCBanner() : MobileBanner()
}