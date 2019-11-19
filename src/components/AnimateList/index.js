import React from 'react'
import getData from '~/data'
import classnames from 'classnames'
// import history from 'history.js'

export default () => {
  const projects = getData().intro.projects

  const toDetail = (value = 'vizient') => {
    return
    // show animation
    // history.push('/casestudy?name=' + value)
  }

  return <div className="project-list">
    {
      projects.map(({ background, image, name, label, masks, value }, index) => {
        return (
          <div className={classnames("project-item-wrapper", {'sink-item': index % 2})} id={'project-item-' + index} key={index} onClick={() => toDetail(value)}>
            <div className="project-item" style={{
              backgroundColor: background
            }}>
              <div style={{
                backgroundImage: `url(${image})`
              }} alt="" className="project-img"></div>
              <div className="project-info">
                <p className="project-name">{name}</p>
                <p className="project-label grey">{label}</p>
                <div className="arrow-sec">
                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 8H00" stroke="#040404" className="line" />
                  <path d="M20 8L20 8L20 8" stroke="#040404" className="arrow" />
                </svg>
              </div>
              <div className="info-bg-sec"></div>
              </div>
              <div className="mask-sec">
                {
                  masks.map((item, index) => <div className="mask" key={index}></div>)
                }
              </div>
            </div>
          </div>
        )
      })
    }
  </div>
}
