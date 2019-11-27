import React, { useState, useEffect } from 'react'
import TheStory from 'components/TheStory'
import Banner from 'components/Banner'
import TextAndAnimation from 'components/TextAndAnimation'
// import TextAndLottieSection from 'components/TextAndLottieSection'
import CommentsCard from 'components/CommentsCard'
import { LottieAnimation } from 'components/AnimationPlayer'

import StyledPage from 'components/Styled/Page'
import StyledSection from 'components/Styled/Section'
import BannerContent from './BannerContent'

import greatSchool from '../../../data/great.js'

import { lazyImport } from 'utils'

const Questions = lazyImport(import('views/CaseStudy/GS/Questions'))
const Challenge = lazyImport(import('views/CaseStudy/GS/TheChallenge'))
const Solution = lazyImport(import('views/CaseStudy/GS/Solution'))
const Presentation = lazyImport(import('views/CaseStudy/GS/Presentation'))
const FirstLook = lazyImport(import('views/CaseStudy/GS/FirstLook'))

export default () => {
  const [GSData, setGSdata] = useState(null)

  const getData = async () => {
    const data = await greatSchool()
    setGSdata(data)
  }

  useEffect(() => {
    getData()
  }, [])

  if (!GSData) {
    return <div style={{ height: '300vh', opacity: 0 }}></div>
  }

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

        <Challenge GSData={GSData} />

        <Solution GSData={GSData} />

        <Questions />

        <FirstLook GSData={GSData}/>

        <Presentation GSData={GSData} />

        <TextAndAnimation
          layoutType='left-text'
          {...GSData.progressive}
          titleStyle={{
            width: '520px'
          }}
          animateIcon={require('assets/imgs/gs/8-disclosure-1/data.json')}
          animationStyle={{
            width: 720,
            transform: 'translateY(-150px)',
          }}
          wrapStyle={{
            padding: 0
          }}
        />

        <TextAndAnimation
          layoutType='left-text'
          {...GSData.designed}
          titleStyle={{
            width: '520px'
          }}
          animateIcon={require('assets/imgs/gs/8-disclosure-2/data.json')}
          animationStyle={{
            width: 720
          }}
          wrapStyle={{
            padding: 0
          }}
        />

        <TextAndAnimation
          layoutType='left-text'
          {...GSData.digDeeper}
          titleStyle={{
            width: '520px'
          }}
          animateIcon={require('assets/imgs/gs/9-deeper/data.json')}
          animationStyle={{
            width: 720,
            transform: 'translateY(-50px)',
          }}
        />

        <TextAndAnimation
          layoutType='left-text'
          {...GSData.higherQuality}
          titleStyle={{
            width: '520px'
          }}
          animateIcon={require('assets/imgs/gs/10-reviews/data.json')}
          wrapStyle={{
            padding: '100px 0 50px'
          }}
          animationStyle={{
            width: 720,
            transform: 'translateY(-160px)',
          }}
        />

        <div style={{ height: 750, marginBottom: 70 }}>
          <LottieAnimation
            options={{
              animationData: require('assets/imgs/gs/11-devices/data.json'),
            }}
            height={750}
          />
        </div>

        <div className="layout-1240">
          <TextAndAnimation
            layoutType='left-text'
            wrapMinHeight={450}
            title={GSData.typeface.title}
            intro={GSData.typeface.intro}
            titleStyle={{
              width: '586px'
            }}
          />
          <div style={{
            height: 550,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}>
            {
              GSData.typeface.animationList.map((item, index) => (
                <div key={index} style={item.style}>
                  <LottieAnimation
                    options={{
                      animationData: item.img,
                    }}
                  />
                </div>
              ))
            }
          </div>
        </div>

        <div className="layout-1240">
          <TextAndAnimation
            layoutType='right-text'
            wrapMinHeight={450}
            title={GSData.colors.title}
            intro={GSData.colors.intro}
            titleStyle={{
              width: '600px'
            }}
            wrapStyle={{
              paddingBottom: 0
            }}
          />
          <div style={{
            height: 654,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginTop: '-200px',
            marginBottom: 105
          }}>
            {
              GSData.colors.animationList.map((item, index) => (
                <div key={index} style={{
                  width: 264
                }}>
                  <LottieAnimation
                    options={{
                      animationData: item.img,
                    }}
                  />
                </div>
              ))
            }
          </div>
        </div>

        <TextAndAnimation
          layoutType='left-text'
          {...GSData.grid}
          titleStyle={{
            width: '243px'
          }}
          animateIcon={require('assets/imgs/gs/14-grid/data.json')}
        />

        <div className="layout-1240" style={{ marginBottom: 50 }}>
          <TextAndAnimation
            layoutType='up-text'
            {...GSData.sitemap}
            titleStyle={{
              width: '600px'
            }}
            animateIcon={require('assets/imgs/gs/15-sitemap/data.json')}
          />
        </div>

        <CommentsCard commentList={GSData.commentList} />
      </div>
    </StyledPage>
  )
}