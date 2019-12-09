import React from 'react'
import './style.css'

const Loading = () => <div className="lds-dual-ring"></div>

export const FullPageLoading = () => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Loading />
    </div>
  )
}

export default Loading