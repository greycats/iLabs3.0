import React, { useState } from 'react'
import _ from 'lodash'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import drop from 'lodash/drop'
import dropRight from 'lodash/dropRight'
import styled from 'styled-components'
import { getImage } from 'scripts/PreloadManager.js'
import { serviceData } from 'data/services'
import LazyLoad from 'react-lazyload'
import dropdownImg from '../../../assets/imgs/services/icons/down.svg'

const designLength = 5

const ListItemStyle = styled.div`
  width: 367px;
  .item-title {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 40px;
    line-height: 1;
  }
  .item-wrap {
    width: 100%;
    margin-bottom: 12px;
    transition: all .5s ease;
    .item-tab {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 54px;
      color: #fff;
      font-size: 16px;
      line-height: 28px;
      cursor: pointer;
      position: relative;
      opacity: 0.5;
      transition: all .5s ease;
      background: #2D2D2D;
      padding-left: 20px;
      padding-right: 25px;
      span {
        flex: 1;
      }
    }
    .icon {
      margin-right: 20px;
      width: 22px;
    }
    .dropdown {
      width: 10px;
      transition: all .5s ease;
    }
    .detail {
      transition: all .5s ease;
      background: #2B2B2B;
      font-size: 14px;
      line-height: 1.4;
      padding: 0 26px;
      overflow: hidden;
      opacity: 0;
      color: #fff;
    }
    &.active {
      .item-tab {
        opacity: 1;
      }
      .dropdown {
        transform: rotate(180deg);
      }
      .detail {
        opacity: .6;
        padding: 16px 26px;
      }
    }
  }
`

const List = ({
  title = '',
  list = [],
  activeIndex = null,
  onClickItem = () => { }
}) => {
  return (
    <ListItemStyle>
      <p className="item-title">{title}</p>
      <div>
        {
          list.map((item, index) => {
            return (
              <div
                key={index}
                className={"item-wrap " + (_.isEqual(activeIndex, index) ? 'active' : '')}
              >
                <div
                  className="item-tab"
                  onClick={() => {
                    onClickItem(index)
                  }}>
                  <img src={item.whiteIcon} alt="" className="icon" />
                  <span>{item.text}</span>
                  <img src={dropdownImg} className="dropdown" />
                </div>
                <div
                  className="detail"
                  style={{ height: _.isEqual(activeIndex, index) ? item.height : 0 }}
                >
                  {item.detail}
                </div>
              </div>
            )
          })
        }
      </div>
    </ListItemStyle>
  )
}

export default () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const serviceList = serviceData()
  return (
    <div style={{
      background: '#262626',
      overflow: 'hidden',
      transition: 'all .3'
    }}>
      <div
        className="panel layout-1240"
        style={{
          position: 'relative'
        }}
      >
        <div
          style={{
            width: '770px',
          }}
        >
          <p style={{
            fontSize: '32px',
            lineHeight: 1,
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: '22px'
          }}
          >Our services</p>
          <p style={{
            color: '#fff',
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 500,
            marginBottom: '70px',
            opacity: 0.6,
            width: '395px'
          }}>Our multidisciplinary team of 70+ can execute on all key areas of the product development cycle.</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <List
              title='Product Design'
              activeIndex={activeIndex}
              onClickItem={(index) => {
                setActiveIndex(activeIndex === index ? null : index)
              }}
              list={dropRight(serviceList, serviceList.length - designLength)}
            />
            <List
              title='Product Development'
              list={drop(serviceList, designLength)}
              activeIndex={activeIndex - designLength}
              onClickItem={(index) => {
                setActiveIndex(activeIndex === index + designLength ? null : index + designLength)
              }}
            />
          </div>
        </div>
        <div style={{
          position: 'absolute',
          width: '772px',
          top: 0,
          left: '800px'
        }}>
          <LazyLoad placeholder={<img src={getImage('service-bg')} />}>
            <img src={require('assets/imgs/2x/OurServices/service-bg.png')} />
          </LazyLoad>
        </div>
      </div>
    </div>
  )
}
