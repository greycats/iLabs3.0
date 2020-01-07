import React, { useState, useEffect } from 'react'
import AnimationPlayer, { Animations } from 'components/AnimationPlayer'
import { getImage } from 'scripts/PreloadManager'
import history from 'history.js'
import TextBg from 'assets/imgs/text-bg.svg'
import CommonTitle from 'components/CommonTitle'
import ProjectLottie from './ProjectLottie'

import { useAppContext, caseNameAction } from 'hooks/useShareState'

export const fakeData = () => [
  {
    image: getImage('vizient-thumbnail'),
    hoverLottie: async () => await import('assets/imgs/2x/FeaturedWorks/vizient/data.json'),
    text: 'Vizient',
    typeText: 'Enterprise platform',
    link: '/casestudy?name=vizient',
    type: 'enterprise',
    name: 'vizient'
  },
  {
    // image: _.get(PreloadManager.getResult('gs-thumbnail'), 'src', ''),
    image: getImage('gs-thumbnail'),
    hoverLottie: async () => await import('assets/imgs/2x/FeaturedWorks/gs/data.json'),
    text: 'GreatSchools',
    typeText: 'Website',
    link: '/casestudy?name=gs',
    type: 'enterprise',
    name: 'gs'
  },
  {
    // image: _.get(PreloadManager.getResult('dcom-thumbnail'), 'src', ''),
    image: getImage('dcom-thumbnail'),
    hoverLottie: async () => await import('assets/imgs/2x/FeaturedWorks/dcom/data.json'),
    text: 'Dictionary.com',
    typeText: 'Website',
    link: '/casestudy?name=dcom',
    type: 'enterprise',
    name: 'dcom'
  },
  {
    // image: _.get(PreloadManager.getResult('crew-thumbnail'), 'src', ''),
    image: getImage('crew-thumbnail'),
    hoverLottie: async () => await import('assets/imgs/2x/FeaturedWorks/crew/data.json'),
    text: 'Crew',
    typeText: 'App',
    link: '/casestudy?name=crew',
    type: 'enterprise',
    name: 'crew'
  }
]


export const mobileData = () => [
  {
    image: getImage('vizient-thumbnail'),
    text: 'Vizient',
    typeText: 'Enterprise platform',
    link: '/casestudy?name=vizient',
    type: 'enterprise',
    name: 'vizient'
  },
  {
    image: getImage('gs-thumbnail'),
    text: 'GreatSchools',
    typeText: 'Website',
    link: '/casestudy?name=gs',
    type: 'enterprise',
    name: 'gs'
  },
  {
    image: getImage('dcom-thumbnail'),
    text: 'Dictionary.com',
    typeText: 'Website',
    link: '/casestudy?name=dcom',
    type: 'enterprise',
    name: 'dcom'
  },
  {
    image: getImage('crew-thumbnail'),
    text: 'Crew',
    typeText: 'App',
    link: '/casestudy?name=crew',
    type: 'enterprise',
    name: 'crew'
  }
]

const ProjectImage = ({ image, height = '698px' }) => {
  return (
    <div
      className={window.isPC ? 'project-image-container' : ''}
      style={window.isPC ? {
        overflow: 'hidden',
        width: '524px'
      } : {
          maxWidth: '100%'
        }}
    >
      <div
        className="project-image"
        style={{
          maxWidth: '600px',
          cursor: 'pointer',
          height,
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: window.isPC ? '524px 698px' : '100% 100%',
        }} />
    </div>
  )
}

