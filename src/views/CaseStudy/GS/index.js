import React, { useState, useEffect } from 'react'
import TheStory from 'components/TheStory'
import StyledPage from 'components/Styled/Page'
import greatSchool from '../../../data/great.js'
import CaseStudyBanner from 'components/CaseStudyBanner'
import BgAnimation from 'assets/imgs/banners/GS/@1x/GreatSchools-3-Floating-@1x/data.json'

import { lazyImport } from 'utils'
import { getImage } from 'scripts/PreloadManager'

const Questions = lazyImport(import('views/CaseStudy/GS/Questions'))
const Challenge = lazyImport(import('views/CaseStudy/GS/TheChallenge'))
const Solution = lazyImport(import('views/CaseStudy/GS/Solution'))
const Presentation = lazyImport(import('views/CaseStudy/GS/Presentation'))
const FirstLook = lazyImport(import('views/CaseStudy/GS/FirstLook'))
const Progressive = lazyImport(import('views/CaseStudy/GS/Progressive'))
const Others = lazyImport(import('views/CaseStudy/GS/Others'))
import { LoadingWithBanner, FullPageLoading } from 'components/TempLoading'

// import PreloadManager from 'scripts/PreloadManager'
import { loadGSdata } from 'utils/lazyload'

export default () => {
  const [GSData, setGSdata] = useState(null)

  const getData = async () => {
    const data = await greatSchool()
    setGSdata(data)
  }

  const loadData = () => {
    loadGSdata()
  }
  useEffect(() => {
    getData()
    loadData()
  }, [])

  if (!GSData) {
    return window.isPC ? <LoadingWithBanner /> : <FullPageLoading />
  }

  return (
    <StyledPage>

      <CaseStudyBanner {...GSData.banner} BgAnimation={BgAnimation} MobileBannerBg={getImage('vizient-gs-bg')} name="gs"/>

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