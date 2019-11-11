import React from 'react'
import ControllerList from 'components/AnimateWrap/controllerList'
import Toolkit from 'assets/imgs/vizient/toolkit.png'
import Green from 'assets/imgs/vizient/Path 2.png'
import Orange from 'assets/imgs/vizient/Path 15.png'
import './index.sass'

export default () => {
  const controllerId = 'toolkit-trigger'
  const animateList = [
    {
      content: <div className="green-line"></div>,
      from: { width: 0 },
      to: { width: '1920px' },
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
      to: { width: '2000px' },
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