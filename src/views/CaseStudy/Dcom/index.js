import React from 'react'
import TheStory from 'components/TheStory'
import Banner from 'components/Banner'
import TextAndAnimation from 'components/TextAndAnimation'
import TextAndLottieSection from 'components/TextAndLottieSection'
import TextDescriptionLottieSection from 'components/TextDescriptionLottieSection'
import AvatarComments from 'components/AvatarComments'

import BgImage from 'assets/imgs/dcom/Bg.png'
import BaseOn from 'assets/imgs/vizient/BaseOn'
import ColorCircle from 'assets/imgs/vizient/ColorCircle'
import Solution from 'assets/imgs/dcom/Solution.json'
import SmoothTransition from 'assets/imgs/dcom/Switcher.json'
import Intuitive from 'assets/imgs/dcom/Intuitive search.json'
import HomeScreen from 'assets/imgs/dcom/iPad.json'
import TypefaceText from 'assets/imgs/vizient/TypefaceText'
import StyledPage from 'components/Styled/Page'
import StyledSection from 'components/Styled/Section'
import onboardingLottie from 'assets/imgs/dcom/Onboardinguser.json'
import BannerContent from './BannerContent'
import { AbsolutePositionWrap } from 'components/Styled'
import dcomData from 'data/dcomData'

import { LottieAnimation } from 'components/AnimationPlayer'

export default () => {

  return (
    <StyledPage>
      <div>
        <StyledSection>
          <Banner image={BgImage}>
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
          title='The Solution'
          intro='We reviewed usage data and conducted a thorough audit based on the users reviews of the iOS and Android apps. We created a matrix of pain points and defined core flows that needed an upgrade. Keeping an eye on existing and potential future users of the app, we created multiples ideas, prototypes and validated them through usability testing. We also product managed this critical release and provided detailed specifications and priorities for their internal engineering team. The updated app was launch well ahead of schedule to meet the pre-Christmas deadline.'
          description='“Our solution for the iOS version led to a significant rise in page views and retention. We applied material design principles to the Android app which showed similar results.”'
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
          wrapMinHeight="900px"
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
      </div>
    </StyledPage>
  )
}