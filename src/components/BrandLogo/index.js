import React from 'react'
import { useAppContext } from 'hooks/useShareState'
import whiteLogo from 'assets/imgs/logo.svg'
import blackLogo from 'assets/imgs/logo-black.svg'
import history from 'history.js'

export default ({ isWhite = true }) => {
  const { store } = useAppContext()

  return (
    !store.showMenu ?
      <img src={isWhite ? whiteLogo : blackLogo} alt="" onClick={() => {
        history.push('/')
      }} style={{
        position: 'absolute',
        cursor: 'pointer',
        top: '40px',
        left: '40px',
        zIndex: 200
      }}/> : null
  )
}