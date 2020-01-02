import React from 'react'
import AnimationPlayer from 'components/AnimationPlayer'
import CommonTitle from 'components/CommonTitle'
import './index.sass'
import { logoList } from './data'
import { getImage } from 'scripts/PreloadManager'

export default () => {
  const titleData = {
    title: 'Our clients',
    intro: 'Some friends we’ve made so far along the way.'
  }
  return (
    <div className="layout-1240 panel">
      <div className="client-wrap">
        <AnimationPlayer
          target={
            <div className="client-logos">
              <CommonTitle {...titleData}></CommonTitle>
              <div className="logo-wrap">
                {
                  logoList.map((item, index) => {
                    console.log('getImage(`client-${item.img}`)', getImage(`client-${item.img}`))
                    return (
                      <div key={index} className="logo-item">
                        <img src={getImage(`client-${item.img}`)} />
                      </div>
                    )}
                  )
                }
              </div>
              <div className="more">+50 more</div>
            </div>
          }
          animations={[
            {
              from: {
                opacity: 0
              },
              to: {
                opacity: 1
              }
            }
          ]}
        />

        {/* <AnimationPlayer
          target={
            <div className="client-intro">
              {
                introList.map((item, index) => (
                  <div key={index} className="client-item">
                    <div className="text">{item.text}</div>
                    <div className="name">{item.name}</div>
                    <div className="info">{item.info}</div>
                    <img src={item.logo} />
                  </div>
                ))
              }
            </div>
          }
          animations={[
            {
              from: {
                opacity: 0
              },
              to: {
                opacity: 1
              }
            }
          ]}
          delay={.5}
        /> */}
      </div>
    </div>
  )
}