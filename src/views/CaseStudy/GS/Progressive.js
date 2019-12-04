import React from 'react'
import TextAndAnimation from 'components/TextAndAnimation'

const isPC = window.isPC

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
      wrapStyle={isPC ? {
        padding: 0
      } : {}}
    />
  )
}