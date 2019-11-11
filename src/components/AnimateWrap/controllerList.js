import React from 'react'
import { Controller } from 'react-scrollmagic'
import AnimateItem from './index'

export default ({ animateList, controllerId }) => (
  <Controller>
    {
      animateList.map(item => {
        item.controllerId = item.controllerId || controllerId
        return AnimateItem(item)
      })
    }
  </Controller>
)