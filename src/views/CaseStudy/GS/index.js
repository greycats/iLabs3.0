import React from 'react'
import TheStory from 'components/TheStory'
import Banner from 'components/Banner'
import TextAndAnimation from 'components/TextAndAnimation'
import TextAndLottieSection from 'components/TextAndLottieSection'
import CommentsCard from 'components/CommentsCard'

import StyledPage from 'components/Styled/Page'
import StyledSection from 'components/Styled/Section'

import BaseOn from 'assets/imgs/vizient/BaseOn'
import BannerContent from './BannerContent'
import GSData from 'data/GSData'

import AnimationPlayer from 'components/AnimationPlayer'
import Questions from './Questions'

export default () => {

  return (
    <StyledPage>
      <div>
        <StyledSection>
          <div className="animation-banner">
            <Banner image={null}>
              <BannerContent />
            </Banner>
          </div>
        </StyledSection>

        <TheStory {...GSData.theStory}></TheStory>

        <div style={{
          background: 'linear-gradient(75.35deg, #2D79D1 -30.2%, #52A2FF 118.87%)'
        }}>
          <TextAndLottieSection
            {...GSData.theChallenge}
            itemStyle={{
              width: 275
            }}
            titleWidth={600}
            isWhite={true}
          />
        </div>

        <TextAndAnimation
          layoutType='right-text'
          {...GSData.theSolution}
          titleStyle={{
            width: '600px'
          }}
        />

        <Questions />


        <div style={{
          background: 'linear-gradient(0deg, #E0EBF8, #E0EBF8)',
          padding: '270px 0 160px'
        }}>
          <TextAndAnimation
            layoutType='left-text'
            {...GSData.importance}
            titleStyle={{
              width: '520px'
            }}
          />
        </div>

        <TextAndAnimation
          layoutType='up-text'
          {...GSData.presentation}
          titleStyle={{
            width: '520px'
          }}
        />

        <TextAndAnimation
          layoutType='left-text'
          {...GSData.progressive}
          titleStyle={{
            width: '520px'
          }}
          animateIcon={BaseOn}
        />

        <TextAndAnimation
          layoutType='left-text'
          {...GSData.designed}
          titleStyle={{
            width: '520px'
          }}
          animateIcon={BaseOn}
        />

        <TextAndAnimation
          layoutType='left-text'
          {...GSData.digDeeper}
          titleStyle={{
            width: '520px'
          }}
          animateIcon={BaseOn}
        />

        <TextAndAnimation
          layoutType='left-text'
          {...GSData.higherQuality}
          titleStyle={{
            width: '520px'
          }}
          animateIcon={BaseOn}
        />

        <TextAndAnimation
          layoutType='left-text'
          {...GSData.typeface}
          titleStyle={{
            width: '586px'
          }}
        />

        <TextAndAnimation
          layoutType='right-text'
          {...GSData.colors}
          titleStyle={{
            width: '600px'
          }}
        />

        <TextAndAnimation
          layoutType='left-text'
          {...GSData.grid}
          titleStyle={{
            width: '243px'
          }}
          animateIcon={BaseOn}
        />

        <TextAndAnimation
          layoutType='up-text'
          {...GSData.sitemapc}
          titleStyle={{
            width: '600px'
          }}
        />

        <CommentsCard commentList={GSData.commentList} />
      </div>
    </StyledPage>
  )
}