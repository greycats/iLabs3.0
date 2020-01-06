import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Lottie from 'react-lottie'

import { useAppContext, showMenuAction, menuDirectionAction, isMenuOpenAction } from 'hooks/useShareState'

const Header = ({ isFixed }) => styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: transparent;
  padding: 0 ${window.isPC ? '0px' : '0.25rem'};
  position: ${isFixed ? 'fixed' : 'unset'}
  z-index: 100;
  top: 0;
  left: 0;
  img {
    cursor: pointer;
  }

  .logo {
    margin-left: 40px;
    position: absolute;
    top: 40px;
    z-index: 10;
  }

  .menu-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    position: fixed;
    top: 0;
    right: 0;
    background: white;
    z-index: 41
  }
`

const MenuIcon = ({
}) => {
  const [isStopped, setIsStopped] = useState(true)
  const { store, dispatch } = useAppContext()
  const { menuDirection, isMenuOpen } = store
  const clickMenuIcon = () => {
    const status = !isMenuOpen
    setIsStopped(false)
    isMenuOpenAction(dispatch, status)
    setTimeout(() => {
      showMenuAction(dispatch, status)
      menuDirectionAction(dispatch, isMenuOpen ? -1 : 1)
    })
  }

  return (
    <span style={{cursor: 'pointer', position: 'absolute', right: 0}} onClick={clickMenuIcon}>
      <Lottie
        direction={menuDirection}
        isStopped={isStopped}
        options={{
          autoplay: false,
          loop: false,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          },
          animationData: require('assets/imgs/burger.json')
        }}
      />
    </span>
  )
}

export default ({ isFixed = true, link = '/', isWhite = false, showBg = false, showLogo = true }) => {
  const StyledHeader = Header({ isFixed })
  return (
    <StyledHeader>
      {
        showBg ?
          <div className="menu-container">
            <MenuIcon />
          </div> :
          <MenuIcon />
      }
    </StyledHeader>
  )
}
