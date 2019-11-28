import React, { useState, useEffect } from 'react'
import TextAndAnimation from 'components/TextAndAnimation'

export default ({ GSData }) => {
  return (
    <TextAndAnimation
      layoutType='left-text'
      {...GSData.progressive}
      titleStyle={{
        width: '520px'
      }}
      animateIcon={require('assets/imgs/gs/8-disclosure-1/data.json')}
      animationStyle={{
        width: 720,
        transform: 'translateY(-150px)',
      }}
      wrapStyle={{
        padding: 0
      }}
    />
  )
}