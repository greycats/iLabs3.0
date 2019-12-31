import React, { useState, useEffect } from 'react'
import TextAndAnimation from 'components/TextAndAnimation'
import { getResult } from 'utils/lazyload'

export default ({ GSData }) => {
  const [animationData, setAnimationData] = useState(null)

  const getData = async () => {
    const data = getResult('gs_presentation') || (await import('assets/imgs/gs/7-data/data.json')).default

    setAnimationData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  const isPC = window.isPC
  return (
    <TextAndAnimation
      layoutType='up-text'
      {...GSData.presentation}
      titleStyle={{
        width: '520px'
      }}
      wrapMinHeight={isPC ? 1200 : '4.5rem'}
      animateIcon={animationData}
      animationStyle={{
        position: 'absolute',
        top: '300px',
        right: 0,
        paddingLeft: 200
      }}
      mobileAnimationStyle={{
        width: '100vw',
        marginLeft: '-0.25rem'
      }}
    />
  )
}