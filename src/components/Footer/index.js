import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap'
import GoToArrow from '../GoToArrow'
import Img from '../../assets/imgs/icons/footer-icons.svg'
import './index.sass'

const isPC = window.isPC

export default ({
  controllerId = 'footer-trigger'
}) => {
  return (
    <div className="footer-wrap">
      <div id={controllerId} style={{ position: 'absolute', top: 300 - (window.innerHeight / 2.5) }}></div>
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
                    <GoToArrow text="contact us" isWhite={true}></GoToArrow>
                  </div>
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
                          <img src={Img} />
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
                          <img src={Img} />
                        </div>
                    }
                    <div className="list-title">Copyright © 2019 interactivelabs.co</div>
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