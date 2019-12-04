import React from 'react'
import Banner from './Banner'
import OurClients from './OurClients'
import HowWeWork from './HowWeWork'
import OurServices from './OurServices'
import Footer from 'components/Footer'
import Work from './Work'

export default () => {
  return (
    <div style={{
    }}>
      <Banner/>
      <Work/>
      <br/>
      <OurServices />
      <OurClients />
      <HowWeWork />
      <Footer />
    </div>
  )
}
