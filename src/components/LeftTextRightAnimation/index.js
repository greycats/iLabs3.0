import React, { useEffect, useState } from 'react'
import CommonTitle from 'components/CommonTitle'
import AnimateIcon from '../../assets/imgs/vizient/Components'
import { SectionTitleWrap, AbsolutePositionWrap } from 'components/Styled'

import AnimationPlayer, { LottieAnimation } from 'components/AnimationPlayer'

import { hashCode } from 'utils'

const AnimateTitle = ({
  id = hashCode(),
  title,
}) => (
    <AnimationPlayer
      id={id}
      target={
        <SectionTitleWrap>
          <div className="title-wrap">
            <CommonTitle title={title} titleMargin='50px' />
          </div>
        </SectionTitleWrap>
      }
      animations={[
        {
          from: {
            height: 0
          },
          to: {
            height: '94px'
          }
        }
      ]}
    />
  )

const AnimateText = ({
  id = hashCode(),
  textTarget,
  textToTop
}) => (
    <AnimationPlayer
      id={id}
      target={textTarget}
      animations={[
        {
          from: {
            opacity: 0,
            top: '5px'
          },
          to: {
            opacity: 1,
            top: textToTop
          },
          delay: .1
        }
      ]}
    />
  )

const LottiePosition = AbsolutePositionWrap({ right: '-200px', top: '-200px' })

export default ({
  id = hashCode(),
  title = 'Vizient Components for the Web',
  textTarget = <div style={{
    width: '500px',
    position: 'absolute',
    left: '0',
    top: '150px'
  }}>
    <p>
      The Toolkit system includes the resources needed to create user interfaces consistent with the Vizient’s product principles, design language, and best practices.
    </p>
    <br />
    <p>
      Rather than focusing on pixels, developers can focus on the application logic, while designers can focus on user experiences, interactions, and flows.
    </p>
  </div>,
  animateIcon = AnimateIcon,
  textToTop = '190px',
  SubComponent = null
}) => {
  return (
    <div className="layout-1240 panel" style={{ minHeight: '750px', position: 'relative' }}>
      <div className="title-part">
        <AnimateTitle id={id + '0'} title={title} />
      </div>
      <AnimateText id={id + '1'} textTarget={textTarget} textToTop={textToTop}/>
      {
        SubComponent ?  <SubComponent/> : null
      }
      <div style={{
        position: 'relative'
      }}>
        <LottiePosition>
          <LottieAnimation
            triggerRelativePosition={{
              top: '100px'
            }}
            options={{
              autoplay: true,
              animationData: animateIcon,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
              }
            }}
            height={'70%'}
            width={'70%'}
          />
        </LottiePosition>
      </div>
    </div>
  )
}