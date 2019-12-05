import React, { useState } from 'react'
import { designListData, devListData } from 'data/services'
import _ from 'lodash'

const List = ({
  title = '',
  list = [],
  activeItem = null,
  onClickItem = () => { }
}) => {
  return (
    <div>
      <p style={{
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: '30px'
      }}>{title}</p>
      <div>
        {
          list.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  height: '60px',
                  alignItems: 'center',
                  color: '#fff',
                  fontSize: '22px',
                  cursor: 'pointer',
                  position: 'relative'
                }} onClick={() => {
                  onClickItem(index, item)
                }}>
                <img src={item.icon} alt="" style={{
                  marginRight: '10px',
                  marginLeft: '32px',
                  width: '32px'
                }} /> {item.text}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default () => {
  const [activeItem, setActiveItem] = useState(designListData[0])

  return (
    <div style={{ background: '#2c2c2c' }}>
      <div
      className="container"
      style={{
        display: 'flex',
        padding: '50px 0'
      }}>
        <div style={{ width: '35%', minWidth: '650px' }}>
          <p style={{ fontSize: '44px', fontWeight: 'bold', color: '#fff', marginBottom: '40px' }}>Our services</p>
          <p style={{
            color: '#fff',
            fontSize: '24px',
            width: '490px',
            lineHeight: '1.8',
            marginBottom: '100px'
          }}>We offer a wide variety of services that cover the gamut of full stack development.</p>
          <List
            title='Product Design'
            activeItem={activeItem}
            onClickItem={(index, item) => {
              setActiveItem(item)
            }}
            list={designListData}
          />
          <br />
          <br />
          <br />
          <List
            title='Product Development'
            list={devListData}
            activeItem={activeItem}
            onClickItem={(index, item) => {
              setActiveItem(item)
            }}
          />
        </div>
      </div>

    </div>
  )
}