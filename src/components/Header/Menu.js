import React from 'react'
import styled from 'styled-components'
import AnimateBanner from 'components/AnimateBanner/index.js'
import history from 'history.js'
import 'components/Footer/index.sass'
import logo from 'assets/imgs/logo.svg'

import { useAppContext, showMenuAction } from 'hooks/useShareState'

import IconIn from 'assets/imgs/icons/in.svg'
import IconDribbble from 'assets/imgs/icons/dribbble.svg'

const MenuContainer = styled.div`
  width: 100vw;
  height: 0;
  position: fixed;
  background-color: #323232;
  z-index: 40;

  overflow: hidden;
  transition: height .5s;

  &.show {
    height: 100vh;
  }

  .logo-img {
    cursor: default;
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

  .footer-wrap {
    background-color: transparent;
    padding: 0;
  }

  .footer-wrap .footer {
    height: 100%;
    width: 60%;
    min-width: 600px;
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

const MenuList = ({ data, onItemClick }) => {
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

const Contact = () => {
  return (
    <div className="footer-wrap">
      <div className="footer">
        <div className="footer-list">
          <div>
            <div className="list-title">Contact</div>
            <ul>
              <li>hello@interactivelabs.co</li>
              <li>415 869-8842</li>
            </ul>
          </div>
          {
            isPC ?
              <div className="icon-list">
                <a href="https://www.linkedin.com/company/interactive-labs-inc/about" target="_blank"><img src={IconIn} /></a>
                <a href="https://dribbble.com/InteractiveLabs" target="_blank"><img src={IconDribbble} /></a>
              </div>
              : null
          }
        </div>
        <div className="footer-list">
          <div>
            <div className="list-title">Visit</div>
            <ul>
              <li>Interactive Labs, Inc</li>
              <li>845 Market Street Level 4</li>
              <li>San Francisco, CA 94108</li>
            </ul>
          </div>
          {
            isPC ? null :
              <div className="icon-list">
                <a href="https://www.linkedin.com/company/interactive-labs-inc/about" target="_blank"><img src={IconIn} /></a>
                <a href="https://dribbble.com/InteractiveLabs" target="_blank"><img src={IconDribbble} /></a>
              </div>
          }
          <div className="list-title">Copyright © 2019 interactivelabs.co</div>
        </div>
      </div>
    </div>
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
          {
            showMenu ?
              <img src={logo} className="logo-img" alt="" onClick={() => {
                // history.push('/')
              }} /> : null
          }
          <div
            style={{
              width: '40%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start'
            }}>
            <MenuList data={menuData} onItemClick={() => {
              showMenuAction(dispatch, false)
            }} />
          </div>
          <div
            style={{
              width: '60%',
            }}>
            <Contact />
          </div>
        </div>
      </AnimateBanner>
      }
    </MenuContainer>
  )
}