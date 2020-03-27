import React from 'react'
import Loading from 'assets/imgs/loading.json'
import { LottieAnimation } from 'components/AnimationPlayer'
import Header from 'components/Header'
import { CaseStudyWrap } from 'views/CaseStudy/index.js'
import Lottie from 'react-lottie'
import Logo from 'components/BrandLogo/index.js'

import { useAppContext } from 'hooks/useShareState'
import { getImage } from 'scripts/PreloadManager'
import LazyLoad from 'react-lazyload'

const imageMap = () => ({
  vizient: getImage('loading-banner-vizient'),
  gs: getImage('loading-banner-gs'),
  dcom: getImage('loading-banner-dcom'),
  crew: getImage('loading-banner-crew'),
  fiton: getImage('loading-banner-fiton')
})

export const LoadingWithBanner = () => {
  const { store } = useAppContext()

  if (!store.caseName) {
    return <FullPageLoading/>
  }

  return (
    <>
      <CaseStudyWrap>
        <Logo isWhite={false}/>
        <Header></Header>
        <div style={{
          paddingTop: '100px',
          paddingLeft: '200px'
        }}>
          <LazyLoad placeholder={
            <img src={imageMap()[store.caseName]} alt="" style={{
              width: '100%'
            }} />
          }>
            <img src={{
              vizient: require('assets/imgs/banners/vizient2x.jpg'),
              gs: require('assets/imgs/banners/gs2x.jpg'),
              dcom: require('assets/imgs/banners/dcom2x.jpg'),
              crew: require('assets/imgs/banners/crew2x.jpg'),
              fiton: require('assets/imgs/fiton/Hero banner/Hero banner 1x.png')
            }[store.caseName || 'vizient']} alt="" style={{
              width: '100%'
            }} />
          </LazyLoad>
        </div>
      </CaseStudyWrap>
      <div style={{
        width: '100vw',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Lottie
          width='64px'
          height='64px'
          options={{
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            },
            autoplay: true,
            animationData: Loading,
            loop: true
          }}
        />
      </div>
    </>
  )
}

export const FullPageLoading = () => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <LottieAnimation
        options={{
          autoplay: true,
          animationData: Loading,
          loop: true
        }}
      />
    </div>
  )
}

export default Loading