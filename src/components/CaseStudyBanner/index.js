import React from 'react'
import Lottie from 'react-lottie'
import LazyLoad from 'react-lazyload'
import { MobileBannerContainer } from 'components/Styled'
import './index.sass'

const PCBanner = ({
  title = '',
  intro = '',
  services = [],
  available = [],
  BgAnimation
}) => {

  return (
    <div className="banner-wrap">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          },
          animationData: BgAnimation
        }}
      />
    </div>
  )
}

const MobileBanner = ({
  title = '',
  intro = '',
  name = '',
  services = [],
  available = [],
  mobileAvailable = [],
  MobileBannerBg
}) => (
    <MobileBannerContainer>
      <LazyLoad placeholder={<img src={MobileBannerBg} className="banner-bg" />}>
        <img src={require(`assets/imgs/2x/banner/${name}.jpg`)} className="banner-bg" />
      </LazyLoad>
      <div className="mobile-banner-text">
        <div className="mobile-title">{title}</div>
        <p className="title-tip">{intro}</p>
        <div className="list-title"> {services.length ? 'SERVICES' : '' }</div>
        <div className="list-wrap">
          {
            services.map((item, index) => (
              <p key={index}>{item}</p>
            ))
          }
        </div>
        {
          mobileAvailable.length || available.length ?
            <>
              <div className="list-title">Available on</div>
              <div className="imgs">
                {
                  (mobileAvailable.length ? mobileAvailable : available).map((item, index) => (
                    <img src={item} key={index} />
                  ))
                }
              </div>
            </>
            : null
        }
      </div>
    </MobileBannerContainer>
  )

export default (bannerData) => {
  return window.isPC || window.innerWidth > 800 ? PCBanner(bannerData) : MobileBanner(bannerData)
}