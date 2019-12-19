import React from 'react'
import Loading from 'assets/imgs/loading.json'
import { LottieAnimation } from 'components/AnimationPlayer'
import Header from 'components/Header'
import { CaseStudyWrap } from 'views/CaseStudy/index.js'
import Lottie from 'react-lottie'

import { useAppContext } from 'hooks/useShareState'
import { getImage } from 'scripts/PreloadManager'

export const LoadingWithBanner = () => {
  const { store } = useAppContext()

  const imageMap = {
    vizient: getImage('loading-banner-vizient'),
    gs: getImage('loading-banner-gs'),
    dcom: getImage('loading-banner-dcom'),
    crew: getImage('loading-banner-crew')
  }
  console.log('store.name ', store.caseName)
  console.log('image', imageMap[store.caseName])
  return (
    <>
      <CaseStudyWrap>
        <Header></Header>
          <div style={{
            paddingTop: '100px',
            paddingLeft: '200px'
          }}>
            <img src={imageMap[store.caseName || 'vizient']} alt="" style={{
              width: '100%'
            }}/>
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