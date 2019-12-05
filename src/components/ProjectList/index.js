import React from 'react'
import AnimationPlayer from 'components/AnimationPlayer'
import PreloadManager from 'scripts/PreloadManager'
import history from 'history.js'
import TextBg from 'assets/imgs/text-bg.svg'
import CommonTitle from 'components/CommonTitle'

export const fakeData = () => [
  {
    image: _.get(PreloadManager.getResult('vizient-thumbnail'), 'src', ''),
    text: 'Vizient',
    typeText: 'Enterprise platform',
    link: '/casestudy?name=vizient',
    type: 'enterprise'
  },
  {
    image: _.get(PreloadManager.getResult('gs-thumbnail'), 'src', ''),
    text: 'GreatSchools',
    typeText: 'Website',
    link: '/casestudy?name=gs',
    type: 'enterprise'
  },
  {
    image: _.get(PreloadManager.getResult('dcom-thumbnail'), 'src', ''),
    text: 'Dictionary.com',
    typeText: 'Website',
    link: '/casestudy?name=dcom',
    type: 'enterprise'
  },
  {
    image: _.get(PreloadManager.getResult('crew-thumbnail'), 'src', ''),
    text: 'Crew',
    typeText: 'App',
    link: '/casestudy?name=crew',
    type: 'enterprise'
  }
]

const ProjectCard = ({ item, showText = true }) => {
  return (
    <div style={{
      // width: '90%',
      maxWidth: '600px',
      cursor: 'pointer',
      height: showText ? '700px' : '445px',
      position: 'relative',
      background: `url(${item.image})`,
      backgroundRepeat: 'no-repeat'
    }}
      onClick={() => {
        history.push(item.link)
      }}
    >
      {
        showText
          ? <>
            <img src={TextBg} alt="" style={{
              position: 'absolute',
              bottom: '80px',
              right: '-30px',
              zIndex: 1
            }} />
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              width: '300px',
              position: 'absolute',
              bottom: '95px',
              right: '15px',
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
                      <ProjectCard item={item} showText={false} />
                    </div>
                  }
                  animations={
                    [
                      {
                        to: {
                          width: '100%'
                        }
                      }
                    ]
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

const ProjectList = ({ listData = [] }) => {
  return (
    <div style={{
      display: 'flex',
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
                width: '45%',
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
                    <ProjectCard item={item} />
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