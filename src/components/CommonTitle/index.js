import React from 'react'
import classNames from 'classnames'
import './index.sass'

export default ({
  title = '',
  intro = '',
  isWhite = '',
  width = '',
  titleSize = '',
  titleMargin = '',
  introSize = ''
}) => {
  return (
    <div className={classNames('common-title', { 'white': isWhite })} style={{ width: width || 'auto' }}>
      {title ? <div className="title" style={{fontSize: titleSize || '44px', marginBottom: titleMargin || '32px'}}>{title}</div> : null}
      {intro ? <div className="intro" style={{fontSize: introSize || '16px'}}>{intro}</div> : null}
    </div>
  )
}