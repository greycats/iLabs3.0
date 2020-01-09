import React from 'react'
import ControllerList from 'components/AnimateWrap/controllerList'
import Green from 'assets/imgs/vizient/5-toolkit/Path 1.png'
import useImage from 'hooks/useImage'
import './index.sass'

export default () => {
  const controllerId = 'toolkit-trigger'
  const isPC = window.isPC
  const Toolkit = useImage('toolkit')
  const Orange = useImage('orange-path')

  const animateList = [
    {
      content: <div className="green-line"></div>,
      from: { width: 0 },
      to: isPC ? { width: '1920px' } : {},
      delay: .5,
      duration: 2000
    },
    {
      content: <img src={Green} className="green-img" />,
      delay: 1
    },
    {
      content: <div className="orange-line"></div>,
      from: { width: 0 },
      to: isPC ? { width: '2000px' } : {},
      delay: .5,
      duration: 2000
    },
    {
      content: <img src={Orange} className="orange-img" />,
      delay: 1
    },
    {
      content: <img src={Toolkit} className="toolkit" />
    }
  ]
  return (
    <div className="toolkit-wrap">
      <div id={controllerId}></div>
      <ControllerList animateList={animateList} controllerId={controllerId} />
    </div>
  )
}