import React, { useEffect } from 'react'
import Banner from './Banner'
import Work from './Work'
import Clients from './Clients'
import OurServices from './OurServices'
import ServiceDetail from './ServiceDetail'
import useShareState, { AppContext } from 'hooks/useShareState'

export default () => {
  const [store, dispatch] = useShareState()

  const disableScroll = e => {
    if(store.showService) {
      e.preventDefault()
      return false
    }
  }

  useEffect(() => {
      window.addEventListener('touchmove', disableScroll, { passive: false })
      return () => window.removeEventListener('touchmove', disableScroll, { passive: false })
  }, [store])

  return (
    <div style={{ width: '100%', overflow: 'hidden', position: 'relative'}}>
      <AppContext.Provider value={{ store, dispatch }}>
        <Banner></Banner>
        <Work></Work>
        <OurServices></OurServices>
        <Clients></Clients>
        <ServiceDetail/>
      </AppContext.Provider>
    </div>
  )
}