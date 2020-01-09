/*
 * @Author: Gary
 * @Date: 2019-11-18 14:09:53
 * @Last Modified by: Gary
 * @Last Modified time: 2020-01-08 15:10:08
 * layoutType:
 * 1.left-text
 * 2.right-text
 * 3.up-text
 */
import React from 'react'
import AnimationPlayer, { LottieAnimation } from 'components/AnimationPlayer'
import classnames from 'classnames'

import { hashCode } from 'utils'
import './index.sass'

const AnimateTitle = ({
  id = hashCode(),
  title,
  titleHeight,
  triggerRelativePosition
}) => (
    <AnimationPlayer
      id={id}
      target={
        <div className="title-wrap">
          <div className="title">{title}</div>
        </div>
      }
      animations={[
        {
          from: {
            height: 0
          },
          to: {
            height: titleHeight
          }
        }
      ]}
      triggerRelativePosition={triggerRelativePosition}
    />
  )

const AnimateText = ({
  id = hashCode(),
  intro,
  isSubTitle = '',
  triggerRelativePosition
}) => (
    <AnimationPlayer
      id={id}
      target={
        <div className={classnames("intro-wrap", { 'sub-title': isSubTitle })}>
          {intro}
        </div>
      }
      animations={[
        {
          from: {
            opacity: 0,
            top: '-60px'
          },
          to: {
            opacity: 1,
            top: 0
          },
          delay: .3
        }
      ]}
      triggerRelativePosition={triggerRelativePosition}
    />
  )


export default ({
  layoutType = 'left-text',
  id = hashCode(),
  title = '',
  subTitle = '',
  intro = '',
  titleStyle = {},
  titleHeight = 60,
  showLottie = true,
  showTitle = true,
  animateIcon = null,
  animateWidth = 'auto',
  animateHeight = 'auto',
  mobileAnimateWidth = 'auto',
  mobileAnimateHeight = 'auto',
  SubComponent = null,
  wrapMinHeight = '750px',
  animationStyle = {},
  mobileAnimationStyle = {},
  wrapStyle = {},
  triggerRelativePosition
}) => {
  const isPC = window.isPC
  return (
    <div className={classnames("text-animation-wrap", !isPC ? 'up-text panel' : layoutType, { 'layout-1240': layoutType !== 'up-text' })} style={{ minHeight: wrapMinHeight, ...wrapStyle }}>
      <div className="title-part" style={titleStyle}>
        {
          !showTitle ? null :
            <AnimateTitle id={id + '0'} title={title} titleHeight={isPC ? titleHeight : (titleHeight / 60 * 0.38 + 'rem')} triggerRelativePosition={triggerRelativePosition} />
        }
        {
          subTitle ?
            <AnimateText id={id + '1'} intro={subTitle} isSubTitle={subTitle} triggerRelativePosition={triggerRelativePosition} />
            : null
        }
        <AnimateText id={id + '1'} intro={intro} />
        {
          SubComponent ? <SubComponent /> : null
        }
      </div>
      <div className="animation-part" style={isPC ? animationStyle : mobileAnimationStyle}>
        {
          showLottie ?
            <LottieAnimation
              options={{
                animationData: animateIcon,
              }}
              width={isPC ? animateWidth : mobileAnimateWidth}
              height={isPC ? animateHeight : mobileAnimateHeight}
              triggerRelativePosition={triggerRelativePosition}
            />
            : null
        }
      </div>
    </div >
  )
}