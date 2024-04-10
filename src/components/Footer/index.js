import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap'
import GoToArrow from '../GoToArrow'
import IconIn from 'assets/imgs/icons/in.svg'
import IconDribbble from 'assets/imgs/icons/dribbble.svg'
import './index.sass'
import history from 'history.js'


export default ({
  controllerId = 'footer-trigger'
}) => {
  const isPC = window.isPC
  return (
    <div className="footer-wrap">
      <div id={controllerId} style={{ position: 'absolute', top: isPC ? (300 - (window.innerHeight / 2.5)) : -(window.innerHeight / 2) }}></div>
      <Controller>
        <Scene
          triggerElement={'#' + controllerId}
          duration={400}
          reverse={false}
        >
          {(progress) => (
            progress ? (
              <Tween
                from={{
                  opacity: 0,
                  top: '-50px'
                }}
                to={{
                  opacity: 1,
                  top: 0
                }}
              >
                <div className="layout-1240 footer">
                  <div>
                    <div className="footer-title">We would love to work with you.</div>
                    {
                      window.location.pathname.indexOf('/contact') === -1 ?
                        <GoToArrow text="Send message" isWhite={true} onClick={() => {
                          history.push('/contact')
                        }}></GoToArrow> : null
                    }
                  </div>
                  <div className="footer-list">
                    <div>
                      <div className="list-title">Contact</div>
                      <ul>
                        <li><a href="mailto:hello@interactivelabs.com">hello@interactivelabs.com</a></li>
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
                    <div className="list-title">Copyright © {new Date().getFullYear()}, Interactive Labs, Inc.</div>
                  </div>
                </div>
              </Tween>
            ) : <div></div>
          )}
        </Scene>
      </Controller >
    </div>
  )
}