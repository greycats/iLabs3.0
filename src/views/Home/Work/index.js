import React from 'react'
import ProjectList from 'components/ProjectList'
import CommonTitle from 'components/CommonTitle'
import GoToArrow from 'components/GoToArrow'
import history from 'history.js'

const titleData = {
  title: 'Featured Work',
  intro: 'Explore some of our latest projects.',
}

export default () => {
  return (
    <div className="layout-1240" style={{ marginBottom: 140, position: 'relative' }}>
      <div style={{
          position: 'absolute',
          left: '-4500px',
          top: '-100px',
          height: '80px',
          width: '5000px',
          backgroundColor: 'white',
          zIndex: 10
        }}></div>
      <div style={{ marginBottom: 80 }}>
        <CommonTitle {...titleData}></CommonTitle>
      </div>
      <ProjectList />
      <GoToArrow text="See all work" onClick={() => {
        history.push('/ourwork')
      }}></GoToArrow>
    </div>
  )
}