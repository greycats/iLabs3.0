import React from 'react'
import TheStory from 'components/TheStory'
import Banner from 'components/Banner'
import TextAndAnimation from 'components/TextAndAnimation'
import TextDescriptionLottieSection from 'components/TextDescriptionLottieSection'
import CommentsCard from 'components/CommentsCard'
import CommonTitle from 'components/CommonTitle'

import Solution from 'assets/imgs/dcom/Solution.json'
import SmoothTransition from 'assets/imgs/dcom/Switcher.json'
import Intuitive from 'assets/imgs/dcom/Intuitive search.json'
import HomeScreen from 'assets/imgs/dcom/iPad.json'
import StyledPage from 'components/Styled/Page'
import StyledSection from 'components/Styled/Section'
import onboardingLottie from 'assets/imgs/dcom/Onboardinguser.json'
import BannerContent from './BannerContent'
import dcomData from 'data/dcomData'

import AnimationPlayer from 'components/AnimationPlayer'

export default () => {

  return (
    <StyledPage>
      <div>
        <StyledSection>
          <div style={{ height: '50vh', minHeight: '480px' }}>
            <Banner image={null}>
              <BannerContent />
            </Banner>
          </div>
        </StyledSection>

        <TheStory {...dcomData.theStoryData}></TheStory>

        <div style={{ display: 'flex' }} className="layout-1240 panel challenge-wrap">
          <div style={{
            width: '50%'
          }} className="title-part">
            <AnimationPlayer
              target={
                <div className="title-wrap">
                  <CommonTitle
                    title="The Challenge"
                    intro="Our challenge was to build a high-performance communication platform connecting a mobile workforce, keeping in mind that Crew's service is designed specifically for workers who don't have ready access to effective communications services on the job."
                  />
                </div>
              }
              animations={
                [
                  {
                    duration: 1,
                    from: {
                      opacity: 0,
                      height: 0
                    },
                    to: {
                      opacity: 1,
                      height: '394px'
                    }
                  }
                ]
              }
            />
          </div>
          <div style={{
            width: '50%'
          }}>

          </div>
        </div>

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