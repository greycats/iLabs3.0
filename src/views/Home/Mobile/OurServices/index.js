import React, { useState } from 'react'
import { serviceData } from 'data/services'
import drop from 'lodash/drop'
import dropRight from 'lodash/dropRight'
import _ from 'lodash'
import Arrow from 'assets/imgs/arrow.svg'
import { useAppContext, serviceAction, serviceIndexAction } from 'hooks/useShareState'

const designLength = 5
const List = ({
  title = '',
  list = [],
  activeItem = null,
  onClickItem = () => { }
}) => {
  return (
    <div>
      <p style={{
        fontSize: '24px',
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
                  height: '50px',
                  alignItems: 'center',
                  color: '#fff',
                  fontSize: '16px',
                  cursor: 'pointer',
                  position: 'relative'
                }} onClick={() => {
                  onClickItem(index, item)
                }}>
                <img src={item.whiteIcon} alt="" style={{
                  marginRight: '10px',
                  marginLeft: 0,
                  width: '22px'
                }} /> {item.text}
                <img src={Arrow} alt="" style={{
                  position: 'absolute',
                  right: '10px',
                  top: '33%'
                }} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default () => {
  const [activeItem, setActiveItem] = useState(null)

  const { dispatch } = useAppContext()
  const serviceList = serviceData()

  return (
    <div style={{ background: '#2c2c2c', position: 'relative' }}>
      <div className="container" style={{
        display: 'flex',
        padding: '50px 0'
      }}>
        <div>
          <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#fff', marginBottom: '40px' }}>Our services</span>
          <p style={{
            color: '#fff',
            fontSize: '16px',
            lineHeight: '1.8',
            marginBottom: '50px'
          }}>We offer a wide variety of services that cover the gamut of full stack development.</p>
          <List
            title='Product Design'
            activeItem={activeItem}
            onClickItem={(index, item) => {
              setActiveItem(item),
                serviceAction(dispatch, true)
              serviceIndexAction(dispatch, index)
            }}
            list={dropRight(serviceList, serviceList.length - designLength)}
          />
          <br />
          <br />
          <List
            title='Product Development'
            list={drop(serviceList, designLength)}
            activeItem={activeItem}
            onClickItem={(index, item) => {
              setActiveItem(item)
              serviceAction(dispatch, true)
              serviceIndexAction(dispatch, index + designLength)
            }}
          />
        </div>
      </div>
    </div>
  )
}