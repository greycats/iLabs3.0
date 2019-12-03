import React from 'react'

import styled from 'styled-components'

import { StyledSectionWitheTitle, MobileBannerContainer } from 'components/Styled'

import MobileBannerBg from 'assets/imgs/crew/mobile/banner.json'
import AppleIcon from 'assets/imgs/crew/gray-apple.png'
import AndriodIcon from 'assets/imgs/crew/gray-andriod.png'
import MobileApple from 'assets/imgs/crew/mobile/apple.svg'
import MobileAndriod from 'assets/imgs/crew/mobile/andriod.svg'
import AnimationPlayer, { LottieAnimation } from 'components/AnimationPlayer'
import BgAnimation from 'assets/imgs/crew/1-Hero/data.json'

const isPC = window.isPC

const StyledContainer = styled.div`
  position: relative;

  .title-tip {
    width: 230px;
    font-size: 16px;
    color: #656565;
  }
`

const ServiceList = () => {
  const list = [
    'Mobile Development'
  ]

  const StyledList = styled.div`
    color: #656565;

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

const AvailableList = ({ AppleIcon, AndriodIcon }) => {
  const list = [
    AppleIcon,
    AndriodIcon
  ]

  const StyledList = styled.div`
    color: #656565;

    .title {
      width: 150px;
      font-size: 14px;
      margin-bottom: 20px;
    }

    .item {
      width: 30px;
      margin-right: 20px;
    }
  `

  return (
    <AnimationPlayer
      target={
        <StyledList>
          <p className="title">{'Available on'.toUpperCase()}</p>
          {
            list.map((icon, index) => <img className="item" src={icon} alt="" key={index} />)
          }
        </StyledList>
      }
      animations={
        [
          {
            from: {
              display: 'none'
            },
            to: {
              display: 'block'
            }
          }
        ]
      }
    />
  )
}

const TitlePosition = styled.div`
  position: absolute;
  left: 20%;
  top: 5%;
  height: 100%
`

const PCBanner = () => (
  <StyledContainer>
    <div style={{ position: 'absolute', height: '55vh', width: '100%', minHeight: '480px' }}>
      <LottieAnimation
        options={{
          animationData: BgAnimation
        }}
      />
      <TitlePosition>
        <StyledSectionWitheTitle>
          <p style={{ color: '#656565' }}>
            Crew
          </p>
        </StyledSectionWitheTitle>

        <p className="title-tip">
          Communicate with teams and managers on the go
        </p>
        <div style={{
          display: 'flex',
          position: 'absolute',
          bottom: '20%'
        }}>
          <div style={{ marginRight: '100px' }}>
            <ServiceList />
          </div>
          <AvailableList AppleIcon={AppleIcon} AndriodIcon={AndriodIcon} />
        </div>
      </TitlePosition>
    </div>
  </StyledContainer>
)

const MobileBanner = () => (
  <MobileBannerContainer>
    <LottieAnimation
      options={{
        animationData: MobileBannerBg,
        width: '100%'
      }}
    />
    <div className="mobile-banner-text">
      <div className="panel">
        <div className="mobile-title">Crew</div>
        <p className="title-tip">Communicate with teams and managers on the go</p>
        <div className="list-title">SERVICES</div>
        <div className="list-wrap">
          <div>Mobile Development</div>
        </div>
        <div className="list-title">Available on</div>
        <div className="imgs">
          <img className="item" src={MobileApple} alt="apple" />
          <img className="item" src={MobileAndriod} alt="andriod" />
        </div>
      </div>
    </div>
  </MobileBannerContainer>
)

export default () => {
  return isPC ? PCBanner() : MobileBanner()
}