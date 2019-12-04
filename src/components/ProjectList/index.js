import React from 'react'
import AnimationPlayer from 'components/AnimationPlayer'

const ProjectList = ({ listData = [] }) => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: '1280px',
      marginLeft: '18%'
    }}>
      {
        listData.map((item, index) => {
          const isSecondItemOfRow = index % 2 !== 0
          if (!item) return null
          return (
            <div
              key={index}
              onClick={() => {
                history.push(item.link)
              }}
              style={{
                width: '35%',
                height: '750px',
                cursor: 'pointer'
              }}>
              <AnimationPlayer
                triggerRelativePosition={{
                  top: isSecondItemOfRow ? '-90px' : '-90px'
                }}
                target={
                  <div style={{
                    width: '80%',
                    maxWidth: '540px',
                    height: '700px',
                    position: 'relative',
                    background: `url(${item.image})`,
                    marginTop: isSecondItemOfRow ? '50px' : '0'
                  }}>
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