import React from 'react'
import CaseStudyBanner from 'components/CaseStudyBanner'
import MobileBannerBg from 'assets/imgs/vizient/mobile/banner.png'
// import BgAnimation from 'assets/imgs/vizient/1-Banner.json'
import BgAnimation from 'assets/imgs/banners/Vizient/@1x/Vizient-FX-4-Floating-@1x/data.json'
import vizientData from 'data/vizientData'

const Banner = () => {
  return <CaseStudyBanner {...vizientData.banner} BgAnimation={BgAnimation} MobileBannerBg={MobileBannerBg} />
}

export default Banner