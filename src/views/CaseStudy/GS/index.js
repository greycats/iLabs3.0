import React from 'react'
import TheStory from 'components/TheStory'
import Banner from 'components/Banner'
import TextAndAnimation from 'components/TextAndAnimation'
import TextAndLottieSection from 'components/TextAndLottieSection'
import CommentsCard from 'components/CommentsCard'
import { LottieAnimation } from 'components/AnimationPlayer'

import StyledPage from 'components/Styled/Page'
import StyledSection from 'components/Styled/Section'
import BannerContent from './BannerContent'
import Questions from './Questions'

import TheChallenge from 'assets/imgs/gs/3-challenge-5-devices/data.json'
import GSData from 'data/gsData'

export default () => {

  const challengeCircleStyle = (index) => {
    const styles = [
      {
        width: 395,
        height: 395,
        right: '-150px',
        top: '-100px'
      },
      {
        width: 815,
        height: 815,
        left: '107px',
        bottom: '-242px'
      },
      {
        width: 476,
        height: 476,
        right: '151px',
        bottom: '366px'
      }
    ]
    return {
      background: '#fff',
      opacity: '0.08',
      position: 'absolute',
      borderRadius: '50%',
      ...styles[index]
    }
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

        <div style={{
          background: 'linear-gradient(75.35deg, #2D79D1 -30.2%, #52A2FF 118.87%)',
          position: 'relative',
          overflow: 'hidden',
          height: 1615
        }}>
          <div style={challengeCircleStyle(0)}></div>
          <div style={challengeCircleStyle(1)}></div>
          <div style={challengeCircleStyle(2)}></div>
          <TextAndLottieSection
            {...GSData.theChallenge}
            itemStyle={{
              width: 275
            }}
            titleWidth={600}
            isWhite={true}
            lottieSize={{
              width: 169,
              height: 169
            }}
          />
          <div style={{
            width: '1800px',
            marginLeft: '50%',
            transform: 'translateX(-50%)',
            marginTop: '85px'
          }}>
            <LottieAnimation
              options={{
                animationData: TheChallenge,
              }}
            />
          </div>
        </div>

        <TextAndAnimation
          layoutType='right-text'
          {...GSData.theSolution}
          titleStyle={{
            width: '600px'
          }}
          wrapMinHeight={1550}
          animateIcon={require('assets/imgs/gs/4-solution/data.json')}
          animationStyle={{
            width: '640px',
            transform: 'translateY(350px)',
            marginLeft: '-150px'
          }}
          animateWidth={1550}
          animateHeight={1000}
        />

        <Questions />


        <div style={{
          background: 'linear-gradient(0deg, #E0EBF8, #E0EBF8)',
          padding: '270px 0 160px',
          height: '2710px'
        }}>
          <TextAndAnimation
            layoutType='left-text'
            {...GSData.importance}
            titleStyle={{
              width: '520px'
            }}
            wrapMinHeight={450}
          />
          <div className="layout-1240" style={{
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              right: '-100px',
              top: '-390px'
            }}>
              <LottieAnimation
                options={{
                  animationData: require('assets/imgs/gs/6-first-glance-1/data.json'),
                }}
                width={800}
              />
            </div>
            <div style={{
              position: 'absolute',
              left: '-100px',
              top: '-400px'
            }}>
              <LottieAnimation
                options={{
                  animationData: require('assets/imgs/gs/6-first-glance-2/data.json'),
                }}
                width={800}
              />
            </div>
          </div>
        </div>

        <TextAndAnimation
          layoutType='up-text'
          {...GSData.presentation}
          titleStyle={{
            width: '520px'
          }}
          wrapMinHeight={1200}
          animateIcon={require('assets/imgs/gs/7-data/data.json')}
          animationStyle={{
            position: 'absolute',
            top: '300px',
            right: 0,
            paddingLeft: 200
          }}
        />

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

        <div className="layout-1240" style={{marginBottom: 50}}>
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