import React from 'react'
import styled from 'styled-components'
import logo from 'logo-black.svg';

const Header = styled.div`
  height: 60px;
  display: flex;
  margin-left: 30px;
`

export default () => {
  return (
    <Header>
      <img src={logo} alt=""/>
    </Header>
  )
}
