import React, { useState, useEffect } from 'react'
import TheStory from 'components/TheStory'
import StyledPage from 'components/Styled/Page'
import greatSchool from '../../../data/great.js'
import CaseStudyBanner from 'components/CaseStudyBanner'
import MobileBannerBg from 'assets/imgs/gs/mobile/banner.png'
import BgAnimation from 'assets/imgs/gs/1-hero'

import { lazyImport } from 'utils'

const Questions = lazyImport(import('views/CaseStudy/GS/Questions'))
const Challenge = lazyImport(import('views/CaseStudy/GS/TheChallenge'))
const Solution = lazyImport(import('views/CaseStudy/GS/Solution'))
const Presentation = lazyImport(import('views/CaseStudy/GS/Presentation'))
const FirstLook = lazyImport(import('views/CaseStudy/GS/FirstLook'))
const Progressive = lazyImport(import('views/CaseStudy/GS/Progressive'))
const Others = lazyImport(import('views/CaseStudy/GS/Others'))
import { FullPageLoading } from 'components/TempLoading'

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
    return <FullPageLoading />
  }

  return (
    <StyledPage>

      <CaseStudyBanner {...GSData.banner} BgAnimation={BgAnimation} MobileBannerBg={MobileBannerBg} />

      <TheStory {...GSData.theStory}></TheStory>

      <Challenge GSData={GSData} />

      <Solution GSData={GSData} />

      <Questions GSData={GSData} />

      <FirstLook GSData={GSData} />

      <Presentation GSData={GSData} />

      <Progressive GSData={GSData} />

      <Others GSData={GSData} />
    </StyledPage>
  )
}