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
            title={dcomData.theChallenge.title}
            intro={dcomData.theChallenge.intro}
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
          // lottieIcon={ColorCircle}
        />

        <TextAndAnimation
          layoutType='up-text'
          title={dcomData.onboardingData.title}
          intro={dcomData.onboardingData.intro}
          animateIcon={onboardingLottie}
          wrapMinHeight="900px"
        />

        {/*<TextAndLottieSection
          title={theChallengeData.title}
          intro={
            theChallengeData.intro
          }
          list={
            theChallengeData.list
          }
        />
        <TextAndLottieSection
          title={theSolutionData.title}
          intro={
            theSolutionData.intro
          }
          list={
            theSolutionData.list
          }
        />

        <TextAnimationSection textToTop='230px' />

        <AnimationTextSection
          title='Based on material design'
          titlePosition={
            {
              right: '100px', top: '10px'
            }
          }
          textTarget={
            <div style={{
              width: '500px',
              position: 'absolute',
              left: '0px'
            }}>
              <p>
                Angular Material comprises a range of components which implement common interaction patterns according to the Material Design specification. Material Design is a visual language that synthesizes the classic principles of good design with the innovation of technology and science.
            </p>
            </div>
          }
          animateIcon={BaseOn}
        />


        <AnimationTextSection
          textToTop='100px'
          SubComponent={
            () => {
              const TypePosition = AbsolutePositionWrap({ top: '180px', left: '-30px' })
              return (
                <TypePosition>
                  <LottieAnimation
                    triggerRelativePosition={
                      {
                        top: '-200px'
                      }
                    }
                    width='200%'
                    height='200%'
                    options={{
                      autoplay: true,
                      animationData: TypefaceText,
                      rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice'
                      }
                    }} />
                </TypePosition>
              )
            }
          }
        />

        <TextAnimationSection
          title='Color'
          animateIcon={require('assets/imgs/vizient/Color')}
          textTarget={<div style={{
            width: '500px',
            position: 'absolute',
            left: '0'
          }}>
            <p>
              We worked closely with Vizient’s Marketing team to ensure their brand guidelines extended to the Toolkit library. The color system uses an organized approach to applying color to Vizient UI. In this system, a primary and a secondary color are typically selected to represent Vizient brand. Dark and light variants of each color can then be applied to the UI in different ways.
            </p>
          </div>}
          SubComponent={() => {
            const CirclePosition = AbsolutePositionWrap({ left: '-25px', top: '380px' })
            return (
              <CirclePosition>
                <LottieAnimation
                  triggerRelativePosition={
                    {
                      top: '-200px'
                    }
                  }
                  width='100%'
                  height='100%'
                  options={{
                    autoplay: true,
                    animationData: ColorCircle,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice'
                    }
                  }} />
              </CirclePosition>
            )
          }}
        />
        <AvatarComments dataList={commentList} /> */}
      </div>
    </StyledPage>
  )
}