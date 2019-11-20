import React from 'react'

import styled from 'styled-components'

import { StyledSectionWitheTitle } from 'components/Styled'

import useImage from 'hooks/useImage'
import AppleIcon from 'assets/imgs/crew/gray-apple.png'
import AndriodIcon from 'assets/imgs/crew/gray-andriod.png'
import { LottieAnimation } from 'components/AnimationPlayer'
import BgAnimation from 'assets/imgs/crew/1-hero.json'

const StyledContainer = styled.div`
  position: relative;
  height: 50vh;

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
  left: 20%;
  top: 5%;
  height: 100%
`

export default () => {
  const BrandImage = useImage('dcom-brand-image')

  const Mac =
    <ImagePosition>
      <img src={BrandImage} alt="" style={{ width: '100%' }} />
    </ImagePosition>

  return (
    <StyledContainer>
      <div style={{position: 'absolute', height: '50vh'}}>
      <LottieAnimation
        delay={.1}
        options={{
          animationData: BgAnimation
        }}
      />
      </div>
      <TitlePosition>
        <StyledSectionWitheTitle>
          <p style={{color: '#656565'}}>
            Crew
          </p>
        </StyledSectionWitheTitle>

        <p className="title-tip">
          Communicate with teams and managers on the go
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
      {/* <Timeline
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
      </Timeline> */}
    </StyledContainer>
  )
}