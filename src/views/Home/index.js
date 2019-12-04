import React from 'react'
import { AnimateBanner } from 'components/AnimateBanner'
import AnimationPlayer from 'components/AnimationPlayer'
import OurClients from './OurClients'
import HowWeWork from './HowWeWork'
import OurServices from './OurServices'
import Footer from 'components/Footer'

import CommonTitle from 'components/CommonTitle'

const titleData = {
  title: 'Featured Work',
  intro: 'Explore some of our latest projects.'
}

export default () => {
  return (
    <div style={{
    }}>
      <div className="main intro ui-content">
        <AnimateBanner>
          <AnimationPlayer
            target={
              <div className="header-sec layout-1240 panel">
                <h1 className="bold">
                  Experiences <br />
                  Matters.
                </h1>
                <p style={{width: '360px'}}>
                  Welcome to Interactive Labs. We're a full stack digital consulting studio that crafts exceptional experiences
                  across all industries.
                </p>
              </div>
            }
            animations={
              [
                {
                  to: {
                    height: '280px'
                  },
                  duration: 0.8
                }
              ]
            }
          />
          <div style={{
            position: 'absolute',
            left: 0,
            top: '700px',
            height: '100px',
            width: '58%',
            backgroundColor: '#fff'
          }}></div>
        </AnimateBanner>
      </div>
      <div className="layout-1240 panel">
        <CommonTitle {...titleData}></CommonTitle>
      </div>
      <OurServices />
      <OurClients></OurClients>
      <HowWeWork></HowWeWork>
      <Footer />
    </div>
  )
}
