import React from 'react'
import { useAppContext, serviceAction } from 'hooks/useShareState'
import Close from 'assets/imgs/close.svg'

export default () => {
  const { store, dispatch } = useAppContext()
  const { showService } = store

  const hideService = () => {
    serviceAction(dispatch, false)
  }
  return (
    <div style={{
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      minHeight: '100vh',
      zIndex: 10,
      background: '#f5f5f5',
      top: showService ? 0 : '100vh',
      left: 0,
      transition: 'top 0.5s ease'
    }}>
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100px',
        paddingTop: '20px',
        paddingLeft: '20px'
      }} onClick={hideService}>
      <img src={Close} alt="" />
      </div>
      <img src={store.serviceImage} alt="" style={{
        width: '100%',
        marginTop: '100px'
      }}/>
    </div>
  )
}