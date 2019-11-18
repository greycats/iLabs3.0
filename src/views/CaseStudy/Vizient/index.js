import React from 'react'
import TheStory from 'components/TheStory'
import Banner from 'components/Banner'
import TextAnimationSection from 'components/LeftTextRightAnimation'
import AnimationTextSection from 'components/LeftAnimationRightText'
import TextAndLottieSection from 'components/TextAndLottieSection'
import Toolkit from './Toolkit'
import Grid from './Grid.js'
import Leverage from './Leverage'
import AvatarComments from 'components/AvatarComments'
import VizientImage from 'assets/imgs/vizient/Banner.png'
import BaseOn from 'assets/imgs/vizient/BaseOn'
import ColorCircle from 'assets/imgs/vizient/ColorCircle'
import TypefaceText from 'assets/imgs/vizient/TypefaceText'
import StyledPage from 'components/Styled/Page'
import StyledSection from 'components/Styled/Section'
import ChallengeImg from 'assets/imgs/vizient/challenge-image.png'
import vizientData from 'data/vizientData'

import BannerContent from './BannerContent'
import { AbsolutePositionWrap } from 'components/Styled'

import { LottieAnimation } from 'components/AnimationPlayer'

export default () => {
  return (
    <StyledPage>
      <div>
        <StyledSection>
          <Banner image={VizientImage}>
            <BannerContent />
          </Banner>
        </StyledSection>
        <TheStory {...vizientData.theStoryData}></TheStory>
        <TextAndLottieSection
          title={vizientData.theChallengeData.title}
          intro={
            vizientData.theChallengeData.intro
          }
          list={
            vizientData.theChallengeData.list
          }
          style={{
            background: `url(${ChallengeImg})`,
            backgroundSize: 'contain'
          }}
        />
        <TextAndLottieSection
          title={vizientData.theSolutionData.title}
          intro={
            vizientData.theSolutionData.intro
          }
          list={
            vizientData.theSolutionData.list
          }
        />
        <Toolkit />

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

        <Leverage />

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
        <Grid />
        <AvatarComments dataList={vizientData.commentList} />
      </div>
    </StyledPage>
  )
}