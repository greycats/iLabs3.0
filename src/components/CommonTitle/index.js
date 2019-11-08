import React from 'react'
import classNames from 'classnames'
import './index.sass'

export default ({
  title = '',
  intro = '',
  isWhite = false,
  width = 'auto',
  titleSize = '44px',
  titleMargin = '32px',
  introSize = '16px',
  minHeight = 'auto'
}) => {
  return (
    <div className={classNames('common-title', { 'white': isWhite })} style={{ width: width }}>
      {title ? <div className="title" style={{ fontSize: titleSize, marginBottom: titleMargin, minHeight: minHeight }}>{title}</div> : null}
      {intro ? <div className="intro" style={{ fontSize: introSize }}>{intro}</div> : null}
    </div>
  )
}