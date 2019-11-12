import React, { useEffect, useState } from 'react'
import CommonTitle from 'components/CommonTitle'
import ComponentsImage from 'assets/imgs/vizient/components.png'
import AnimateIcon from '../../assets/imgs/vizient/Typeface'
import { SectionTitleWrap, AbsolutePositionWrap } from 'components/Styled'

import AnimationPlayer, { LottieAnimation } from 'components/AnimationPlayer'

const AnimateTitle = ({
  id
}) => (
    <AnimationPlayer
      id={id}
      target={
        <SectionTitleWrap>
          <div className="title-wrap">
            <CommonTitle title='Vizient Components for the Web' titleMargin='50px' />
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
  id
}) => (
    <AnimationPlayer
      id={id}
      target={
        <div style={{
          width: '500px',
          position: 'absolute',
          left: '0'
        }}>
          <p>
            The Toolkit system includes the resources needed to create user interfaces consistent with the Vizient’s product principles, design language, and best practices.
        </p>
          <br />
          <p>
            Rather than focusing on pixels, developers can focus on the application logic, while designers can focus on user experiences, interactions, and flows.
        </p>
        </div>
      }
      animations={[
        {
          from: {
            opacity: 0,
            top: '5px'
          },
          to: {
            opacity: 1,
            top: '20px'
          },
          delay: .1
        }
      ]}
    />
  )

const AnimateImage = ({ id }) => {
  return (
    <div style={{
      height: '40vw',
      width: '45vw',
      backgroundImage: `URL(${ComponentsImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%'
    }}></div>
  )
}

const LottiePosition = AbsolutePositionWrap({ right: '-200px', top: '-200px' })

export default ({ id = '__trigger_scene' }) => {
  return (
    <div className="layout-1240 panel challenge-wrap" style={{ minHeight: '800px', position: 'relative', marginTop: '150px' }}>
      <div className="title-part">
        <AnimateTitle id={id + 0} />
        <div style={{
          position: 'relative'
        }}>
          <AnimateText id={id + 1} />
          <LottiePosition>
            <LottieAnimation
              triggerRelativePosition={{
                top: '100px'
              }}
              options={{
                autoplay: true,
                animationData: AnimateIcon,
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
    </div>
  )
}