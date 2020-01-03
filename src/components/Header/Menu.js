import React from 'react'
import styled from 'styled-components'
import AnimateBanner from 'components/AnimateBanner/index.js'

const MenuContainer = styled.div`
  width: 100vw;
  height: 100vw;
  position: fixed;
  background: gray;
  z-index: 40;
`

export default () => {
  return (
    <MenuContainer>
      <AnimateBanner height={window.innerHeight} backgroundColor={0x323232}/>
    </MenuContainer>
  )
}