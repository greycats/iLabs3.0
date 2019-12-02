import React from 'react'
import { Controller } from 'react-scrollmagic'
import AnimateItem from './index'

export default ({ animateList, controllerId }) => (
  <Controller>
    {
      animateList.map((item, index) => {
        item.controllerId = item.controllerId || controllerId
        return item.isHidden ? <div key={index}></div> : AnimateItem(item, index)
      })
    }
  </Controller>
)