import React from 'react'
import CommonTitle from 'components/CommonTitle'

const titleData = {
  title: 'Featured Work',
  intro: 'Explore some of our latest projects.'
}

export default () => {
  return (
    <div>
      <br/>
      <br/>
      <div className="container">
        <CommonTitle {...titleData}></CommonTitle>
      </div>
    </div>
  )
}