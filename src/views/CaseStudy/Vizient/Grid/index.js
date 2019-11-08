import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap'
import styled from 'styled-components'
import CommonTitle from 'components/CommonTitle'
import Grid from 'assets/imgs/vizient/Grid.png'
import Grid2 from 'assets/imgs/vizient/Grid2.png'

const GridWrap = styled.div`
  width: 100%;
  background: #F5F5F5;
  height: 1620px
`

export default () => {
  const titleData = {
    title: 'Grid',
    intro: 'The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts. The  responsive UI is based on a column-variate grid layout. It has 12 columns on desktop, 8 columns on tablet and 4 columns on phone.',
    width: '495px'
  }
  const controllerId = 'grid-trigger'

  const OpacityComponent = ({
    content,
    delay = 0,
    from = { opacity: 0 },
    to = { opacity: 1 },
  }) => (
      <Scene
        triggerElement={'#' + controllerId}
        duration={500}
        reverse={false}
      >
        {(progress) => (
          progress ? (
            <Tween
              from={from}
              to={to}
              delay={delay}
            >
              {content}
            </Tween>
          ) : <div></div>
        )}
      </Scene>
    );
  const imgStyle = {
    width: '100%',
    position: 'relative'
  }
  return (
    <GridWrap>
      <div className="layout-1240 panel">
        <div id={controllerId} />
        <Controller>
          {
            OpacityComponent({
              content: (
                <div>
                  <CommonTitle title={titleData.title} titleMargin='50px'></CommonTitle>
                </div>
              )
            })
          }
          {
            OpacityComponent({
              content: (
                <div style={{ marginBottom: '50px' }}>
                  <CommonTitle intro={titleData.intro} width={495} width={titleData.width}></CommonTitle>
                </div>
              ),
              delay: .2
            })
          }
          {
            OpacityComponent({
              content: (
                <img src={Grid} style={imgStyle} />
              ),
              delay: .4,
              from: { opacity: 0, top: '100px' },
              to: { opacity: 1, top: 0 }
            })
          }
          {
            OpacityComponent({
              content: (
                <img src={Grid2} style={imgStyle} />
              ),
              delay: .6,
              from: { opacity: 0, top: '100px' },
              to: { opacity: 1, top: 0 }
            })
          }
        </Controller>
      </div>
    </GridWrap>
  )
}