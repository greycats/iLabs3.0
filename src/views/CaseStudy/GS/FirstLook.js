import React, { useState, useEffect } from 'react'
import TextAndAnimation from 'components/TextAndAnimation'
import { LottieAnimation } from 'components/AnimationPlayer'

const FirstLook = ({ GSData }) => {
  return (
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
  )
}

export default FirstLook