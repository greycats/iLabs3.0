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

import AnimationPlayer, { LottieAnimation } from 'components/AnimationPlayer'

import ChallengeAnimation1 from 'assets/imgs/crew/Challenge-1.json'
import ChallengeAnimation2 from 'assets/imgs/crew/Challenge-2.json'
import ChallengeAnimation3 from 'assets/imgs/crew/Challenge-3.json'

const challengeData = [
  {
    lottieData: ChallengeAnimation1,
    title: 'QUICK DEVELOPMENT',
    description: 'To launch on 2 platforms simultaneously on short, regular ship cycles'
  },
  {
    lottieData: ChallengeAnimation2,
    title: 'CLEAN CODE',
    description: 'To meet a consistently high bar of code quality and performance to satisfy client and user expectations'
  },
  {
    lottieData: ChallengeAnimation3,
    title: 'QUICK PROGRESS',
    description: 'To meet a consistently high bar of code quality and performance to satisfy client and user expectations'
  }
]

const TheChallenge = ({ list }) => {
  const rowHeight = 120
  const RowAnimation = (data, index) => (
    <LottieAnimation
      width='82px'
      triggerRelativePosition={
        {
          top: `-${index * rowHeight}px`
        }
      }
      delay={index * 0.3}
      options={{
        animationData: data
      }}
    />
  )

  const Row = ({
    index = 0,
    lottieData = ChallengeAnimation1,
    title = 'QUICK DEVELOPMENT',
    description = 'To launch on 2 platforms simultaneously on short, regular ship cycles'
  }) => (
      <div style={{ display: 'flex', marginBottom: '25px', height: '90px' }}>
        <div style={{ width: '82px' }}>
          <AnimationPlayer
            triggerRelativePosition={
              {
                top: `-${index * rowHeight}px`
              }
            }
            target={
              RowAnimation(lottieData, index)
            }
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '10px', width: '420px' }}>
          <AnimationPlayer
            triggerRelativePosition={
              {
                top: `-${index * rowHeight}px`
              }
            }
            target={
              <div>
                <p style={{
                  fontSize: '14px',
                  color: '#2c2c2c',
                  fontWeight: 'bold',
                  marginBottom: '10px'
                }}>{title}</p>
                <p style={{
                  fontSize: '16px',
                  color: '#656565'
                }}>{description}</p>
              </div>
            }
            animations={[
              {
                from: {
                  opacity: 0,
                },
                to: {
                  opacity: 1
                }
              }
            ]}
          />
        </div>
      </div>
    )

  return (
    <div style={{ display: 'flex' }} className="layout-1240 panel challenge-wrap">
      <div style={{
        width: '48%'
      }} className="title-part">
        <AnimationPlayer
          target={
            <div className="title-wrap" style={{ width: '85%' }}>
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
        paddingTop: '80px',
        paddingLeft: '40px'
      }}>
        {
          list.map((item, index) =>
            <Row
              key={index}
              index={index}
              lottieData={item.lottieData}
              title={item.title}
              description={item.description}
            />
          )
        }
      </div>
    </div>
  )
}

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

        <TheStory {...crewData.theStory}></TheStory>

        <div style={{ backgroundColor: '#f5f5f5' }}>
          <TheChallenge list={challengeData} />
        </div>

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

        <TextAndAnimation
          layoutType='left-text'
          {...crewData.startSmall}
          wrapStyle={{
            padding: '240px 0 0'
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
          wrapStyle={{
            padding: '0 0 150px'
          }}
          wrapMinHeight="420px"
          titleStyle={{
            width: '600px'
          }}
        />
        <AvatarComments dataList={crewData.commentList} />

      </div>
    </StyledPage>
  )
}