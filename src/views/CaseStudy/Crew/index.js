import React, {useEffect} from 'react'
import TheStory from 'components/TheStory'
import TextAndAnimation from 'components/TextAndAnimation'
import TextAndLottieSection from 'components/TextAndLottieSection'
import CommentsCard from 'components/CommentsCard'

import StartSmall from 'assets/imgs/crew/5-phone-double.json'
import Streamlined from 'assets/imgs/crew/6-phone-single.json'
import StyledPage from 'components/Styled/Page'
import TheChallenge from './TheChalleng'
import MobileCarousel from 'components/MobileCarousel'
import crewData from 'data/crewData'
import CaseStudyBanner from 'components/CaseStudyBanner'
import BgAnimation from 'assets/imgs/banners/Crew/@1x/Crew-3-Floating-@1x/data.json'

import { getResult, loadCrewData, getImageResult } from 'utils/lazyload'

export default () => {
  const isPC = window.isPC
  const mobileSolutionList = crewData.theSolutionsMobile.map((item, index) => <img src={item} key={index} style={{ padding: '0 0.05rem' }} />)
  useEffect(() => {
    loadCrewData()
  }, [])
  return (
    <StyledPage>
      <div>
        <CaseStudyBanner {...crewData.banner} BgAnimation={getResult('crew_banner') || BgAnimation} MobileBannerBg={getImageResult('crew-mobile-bg')} name="crew"/>

        <TheStory {...crewData.theStory}></TheStory>

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
              <div style={{ padding: '0 0.2rem' }}>
                <MobileCarousel
                  list={mobileSolutionList}
                  centerSlidePercentage={95}
                />
              </div>
            </div>
        }

        {
          isPC ?
            <div className="layout-1240" style={{ height: 2, background: '#f5f5f5' }}></div>
            : null
        }

        <TextAndAnimation
          layoutType='left-text'
          {...crewData.startSmall}
          wrapStyle={isPC ? {
            padding: '140px 0 0',
            height: '900px'
          } : {
              marginTop: '1rem'
            }}
          titleStyle={{
            width: '520px'
          }}
          animateIcon={getResult('crew_phone-double') || StartSmall}
          animationStyle={{
            top: '-120px',
            width: '720px'
          }}
          animateWidth={888}
          mobileAnimationStyle={{
            transform: 'scale(1.5)',
            marginTop: '0.5rem'
          }}
        />

        <TextAndAnimation
          layoutType='right-text'
          {...crewData.streamlined}
          titleStyle={{
            width: '520px'
          }}
          animateIcon={getResult('crew_phone-single') || Streamlined}
          animationStyle={{
            top: '-200px',
            left: '-300px',
            width: '720px',
            height: '950px'
          }}
          animateWidth={1200}
          mobileAnimationStyle={{
            transform: 'scale(1.5)',
            marginTop: '0.5rem'
          }}
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
          triggerRelativePosition={{
            top: '-200px'
          }}
        />

        <CommentsCard commentList={crewData.commentList} />

      </div>
    </StyledPage>
  )
}