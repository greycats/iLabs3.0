import React, { useState, useEffect } from 'react'
import StyledPage from 'components/Styled/Page'
import TheStory from 'components/TheStory'
import CaseStudyBanner from 'components/CaseStudyBanner'
import ShowCaseStudyPage from 'components/ShowCaseStudyPage'
import Solution from './Solution'
import TextAndAnimation from 'components/TextAndAnimation'
import CommentsCard from 'components/CommentsCard'

import BgAnimation from 'assets/imgs/fiton/Hero banner/Hero banner 1x.json'
import VisualIcon from 'assets/imgs/fiton/Celebrate.json'
import CelebrateIcon from 'assets/imgs/fiton/Celebrate.json'
import MotivationIcon from 'assets/imgs/fiton/Motivation.json'
import RealtimeIcon from 'assets/imgs/fiton/Real time feedback.json'

import fiton from 'data/fiton.js'
import Bg from './bg.svg'

import { getImageResult, getResult, loadFitOnData } from 'utils/lazyload'

const FitOn = ({ caseData }) => {
  return (
    <StyledPage>
      <CaseStudyBanner
        {...caseData.banner}
        BgAnimation={getResult('fiton_banner') || BgAnimation}
        MobileBannerBg={getImageResult('fiton-mobile-bg')}
        name='fiton'
      />
      <TheStory {...caseData.theStory}></TheStory>
      <div style={{ backgroundColor: '#f5f5f5' }}>
        <Solution {...caseData.theSolution} />
      </div>

      <TextAndAnimation
        layoutType='left-text'
        {...caseData.visual}
        titleStyle={{
          width: '495px',
          marginTop: '170px',
        }}
        animateIcon={getResult('fiton_visual') || VisualIcon}
        animateWidth={815}
        animationStyle={{
          width: '745px',
          right: '-20px',
        }}
      />

      <TextAndAnimation
        layoutType='right-text'
        {...caseData.motivation}
        titleStyle={{
          width: '495px',
          marginTop: '70px',
        }}
        animateIcon={getResult('fiton_motivation') || MotivationIcon}
        animateWidth={700}
        animationStyle={{
          width: '745px',
          right: '100px',
        }}
      />

      <TextAndAnimation
        layoutType='left-text'
        {...caseData.realtime}
        titleStyle={{
          width: '495px',
          marginTop: '70px',
        }}
        animateIcon={getResult('fiton_realtime') || RealtimeIcon}
        animateWidth={400}
        animationStyle={{
          width: '745px',
          right: '50px',
        }}
      />
      <TextAndAnimation
        layoutType='up-text'
        {...caseData.celebrate}
        animateIcon={CelebrateIcon}
        animateWidth={isPC ? 600 : 400}
        wrapMinHeight={isPC ? '930px' : '4.9rem'}
        titleStyle={{
          width: isPC ? '840px' : '500px',
          textAlign: 'center',
        }}
        mobileAnimationStyle={{
          transform: 'scale(1.2)',
          marginTop: '1rem',
        }}
        titleHeight={60}
      />

      <div className="fiton-comment">
        <CommentsCard
          commentList={caseData.commentList}
          overlayStyle={{
            backgroundColor: '#fff',
          }}
        />
      </div>
      <div
        style={{
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            // height: '1680px',
            left: 0,
            right: 0,
            top: isPC ? -1180 : -720,
            zIndex: -1,
            // background: 'linear-gradient(180deg, #FF6399 -19.58%, #A04BEB 25.71%)',
            // borderRadius: '100%'
          }}
        >
          <img src={Bg} alt='' />
          <div
            style={{
              height: 1000,
              background: '#A04BEB',
              marginTop: -10,
            }}
          ></div>
        </div>
      </div>
    </StyledPage>
  )
}

export default () => {
  return <ShowCaseStudyPage lazyloadMethod={fiton} commonDataMethod={loadFitOnData} component={FitOn} />
}
