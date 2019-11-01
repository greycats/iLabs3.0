import React, { useEffect, Fragment } from 'react'
import logo from 'logo.svg'
import PreloadManager from 'scripts/PreloadManager'
import { Power0 } from 'gsap'
import GoToArrow from '../GoToArrow'
import './index.sass'
import LogoImg from '../../assets/imgs/logos/great-schools.svg'
import InImg from '../../assets/imgs/in.svg'
const TimelineMax = window.TimelineMax
const TweenMax = window.TweenMax
const tl = new TimelineMax()

export default () => {
  useEffect(() => {
  }, [])
  const logoList = new Array(12).fill(0)
  const introList = [
    {
      name: 'Cordelia Freeman',
      info: 'Head of Marketing, Cision',
      text: '“Never get involved in the office pity party, or complaint sessions that come your way.  Seek out people that support you and that you feel good being around.”',
      logo: InImg
    },
    {
      name: 'Cordelia Freeman',
      info: 'Head of Marketing, Cision',
      text: '“Feeding the baby often during these hours will ensure an abundant supply of milk.”',
      logo: InImg
    },
    {
      name: 'Cordelia Freeman',
      info: 'Head of Marketing, Cision',
      text: '“Never get involved in the office pity party, or complaint sessions that come your way.  Seek out people that support you and that you feel good being around.”',
      logo: InImg
    },
    {
      name: 'Cordelia Freeman',
      info: 'Head of Marketing, Cision',
      text: '“Feeding the baby often during these hours will ensure an abundant supply of milk.”',
      logo: InImg
    },
  ]
  return (
    <div className="layout-1240 panel">
      <div className="client-wrap">
        <div className="client-logos">
          <div className="title-wrap">
            <div className="title">Our clients</div>
            <div className="intro">Some friends we’ve made so far along the way.</div>
          </div>
          <div className="logo-wrap">
            {
              logoList.map((item, index) => (
                <div key={index} className="logo-item">
                  <img src={LogoImg} />
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
                <img src={InImg} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}