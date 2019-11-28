/*
 * @Author: Gary
 * @Date: 2019-11-18 14:09:53
 * @Last Modified by: Gary
 * @Last Modified time: 2019-11-27 16:51:14
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

const isPC = window.isPC

const AnimateTitle = ({
  id = hashCode(),
  title,
  titleHeight
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
    />
  )

const AnimateText = ({
  id = hashCode(),
  intro,
  isSubTitle = ''
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
  animateIcon = null,
  animateWidth = 'auto',
  animateHeight = 'auto',
  SubComponent = null,
  wrapMinHeight = '750px',
  animationStyle = {},
  wrapStyle = {}
}) => {
  return (
    <div className={classnames("text-animation-wrap", !isPC ? 'up-text panel' : layoutType, { 'layout-1240': layoutType !== 'up-text' })} style={{ minHeight: wrapMinHeight, ...wrapStyle }}>
      <div className="title-part" style={titleStyle}>
        <AnimateTitle id={id + '0'} title={title} titleHeight={isPC ? titleHeight : (titleHeight / 60 * 0.38 + 'rem')} />
        {
          subTitle ?
            <AnimateText id={id + '1'} intro={subTitle} isSubTitle={subTitle} />
            : null
        }
        <AnimateText id={id + '1'} intro={intro} />
        {
          SubComponent ? <SubComponent /> : null
        }
      </div>
      {
        isPC ?
          <div className="animation-part" style={animationStyle}>
            {
              showLottie ?
                <LottieAnimation
                  options={{
                    animationData: animateIcon,
                  }}
                  width={animateWidth}
                  height={animateHeight}
                />
                : null
            }
          </div>
          :
          <div className="animation-part">
            {
              showLottie ?
                <LottieAnimation
                  options={{
                    animationData: animateIcon,
                  }}
                />
                : null
            }
          </div>
      }
    </div >
  )
}