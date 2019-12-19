import React from 'react'
import Loading from 'assets/imgs/loading.json'
import { LottieAnimation } from 'components/AnimationPlayer'
import Header from 'components/Header'
import { CaseStudyWrap } from 'views/CaseStudy/index.js'
import Lottie from 'react-lottie'
import StyledPage from 'components/Styled/Page'
import VizientBanner from 'views/CaseStudy/Vizient/Banner.js'

export const LoadingWithBanner = () => {
  return (
    <>
      <CaseStudyWrap>
        <Header></Header>
        <StyledPage>
          <VizientBanner></VizientBanner>
        </StyledPage>
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