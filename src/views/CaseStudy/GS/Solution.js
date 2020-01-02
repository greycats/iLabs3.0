import React, { useState, useEffect } from 'react'
import TextAndAnimation from 'components/TextAndAnimation'
import { getResult } from 'utils/lazyload'

const Solution = ({ GSData }) => {
  const [animationData, setAnimationData] = useState(null)

  const getData = async () => {
    const data = getResult('gs_solution') || (await import('assets/imgs/gs/4-solution/data.json')).default

    setAnimationData(data)
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
      mobileAnimationStyle={isPC ? {
        marginLeft: '-38%'
      } : {
        transform: 'scale(1.5)',
        marginTop: '1rem'
      }}
    />
  )
}

export default Solution
