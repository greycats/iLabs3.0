import React from 'react'
import CaseStudyBanner from 'components/CaseStudyBanner'
import BgAnimation from 'assets/imgs/banners/Vizient/@1x/Vizient-FX-4-Floating-@1x/data.json'
import vizientData from 'data/vizientData'
import { getImageResult, getResult } from 'utils/lazyload'

const Banner = () => {
  return <CaseStudyBanner {...vizientData.banner} BgAnimation={getResult('viz_banner') || BgAnimation} MobileBannerBg={getImageResult('vizient-mobile-bg')} name="vizient"/>
}

export default Banner