import React from 'react'
import ChallengeAnimation1 from 'assets/imgs/crew/3-Challenge/Challenge-1.json'
import CommonTitle from 'components/CommonTitle'
import AnimationPlayer, { LottieAnimation } from 'components/AnimationPlayer'

export default ({ list, ...titleData }) => {
  const isPC = window.isPC
  const rowHeight = 120
  const RowAnimation = (data, index) => (
    <LottieAnimation
      width='82px'
      triggerRelativePosition={
        {
          top: `-${index * rowHeight}px`
        }
      }
      delay={isPC ? index * 0.2 : 0}
      options={{
        animationData: data
      }}
    />
  )

  const Row = ({
    index = 0,
    lottieData = ChallengeAnimation1,
    title = 'QUICK DEVELOPMENT',
    description = 'To launch on 2 platforms simultaneously on short, regular ship cycles',
    mobileHeight = '1.2rem'
  }) => (
      <div style={{ display: 'flex', marginBottom: index === 2 ? 0 : (isPC ? '25px' : '0.45rem'), minHeight: isPC ? '90px' : mobileHeight, justifyContent: isPC ? 'unset' : 'space-between' }}>
        <div style={{ width: '80px' }}>
          {RowAnimation(lottieData, index)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: isPC ? 'center' : 'unset', paddingLeft: '10px', width: isPC ? '420px' : '2.27rem' }}>
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
                  color: '#656565',
                  fontWeight: 500,
                  letterSpacing: '1px'
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
    <div style={{ display: isPC ? 'flex' : 'block' }} className="layout-1240 panel">
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
      <div style={
        isPC ? {
          paddingTop: '80px',
          paddingLeft: '40px'
        } : {}}
      >
        {
          list.map((item, index) =>
            <Row
              key={index}
              index={index}
              {...item}
            />
          )
        }
      </div>
    </div>
  )
}