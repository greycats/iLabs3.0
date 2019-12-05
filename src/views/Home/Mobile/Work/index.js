import React from 'react'
import CommonTitle from 'components/CommonTitle'

const titleData = {
  title: 'Featured Work',
  intro: 'Explore some of our latest projects.'
}

export default () => {
  return (
    <div>
      <CommonTitle {...titleData}></CommonTitle>
    </div>
  )
}