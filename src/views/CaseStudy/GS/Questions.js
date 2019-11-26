import React from 'react'
import AnimationPlayer, { LottieAnimation } from 'components/AnimationPlayer'

import approachData from 'assets/imgs/gs/questions/approach.json'
import step1Data from 'assets/imgs/gs/questions/1.json'
import step2Data from 'assets/imgs/gs/questions/2.json'
import step3Data from 'assets/imgs/gs/questions/3.json'

const RowAnimations = () => {
  const dataList = [
    step1Data,
    step2Data,
    step3Data
  ]

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center'
    }}>
      {
        dataList.map((d, index) => (
          <LottieAnimation
            key={index}
            delay={index * .2}
            options={{
              animationData: d
            }}
          />
        ))
      }
    </div>
  )
}

const TextList = () => {
  const text = [
    {
      title: 'Plan',
      content: 'We outlined how we believed users would derive value from the design. We then developed a plan to test our theories.'
    },
    {
      title: 'Test',
      content: 'Our user research team conducted structured user tests, observing how real users interacted with several design prototypes.'
    },
    {
      title: 'Analyze',
      content: 'Our cross functional team reviewed the results to fine tune future iterations.'
    }
  ]

  return <div>
    {
      text.map((t, index) => {
        return <div key={index}>
          <p style={{
            color: '#2C2C2C',
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '10px'
          }}>{t.title}</p>
          <p style={{
            color: '#2C2C2C',
            fontSize: '16px',
            width: '360px',
            marginBottom: '20px'
          }}>{t.content}</p>
        </div>
      })
    }
  </div>
}

export default () => {
  return (
    <div className="layout-1240 panel challenge-wrap" style={{ height: '95vh', minHeight: '1350px' }}>
      <AnimationPlayer
        target={
          <div style={{
            fontSize: '44px',
            fontWeight: 'bold',
            color: '#2C2C2C',
            marginBottom: '100px'
          }}>
            The Questions
          </div>
        }
        animations={
          [
            {
              from: {
                opacity: 0
              },
              to: {
                opacity: 1
              }
            }
          ]
        }
      />
      <RowAnimations />
      <div style={{ display: 'flex' }}>
        <div style={{ width: '40%' }}>
          <AnimationPlayer
            triggerRelativePosition={{
              top: '-120px'
            }}
            delay={1}
            target={
              <div>
                <p style={{
                  color: '#2C2C2C',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  marginBottom: '50px'
                }}>Holistic approach</p>
                <TextList />
              </div>
            }
            animations={
              [
                {
                  from: {
                    opacity: 0
                  },
                  to: {
                    opacity: 1
                  }
                }
              ]
            }
          />
        </div>
        <div>
          <LottieAnimation
            options={{
              animationData: approachData
            }}
          />
        </div>
      </div>
    </div>
  )
}