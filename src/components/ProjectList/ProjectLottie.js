import React, {useEffect} from 'react'
import Lottie from 'react-lottie'

const ProjectLottie = ({ onLoad = () => {}, isStopped, direction, animationData }) => {
  console.log('isStoppted', isStopped)
  useEffect(() => {
    onLoad()
  }, [])
  return (
    <Lottie
      direction={direction}
      isStopped={isStopped}
      options={{
        autoplay: false,
        loop: false,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        },
        animationData
      }}
    />
  )
}

export default ProjectLottie