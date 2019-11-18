import React, { useEffect, useState } from 'react'
import CommonTitle from 'components/CommonTitle'
import AnimateIcon from '../../assets/imgs/vizient/Components'
import { SectionTitleWrap, AbsolutePositionWrap } from 'components/Styled'

import AnimationPlayer, { LottieAnimation } from 'components/AnimationPlayer'

import { hashCode } from 'utils'
import './index.sass'

const AnimateTitle = ({
  id = hashCode(),
  title,
}) => (
    <AnimationPlayer
      id={id}
      target={
        <div className="title-wrap">
          <CommonTitle title={title} />
        </div>
      }
      animations={[
        {
          from: {
            height: 0
          },
          to: {
            height: '44px'
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
  id = hashCode(),
  title = '',
  intro = '',
  animateIcon = null,
  animateSize = {
    width: '100%'
  },
  SubComponent = null,
  wrapMinHeight = '750px'
}) => {
  return (
    <div className="panel text-animation-wrap" style={{ minHeight: wrapMinHeight }}>
      <div className="title-part">
        <AnimateTitle id={id + '0'} title={title} />
        <AnimateText id={id + '1'} intro={intro} />
        {
          SubComponent ? <SubComponent /> : null
        }
      </div>
      <div className="animation-part">
        <LottieAnimation
          options={{
            autoplay: true,
            animationData: animateIcon,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
          width={animateSize.width}
        />
      </div>
    </div>
  )
}