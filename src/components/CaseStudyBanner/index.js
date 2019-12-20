import React from 'react'
import Lottie from 'react-lottie'
import { MobileBannerContainer } from 'components/Styled'
import { Animations } from 'components/AnimationPlayer'
import './index.sass'

const PCBanner = ({
  title = '',
  intro = '',
  services = [],
  available = [],
  BgAnimation
}) => (
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
      <Animations
        target={
          <div className="banner-text">
            <div className="banner-title">{title}</div>
            <div className="banner-intro">{intro}</div>
            <div className="support">
              <div className="services">
                <div className="support-title">SERVICES</div>
                {
                  services.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))
                }
              </div>
              {
                available.length ?
                  <div className="available">
                    <div className="support-title">Available on</div>
                    {
                      available.map((item, index) => (
                        <img src={item} key={index} />
                      ))
                    }
                  </div>
                  : null
              }
            </div>
          </div>
        }
        animations={
          [
            {
              from: {
                opacity: 0
              },
              to: {
                opacity: 1
              },
              duration: 1
            }
          ]
        }
      />
    </div>
  )

const MobileBanner = ({
  title = '',
  intro = '',
  services = [],
  available = [],
  mobileAvailable = [],
  MobileBannerBg
}) => (
    <MobileBannerContainer>
      <img src={MobileBannerBg} className="banner-bg" />
      <div className="mobile-banner-text">
        <div className="mobile-title">{title}</div>
        <p className="title-tip">{intro}</p>
        <div className="list-title">SERVICES</div>
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