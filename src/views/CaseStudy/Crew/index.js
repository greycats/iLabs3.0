import React from 'react'
import TheStory from 'components/TheStory'
import Banner from 'components/Banner'
import TextAndAnimation from 'components/TextAndAnimation'
import TextAndLottieSection from 'components/TextAndLottieSection'
import AvatarComments from 'components/AvatarComments'
import CommonTitle from 'components/CommonTitle'

import StartSmall from 'assets/imgs/crew/5-phone-double.json'
import Streamlined from 'assets/imgs/crew/6-phone-single.json'
import StyledPage from 'components/Styled/Page'
import StyledSection from 'components/Styled/Section'
import BannerContent from './BannerContent'
import crewData from 'data/crewData'

import AnimationPlayer from 'components/AnimationPlayer'

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

        <TheStory {...crewData.theStoryData}></TheStory>

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

        <TextAndLottieSection
          {...crewData.theSolutions}
          withName={false}
          lottieSize={{
            width: 392,
            height: 380
          }}
          style={{
            height:815
          }}
        />

        <TextAndAnimation
          layoutType='left-text'
          {...crewData.startSmall}
          wrapMinHeight="988px"
          titleHeight="120px"
          titleStyle={
            {
              width: '520px'
            }
          }
          animateIcon={StartSmall}
          animationStyle={{
            top: '-120px',
            width: '720px'
          }}
          animateWidth={888}
        />

        <TextAndAnimation
          layoutType='right-text'
          {...crewData.streamlined}
          titleHeight="120px"
          titleStyle={
            {
              width: '520px'
            }
          }
          animateIcon={Streamlined}
          animationStyle={{
            top: '-200px',
            left: '-300px',
            width: '720px',
            height: '950px'
          }}
          animateWidth={1200}
        />

        <TextAndAnimation
          layoutType='up-text'
          {...crewData.buildTeam}
          wrapMinHeight="420px"
          titleStyle={
            {
              width: '600px'
            }
          }
        />
        <AvatarComments dataList={crewData.commentList} />

      </div>
    </StyledPage>
  )
}