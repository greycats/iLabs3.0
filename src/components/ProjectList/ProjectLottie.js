import React, {useEffect} from 'react'
import Lottie from 'react-lottie'

const ProjectLottie = ({ onLoad = () => {}, isStopped, direction, animationData }) => {
  useEffect(() => {
    onLoad()
  }, [])
  return (
    <Lottie
      direction={direction}
      isStopped={isStopped}
      width='524px'
      height='698px'
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