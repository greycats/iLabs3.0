import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import whiteLogo from 'assets/imgs/logo.svg'
import logo from 'assets/imgs/logo-black.svg'
import history from 'history.js'
import Lottie from 'react-lottie'

const Header = ({ isFixed }) => styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0 ${window.isPC ? '40px' : '0.25rem'};
  position: ${isFixed ? 'fixed' : 'unset'}
  z-index: 100;
  top: 0;
  img {
    cursor: pointer;
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
  const clickMenuIcon = () => {
    setDirection(isOpen ? -1 : 1)
    setIsStopped(false)
    setIsOpen(!isOpen)
  }

  return (
    <span style={{cursor: 'pointer'}} onClick={clickMenuIcon}>
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

export default ({ isFixed = true, link = '/', isWhite = false, showBg = false }) => {
  const StyledHeader = Header({ isFixed })

  return (
    <StyledHeader>
      <img className="logo" src={isWhite ? whiteLogo : logo} alt="logo" onClick={() => {
        history.push(link)
      }} />

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
