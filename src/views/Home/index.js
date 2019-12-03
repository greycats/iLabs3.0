import React from 'react'
import AnimateBanner from 'components/AnimateBanner'
import OurClients from './OurClients'
import HowWeWork from './HowWeWork'
import OurServices from './OurServices'
import Footer from 'components/Footer'

export default () => {
  return (
    <div>
      <AnimateBanner>
      </AnimateBanner>
      <OurServices></OurServices>
      <OurClients></OurClients>
      <HowWeWork></HowWeWork>
      <Footer />
    </div>
  )
}