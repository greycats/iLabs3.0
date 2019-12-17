import React, { useState, useRef } from 'react'
import max from 'lodash/max'
import AnimationPlayer from 'components/AnimationPlayer'
import PreloadManager from 'scripts/PreloadManager'
import history from 'history.js'
import TextBg from 'assets/imgs/text-bg.svg'
import CommonTitle from 'components/CommonTitle'
import Lottie from 'react-lottie'
// import ProjectCard from './projectCard'

export const fakeData = () => [
  {
    image: _.get(PreloadManager.getResult('vizient-thumbnail'), 'src', ''),
    // hoverLottie: require('assets/imgs/projects/hover/Vizient.json'),
    // expandLottie: require('assets/imgs/projects/expand/Vizient.json'),
    text: 'Vizient',
    typeText: 'Enterprise platform',
    link: '/casestudy?name=vizient',
    type: 'enterprise'
  },
  {
    image: _.get(PreloadManager.getResult('gs-thumbnail'), 'src', ''),
    // hoverLottie: require('assets/imgs/projects/hover/GS.json'),
    // expandLottie: require('assets/imgs/projects/expand/GS.json'),
    text: 'GreatSchools',
    typeText: 'Website',
    link: '/casestudy?name=gs',
    type: 'enterprise'
  },
  {
    image: _.get(PreloadManager.getResult('dcom-thumbnail'), 'src', ''),
    // hoverLottie: require('assets/imgs/projects/hover/Dcom.json'),
    // expandLottie: require('assets/imgs/projects/expand/Dcom.json'),
    text: 'Dictionary.com',
    typeText: 'Website',
    link: '/casestudy?name=dcom',
    type: 'enterprise'
  },
  {
    image: _.get(PreloadManager.getResult('crew-thumbnail'), 'src', ''),
    // hoverLottie: require('assets/imgs/projects/hover/Crew.json'),
    // expandLottie: require('assets/imgs/projects/expand/Crew.json'),
    text: 'Crew',
    typeText: 'App',
    link: '/casestudy?name=crew',
    type: 'enterprise'
  }
]

const ProjectCard = ({ item, showText = true, isMobile = false }) => {
  const [isStopped, setIsStopped] = useState(true)
  const [direction, setDirection] = useState(1)
  const [expandStep, setExpandStep] = useState(0)
  const [projectPosition, setProjectPosition] = useState({ top: 0, right: 0 })
  return (
    <div style={{
      maxWidth: '600px',
      cursor: 'pointer',
      height: showText ? '700px' : '445px',
      position: 'relative',
      backgroundImage: `url(${item.image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto 100%'
    }}
      onClick={(e) => {
        // if (expandStep) return
        // const { top, right } = e.target.getBoundingClientRect()
        // setProjectPosition({ top, right })
        // setExpandStep(1)
        // setDirection(-1)
        // setTimeout(() => {
        //   setExpandStep(2)
        // }, 300)
        setTimeout(() => {
          history.push(item.link)
        }, 1500)
      }}
      // onMouseEnter={() => {
      //   if (expandStep) return
      //   setDirection(1)
      //   setIsStopped(false)
      // }}
      // onMouseLeave={() => {
      //   if (expandStep) return
      //   setDirection(-1)
      //   setIsStopped(false)
      // }}
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

      {
        expandStep === 2 ? (
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
            <AnimationPlayer
              target={
                <div style={{
                  position: 'absolute',
                  top: projectPosition.top,
                  right: projectPosition.right
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
                    height="720px"
                    // width="100%"
                    // isStopped={true}
                    eventListeners={[
                      {
                        eventName: 'complete',
                        callback: () => {
                          console.log('expand end')
                        }
                      }
                    ]}
                  />
                </div>
              }
              animations={
                [{
                  to: {
                    top: 60,
                    right: max([(window.innerWidth - 1920) / 2, 0]),
                    left: max([(window.innerWidth - 1920) / 2, 0]) + 200
                  }
                }]
              }
            />
          </div>
        ) : null
      }
    </div>
  )
}

export const MobileList = ({ listData = fakeData() }) => {
  return (
    <div>
      {
        listData.map((item, index) => {
          return (
            <div key={index}>
              <div style={{
                height: '480px'
              }}>
                <AnimationPlayer
                  target={
                    <div style={{
                      width: 0
                    }}>
                      <ProjectCard item={item} showText={false} isMobile={true} />
                    </div>
                  }
                  animations={
                    [{
                      to: {
                        width: '100%'
                      }
                    }]
                  }
                />
              </div>
              <AnimationPlayer
                triggerRelativePosition={{
                  top: '-440px'
                }}
                target={
                  <div>
                    <CommonTitle title={item.text} intro={item.typeText} />
                  </div>
                }
                animations={[
                  {
                    from: {
                      opacity: 0
                    },
                    to: {
                      opacity: 1
                    }
                  }
                ]}
              />
              <br />
              <br />
            </div>
          )
        })
      }
    </div>
  )
}

const ProjectList = ({ listData = fakeData() }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      minWidth: '1280px',
    }}>
      {
        listData.map((item, index) => {
          const isSecondItemOfRow = index % 2 !== 0
          if (!item) return null
          return (
            <div
              key={index}
              style={{
                width: '540px',
                height: '750px',
                cursor: 'pointer'
              }}>
              <AnimationPlayer
                triggerRelativePosition={{
                  top: isSecondItemOfRow ? '-90px' : '-90px'
                }}
                target={
                  <div style={{
                    marginTop: isSecondItemOfRow ? '50px' : '0',
                    position: 'relative',
                    left: isSecondItemOfRow ? '20px' : 'unset'
                  }}>
                    <ProjectCard item={item} index={index} />
                  </div>
                }
                animations={
                  [
                    {
                      from: {
                        top: '100px',
                        opacity: 0
                      },
                      to: {
                        top: '0px',
                        opacity: 1
                      },
                      delay: isSecondItemOfRow ? 0.2 : 0.1,
                      duration: 0.2
                    }
                  ]
                }
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default ProjectList