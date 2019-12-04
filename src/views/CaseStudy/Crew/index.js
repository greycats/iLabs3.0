import React from 'react'
import TheStory from 'components/TheStory'
import Banner from 'components/Banner'
import TextAndAnimation from 'components/TextAndAnimation'
import TextAndLottieSection from 'components/TextAndLottieSection'
import CommentsCard from 'components/CommentsCard'

import StartSmall from 'assets/imgs/crew/5-phone-double/data.json'
import Streamlined from 'assets/imgs/crew/6-phone-single/data.json'
import StyledPage from 'components/Styled/Page'
import StyledSection from 'components/Styled/Section'
import BannerContent from './BannerContent'
import TheChallenge from './TheChalleng'
import MobileCarousel from 'components/MobileCarousel'
import crewData from 'data/crewData'

export default () => {
  const isPC = window.isPC
  const mobileSolutionList = crewData.theSolutionsMobile.map((item, index) => <img src={item} key={index} />)
  return (
    <StyledPage>
      <div>
        {
          isPC ?
            <StyledSection>
              <div className="animation-banner">
                <Banner image={null}>
                  <BannerContent />
                </Banner>
              </div>
            </StyledSection>
            :
            <BannerContent />
        }

        <TheStory {...crewData.theStory} wrapStyle={isPC ? {} : { marginTop: '-1.8rem' }}></TheStory>

        <div style={{ backgroundColor: '#f5f5f5' }}>
          <TheChallenge {...crewData.challengeData} />
        </div>

        {
          isPC ?
            <TextAndLottieSection
              {...crewData.theSolutions}
              withName={false}
              lottieSize={{
                width: 392,
                height: 380
              }}
              style={{
                height: 815
              }}
            />
            :
            <div>
              <TextAndLottieSection
                {...crewData.theSolutions}
                withLottie={false}
              />
              <MobileCarousel list={mobileSolutionList} />
            </div>
        }

        <TextAndAnimation
          layoutType='left-text'
          {...crewData.startSmall}
          wrapStyle={isPC ? {
            padding: '240px 0 0'
          } : {
              marginTop: '1rem'
            }}
          wrapMinHeight="988px"
          titleStyle={{
            width: '520px'
          }}
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
          titleStyle={{
            width: '520px'
          }}
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
          wrapStyle={isPC ? {
            padding: '0 0 150px'
          } : {}}
          wrapMinHeight="420px"
          titleStyle={{
            width: '600px'
          }}
        />

        <CommentsCard commentList={crewData.commentList} />

      </div>
    </StyledPage>
  )
}