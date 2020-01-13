import React, { useState } from 'react'
import { serviceData } from 'data/services'
import drop from 'lodash/drop'
import dropRight from 'lodash/dropRight'
import styled from 'styled-components'
import { List } from '../../OurServices'

const designLength = 5

const ServiceWrapStyle = styled.div`
  background: #262626;
  position: relative;
  .container {
    padding: .4rem 0;
  }
  .list-items {
    width: 100%;
    &:last-child {
      margin-top: .6rem;
    }
    .item-title {
      margin-bottom: .32rem;
    }
    .item-wrap {
      margin-bottom: .12rem;
      .item-tab {
        height: auto;
        padding: .14rem .24rem;
      }
      .detail {
        padding: 0 .24rem;
      }
      &.active {
        .detail {
          padding: .16rem .24rem;
        }
      }
    }
  }
`

export default () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const serviceList = serviceData()

  return (
    <ServiceWrapStyle>
      <div className="container">
        <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#fff', marginBottom: '.25rem' }}>Our services</div>
        <p style={{
          color: '#fff',
          fontSize: '16px',
          lineHeight: '1.5',
          marginBottom: '.4rem'
        }}>Our multidisciplinary team of 70+ can execute on all key areas of the product development cycle</p>
        <List
          title='Product Design'
          activeIndex={activeIndex}
          onClickItem={(index) => {
            setActiveIndex(activeIndex === index ? null : index)
          }}
          list={dropRight(serviceList, serviceList.length - designLength)}
        />
        <List
          isMobile={true}
          title='Product Development'
          list={drop(serviceList, designLength)}
          activeIndex={activeIndex - designLength}
          onClickItem={(index) => {
            setActiveIndex(activeIndex === index + designLength ? null : index + designLength)
          }}
        />
      </div>
    </ServiceWrapStyle>
  )
}