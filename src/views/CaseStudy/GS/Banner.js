import React from 'react'

import CaseStudyBanner from 'components/CaseStudyBanner'
import MobileBannerBg from 'assets/imgs/gs/mobile/banner.png'
import BgAnimation from 'assets/imgs/gs/1-hero'

export default () => {
  return (
      <CaseStudyBanner {...GSData.banner} BgAnimation={BgAnimation} MobileBannerBg={MobileBannerBg} />
  )
}