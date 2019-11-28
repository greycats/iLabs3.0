import React, { Fragment } from 'react'
import AnimationPlayer, { LottieAnimation, CountUpAnimation } from 'components/AnimationPlayer'
import CommonTitle from 'components/CommonTitle'
import './index.sass'

const lottieDuration = .8
const isPC = window.isPC

export default ({
  story = [],
  storyHeight = 0,
  dataList = []
}) => {
  return (
    <div style={{ position: 'relative' }}>
      <div className="layout-1240 panel story-wrap">
        <div className="left-part">
          <AnimationPlayer
            target={
              <div className="title-wrap">
                <CommonTitle title="The Story"></CommonTitle>
              </div>
            }
            animations={[{
              from: {
                opacity: 0,
                height: 0
              },
              to: {
                opacity: 1,
                height: '44px'
              },
              duration: .8
            }]}
            height={44}
          />
        </div>
        <div className="right-part">
          <div className="text">
            <AnimationPlayer
              target={
                <Fragment>
                  {story.map((item, index) => <p key={index}>{item}</p>)}
                </Fragment>
              }
              animations={[{
                from: { opacity: 0 },
                to: { opacity: 1 }
              }]}
              triggerRelativePosition={{
                top: '-200px'
              }}
              height={storyHeight}
            />
          </div>
          <div className="data-wrap">
            {
              dataList.map((item, index) => (
                <div key={index} className="data-item">
                  <div className="icon">
                    <LottieAnimation
                      triggerRelativePosition={{
                        top: '-200px'
                      }}
                      id={`story_lottie_${index}`}
                      delay={isPC ? index * lottieDuration : 0}
                      options={{
                        animationData: item.img,
                      }}
                      width={86}
                      height={96}
                      wrapHeight={96}
                    />
                  </div>
                  <div className="number">
                    <CountUpAnimation
                      triggerRelativePosition={{
                        top: '-200px'
                      }}
                      id={`story_countup_${index}`}
                      delay={isPC ? index * lottieDuration : 0}
                      end={item.number}
                      decimals={item.decimals}
                      suffix={item.suffix}
                    />
                    <AnimationPlayer
                      target={
                        <p>{item.name}</p>
                      }
                      animations={[{
                        from: { opacity: 0 },
                        to: { opacity: 1 }
                      }]}
                      delay={isPC ? index * lottieDuration : 0}
                      triggerRelativePosition={{
                        top: '-200px'
                      }}
                    />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}