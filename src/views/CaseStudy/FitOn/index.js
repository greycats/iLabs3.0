import React, { useState, useEffect } from 'react'
import StyledPage from 'components/Styled/Page'
import CaseStudyBanner from 'components/CaseStudyBanner'
import ShowCaseStudyPage from 'components/ShowCaseStudyPage'

import BgAnimation from 'assets/imgs/fiton/Fiton.json'
import fiton from '../../../data/fiton.js'

import { getImageResult, getResult, loadFitOnData } from 'utils/lazyload'

const FitOn = ({ caseData }) => {
  console.log('caseData', caseData)
  return (
    <StyledPage>
      <CaseStudyBanner {...caseData.banner}  BgAnimation={getResult('fiton_banner') || BgAnimation} MobileBannerBg={getImageResult('fiton-mobile-bg')} name="fiton"/>
    </StyledPage>
  )
}

export default () => {
  return <ShowCaseStudyPage lazyloadMethod={fiton} commonDataMethod={loadFitOnData} component={FitOn}/>
}