const ProjectCard = ({ item, showText = true, isMobile = false }) => {
  const [isClicked, setIsClicked] = useState(false)
  const maskStyle = {
    position: 'fixed',
    top: 0, left: 0,
    background: '#fff',
    width: '100vw', height: 0,
    zIndex: 50
  }

  const { dispatch } = useAppContext()
  const [direction, setDirection] = useState(1)
  const [animationData, setAnimationData] = useState(null)
  const [animationReady, setAnimationReady] = useState(false)
  const [isStopped, setIsStopped] = useState(true)
  const getAnimationData = async () => {
    if (!window.isPC) return
    const data = await item.hoverLottie()
    setAnimationData(data.default)
    setTimeout(() => {
      // workaround for safari flash issue
      setAnimationReady(true)
    }, 500)
  }
  useEffect(() => {
    getAnimationData()
  }, [])

  return (
    <div style={{
      position: 'relative',
      height: showText ? '698px' : '445px'
    }}>
      <div
        style={{
          position: 'relative',
          height: showText ? '698px' : '445px',
          zIndex: isClicked ? 11 : 'unset'
        }}
        onMouseEnter={() => {
          if (animationReady) {
            if (isClicked) return
            setDirection(1)
            setIsStopped(false)
          }
        }}
        onMouseLeave={() => {
          if (animationReady) {
            if (isClicked) return
            setDirection(-1)
          }
        }}
        onClick={() => {
          if (isMobile) {
            history.push(item.link)
            return
          }
          if (isClicked) return
          caseNameAction(dispatch, item.name)
          setDirection(-1)
          setIsClicked(true)
          setTimeout(() => {
            history.push(item.link)
          }, 2500)
        }}
      >
        <div
        >
          <div style={{
            display: animationReady ? 'block' : 'none',
            // opacity: animationReady ? 1 : 0,
            width: '100%',
            height: '100%',
          }}>
            <ProjectLottie
              isStopped={isStopped}
              direction={direction}
              animationData={animationData}
            />
          </div>
          <div style={{
            display: !animationReady ? 'block' : 'none',
            // opacity: !animationReady ? 1 : 0,
            width: '100%',
            height: '100%',
          }}>
            <ProjectImage height={showText ? '698px' : '445px'} image={item.image} />
          </div>
        </div>
        {
          showText
            ? <>
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
      </div>
      {
        isClicked ? (
          <div>
            <Animations
              target={
                <div style={{ ...maskStyle, zIndex: 50 }}></div>
              }
              animations={
                [{
                  to: {
                    height: '100vh'
                  },
                  duration: 1,
                  delay: 1
                }]
              }
            />
            <Animations
              target={
                <div style={{ ...maskStyle, zIndex: 12 }}></div>
              }
              animations={
                [{
                  to: {
                    height: '100vh'
                  },
                  duration: 1,
                  delay: 1.5
                }]
              }
            />
          </div>
        ) : null
      }
    </div>
  )
}

export const MobileList = ({ listData = mobileData() }) => {
  return (
    <div>
      {
        listData.map((item, index) => {
          const titleData = {
            title: item.text,
            intro: item.typeText,
            titleSize: '28px',
            titleMargin: '15px',
            wrapStyle: {
              marginBottom: '0.4rem'
            }
          }
          return (
            <div key={index}>
              <div style={{
                height: '480px',
                position: 'relative'
              }}>
                <AnimationPlayer
                  triggerRelativePosition={{
                    top: '-39vh'
                  }}
                  target={
                    <ProjectCard item={item} showText={false} isMobile={true} />
                  }
                  animations={
                    [
                      {
                        from: {
                          display: 'none'
                        },
                        to: {
                          display: 'block'
                        },
                        duration: 0
                      }
                    ]
                  }
                />
                <AnimationPlayer
                  triggerRelativePosition={{
                    top: '-40vh'
                  }}
                  target={
                    <div style={{
                      position: 'absolute',
                      zIndex: 1,
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#020202',
                      top: 0,
                      left: 0
                    }}>
                    </div>
                  }
                  animations={
                    [
                      {
                        from: {
                          left: 0
                        },
                        to: {
                          left: '100vw'
                        },
                        duration: 1
                      }
                    ]
                  }
                />
              </div>
              <AnimationPlayer
                triggerRelativePosition={{
                  top: '-50vh'
                }}
                target={
                  <div>
                    <CommonTitle {...titleData} />
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
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      minWidth: '1240px',
      paddingRight: '50px'
    }}>
      {
        listData.map((item, index) => {
          const isSecondItemOfRow = index % 2 !== 0
          if (!item) return null
          return (
            <div
              key={index}
              style={{
                width: '524px',
                height: '700px',
                cursor: 'pointer',
                marginBottom: '100px'
              }}>
              <AnimationPlayer
                triggerRelativePosition={{
                  top: isSecondItemOfRow ? '-90px' : '-90px'
                }}
                target={
                  <div style={{
                    marginTop: isSecondItemOfRow ? '50px' : '0',
                    // position: 'relative',
                    // left: isSecondItemOfRow ? '20px' : 'unset'
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