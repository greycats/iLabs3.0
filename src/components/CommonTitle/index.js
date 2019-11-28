import React from 'react'
import classNames from 'classnames'
import './index.sass'

const isPC = window.isPC

export default ({
  title = '',
  intro = '',
  isWhite = false,
  width = 'auto',
  titleSize = isPC ? '44px' : '32px',
  titleMargin = isPC ? '32px' : '0.32rem',
  introSize = '16px',
  minHeight = 'auto'
}) => {
  return (
    <div className={classNames('common-title', { 'white': isWhite })} style={{ width: isPC ? width : 'auto' }}>
      {title ? <div className="title" style={{ fontSize: titleSize, marginBottom: titleMargin, minHeight: minHeight }}>{title}</div> : null}
      {intro ? <div className="intro" style={{ fontSize: introSize }}>{intro}</div> : null}
    </div>
  )
}