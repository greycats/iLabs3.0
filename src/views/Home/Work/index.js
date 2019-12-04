import React from 'react'
import ProjectList, { fakeData } from 'components/ProjectList'
import CommonTitle from 'components/CommonTitle'

const titleData = {
  title: 'Featured Work',
  intro: 'Explore some of our latest projects.'
}

export default () => {
  return (
    <div className="layout-1240 panel">
      <CommonTitle {...titleData}></CommonTitle>
      <br />
      <br />
      <ProjectList listData={fakeData()}></ProjectList>
    </div>
  )
}