import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

import { LottieAnimation } from 'components/AnimationPlayer'
import { MobileBannerContainer } from 'components/Styled'
import MobileBannerBg from 'assets/imgs/gs/mobile/banner.json'

const StyledContainer = styled.div`
  position: relative;

  .title-tip {
    width: 230px;
    font-size: 16px;
    color: #656565;
  }
`


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
        <div className="mobile-title">GreatSchool</div>
        <p className="title-tip">Helping millions of parents get a great education for their child</p>
        <div className="list-title">SERVICES</div>
        <div className="list-wrap">
          <div>Design Direction</div>
          <div>Strategy</div>
          <div>Development</div>
        </div>
      </div>
    </div>
  </MobileBannerContainer>
)

export default () => {
  const [data, setData] = useState(null)
  const getData = async () => {
    const d = await import('assets/imgs/gs/1-hero')
    setData(d.default)
  }

  useEffect(() => {
    getData()
  }, [])

  if (!data) {
    return null
  }
  const isPC = window.isPC
  return isPC ?
    (
      <StyledContainer>
        <div style={{ position: 'absolute', height: '55vh', width: '100%', minHeight: '480px' }}>
          <LottieAnimation
            options={{
              animationData: data
            }}
          />
        </div>
      </StyledContainer>
    )
    : MobileBanner()
}
