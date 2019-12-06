import React from 'react'
import styled from 'styled-components'
import logo from 'logo-black.svg';
import history from 'history.js'

const Header = ({ isFixed }) => styled.div`
  height: 60px;
  display: flex;
  margin-left: 30px;
  position: ${isFixed ? 'fixed' : 'unset'}
  z-index: 100;
  top: 0;
`

export default ({ isFixed = true, link = '/' }) => {
  const StyledHeader = Header({ isFixed })
  return (
    <StyledHeader>
      <img src={logo} alt="" style={{ cursor: 'pointer' }} onClick={() => {
        history.push(link)
      }} />
    </StyledHeader>
  )
}
