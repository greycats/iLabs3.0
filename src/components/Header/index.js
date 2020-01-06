import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Lottie from 'react-lottie'

import { useAppContext, showMenuAction } from 'hooks/useShareState'

const Header = ({ isFixed }) => styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
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
  const [direction, setDirection] = useState(1)
  const [isStopped, setIsStopped] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const { dispatch } = useAppContext()
  const clickMenuIcon = () => {
    const status = !isOpen
    setDirection(isOpen ? -1 : 1)
    setIsStopped(false)
    setIsOpen(status)
    setTimeout(() => {
      showMenuAction(dispatch, status)
    }, isOpen ? 500 : 200)
  }

  return (
    <span style={{cursor: 'pointer', position: 'absolute', right: 0}} onClick={clickMenuIcon}>
      <Lottie
        direction={direction}
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
