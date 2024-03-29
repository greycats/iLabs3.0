import React, { useEffect } from 'react'
import CommonTitle from 'components/CommonTitle'
import MobileCarousel from 'components/MobileCarousel'
import { LottieAnimation } from 'components/AnimationPlayer'
import './index.sass'

const lottieList = ({ howList }) => howList.map((item, index) => {
  return (
    <div key={index} className="how-item">
      <LottieAnimation
        triggerRelativePosition={{
          top: '-40vh'
        }}
        width='120%'
        options={{
          loop: true,
          animationData: item.img
        }}
        wrapHeight={270}
      />
      <div style={{
        position: 'relative',
        left: '20px'
      }}>
        <div className="title">{item.title}</div>
        <div className="intro">{item.intro}</div>
      </div>
    </div>
  )
})

export default () => {
  const isPC = window.isPC
  useEffect(() => {
  }, [])
  const titleData = {
    title: 'How we work',
    // intro: 'Think and create collaboratively with passion and a singular vision',
    width: '298px'
  }
  const howList = [
    {
      img: require('assets/imgs/how-we-work/1/data.json'),
      title: 'Collaborative',
      intro: 'We collaborate with you and integrate your input at every step of the way.'
    },
    {
      img: require('assets/imgs/how-we-work/2/data.json'),
      title: 'Iterative',
      intro: 'We iterate on solutions, user test frequently and fine tune based on numbers to maximize outcomes.'
    },
    {
      img: require('assets/imgs/how-we-work/3/data.json'),
      title: 'Flexible',
      intro: 'We deploy a flexible team with diverse skills to cover all bases.'
    },
    {
      img: require('assets/imgs/how-we-work/4/data.json'),
      title: 'Data Driven',
      intro: 'We believe metrics are the only clear indicators of success. We set goals/KPIs regularly and aim to exceed them.'
    }
  ]
  return (
    <div className="work-wrap">
      <div className="layout-1240 panel">
        <CommonTitle {...titleData}></CommonTitle>
        {
          isPC ?
            <div className="how-wrap">
              {lottieList({ howList })}
            </div>
            :
            <MobileCarousel
              list={lottieList({ howList })}
              centerSlidePercentage={80}
            />
        }
      </div>
    </div>
  )
}