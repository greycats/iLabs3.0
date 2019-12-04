import React, { useState, useEffect } from 'react'
import TextAndAnimation from 'components/TextAndAnimation'

const Solution = ({ GSData }) => {
  const [animationData, setAnimationData] = useState(null)

  const getData = async () => {
    const data = await import('assets/imgs/gs/4-solution/data.json')

    setAnimationData(data.default)
  }

  useEffect(() => {
    getData()
  }, [])

  const isPC = window.isPC

  return (
    <TextAndAnimation
      layoutType='right-text'
      {...GSData.theSolution}
      titleStyle={{
        width: '600px'
      }}
      wrapMinHeight={isPC ? 1550 : '6rem'}
      animateIcon={animationData}
      animationStyle={{
        width: '640px',
        transform: 'translateY(350px)',
        marginLeft: '-150px'
      }}
      animateWidth={1550}
      animateHeight={1000}
      mobileAnimateWidth="130%"
      mobileAnimationStyle={{
        marginLeft: '-38%'
      }}
    />
  )
}

export default Solution
