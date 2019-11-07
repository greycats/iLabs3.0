import React from 'react'

import { Tween, Timeline } from 'react-gsap'
import styled from 'styled-components'

import { AbsolutePositionWrap, StyledSectionWitheTitle } from 'components/Styled'
import MacImage from 'assets/imgs/vizient/Mac.png'

const StyledContainer = styled.div`
  position: {
    relative;
  }

  .title-tip {
    width: 230px;
    margin-top: 4vh;
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
    margin-top: 6vh;
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
        list.map(service => <p className="service-item">{service}</p>)
      }
    </StyledList>
  )
}

export default () => {
  const ImagePosition = AbsolutePositionWrap({ right: '15vw' })
  const TitlePosition = AbsolutePositionWrap({ top: '25%', left: '21%' })

  const Mac =
    <ImagePosition>
      <img src={MacImage} alt="" style={{ width: '25vw' }} />
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
          from={{ top: '13vh' }} to={{ top: '14vh' }}
          duration={0.7}
        ></Tween>
        <Tween
          from={{ top: '14vh' }} to={{ top: '13vh' }}
          duration={0.7}
        ></Tween>
      </Timeline>
    </StyledContainer>
  )
}