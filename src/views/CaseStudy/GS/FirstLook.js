import React from 'react'
import styled from 'styled-components'
import TextAndAnimation from 'components/TextAndAnimation'
import { LottieAnimation } from 'components/AnimationPlayer'
import MobileCarousel from 'components/MobileCarousel'

const isPC = window.isPC

const PCImgs = () => (
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
          animationData: require('assets/imgs/gs/6-first-glance/1.json'),
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
          animationData: require('assets/imgs/gs/6-first-glance/2.json'),
        }}
        width={800}
      />
    </div>
  </div>
)

const MobileImgsWrap = styled.div`
  padding: 0 0.2rem;
  margint-top: -0.3rem;
  .carousel .control-dots {
    bottom: 0.4rem;
    .dot {
      background: #fff;
      opacity: 1
      &.selected {
        background: #4493EE;
      }
    }
  }
`

const MobileImgs = ({ GSData }) => {
  const imgList = GSData.importanceImgs.map((item, index) => <img src={item} key={index} />)
  return (
    <MobileImgsWrap>
      <MobileCarousel list={imgList} />
    </MobileImgsWrap>
  )
}

const FirstLook = ({ GSData }) => {
  return (
    <div style={{
      background: 'linear-gradient(0deg, #E0EBF8, #E0EBF8)',
      padding: isPC ? '270px 0 160px' : 0,
      height: isPC ? '2710px' : '7.48rem'
    }}>
      <TextAndAnimation
        layoutType='left-text'
        {...GSData.importance}
        titleStyle={{
          width: '520px'
        }}
        wrapMinHeight={450}
      />
      {
        isPC ? <PCImgs /> : <MobileImgs GSData={GSData} />
      }
    </div>
  )
}

export default FirstLook