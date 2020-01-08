import React from 'react'
import { useAppContext, serviceAction } from 'hooks/useShareState'
import styled from 'styled-components'
import Close from 'assets/imgs/close.svg'
import { serviceData } from 'data/services'

const TextWrap = styled.div`
  padding: 0.25rem;
  line-height: 1.4
  font-weight: 500;
  color: #2C2C2C;
  .title {
    font-size: 32px;
    letter-spacing: 1.625px;
    font-weight: 500;
    margin-bottom: 15px
  }
  .detail {
    opacity: 0.6;
    margin-bottom: 0.8rem
  }
`

export default () => {
  const { store, dispatch } = useAppContext()
  const { showService } = store
  const itemData = serviceData()[store.serviceIndex]
  const hideService = () => {
    serviceAction(dispatch, false)
  }
  return (
    <div style={{
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      minHeight: '100vh',
      zIndex: 10000,
      background: '#fff',
      top: showService ? 0 : '100vh',
      left: 0,
      transition: 'top 0.5s ease',
      overflow: 'auto'
    }}>
      <div style={{
        width: '100%',
        padding: '25px'
      }} onClick={hideService}>
        <img src={Close} alt="" />
      </div>
      <TextWrap>
        <div className="title">{itemData.text}</div>
        <div className="detail">{itemData.detail}</div>
      </TextWrap>
      <img
        src={itemData.placeholder}
        style={{ display: 'block', width: '100%' }}
      />
    </div>
  )
}