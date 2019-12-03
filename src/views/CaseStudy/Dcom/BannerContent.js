import React from 'react'

import { Tween, Timeline } from 'react-gsap'
import styled from 'styled-components'

import { StyledSectionWitheTitle, MobileBannerContainer } from 'components/Styled'
import { LottieAnimation } from 'components/AnimationPlayer'

import useImage from 'hooks/useImage'
import AppleIcon from 'assets/imgs/dcom/appleicon.png'
import AndriodIcon from 'assets/imgs/dcom/andriodicon.png'
import MobileBannerBg from 'assets/imgs/dcom/mobile/banner.json'

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
    'UX/UI Design',
    'ProtoType',
    'User Testing',
    'Mobile Development'
  ]

  const StyledList = styled.div`
    color: #fff;

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
    color: #fff;

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
    <StyledList>
      <p className="title">{'Available on'.toUpperCase()}</p>
      {
        list.map((icon, index) => <img className="item" src={icon} alt="" key={index} />)
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
  const BrandImage = useImage('dcom-brand-image')

  const Mac =
    <ImagePosition>
      <img src={BrandImage} alt="" style={{ width: '100%' }} />
    </ImagePosition>

  return (
    <StyledContainer>
      <TitlePosition>
        <StyledSectionWitheTitle>
          Dictionary.com
        </StyledSectionWitheTitle>

        <p className="title-tip">
          How we helped Dictionary.com increase visit frequency by 10%
        </p>
        <div style={{
          display: 'flex',
          position: 'absolute',
          top: '60%'
        }}>
          <div style={{ marginRight: '100px' }}>
            <ServiceList />
          </div>
          <AvailableList AppleIcon={AppleIcon} AndriodIcon={AndriodIcon} />
        </div>
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
        <div className="mobile-title">Dictionary.com</div>
        <p className="title-tip">How we helped Dictionary.com increase visit frequency by 10%</p>
        <div className="list-title">SERVICES</div>
        <div className="list-wrap">
          <div>UX/UI Design</div>
          <div>Prototype</div>
          <div>User Testing</div>
          <div>Mobile Development</div>
        </div>
        <div className="list-title">Available on</div>
        <div className="imgs">
          <img className="item" src={AppleIcon} alt="apple" />
          <img className="item" src={AndriodIcon} alt="andriod" />
        </div>
      </div>
    </div>
  </MobileBannerContainer>
)

export default () => {
  return isPC ? PCBanner() : MobileBanner()
}