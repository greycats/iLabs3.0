import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

import { LottieAnimation } from 'components/AnimationPlayer'

const StyledContainer = styled.div`
  position: relative;

  .title-tip {
    width: 230px;
    font-size: 16px;
    color: #656565;
  }
`

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

  return (
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
}