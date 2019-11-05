import React from 'react'
import CommonTitle from 'components/CommonTitle'
import CountUp from 'react-countup'
import Img from '../../assets/imgs/in.svg'
import './index.sass'

export default ({
  story = [],
  dataList = []
}) => {
  return (
    <div className="layout-1240 panel story-wrap">
      <CommonTitle title="The Story" ></CommonTitle>
      <div className="story-content">
        <div className="text">
          {
            story.map((item, index) => <p key={index}>{item}</p>)
          }
        </div>
        <div className="data-wrap">
          {
            dataList.map((item, index) => (
              <div key={index} className="data-item">
                <div className="icon">
                  <img src={Img} />
                </div>
                <div className="number">
                  <div>
                    <CountUp
                      end={item.number}
                      duration={1}
                      suffix={item.suffix}
                      delay={0}
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  </div>
                  <p>{item.name}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}