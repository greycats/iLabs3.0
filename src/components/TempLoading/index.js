import React from 'react'
import './style.css'
import Loading from 'assets/imgs/loading.json'
import { LottieAnimation } from 'components/AnimationPlayer'

// const Loading = () => <div className="lds-dual-ring"></div>

export const FullPageLoading = () => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <LottieAnimation
        options={{
          autoplay: true,
          animationData: Loading
        }}
      />
    </div>
  )
}

export default Loading