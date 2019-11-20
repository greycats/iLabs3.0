import React from 'react'

import styled from 'styled-components'

import { StyledSectionWitheTitle } from 'components/Styled'

import AppleIcon from 'assets/imgs/crew/gray-apple.png'
import AndriodIcon from 'assets/imgs/crew/gray-andriod.png'
import AnimationPlayer, { LottieAnimation } from 'components/AnimationPlayer'
import BgAnimation from 'assets/imgs/crew/1-hero.json'

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

export default () => {
  return (
    <StyledContainer>
      <div style={{ position: 'absolute', height: '55vh', width: '100%' }}>
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
}