/*
 * @Author: Gary
 * @Date: 2019-11-18 14:09:53
 * @Last Modified by: Gary
 * @Last Modified time: 2019-11-19 14:48:13
 * layoutType:
 * 1.left-text
 * 2.right-text
 * 3.up-text
 */
import React, { useEffect, useState } from 'react'
import AnimateIcon from '../../assets/imgs/vizient/Components'
import { SectionTitleWrap, AbsolutePositionWrap } from 'components/Styled'

import AnimationPlayer, { LottieAnimation } from 'components/AnimationPlayer'
import classnames from 'classnames'

import { hashCode } from 'utils'
import './index.sass'

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
  intro
}) => (
    <AnimationPlayer
      id={id}
      target={
        <div className="intro-wrap">
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
  intro = '',
  titleStyle = {},
  titleHeight = "60px",
  showLottie = true,
  animateIcon = null,
  animateWidth = 'auto',
  animateHeight = 'auto',
  SubComponent = null,
  wrapMinHeight = '750px',
  animationStyle = {}
}) => {
  return (
    <div className={classnames("text-animation-wrap", layoutType, { 'layout-1240': layoutType !== 'up-text' })} style={{ minHeight: wrapMinHeight }}>
      <div className="title-part" style={titleStyle}>
        <AnimateTitle id={id + '0'} title={title} titleHeight={titleHeight} />
        <AnimateText id={id + '1'} intro={intro} />
        {
          SubComponent ? <SubComponent /> : null
        }
      </div>
      <div className="animation-part" style={animationStyle}>
        {
          showLottie ?
            <LottieAnimation
              options={{
                autoplay: true,
                animationData: animateIcon,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }}
              width={animateWidth}
              height={animateHeight}
            />
            : null
        }
      </div>
    </div>
  )
}