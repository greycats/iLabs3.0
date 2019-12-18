import React, { useState, useEffect } from 'react'
import max from 'lodash/max'
import AnimationPlayer, { Animations } from 'components/AnimationPlayer'
import PreloadManager from 'scripts/PreloadManager'
import history from 'history.js'
import TextBg from 'assets/imgs/text-bg.svg'
import CommonTitle from 'components/CommonTitle'
import ProjectLottie from './ProjectLottie'

export const fakeData = () => [
  {
    image: _.get(PreloadManager.getResult('vizient-thumbnail'), 'src', ''),
    hoverLottie: async () => await import('assets/imgs/projects/hover/Vizient.json'),
    // expandLottie: require('assets/imgs/projects/expand/Vizient.json'),
    text: 'Vizient',
    typeText: 'Enterprise platform',
    link: '/casestudy?name=vizient',
    type: 'enterprise'
  },
  {
    image: _.get(PreloadManager.getResult('gs-thumbnail'), 'src', ''),
    hoverLottie: async () => await import('assets/imgs/projects/hover/GS.json'),
    // expandLottie: require('assets/imgs/projects/expand/GS.json'),
    text: 'GreatSchools',
    typeText: 'Website',
    link: '/casestudy?name=gs',
    type: 'enterprise'
  },
  {
    image: _.get(PreloadManager.getResult('dcom-thumbnail'), 'src', ''),
    hoverLottie: async () => await import('assets/imgs/projects/hover/Dcom.json'),
    // expandLottie: require('assets/imgs/projects/expand/Dcom.json'),
    text: 'Dictionary.com',
    typeText: 'Website',
    link: '/casestudy?name=dcom',
    type: 'enterprise'
  },
  {
    image: _.get(PreloadManager.getResult('crew-thumbnail'), 'src', ''),
    hoverLottie: async () => await import('assets/imgs/projects/hover/Crew.json'),
    // expandLottie: require('assets/imgs/projects/expand/Crew.json'),
    text: 'Crew',
    typeText: 'App',
    link: '/casestudy?name=crew',
    type: 'enterprise'
  }
]

const ProjectCard = ({ item, showText = true, isMobile = false }) => {
  const ProjectCard = () => {
    const [hovered, setHoverd] = useState(false)
    const [direction, setDirection] = useState(1)
    const [animationData, setAnimationData] = useState(null)
    const [isStopped, setIsStopped] = useState(false)
    const getAnimationData = async () => {
      const data = await item.hoverLottie().default
      console.log('data ' , data)
      setAnimationData(data)
    }
    useEffect(() => {
      getAnimationData()
    }, [])
    const ProjectImage = ({ hovered }) => {
      return (
        <div style={{
          overflow: 'hidden'
        }}>
          <Animations
            target={
              <div style={{
                maxWidth: '600px',
                cursor: 'pointer',
                height: showText ? '700px' : '445px',
                backgroundImage: `url(${item.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'auto 100%',
              }} />
            }
            animations={[
              {
                from: {
                  transform: hovered ? 'scale(1)' : 'scale(1.1)',
                },
                to: {
                  transform: hovered ? 'scale(1.1)' : 'scale(1)',
                }
              }
            ]}
          />
        </div>
      )
    }
    return (
      <div
        onMouseEnter={() => {
          setHoverd(true)
          setDirection(1)
        }}
        onMouseLeave={() => {
          setHoverd(false)
          setDirection(-1)
        }}
        onClick={(e) => {
          setTimeout(() => {
            history.push(item.link)
          }, 1500)
        }}
      >
        {
          animationData
            ? <ProjectLottie
              isStopped={isStopped}
              direction={direction}
              />
            : <ProjectImage hovered={hovered} />
        }
      </div>
    )
  }

  return (
    <div style={{
      position: 'relative',
    }}>
      <ProjectCard/>
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