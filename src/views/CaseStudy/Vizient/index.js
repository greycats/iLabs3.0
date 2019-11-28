import React from 'react'
import styled from 'styled-components'
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

  const isPC = window.isPC

  return (
    <StyledPage>
      <div>
        <StyledSection>
          <Banner image={VizientImage}>
            <BannerContent />
          </Banner>
        </StyledSection>
        <TheStory {...vizientData.theStory}></TheStory>
        <TextAndLottieSection
          {...vizientData.theChallenge}
          style={{
            background: `url(${ChallengeImg})`,
            backgroundSize: 'contain'
          }}
        />
        <TextAndLottieSection
          {...vizientData.theSolution}
        />
        <Toolkit />

        <TextAndAnimation
          layoutType='left-text'
          {...vizientData.componentsForWeb}
          titleStyle={{
            width: '495px',
            marginTop: '230px'
          }}
          animateIcon={ComponentsForWeb}
          animateWidth={815}
          animationStyle={{
            width: '745px',
            right: '-20px'
          }}
        />

        <TextAndAnimation
          layoutType='right-text'
          {...vizientData.basedOn}
          titleStyle={{
            width: '495px',
            marginTop: '140px',
          }}
          animateIcon={BaseOn}
          animationStyle={{
            width: '745px',
          }}
        />

        <Leverage />

        <TextAndAnimation
          layoutType='right-text'
          {...vizientData.typeface}
          titleStyle={{
            width: '495px',
            marginTop: '230px',
          }}
          animateIcon={TypefaceImage}
          animateWidth={740}
          SubComponent={
            () => {
              const TypePosition = AbsolutePositionWrap({ left: '-30px', top: '208px' })
              return (
                <TypePosition>
                  <LottieAnimation
                    triggerRelativePosition={{
                      top: '-200px'
                    }}
                    width='495px'
                    height='109px'
                    options={{
                      animationData: TypefaceText,
                    }} />
                </TypePosition>
              )
            }
          }
        />

        <TextAndAnimation
          layoutType='left-text'
          {...vizientData.color}
          titleStyle={{
            width: '495px',
            marginTop: '150px',
          }}
          animateIcon={ColorImage}
          animateWidth={isPC ? 740 : '100%'}
          SubComponent={
            () => {
              const CirclePosition = isPC ? AbsolutePositionWrap({ left: '-25px', top: '320px' }) : styled.div``
              return (
                <CirclePosition>
                  <LottieAnimation
                    triggerRelativePosition={{
                      top: '-200px'
                    }}
                    width={isPC ? '458px' : 'auto'}
                    height={isPC ? '100px' : 'auto'}
                    options={{
                      animationData: ColorCircle,
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