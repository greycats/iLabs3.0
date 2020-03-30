import React from 'react'
import CommonTitle from 'components/CommonTitle'
import AnimationPlayer, { LottieAnimation } from 'components/AnimationPlayer'

const lottieDuration = .8
export default ({ list, ...titleData }) => {
  const isPC = window.isPC

  return (
    <div style={{ display: isPC ? 'flex' : 'block' }} className="layout-1240 panel story-wrap">
      <div style={{
        width: isPC ? '48%' : '100%'
      }} className="title-part">
        <AnimationPlayer
          target={
            <div className="title-wrap" style={{ width: isPC ? '85%' : '100%' }}>
              <CommonTitle
                {...titleData}
              />
            </div>
          }
          animations={
            [
              {
                duration: 1,
                from: {
                  opacity: 0,
                  // height: 0
                },
                to: {
                  opacity: 1,
                  // height: isPC ? '394px' : '2.3rem'
                }
              }
            ]
          }
        />
      </div>
      <div className="right-part">
          <div className="data-wrap">
            {
              list.map((item, index) => (
                <div key={index} className="data-item">
                  <div className="icon">
                    <LottieAnimation
                      triggerRelativePosition={{
                        top: '-200px'
                      }}
                      id={`story_lottie_${index}`}
                      delay={isPC ? 0.2 * lottieDuration : 0}
                      options={{
                        animationData: item.img,
                      }}
                      width={86}
                      wrapHeight={96}
                    />
                  </div>
                  <div className="number" style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#2C2C2C',
                    fontSize: '20px',
                    fontWeight: 600,
                    maxHeight: 103
                  }}>
                    <AnimationPlayer
                      target={
                        <p>{item.text}</p>
                      }
                      animations={[{
                        from: { opacity: 0 },
                        to: { opacity: 1 }
                      }]}
                      delay={isPC ? lottieDuration : 0}
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
  )
}