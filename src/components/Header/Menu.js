import React from 'react'
import styled from 'styled-components'
import AnimateBanner from 'components/AnimateBanner/index.js'
import history from 'history.js'

import { useAppContext, showMenuAction } from 'hooks/useShareState'

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
    opacity: 0;
    transition: opacity .5s linear .3s;
    background-color: transparent;
  }

  &.show .content {
    opacity: 1;
  }
`

const menuData = [
  {
    name: 'HOME',
    link: '/'
  },
  {
    name: 'OUR WORK',
    link: '/ourwork'
  },
  {
    name: 'CONTACT',
    link: '/contact'
  }
]

const MenuList = ({data, onItemClick}) => {
  return (
    data.map(item => {
      return (
        <div style={{
          fontSize: '64px',
          height: '80px',
          marginBottom: '50px'
        }}>
          <span style={{
            cursor: 'pointer'
          }} onClick={() => {
            onItemClick()
            setTimeout(() => {
              history.push(item.link)
            }, 50)
          }}>
            {item.name}
          </span>
        </div>
      )
    })
  )
}

export default () => {
  const { store, dispatch } = useAppContext()
  const { showMenu } = store

  return (
    <MenuContainer className={showMenu ? 'show' : ''}>
      <AnimateBanner height={window.innerHeight} backgroundColor={0x323232} >
        <div
          className="content"
          style={{
            display: 'flex',
            height: '100vh',
            width: '80%',
            margin: '0 auto',
            paddingTop: '20vh'
          }}>
          <div
            style={{
              width: '40%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              paddingLeft: '100px'
            }}>
              <MenuList data={menuData} onItemClick={() => {
                showMenuAction(dispatch, false)
              }}/>
          </div>
          <div
            style={{
              width: '60%',
            }}>
            bb
            </div>
        </div>
      </AnimateBanner>
    </MenuContainer>
  )
}