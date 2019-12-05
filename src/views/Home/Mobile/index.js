import React from 'react'
import Banner from './Banner'
import Work from './Work'
import Clients from './Clients'
import OurServices from './OurServices'

export default () => {
  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <Banner></Banner>
      <Work></Work>
      <OurServices></OurServices>
      <Clients></Clients>
    </div>
  )
}