import React from 'react'
import TheStory from 'components/TheStory'
import Banner from 'components/Banner'
import BannerContent from './BannerContent'
import TextAndAnimation from 'components/TextAndAnimation'
import TextAndLottieSection from 'components/TextAndLottieSection'
import Toolkit from './Toolkit'
import Grid from './Grid'
import Leverage from './Leverage'
import AvatarComments from 'components/AvatarComments'

import ComponentsForWeb from 'assets/imgs/vizient/Components'
import BaseOn from 'assets/imgs/vizient/BaseOn'
import ColorCircle from 'assets/imgs/vizient/ColorCircle'
import TypefaceText from 'assets/imgs/vizient/TypefaceText'
import TypefaceImage from 'assets/imgs/vizient/Typeface'
import StyledPage from 'components/Styled/Page'
import StyledSection from 'components/Styled/Section'
import ChallengeImg from 'assets/imgs/vizient/challenge-image.png'
import ColorImage from 'assets/imgs/vizient/Color'

import vizientData from 'data/vizientData'

import { AbsolutePositionWrap } from 'components/Styled'
import { LottieAnimation } from 'components/AnimationPlayer'

import useImage from 'hooks/useImage'

export default () => {
  const VizientImage = useImage('vizient-image')

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

        <TextAndAnimation
          layoutType='left-text'
          title={vizientData.componentsForWeb.title}
          intro={vizientData.componentsForWeb.intro}
          titleHeight="120px"
          titleStyle={
            {
              width: '500px',
              marginTop: '230px'
            }
          }
          animateIcon={ComponentsForWeb}
          animateWidth={745}
          animationStyle={{
            right: '-20px',
            transform: 'scale(1.1)'
          }}
        />

        <TextAndAnimation
          layoutType='right-text'
          title={vizientData.basedOn.title}
          intro={vizientData.basedOn.intro}
          titleHeight="120px"
          titleStyle={
            {
              width: '495px',
              marginTop: '140px',
            }
          }
          animateIcon={BaseOn}
          animateWidth={740}
        />

        <Leverage />

        <TextAndAnimation
          layoutType='right-text'
          title={vizientData.typeface.title}
          intro={vizientData.typeface.intro}
          titleStyle={
            {
              width: '495px',
              marginTop: '230px',
            }
          }
          animateIcon={TypefaceImage}
          animateWidth={740}
          SubComponent={
            () => {
              const TypePosition = AbsolutePositionWrap({ left: '-30px', top: '208px' })
              return (
                <TypePosition>
                  <LottieAnimation
                    triggerRelativePosition={
                      {
                        top: '-200px'
                      }
                    }
                    width='495px'
                    height='109px'
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

        <TextAndAnimation
          layoutType='left-text'
          title={vizientData.color.title}
          intro={vizientData.color.intro}
          titleStyle={
            {
              width: '495px',
              marginTop: '150px',
            }
          }
          animateIcon={ColorImage}
          animateWidth={740}
          SubComponent={
            () => {
              const CirclePosition = AbsolutePositionWrap({ left: '-25px', top: '320px' })
              return (
                <CirclePosition>
                  <LottieAnimation
                    triggerRelativePosition={
                      {
                        top: '-200px'
                      }
                    }
                    width='458px'
                    height='100px'
                    options={{
                      autoplay: true,
                      animationData: ColorCircle,
                      rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice'
                      }
                    }} />
                </CirclePosition>
              )
            }
          }
        />
        <Grid />
        <AvatarComments dataList={vizientData.commentList} />
      </div>
    </StyledPage>
  )
}