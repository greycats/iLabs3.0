import React, { useState, useEffect } from 'react'
import TextAndAnimation from 'components/TextAndAnimation'

const Solution = ({ GSData }) => {
  const [animationData, setAnimationData] = useState(null)

  const getData = async () => {
    const data = await import('assets/imgs/gs/4-solution')

    setAnimationData(data.default)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <TextAndAnimation
      layoutType='right-text'
      {...GSData.theSolution}
      titleStyle={{
        width: '600px'
      }}
      wrapMinHeight={1550}
      animateIcon={animationData}
      animationStyle={{
        width: '640px',
        transform: 'translateY(350px)',
        marginLeft: '-150px'
      }}
      animateWidth={1550}
      animateHeight={1000}
    />
  )
}

export default Solution
