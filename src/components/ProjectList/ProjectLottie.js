import React, {useEffect} from 'react'
import Lottie from 'react-lottie'

const ProjectLottie = ({ onLoad = () => {}, isStopped, direction, animationData }) => {
  useEffect(() => {
    onLoad()
  }, [])
  return (
    <Lottie
      direction={direction}
      isPaused={isStopped}
      options={{
        autoplay: true,
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