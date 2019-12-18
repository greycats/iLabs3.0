import React, { Component } from 'react'
import max from 'lodash/max'
import AnimationPlayer, { Animations } from 'components/AnimationPlayer'
import history from 'history.js'
import TextBg from 'assets/imgs/text-bg.svg'
import Lottie from 'react-lottie'

const isPC = window.isPC

class ProjectCard extends Component {

  static defaultProps = {
    item: {},
    index: 0,
    showText: true,
    isMobile: false
  }

  state = {
    isStopped: true,
    direction: 1,
    expandStep: 0,
    cardPosition: { top: 'unset', right: 'unset', bottom: 'unset', left: 'unset' },
    lottieHeight: 0
  }

  cardOnClick = () => {
    if (!isPC) {
      history.push(this.props.item.link)
      return
    }

    const { expandStep } = this.state
    if (expandStep) return
    const { top, bottom, left } = document.getElementById('project-card' + this.props.index).getBoundingClientRect()
    this.setState({
      cardPosition: { top, left, bottom: window.innerHeight - bottom },
      expandStep: 1,
      direction: -1
    })
  }

  render() {
    const { item, index, showText, isMobile } = this.props
    const { isStopped, direction, expandStep, cardPosition } = this.state
    return (
      <div
        id={'project-card' + index}
        style={{
          maxWidth: '600px',
          cursor: 'pointer',
          height: showText ? '700px' : '445px',
          position: 'relative',
          backgroundImage: `url(${item.image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 100%'
        }}
        onClick={this.cardOnClick}
        onMouseEnter={() => {
          if (expandStep) return
          this.setState({
            direction: 1,
            isStopped: false
          })
        }}
        onMouseLeave={() => {
          if (expandStep) return
          this.setState({
            direction: -1,
            isStopped: false
          })
        }}
      >
        {
          showText
            ? <>
              {
                !isMobile ?
                  (<div style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    zIndex: expandStep === 2 ? 11 : 'unset',
                    left: 0,
                    top: 0
                  }}
                  >
                    <Lottie
                      options={{
                        loop: false,
                        autoplay: false,
                        animationData: item.hoverLottie,
                        rendererSettings: {
                          preserveAspectRatio: 'xMidYMid slice'
                        }
                      }}
                      height="100%"
                      width="100%"
                      isStopped={isStopped}
                      direction={direction}
                    />
                  </div>)
                  : null
              }

              <img src={TextBg} alt="" style={{
                position: 'absolute',
                bottom: '80px',
                right: '-40px',
                zIndex: 1
              }} />

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '300px',
                position: 'absolute',
                bottom: '95px',
                right: '10px',
                alignItems: 'flex-end',
                zIndex: 2
              }}>
                <p style={{
                  fontSize: '28px',
                  lineHeight: '28px',
                  fontWeight: 'bold',
                  color: '#040404'
                }}>{item.text}</p>
                <p style={{
                  fontSize: '14px',
                  color: '#656565'
                }}>{item.typeText}</p>
              </div>
            </>
            : null
        }

        {/* hide lottie, for getting lottie height */}
        {
          expandStep >= 1 ? (
            <div style={{
              position: 'fixed',
              top: 60,
              right: max([(window.innerWidth - 1920) / 2, 0]),
              left: max([(window.innerWidth - 1920) / 2, 0]) + 200,
              bottom: 'unset',
              opacity: 0
            }}
              ref="hideLottie"
            >
              <Lottie
                options={{
                  loop: false,
                  autoplay: true,
                  animationData: item.expandLottie,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  }
                }}
                isStopped={expandStep >= 3}
                eventListeners={[
                  {
                    eventName: 'complete',
                    callback: () => {
                      this.setState({ expandStep: 2, lottieHeight: this.refs.hideLottie.clientHeight }, () => {
                        setTimeout(() => {
                          this.setState({ expandStep: 3 }, () => {
                            setTimeout(() => {
                              this.setState({ expandStep: 4 })
                            })
                          })
                        }, 500)
                      })
                    }
                  }
                ]}
              />
            </div>
          ) : null
        }

        {
          expandStep >= 2 ? (
            <div style={{
              position: 'fixed',
              top: 0, left: 0,
              width: '100%',
              height: '100%',
              zIndex: 10
            }}>
              <AnimationPlayer
                target={
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0,
                    background: '#fff',
                    height: 0,
                    width: '100%'
                  }}></div>
                }
                animations={
                  [{
                    to: {
                      height: '100%'
                    }
                  }]
                }
              />

              {
                expandStep >= 3 ?
                  <Animations
                    target={
                      <div style={{
                        position: 'absolute',
                        ...cardPosition,
                      }}>
                        <Lottie
                          options={{
                            loop: false,
                            autoplay: true,
                            animationData: item.expandLottie,
                            rendererSettings: {
                              preserveAspectRatio: 'xMidYMid slice'
                            }
                          }}
                          height="100%"
                          width="100%"
                          eventListeners={[
                            {
                              eventName: 'complete',
                              callback: () => {
                                history.push(item.link)
                              }
                            }
                          ]}
                        />
                      </div>
                    }
                    animations={[
                      {
                        to: {
                          top: 60,
                          right: max([(window.innerWidth - 1920) / 2, 0]),
                          left: max([(window.innerWidth - 1920) / 2, 0]) + 200,
                          bottom: window.innerHeight - (60 + this.state.lottieHeight)
                        },
                        // delay: .2
                      }
                    ]}
                  />
                  : null
              }
            </div>
          ) : null
        }
      </div>
    )
  }
}

export default ProjectCard