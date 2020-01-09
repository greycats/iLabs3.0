import React from 'react'
import TextAndAnimation from 'components/TextAndAnimation'


export default ({ GSData }) => {
  const isPC = window.isPC
  return (
    <TextAndAnimation
      layoutType='left-text'
      {...GSData.progressive}
      titleStyle={{
        width: '520px'
      }}
      animateIcon={GSData.progressiveAnimation}
      animationStyle={{
        width: 720,
        transform: 'translateY(-150px)',
      }}
      wrapStyle={isPC ? {
        marginTop: '130px'
      } : {}}
    />
  )
}