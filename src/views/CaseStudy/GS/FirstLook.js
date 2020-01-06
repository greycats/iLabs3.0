import React from 'react'
import styled from 'styled-components'
import TextAndAnimation from 'components/TextAndAnimation'
import { LottieAnimation } from 'components/AnimationPlayer'
import MobileCarousel from 'components/MobileCarousel'

const PCImgs = ({GSData}) => (
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
          animationData: GSData.firstGlance[0],
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
          animationData: GSData.firstGlance[1],
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
  const isPC = window.isPC
  return (
    <div style={{
      background: 'linear-gradient(0deg, #E0EBF8, #E0EBF8)',
      padding: isPC ? '220px 0 160px' : 0,
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
        isPC ? <PCImgs GSData={GSData} /> : <MobileImgs GSData={GSData} />
      }
    </div>
  )
}

export default FirstLook