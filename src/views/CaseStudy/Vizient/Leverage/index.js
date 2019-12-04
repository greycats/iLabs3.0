import React from 'react'
import { Tween, Timeline } from 'react-gsap'
import min from 'lodash/min'
import CommonTitle from 'components/CommonTitle'
import ControllerList from 'components/AnimateWrap/controllerList'
import Grey from 'assets/imgs/vizient/8-Leveraged/Grey Pattern.png'
import './index.sass'
import useImage from 'hooks/useImage'

const isPC = window.isPC

export default () => {
  const controllerId = 'leverage-trigger'
  const clientWidth = min([document.body.clientWidth, 1920])
  const imgWidth = clientWidth - (clientWidth - 1240) / 2

  const Mac2 = useImage('vizient-mac-image')

  const animateList = [
    {
      content: (
        <div className="title-1">
          <CommonTitle width={490} title="Leveraged by multiple applications" />
        </div>
      ),
      from: { opacity: 0, top: isPC ? '100px' : '0.5rem' },
      to: { opacity: 1, top: isPC ? '30px' : 0 }
    },
    {
      content: (
        <div className="title-2">
          <CommonTitle width={490} intro="We were able to apply the new framework to both new and in flight Vizient products. Over a dozen different services integrated with the Toolkit through close collaboration and an established handoff process with their development team." />
        </div>
      ),
      from: { opacity: 0, top: isPC ? '250px' : '0.5rem' },
      to: { opacity: 1, top: isPC ? '174px' : 0 },
      delay: .3
    },
    {
      content: <div className="line-1"></div>,
      from: { width: 0 },
      to: { width: '1920px' },
      delay: .3,
      duration: 500
    },
    {
      content: <img src={Grey} className="grey-img" style={{ width: isPC ? imgWidth : '150%' }} />,
      delay: 1,
      duration: 500
    }
  ]

  const macTween = [
    {
      from: { top: isPC ? '-15%' : '0.6rem' },
      to: { top: isPC ? '-14%' : '0.5rem' }
    },
    {
      from: { top: isPC ? '-14%' : '0.5rem' },
      to: { top: isPC ? '-15%' : '0.6rem' }
    }
  ]
  return (
    <div className="leverage-wrap">
      <div className="controller-wrap">
        <div id={controllerId}></div>
        <div className="layout-1240">
          <ControllerList animateList={animateList} controllerId={controllerId} />
        </div>
        <ControllerList
          animateList={[{
            content: <div className="line-2"></div>,
            from: { width: 0 },
            to: { width: isPC ? '1920px' : 0 },
            delay: .5,
            duration: 1000
          }]}
          controllerId={controllerId} />
      </div>
      <Timeline
        target={<img className="mac2" src={Mac2} />}
        repeat={-1}
      >
        <Tween
          {...macTween[0]}
          duration={0.7}
        ></Tween>
        <Tween
          {...macTween[1]}
          duration={0.7}
        ></Tween>
      </Timeline>
    </div>
  )
}