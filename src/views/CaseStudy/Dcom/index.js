import React from 'react'
import TheStory from 'components/TheStory'
import Banner from 'components/Banner'
import TextAnimationSection from 'components/LeftTextRightAnimation'
import AnimationTextSection from 'components/LeftAnimationRightText'
import TextAndLottieSection from 'components/TextAndLottieSection'
import TextDescriptionLottieSection from 'components/TextDescriptionLottieSection'
import AvatarComments from 'components/AvatarComments'
import BgImage from 'assets/imgs/dcom/Bg.png'
import BaseOn from 'assets/imgs/vizient/BaseOn'
import ColorCircle from 'assets/imgs/vizient/ColorCircle'
import TypefaceText from 'assets/imgs/vizient/TypefaceText'
import StyledPage from 'components/Styled/Page'
import StyledSection from 'components/Styled/Section'

import BannerContent from './BannerContent'
import { AbsolutePositionWrap } from 'components/Styled'

import 'components/TheChallenge/index.sass'

import { LottieAnimation } from 'components/AnimationPlayer'

export default () => {
  const theStoryData = {
    story: [
      'With 2,000,000+ trusted definitions and synonyms, 100+ million app downloads, Dictionary.com is the #1 English dictionary app for iPhone and Android.',
      'As with any large app, user fatigue sets in after prolonged usage. Dictionary.com tasked us with building a refresh that would impact their core metrics - namely, retention, monetization and user reviews on the app stores.'
    ],
    dataList: [
      {
        number: 4.5,
        decimals: 1,
        name: 'Reviews on App Store',
        img: require('assets/imgs/vizient/The-story/Product.json')
      },
      {
        number: 10,
        suffix: <sup style={{ fontSize: '20px' }}>%</sup>,
        name: 'Increase in visit frequency',
        img: require('assets/imgs/vizient/The-story/Teammember.json')
      },
      {
        number: 10,
        suffix: <sup style={{ fontSize: '20px' }}>M+</sup>,
        name: 'Unique monthly visitors',
        img: require('assets/imgs/vizient/The-story/AppscreenIcon.json')
      }
    ]
  }

  const theChallengeData = {
    title: 'The Challenge',
    intro: 'Our research indicated that we needed to upgrade a few of the core flows in terms of usability. The main challenge for us was to ease in a large existing user base into new designs and experiences while maintaining or improving core metrics. Additionally we had a short time frame in which to launch the changes to meet the end of year deadline.'
  }

  const theSolutionData = {
    controllerId: 'the-solution-trigger',
    title: 'The Solution',
    intro: 'We created a fully functional UI toolkit based on a customized version of Angular Material. With a standardized interface and clear documentation we were able to cut down on operational costs, all while implementing a single uniform design language.',
    list: [
      {
        name: 'UI Toolkit',
        text: 'Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple.',
        img: require('assets/imgs/vizient/The-solution/UI Toolkit.json')
      },
      {
        name: 'Clear Documentation',
        text: 'Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple.',
        img: require('assets/imgs/vizient/The-solution/Clear Document.json')
      },
      {
        name: 'Design Language',
        text: 'Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple.',
        img: require('assets/imgs/vizient/The-solution/Designlanguage.json')
      },
    ]
  }

  const commentList = [
    {
      img: require('assets/imgs/vizient/AVATAR01.png'),
      name: 'Beth Roed1',
      intro: 'Business Development Director, Cision',
      comment: "“I like the cleaner look. Compare to what we have now, it's quantum leap”"
    },
    {
      img: require('assets/imgs/vizient/AVATAR02.png'),
      name: 'Beth Roed2',
      intro: 'Business Development Director, Cision',
      comment: "“I like the cleaner look. Compare to what we have now, it's quantum leap”"
    },
    {
      img: require('assets/imgs/vizient/AVATAR03.png'),
      name: 'Beth Roed3',
      intro: 'Business Development Director, Cision',
      comment: "“I like the cleaner look. Compare to what we have now, it's quantum leap”"
    },
    {
      img: require('assets/imgs/vizient/AVATAR04.png'),
      name: 'Beth Roed4',
      intro: 'Business Development Director, Cision',
      comment: "“I like the cleaner look. Compare to what we have now, it's quantum leap”"
    },
    {
      img: require('assets/imgs/vizient/AVATAR05.png'),
      name: 'Beth Roed5',
      intro: 'Business Development Director, Cision',
      comment: "“I like the cleaner look. Compare to what we have now, it's quantum leap”"
    }
  ]

  const DcomChallenge = () => (
    <div style={{
      background: '#f5f5f5'
    }}>
      <AnimationTextSection
        showLottie={false}
        minHeight='486px'
        textToTop='100px'
        title='The Challenge'
        titlePosition={
          {
            right: '290px', top: '100px'
          }
        }
        textTarget={
          <div style={{
            width: '500px',
            position: 'absolute',
            left: '0px'
          }}>
            <p>
              Our research indicated that we needed to upgrade a few of the core flows in terms of usability. The main challenge for us was to ease in a large existing user base into new designs and experiences while maintaining or improving core metrics. Additionally we had a short time frame in which to launch the changes to meet the end of year deadline.
          </p>
          </div>
        }
      />
    </div>
  )

  return (
    <StyledPage>
      <div>
        <StyledSection>
          <Banner image={BgImage}>
            <BannerContent />
          </Banner>
        </StyledSection>
        <TheStory {...theStoryData}></TheStory>

        <DcomChallenge />

        {/* <TextDescriptionLottieSection
          title='The Solution'
          intro='We reviewed usage data and conducted a thorough audit based on the users reviews of the iOS and Android apps. We created a matrix of pain points and defined core flows that needed an upgrade. Keeping an eye on existing and potential future users of the app, we created multiples ideas, prototypes and validated them through usability testing. We also product managed this critical release and provided detailed specifications and priorities for their internal engineering team. The updated app was launch well ahead of schedule to meet the pre-Christmas deadline.'
          description='“Our solution for the iOS version led to a significant rise in page views and retention. We applied material design principles to the Android app which showed similar results.”'
        />

        <TextAndLottieSection
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