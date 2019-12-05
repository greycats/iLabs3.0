import React from 'react'
import styled from 'styled-components'
import TheStory from 'components/TheStory'
import Banner from 'components/Banner'
import TextAndAnimation from 'components/TextAndAnimation'
import TextDescriptionLottieSection from 'components/TextDescriptionLottieSection'
import CommentsCard from 'components/CommentsCard'
import MobileCarousel from 'components/MobileCarousel'

import Solution from 'assets/imgs/dcom/2-Solutions'
import SmoothTransition from 'assets/imgs/dcom/3-Switcher.json'
import Intuitive from 'assets/imgs/dcom/4-Intuitive-search-function'
import onboardingLottie from 'assets/imgs/dcom/5-Onboarding-New-User'
import HomeScreen from 'assets/imgs/dcom/6-Ipad'
import StyledPage from 'components/Styled/Page'
import StyledSection from 'components/Styled/Section'
import BannerContent from './BannerContent'
import dcomData from 'data/dcomData'

import useImage from 'hooks/useImage'

const MobileSolutionWrap = styled.div`
  .carousel.carousel-slider {
    margin: 0.2rem 0 1rem;
    .slide {
      .slide-item {
        transition: all 0.3s
        img {
          transform: scale(1.2);
        }
      }
      &.selected .slide-item {
        transform: translateY(20px);
      }
    }
    .control-dots {
      bottom: -0.6rem;
    }
  }
`

export default () => {
  const BgImage = useImage('dcom-banner-image')
  const isPC = window.isPC

  const mobileSolutionList = dcomData.theSolution.mobileCarousel.map((item, index) => <img src={item} key={index} />)

  return (
    <StyledPage>
      <div>
        {
          isPC ?
            <StyledSection>
              <Banner image={BgImage}>
                <BannerContent />
              </Banner>
            </StyledSection>
            :
            <BannerContent />
        }

        <TheStory {...dcomData.theStory}></TheStory>

        <div style={{ background: '#f5f5f5', paddingTop: '70px' }}>
          <TextAndAnimation
            layoutType='right-text'
            {...dcomData.theChallenge}
            titleStyle={{
              width: '599px'
            }}
            showLottie={false}
            wrapMinHeight="485px"
          />
        </div>

        {
          isPC ?
            <TextDescriptionLottieSection
              {...dcomData.theSolution}
              lottieIcon={Solution}
            />
            :
            <MobileSolutionWrap>
              <TextDescriptionLottieSection
                {...dcomData.theSolution}
              />
              <MobileCarousel
                list={mobileSolutionList}
                centerSlidePercentage={70}
                selectedItem={1}
              />
            </MobileSolutionWrap>
        }

        <TextAndAnimation
          layoutType='left-text'
          {...dcomData.smoothTransition}
          wrapMinHeight="500px"
          titleStyle={{
            width: '496px'
          }}
          animateIcon={SmoothTransition}
          animationStyle={{
            top: '-120px',
          }}
        />

        <TextAndAnimation
          layoutType='right-text'
          {...dcomData.intuitive}
          titleStyle={{
            width: '550px'
          }}
          animateIcon={Intuitive}
          animationStyle={{
            width: '690px',
            top: '-120px',
            left: '-160px'
          }}
        />

        <TextAndAnimation
          layoutType='up-text'
          {...dcomData.onboardingData}
          animateIcon={onboardingLottie}
          wrapMinHeight={isPC ? "930px" : '4.9rem'}
          titleStyle={{
            width: '550px'
          }}
          mobileAnimationStyle={{
            marginLeft: '-25%'
          }}
          mobileAnimateWidth='120%'
          titleHeight={isPC ? 60 : 120}
        />

        <TextAndAnimation
          layoutType='left-text'
          {...dcomData.homeScreen}
          wrapMinHeight={isPC ? "1060px" : '6.55rem'}
          titleStyle={{
            width: '600px'
          }}
          animateIcon={HomeScreen}
          animateWidth={930}
          animationStyle={{
            width: '640px',
            top: '-120px',
          }}
        />

        <CommentsCard commentList={dcomData.commentList} />
      </div>
    </StyledPage>
  )
}