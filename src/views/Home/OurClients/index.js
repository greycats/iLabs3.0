import React, { useEffect } from 'react'
import CommonTitle from 'components/CommonTitle'
import GoToArrow from 'components/GoToArrow'
import './index.sass'
import { logoList, introList } from './data'
const TimelineMax = window.TimelineMax
const TweenMax = window.TweenMax
const tl = new TimelineMax()

export default () => {
  useEffect(() => {
  }, [])
  const titleData = {
    title: 'Our clients',
    intro: 'Some friends we’ve made so far along the way.'
  }
  return (
    <div className="layout-1240 panel">
      <div className="client-wrap">
        <div className="client-logos">
          <CommonTitle {...titleData}></CommonTitle>
          <div className="logo-wrap">
            {
              logoList.map((item, index) => (
                <div key={index} className="logo-item">
                  <img src={require(`assets/imgs/client-logos/${item.img || 'great-schools'}.svg`)} />
                </div>
              ))
            }
          </div>
          <GoToArrow text="See all clients"></GoToArrow>
        </div>
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
      </div>
    </div>
  )
}