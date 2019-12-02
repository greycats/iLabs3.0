import React, { useState, useEffect } from 'react'
import TheStory from 'components/TheStory'
import Banner from 'components/Banner'

import StyledPage from 'components/Styled/Page'
import StyledSection from 'components/Styled/Section'
import BannerContent from './BannerContent'

import greatSchool from '../../../data/great.js'

import { lazyImport } from 'utils'

const Questions = lazyImport(import('views/CaseStudy/GS/Questions'))
const Challenge = lazyImport(import('views/CaseStudy/GS/TheChallenge'))
const Solution = lazyImport(import('views/CaseStudy/GS/Solution'))
const Presentation = lazyImport(import('views/CaseStudy/GS/Presentation'))
const FirstLook = lazyImport(import('views/CaseStudy/GS/FirstLook'))
const Progressive = lazyImport(import('views/CaseStudy/GS/Progressive'))
const Others = lazyImport(import('views/CaseStudy/GS/Others'))

const isPC = window.isPC

export default () => {
  const [GSData, setGSdata] = useState(null)

  const getData = async () => {
    const data = await greatSchool()
    setGSdata(data)
  }

  useEffect(() => {
    getData()
  }, [])

  if (!GSData) {
    return <div style={{ height: '1000vh', opacity: 0 }}></div>
  }

  return (
    <StyledPage>
      {
        isPC ?
          <StyledSection>
            <div className="animation-banner">
              <Banner image={null}>
                <BannerContent />
              </Banner>
            </div>
          </StyledSection>
          :
          <BannerContent />
      }

      <TheStory {...GSData.theStory}></TheStory>

      <Challenge GSData={GSData} />

      <Solution GSData={GSData} />

      <Questions />

      <FirstLook GSData={GSData} />

      <Presentation GSData={GSData} />

      <Progressive GSData={GSData} />

      <Others GSData={GSData} />
    </StyledPage>
  )
}