import React from 'react'
import { Tween, Timeline } from 'react-gsap'
import min from 'lodash/min'
import CommonTitle from 'components/CommonTitle'
import ControllerList from 'components/AnimateWrap/controllerList'
import Grey from 'assets/imgs/vizient/Grey Pattern.png'
import Mac2 from 'assets/imgs/vizient/Mac2.png'
import './index.sass'

export default () => {
  const controllerId = 'leverage-trigger'
  const clientWidth = min([document.body.clientWidth, 1920])
  const imgWidth = clientWidth - (clientWidth - 1240) / 2
  const animateList = [
    {
      content: (
        <div className="title-1">
          <CommonTitle width={490} title="Leveraged by multiple applications" />
        </div>
      ),
      from: { opacity: 0, top: '100px' },
      to: { opacity: 1, top: '30px' }
    },
    {
      content: (
        <div className="title-2">
          <CommonTitle width={490} intro="We were able to apply the new framework to both new and in flight Vizient products. Over a dozen different services integrated with the Toolkit through close collaboration and an established handoff process with their development team." />
        </div>
      ),
      from: { opacity: 0, top: '250px' },
      to: { opacity: 1, top: '174px' },
      delay: .3
    },
    {
      content: <div className="line-1"></div>,
      from: { width: 0 },
      to: { width: '1920px' },
      delay: .5,
      duration: 1000
    },
    {
      content: <img src={Grey} className="grey-img" style={{ width: imgWidth }} />,
      delay: 1.5,
      duration: 1000
    }
  ]
  return (
    <div className="leverage-wrap">
      <div className="controller-wrap">
        <div id={controllerId}></div>
        <div className="layout-1240">
          <ControllerList animateList={animateList} controllerId={controllerId} />
        </div>
        <ControllerList animateList={[{
          content: <div className="line-2"></div>,
          from: { width: 0 },
          to: { width: '1920px' },
          delay: .5,
          duration: 1000
        }]} controllerId={controllerId} />
      </div>
      <Timeline
        target={<img className="mac2" src={Mac2} />}
        repeat={-1}
      >
        <Tween
          from={{ top: '-15%' }} to={{ top: '-14%' }}
          duration={0.7}
        ></Tween>
        <Tween
          from={{ top: '-14%' }} to={{ top: '-15%' }}
          duration={0.7}
        ></Tween>
      </Timeline>
    </div>
  )
}