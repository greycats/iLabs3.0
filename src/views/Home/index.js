import React, { useEffect } from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import OurClients from './OurClients'
import HowWeWork from './HowWeWork'
import OurServices from './OurServices'
import Footer from 'components/Footer'
import Work from './Work'

import MobileHome from './Mobile'
import greatSchool from 'data/great.js'

import { loadGSdata, loadCrewData, loadVizientData, loadDcomData, loadFitOnData } from 'utils/lazyload'

const HomeWrap = styled.div`
    min-width: 1440px;
    margin: 0 auto;
    overflow: hidden;
  `
export default () => {
  const getVideo = async () => {
    await import('assets/imgs/2x/Hero/Hero-animation-1920x1080.mp4')
  }
  const getData = async () => {
    await greatSchool()
  }
  useEffect(() => {
    setTimeout(() => {
      getVideo()
      setTimeout(() => {
        getData()
        Promise.all([
          import('views/CaseStudy/GS'),
          import('views/CaseStudy/GS/Questions'),
          import('views/CaseStudy/GS/TheChallenge'),
          import('views/CaseStudy/GS/Presentation'),
          import('views/CaseStudy/GS/FirstLook'),
          import('views/CaseStudy/GS/Progressive'),
          import('views/CaseStudy/GS/Others')
        ]).then(() => {
          return Promise.all([
            import('views/CaseStudy'),
            import('views/OurWork'),
            import('views/Contact'),
            import('views/CaseStudy/Vizient'),
            import('views/CaseStudy/Dcom'),
            import('views/CaseStudy/Crew'),
            import('views/CaseStudy/FitOn')
          ])
        }).then(() => {
          loadGSdata()
          loadCrewData()
          loadVizientData()
          loadDcomData()
          loadFitOnData()
        })
      }, 500)
    }, 0)
  }, [])
  return (
    <>
      {
        window.isPC ?
          <HomeWrap>
            <Banner />
            <Work />
            <OurServices />
            <OurClients />
            <HowWeWork />
          </HomeWrap>
          : <MobileHome />
      }
      <Footer />
    </>
  )
}
