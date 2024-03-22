import React, { useEffect, useRef } from 'react'

const VideoSection = ({ src }) => {
  const videoRef = useRef(null)

  const playVideo = (event) => {
    videoRef.current.muted = false
    videoRef.current.play()
    event.preventDefault()
    document.removeEventListener('click', playVideo)
  }

  useEffect(() => {
    videoRef.current.play().catch(() => {
      videoRef.current.muted = true
      videoRef.current.play()
    })
    document.addEventListener('click', playVideo)
    return () => document.removeEventListener('click', playVideo)
  }, [])

  return (
    <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', padding: '80px 0', marginTop: '80px' }}>
      <video
        onCanPlay={() => (videoRef.current.style.minWidth = '')}
        ref={videoRef}
        style={{ maxWidth: 'calc(100vw - 60px)', width: 'auto', minWidth: '80vw', maxHeight: '750px', height: 'auto' }}
        controls
        preload="metadata"
        autoPlay
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoSection
