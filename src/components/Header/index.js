import React from 'react'
import styled from 'styled-components'
import logo from 'assets/imgs/logo-black.svg'
import menu from 'assets/imgs/menu-black.svg'
import history from 'history.js'

const isPC = window.isPC

const Header = ({ isFixed }) => styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0 ${isPC ? '40px' : '0.25rem'};
  position: ${isFixed ? 'fixed' : 'unset'}
  z-index: 100;
  top: 0;
  img {
    cursor: pointer;
  }
`

export default ({ isFixed = true, link = '/' }) => {
  const StyledHeader = Header({ isFixed })
  return (
    <StyledHeader>
      <img src={logo} alt="logo" onClick={() => {
        history.push(link)
      }} />
      <img src={menu} alt="menu" />
    </StyledHeader>
  )
}
