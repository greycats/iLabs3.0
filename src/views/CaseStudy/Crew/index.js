import React from 'react'
import TheStory from 'components/TheStory'
import Banner from 'components/Banner'
import TextAndAnimation from 'components/TextAndAnimation'
import TextDescriptionLottieSection from 'components/TextDescriptionLottieSection'
import CommentsCard from 'components/CommentsCard'

import Solution from 'assets/imgs/dcom/Solution.json'
import SmoothTransition from 'assets/imgs/dcom/Switcher.json'
import Intuitive from 'assets/imgs/dcom/Intuitive search.json'
import HomeScreen from 'assets/imgs/dcom/iPad.json'
import StyledPage from 'components/Styled/Page'
import StyledSection from 'components/Styled/Section'
import onboardingLottie from 'assets/imgs/dcom/Onboardinguser.json'
import BannerContent from './BannerContent'
import dcomData from 'data/dcomData'

import useImage from 'hooks/useImage'

export default () => {
  const BgImage = useImage('dcom-banner-image')

  return (
    <StyledPage>
      <div>
        <StyledSection>
          <Banner image={null}>
            <BannerContent />
          </Banner>
        </StyledSection>

        <TheStory {...dcomData.theStoryData}></TheStory>

        <div style={{ background: '#f5f5f5', paddingTop: '70px' }}>
          <TextAndAnimation
            layoutType='right-text'
            {...dcomData.theChallenge}
            titleStyle={
              {
                width: '599px'
              }
            }
            showLottie={false}
            wrapMinHeight="485px"
          />
        </div>

        <TextDescriptionLottieSection
          {...dcomData.theSolution}
          lottieIcon={Solution}
        />

        <TextAndAnimation
          layoutType='left-text'
          {...dcomData.smoothTransition}
          wrapMinHeight="500px"
          titleHeight="180px"
          titleStyle={
            {
              width: '496px'
            }
          }
          animateIcon={SmoothTransition}
          animationStyle={{
            top: '-120px',
          }}
        />

        <TextAndAnimation
          layoutType='right-text'
          {...dcomData.intuitive}
          titleHeight="120px"
          titleStyle={
            {
              width: '550px'
            }
          }
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
          wrapMinHeight="930px"
          titleStyle={
            {
              width: '550px'
            }
          }
        />

        <TextAndAnimation
          layoutType='left-text'
          {...dcomData.homeScreen}
          wrapMinHeight="1060px"
          titleStyle={
            {
              width: '600px'
            }
          }
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