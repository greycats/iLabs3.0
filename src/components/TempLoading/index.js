import React from 'react'
import Loading from 'assets/imgs/loading.json'
import { LottieAnimation } from 'components/AnimationPlayer'
import Header from 'components/Header'
import { CaseStudyWrap } from 'views/CaseStudy/index.js'
import Lottie from 'react-lottie'
import { getLocationSearch } from 'utils'

import VizientImage from 'assets/imgs/banners/vizient.jpg'
import GsImage from 'assets/imgs/banners/gs.jpg'
import DcomImage from 'assets/imgs/banners/dcom.jpg'
import CrewImage from 'assets/imgs/banners/crew.jpg'

export const LoadingWithBanner = () => {
  const name = getLocationSearch('name')
  const imageMap = {
    vizient: VizientImage,
    gs: GsImage,
    dcom: DcomImage,
    crew: CrewImage
  }
  return (
    <>
      <CaseStudyWrap>
        <Header></Header>
          <div style={{
            paddingTop: '100px',
            paddingLeft: '200px'
          }}>
            <img src={imageMap[name]} alt="" style={{
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