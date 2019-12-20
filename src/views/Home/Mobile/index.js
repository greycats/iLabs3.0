import React, { useEffect } from 'react'
import Banner from './Banner'
import Work from './Work'
import Clients from './Clients'
import HowWeWork from '../HowWeWork'
import OurServices from './OurServices'
import ServiceDetail from './ServiceDetail'

export default () => {
  return (
    <div style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
        <Banner></Banner>
        <Work></Work>
        <OurServices></OurServices>
        <Clients></Clients>
        <ServiceDetail />
        <HowWeWork />
    </div>
  )
}