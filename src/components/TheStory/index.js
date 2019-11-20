import React, { Fragment } from 'react'
import AnimationPlayer, { LottieAnimation, CountUpAnimation } from 'components/AnimationPlayer'
import CommonTitle from 'components/CommonTitle'
import './index.sass'

const lottieDuration = .8

export default ({
  story = [],
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
                      delay={index * lottieDuration}
                      options={{
                        autoplay: true,
                        loop: false,
                        animationData: item.img,
                        rendererSettings: {
                          preserveAspectRatio: 'xMidYMid slice'
                        }
                      }}
                      height={86}
                      width={86}
                    />
                  </div>
                  <div className="number">
                    <CountUpAnimation
                      triggerRelativePosition={{
                        top: '-200px'
                      }}
                      id={`story_countup_${index}`}
                      delay={index * lottieDuration}
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
                      delay={index * lottieDuration}
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