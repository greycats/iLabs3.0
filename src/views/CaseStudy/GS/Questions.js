import React from 'react'
import AnimationPlayer, { LottieAnimation } from 'components/AnimationPlayer'

// import approachData from 'assets/imgs/gs/5-questions/approach.json'
// import step1Data from 'assets/imgs/gs/5-questions/1.json'
// import step2Data from 'assets/imgs/gs/5-questions/2.json'
// import step3Data from 'assets/imgs/gs/5-questions/3.json'

const isPC = window.isPC

const RowAnimations = ({ dataList = [] }) => {

  return (
    <div style={isPC ? {
      display: 'flex',
      alignItems: 'center'
    } : {}}>
      {
        dataList.map((d, index) => (
          <LottieAnimation
            key={index}
            options={{
              animationData: d
            }}
            triggerRelativePosition={(!isPC && index !== 0) ? {
              marginTop: '-0.8rem'
            } : {}}
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
            width: isPC ? '360px' : 'auto',
            marginBottom: '20px'
          }}>{t.content}</p>
        </div>
      })
    }
  </div>
}

export default ({ GSData = {} }) => {
  const { approachData, step1Data, step2Data, step3Data } = GSData.questions
  const dataList = [
    step1Data,
    step2Data,
    step3Data
  ]

  return (
    <div className="layout-1240 panel challenge-wrap" style={{ height: isPC ? '95vh' : '15.8rem', minHeight: '1350px' }}>
      <AnimationPlayer
        target={
          <div style={{
            fontSize: isPC ? '44px' : '32px',
            lineHeight: 1,
            fontWeight: 'bold',
            color: '#2C2C2C',
            marginBottom: isPC ? '100px' : '0.54rem'
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
      <RowAnimations dataList={dataList} />
      <div style={{ display: isPC ? 'flex' : 'block' }}>
        <div style={{ width: isPC ? '40%' : 'auto' }}>
          <AnimationPlayer
            triggerRelativePosition={{
              top: '-120px'
            }}
            delay={1}
            target={
              <div style={{ marginTop: '123px' }}>
                <p style={{
                  color: '#2C2C2C',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  marginBottom: '50px',
                  textTransform: 'uppercase'
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
        <div style={isPC ? { flex: 1 } : { transform: 'scale(1.2)', marginTop: '0.4rem' }}>
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