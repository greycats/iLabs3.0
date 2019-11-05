import React, { useEffect } from 'react'
import CommonTitle from 'components/CommonTitle'
import GoToArrow from 'components/GoToArrow'
import Img from 'assets/imgs/gif/work.svg'
import './index.sass'
const tl = new TimelineMax()

export default () => {
  useEffect(() => {
  }, [])
  const titleData = {
    title: 'How we work',
    intro: 'Think and create collaboratively with passion and a singular vision',
    width: '298px'
  }
  const howList = [
    {
      img: Img,
      title: 'Collaborative',
      intro: 'We collaborate with you and integrate your input at every step of the way.'
    },
    {
      img: Img,
      title: 'Iterative',
      intro: 'We iterative on solutions, user test frequently and fine tune based on numbers to maximize outcomes.'
    },
    {
      img: Img,
      title: 'Flexible',
      intro: 'We deploy a flexible team with diverse skills to cover all bases.'
    },
    {
      img: Img,
      title: 'Data Driven',
      intro: 'We believe metrics are the only clear indicators of success. We set goals/KPIs to exceed them.'
    }
  ]
  return (
    <div className="work-wrap">
      <div className="layout-1240 panel">
        <CommonTitle {...titleData}></CommonTitle>
        <div className="how-wrap">
        {
          howList.map((item, index) => (
            <div key={index} className="how-item">
              <img src={item.img} />
              <div className="title">{item.title}</div>
              <div className="intro">{item.intro}</div>
            </div>
          ))
        }
        </div>
        <GoToArrow text="View process"></GoToArrow>
      </div>
    </div>
  )
}