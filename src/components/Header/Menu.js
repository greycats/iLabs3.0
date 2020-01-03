import React from 'react'
import styled from 'styled-components'
import AnimateBanner from 'components/AnimateBanner/index.js'

import { useAppContext } from 'hooks/useShareState'

const MenuContainer = styled.div`
  width: 100vw;
  height: 0;
  position: fixed;
  background: gray;
  z-index: 40;

  overflow: hidden;
  transition: height .5s;

  &.show {
    height: 100vh;
  }

  .content {
    color: white;
    opacity: 0.5;
    transition: opacity .5s;
    background-color: transparent;
  }

  &.show .content {
    opacity: 1;
  }
`

export default () => {
  const { store } = useAppContext()
  const { showMenu } = store

  return (
    <MenuContainer className={showMenu ? 'show' : ''}>
      <AnimateBanner height={window.innerHeight} backgroundColor={0x323232} >
        <div
          className="content"
          style={{
            display: 'flex',
            height: '100vh',
          }}>
          <div
            style={{
              width: '50%',
            }}>
              aa
          </div>
          <div
            style={{
              width: '50%',
            }}>
            bb
            </div>
        </div>
      </AnimateBanner>
    </MenuContainer>
  )
}