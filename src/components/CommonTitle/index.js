import React from 'react'
import classNames from 'classnames'
import './index.sass'

export default ({
  title = '',
  intro = '',
  isWhite = '',
  width = ''
}) => {
  return (
    <div className={classNames('title-wrap', {'white': isWhite})} style={{ width: width || 'auto' }}>
      <div className="title">{title}</div>
      <div className="intro">{intro}</div>
    </div>
  )
}