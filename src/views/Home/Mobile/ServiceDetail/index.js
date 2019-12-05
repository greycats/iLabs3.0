import React from 'react'
import { useAppContext } from 'hooks/useShareState'

export default () => {
  const { store, dispatch } = useAppContext()
  const { showService } = store

  const hideService = () => {
    dispatch({
      type: 'SET_SHOW_SERVICE',
      showService: false
    })
  }
  return (
    <div style={{
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      minHeight: '100vh',
      zIndex: 10,
      background: 'red',
      top: showService ? 0 : '100vh',
      left: 0,
      transition: 'top 0.5s ease'
    }} onClick={hideService}>
    </div>
  )
}