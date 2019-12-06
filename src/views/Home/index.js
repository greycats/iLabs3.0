import React, { useEffect } from 'react'
import Banner from './Banner'
import OurClients from './OurClients'
import HowWeWork from './HowWeWork'
import OurServices from './OurServices'
import Footer from 'components/Footer'
import Work from './Work'

import MobileHome from './Mobile'
import greatSchool from 'data/great.js'

export default () => {
  const getData = async () => {
    await greatSchool()
  }
  useEffect(() => {
    getData()
    Promise.all([
      import('views/CaseStudy/GS'),
      import('views/CaseStudy/GS/Questions'),
      import('views/CaseStudy/GS/TheChallenge'),
      import('views/CaseStudy/GS/Presentation'),
      import('views/CaseStudy/GS/FirstLook'),
      import('views/CaseStudy/GS/Progressive'),
      import('views/CaseStudy/GS/Others')
    ]).then(() => [
      import('views/CaseStudy'),
      import('views/OurWork'),
      import('views/Contact'),
      import('views/CaseStudy/Vizient'),
      import('views/CaseStudy/Dcom'),
      import('views/CaseStudy/Crew'),
    ])
  }, [])
  return (
    <>
      {
        window.isPC ?
          <>
            <Banner />
            <Work />
            <br />
            <OurServices />
            <OurClients />
            <HowWeWork />
          </>
          : <MobileHome />
      }
      <Footer />
    </>
  )
}
