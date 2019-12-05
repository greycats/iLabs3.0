import React from 'react'
import AnimationPlayer from 'components/AnimationPlayer'
import MobileCarousel from 'components/MobileCarousel'
import CommonTitle from 'components/CommonTitle'
import '../../OurClients/index.sass'
import { logoList, introList } from '../../OurClients/data'

const swipeList = ({ introList }) => introList.map((item, index) => (
  <div className="item-wrap">
    <div key={index} className="client-item">
      <div className="text">{item.text}</div>
      <div className="name">{item.name}</div>
      <div className="info">{item.info}</div>
      <img src={item.logo} />
    </div>
  </div>
))

export default () => {
  const titleData = {
    title: 'Our clients',
    intro: 'Some friends we’ve made so far along the way.',
    titleMargin: '0.2rem'
  }
  return (
    <div className="panel">
      <div className="client-wrap">
        <AnimationPlayer
          target={
            <CommonTitle {...titleData}></CommonTitle>
          }
          animations={[
            {
              from: {
                opacity: 0
              },
              to: {
                opacity: 1
              }
            }
          ]}
        />
        <AnimationPlayer
          target={
            <div className="logo-wrap">
              {
                logoList.map((item, index) => (
                  <div key={index} className="logo-item">
                    <img src={require(`assets/imgs/client-logos/${item.img || 'great-schools'}.svg`)} />
                  </div>
                ))
              }
            </div>
          }
          animations={[
            {
              from: {
                opacity: 0,
                left: 100
              },
              to: {
                opacity: 1,
                left: 0
              }
            }
          ]}
        />

        <AnimationPlayer
          target={
            <div className="client-intro">
              <MobileCarousel
                list={swipeList({ introList })}
              />
            </div>
          }
          animations={[
            {
              from: {
                opacity: 0,
                left: 100
              },
              to: {
                opacity: 1,
                left: 0
              }
            }
          ]}
          delay={.5}
        />
      </div>
    </div >
  )
}