import React, { useEffect, useRef } from 'react'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Logo from 'components/BrandLogo/index.js'

import _ from 'lodash'

export default () => {
  const videoRef = useRef(null)

  const playVideo = (event) => {
    videoRef.current.muted = false
    videoRef.current.play()
    event.preventDefault();
    document.removeEventListener('click', playVideo)
  }

  useEffect(() => {
    videoRef.current.play().then(_ => {
      // Autoplay started!
    }).catch(error => {
      // Autoplay not allowed!
      // Mute video and try to play again
      videoRef.current.muted = true;
      videoRef.current.play();
      // Show something in the UI that the video is muted
    });
    document.addEventListener('click', playVideo)
    return () => document.removeEventListener('click', playVideo)
  }, [])

  return (
    <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      <Logo isWhite={false} />
      <Header />
      <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', padding: '80px 0', marginTop: '80px' }}>
        <video ref={videoRef} style={{ maxWidth: '1000px', width: 'calc(100vw - 40px)', height: 'auto' }} controls preload="metadata" autoPlay>
          <source src="videos/2023-Sizzle-ILABS-v2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Footer />
    </div>
  )
}
