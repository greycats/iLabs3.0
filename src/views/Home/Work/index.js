import React from 'react'
import ProjectList from 'components/ProjectList'
import CommonTitle from 'components/CommonTitle'
import GoToArrow from 'components/GoToArrow'
import history from 'history.js'

const titleData = {
  title: 'Featured Work',
  intro: 'Explore some of our latest projects.'
}

export default () => {
  return (
    <div className="layout-1240">
      <CommonTitle {...titleData}></CommonTitle>
      <br />
      <br />
      <ProjectList />
      <GoToArrow text="See all work" onClick={() => {
        history.push('/ourwork')
      }}></GoToArrow>
    </div>
  )
}