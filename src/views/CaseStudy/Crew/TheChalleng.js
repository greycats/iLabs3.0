import React from 'react'
import ChallengeAnimation1 from 'assets/imgs/crew/Challenge-1.json'
import CommonTitle from 'components/CommonTitle'
import AnimationPlayer, { LottieAnimation } from 'components/AnimationPlayer'

export default ({ title, intro, list }) => {
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
    description = 'To launch on 2 platforms simultaneously on short, regular ship cycles',
    mobileHeight = '1.32rem'
  }) => (
      <div style={{ display: 'flex', marginBottom: isPC ? '25px' : '0.45rem', height: isPC ? '90px' : mobileHeight, justifyContent: isPC ? 'unset' : 'space-between' }}>
        <div style={{ width: '82px', paddingTop: isPC ? 0 : '0.2rem' }}>
          {RowAnimation(lottieData, index)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '10px', width: isPC ? '420px' : '2rem' }}>
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
    <div style={{ display: isPC ? 'flex' : 'block' }} className="layout-1240 panel challenge-wrap">
      <div style={{
        width: isPC ? '48%' : '100%'
      }} className="title-part">
        <AnimationPlayer
          target={
            <div className="title-wrap" style={{ width: isPC ? '85%' : '100%' }}>
              <CommonTitle
                title={title}
                intro={intro}
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
                  height: isPC ? '394px' : '2.3rem'
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
        } : {
            padding: '0.45rem 0.2rem 0'
          }}
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