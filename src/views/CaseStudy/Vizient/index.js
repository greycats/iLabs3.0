import React from 'react'
import styled from 'styled-components'
import TheStory from 'components/TheStory'
import TextAndAnimation from 'components/TextAndAnimation'
import TextAndLottieSection from 'components/TextAndLottieSection'
import Toolkit from './Toolkit'
import Grid from './Grid'
import Leverage from './Leverage'

import ComponentsForWeb from 'assets/imgs/vizient/6-Components'
import BaseOn from 'assets/imgs/vizient/7-BaseOn'
import ColorImage from 'assets/imgs/vizient/10-Color'
import ColorCircle from 'assets/imgs/vizient/10-Color/ColorCircle'
import TypefaceText from 'assets/imgs/vizient/9-Typeface/text'
import MobileTypefaceText from 'assets/imgs/vizient/mobile/Typeface.png'
import TypefaceImage from 'assets/imgs/vizient/9-Typeface/screenshot'
import StyledPage from 'components/Styled/Page'
import ChallengeImg from 'assets/imgs/vizient/3-The-challenge/challenge-image.png'
import vizientData from 'data/vizientData'

import { AbsolutePositionWrap } from 'components/Styled'
import AnimationPlayer, { LottieAnimation } from 'components/AnimationPlayer'

import Banner from './Banner'

export default () => {

  const isPC = window.isPC

  return (
    <StyledPage>
      <div>
        <Banner/>

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
            marginTop: '170px'
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
              const TypePosition = AbsolutePositionWrap({ left: ' -30px', top: '228px' })
              return isPC ?
                <TypePosition>
                  <LottieAnimation
                    triggerRelativePosition={{
                      top: '-200px'
                    }}
                    width='495px'
                    height='109px'
                    options={{
                      animationData: TypefaceText
                    }} />
                </TypePosition>
                :
                <AnimationPlayer
                  target={
                    <div style={{
                      position: 'relative'
                    }}>
                      <img src={MobileTypefaceText} />
                    </div>
                  }
                  animations={
                    [
                      {
                        from: {
                          opacity: 0,
                          top: '100px'
                        },
                        to: {
                          opacity: 1,
                          top: 0
                        }
                      }
                    ]
                  }
                />

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
          mobileAnimationStyle={{
            transform: 'scale(1.2)'
          }}
          SubComponent={
            () => {
              const CirclePosition = isPC ? AbsolutePositionWrap({ left: '-25px', top: '335px' }) : styled.div``
              return (
                <CirclePosition>
                  <LottieAnimation
                    // triggerRelativePosition={{
                    //   top: '-200px'
                    // }}
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
      </div>
    </StyledPage>
  )
}