import React, { useState, useEffect } from 'react'
import TextAndAnimation from 'components/TextAndAnimation'

export default ({GSData}) => {
  const [animationData, setAnimationData] = useState(null)

  const getData = async () => {
    const data = await import('assets/imgs/gs/7-data/data.json')

    setAnimationData(data.default)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <TextAndAnimation
      layoutType='up-text'
      {...GSData.presentation}
      titleStyle={{
        width: '520px'
      }}
      wrapMinHeight={1200}
      animateIcon={animationData}
      animationStyle={{
        position: 'absolute',
        top: '300px',
        right: 0,
        paddingLeft: 200
      }}
    />
  )
}