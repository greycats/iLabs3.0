import React from 'react'
import TheStory from 'components/TheStory'
import StyledPage from 'components/Styled/Page'
import greatSchool from '../../../data/great.js'
import CaseStudyBanner from 'components/CaseStudyBanner'
import BgAnimation from 'assets/imgs/banners/GS/@1x/GreatSchools-3-Floating-@1x/data.json'
import ShowCaseStudyPage from 'components/ShowCaseStudyPage'

import { getImageResult, getResult, loadGSdata } from 'utils/lazyload'

import { lazyImport } from 'utils'

const Questions = lazyImport(import('views/CaseStudy/GS/Questions'))
const Challenge = lazyImport(import('views/CaseStudy/GS/TheChallenge'))
const Solution = lazyImport(import('views/CaseStudy/GS/Solution'))
const Presentation = lazyImport(import('views/CaseStudy/GS/Presentation'))
const FirstLook = lazyImport(import('views/CaseStudy/GS/FirstLook'))
const Progressive = lazyImport(import('views/CaseStudy/GS/Progressive'))
const Others = lazyImport(import('views/CaseStudy/GS/Others'))

const GS = ({ caseData }) => {
  return (
    <StyledPage>
      <CaseStudyBanner {...caseData.banner} BgAnimation={getResult('gs_banner') || BgAnimation} MobileBannerBg={getImageResult('gs-mobile-bg')} name='gs' />

      <TheStory {...caseData.theStory}></TheStory>

      <Challenge GSData={caseData} />

      <Solution GSData={caseData} />

      <Questions GSData={caseData} />

      <FirstLook GSData={caseData} />

      <Presentation GSData={caseData} />

      <Progressive GSData={caseData} />

      <Others GSData={caseData} />
    </StyledPage>
  )
}

export default () => {
  return <ShowCaseStudyPage lazyloadMethod={greatSchool} commonDataMethod={loadGSdata} component={GS}/>
}
