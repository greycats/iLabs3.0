import React from 'react'
import CommonTitle from 'components/CommonTitle'
import { MobileList } from 'components/ProjectList'
import GoToArrow from 'components/GoToArrow'
import history from 'history.js'

const titleData = {
  title: 'Featured work',
  intro: 'Explore some of our recent projects'
}

export default () => {
  return (
    <div style={{
      overflowX: "hidden",
      maxWidth: '100vw'
    }}>
      <div className="container">
        <CommonTitle {...titleData}></CommonTitle>
        <br/>
        <br/>
        <MobileList></MobileList>
        {/* <GoToArrow text="See all work" onClick={() => {
          history.push('/ourwork')
        }}></GoToArrow> */}
        <br/>
        <br/>
      </div>
    </div>
  )
}