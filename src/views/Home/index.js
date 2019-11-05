import React, { useEffect } from 'react'
import AnimateBanner from 'components/AnimateBanner'
import OurClients from './OurClients'
import HowWeWork from './HowWeWork'
import OurStory from './OurStory'

export default () => {
  return (
    <div>
      <AnimateBanner></AnimateBanner>
      <OurClients></OurClients>
      <HowWeWork></HowWeWork>
      <OurStory></OurStory>
    </div>
  )
}