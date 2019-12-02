import React, { useEffect } from 'react'
import AnimateBanner from 'components/AnimateBanner'
import OurClients from './OurClients'
import HowWeWork from './HowWeWork'
import OurStory from './OurStory'
import OurServices from './OurServices'

export default () => {
  return (
    <div>
      <AnimateBanner></AnimateBanner>
      <OurServices></OurServices>
      <OurClients></OurClients>
      <HowWeWork></HowWeWork>
      <OurStory></OurStory>
    </div>
  )
}