import React, { useEffect, useState } from 'react'
import CommonTitle from 'components/CommonTitle'
import AnimateIcon from '../../assets/imgs/vizient/Typeface'
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

export default ({
  id = hashCode(),
  title = 'Typeface',
  textTarget = <div style={{
    width: '500px',
    position: 'absolute',
    left: '0'
  }}>
    <p>
      Soleto is a fresh, modern sans serif font family. Optimised for text environments it performs well at large sizes and its seven weights range evenly from Thin through to Black in both upright and italic.
    </p>
  </div>,
  animateIcon = AnimateIcon,
  textToTop = '190px',
  titlePosition = {
    right: '200px', top: '10px'
  },
  SubComponent = null
}) => {
  const TitlePosition = AbsolutePositionWrap({ right: titlePosition.right, top: titlePosition.top })
  const LottiePosition = AbsolutePositionWrap({ left: '-200px', top: '-200px' })

  return (
    <div className="layout-1240 panel" style={{ minHeight: '750px', position: 'relative' }}>
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
      <TitlePosition>
        <div className="title-part">
          <AnimateTitle id={id + '0'} title={title} />
        </div>
        <AnimateText id={id + '1'} textTarget={textTarget} textToTop={textToTop}/>
        {
          SubComponent ?  <SubComponent/> : null
        }
      </TitlePosition>
    </div>
  )
}