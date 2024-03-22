import React from 'react'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Logo from 'components/BrandLogo/index.js'
import VideoSection from '../../components/VideoSection'

export default () => {
  return (
    <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      <Logo isWhite={false} />
      <Header />
      <VideoSection src="videos/10Y-Anni-4.mp4" />
      <Footer />
    </div>
  )
}
