import React from 'react'
import Commontitle from 'components/CommonTitle'
import './index.sass'

export default () => {
  const titleData = {
    title: 'Our Story'
  }
  return (
    <div className="layout-1240 panel">
      <div className="story-wrap">
        <Commontitle {...titleData}></Commontitle>
        <div className="right-part">
          <div className="intro">
            <div>We are a group of designers, engineers, product managers and innovators with a proven track record of delivering high-quality products that delight users and exceed their needs. </div>
            <div>Our goal is to help build great software companies by combining the Silicon Valley hustle with a business' core area of expertise to deliver quality product at break neck speed. </div>
          </div>
        </div>
      </div>
    </div>
  )
}