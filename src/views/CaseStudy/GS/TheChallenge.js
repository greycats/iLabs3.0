import React, { useState, useEffect } from 'react'
import TextAndLottieSection from 'components/TextAndLottieSection'
import { LottieAnimation } from 'components/AnimationPlayer'

const isPC = window.isPC

const Challenge = ({ GSData }) => {
  const [animationData, setAnimationData] = useState(null)

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

  const getData = async () => {
    const data = await import('assets/imgs/gs/3-challenge/5-devices')

    setAnimationData(data.default)
  }

  useEffect(() => {
    getData()
  }, [])

  if (!animationData) {
    return <div style={{ height: '1300px', opacity: 0 }}></div>
  }

  return (
    <div style={{
      background: 'linear-gradient(75.35deg, #2D79D1 -30.2%, #52A2FF 118.87%)',
      position: 'relative',
      overflow: 'hidden',
      height: isPC ? 1615 : '19.2rem'
    }}>
      <div style={challengeCircleStyle(0)}></div>
      <div style={challengeCircleStyle(1)}></div>
      <div style={challengeCircleStyle(2)}></div>
      <TextAndLottieSection
        {...GSData.theChallenge}
        itemStyle={{
          width: isPC ? 275 : '85%',
          marginTop: '0.45rem'
        }}
        titleWidth={600}
        isWhite={true}
        lottieSize={{
          width: 169,
          height: 169
        }}
      />
      <div style={isPC ?
        {
          width: '1800px',
          marginLeft: '50%',
          transform: 'translateX(-50%)',
          marginTop: '85px'
        } : {}
      }>
        <LottieAnimation
          options={{
            animationData,
          }}
        />
      </div>
    </div>
  )
}

export default Challenge