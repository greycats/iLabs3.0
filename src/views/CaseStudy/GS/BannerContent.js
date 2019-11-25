import React from 'react'

import styled from 'styled-components'

import { LottieAnimation } from 'components/AnimationPlayer'
import BgAnimation from 'assets/imgs/gs/banner.json'

const StyledContainer = styled.div`
  position: relative;

  .title-tip {
    width: 230px;
    font-size: 16px;
    color: #656565;
  }
`

export default () => {
  return (
    <StyledContainer>
      <div style={{ position: 'absolute', height: '55vh', width: '100%', minHeight: '480px' }}>
        <LottieAnimation
          options={{
            animationData: BgAnimation
          }}
        />
      </div>
    </StyledContainer>
  )
}