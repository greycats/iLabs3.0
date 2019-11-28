import React, { useState, useEffect } from 'react'
import { AnimateBanner } from 'components/AnimateBanner'
import AnimationPlayer from 'components/AnimationPlayer'
import history from 'history.js'
import { getLocationSearch } from 'utils'
import PreloadManager from 'scripts/PreloadManager'
import Footer from 'components/Footer'

import _ from 'lodash'

const NavBar = ({
  NavList = [
    {
      name: 'All',
      type: 'all'
    },
    {
      name: 'Enterprise',
      type: 'enterprise'
    },
    {
      name: 'Apps',
      type: 'apps'
    },
    {
      name: 'Development',
      type: 'development'
    },
    {
      name: 'Marketing',
      type: 'marketing'
    }
  ],
  onNavChange = () => { }
}) => {
  const [activeItem, setActiveItem] = useState(getLocationSearch('type') || 'all')

  useEffect(() => {
    onNavChange(activeItem)
  }, [activeItem])

  return (
    <div style={{
      backgroundColor: '#fff',
      marginTop: '-90px',
      height: '100px',
      width: '60%',
      display: 'flex',
      alignItems: 'flex-end',
      paddingLeft: '18%'
    }}>
      {
        NavList.map((nav, index) => {
          const isActive = nav.type === activeItem

          return (
            <div
              key={index}
              style={{
                cursor: 'pointer',
                marginRight: '40px',
                color: isActive ? '#2c2c2c' : 'unset',
                fontWeight: isActive ? 'bold' : 'unset'
              }}
              onClick={() => {
                setActiveItem(nav.type)
              }}
            >
              {nav.name}
              <div style={{
                opacity: isActive ? 1 : 0,
                height: '2px',
                marginTop: '5px',
                borderBottom: '2px solid #2c2c2c',
              }}></div>
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
      minWidth: '1360px',
      marginLeft: '18%'
    }}>
      {
        listData.map((item, index) => {
          const isSecondItemOfRow = index % 2 !== 0
          if (!item) return null
          return (
            <div
              key={index}
              style={{
                width: '35%',
                height: '750px',
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

const Title = () => <AnimationPlayer
  target={
    <div style={{
      height: '600px',
      lineHeight: '500px',
      paddingLeft: '20%',
      fontSize: '96px',
      color: '#fff'
    }}>
      <h1 className="bold">
        our work
              </h1>
    </div>
  }
  animations={
    [
      {
        from: {
          opacity: 0
        },
        to: {
          opacity: 1
        }
      }
    ]
  }
/>


const fakeData = () => [
  {
    image: _.get(PreloadManager.getResult('vizient-image'), 'src', ''),
    text: 'aa',
    link: '',
    type: 'enterprise'
  },
  {
    image: _.get(PreloadManager.getResult('vizient-image'), 'src', ''),
    text: 'aa',
    link: '',
    type: 'enterprise'
  },
  {
    image: _.get(PreloadManager.getResult('vizient-image'), 'src', ''),
    text: 'aa',
    link: '',
    type: 'enterprise'
  },
  {
    image: _.get(PreloadManager.getResult('vizient-image'), 'src', ''),
    text: 'aa',
    link: '',
    type: 'enterprise'
  },
  {
    image: _.get(PreloadManager.getResult('vizient-image'), 'src', ''),
    text: 'aa',
    link: '',
    type: 'enterprise'
  },
  {
    image: _.get(PreloadManager.getResult('vizient-image'), 'src', ''),
    text: 'aa',
    link: '',
    type: 'apps'
  },
  {
    image: _.get(PreloadManager.getResult('vizient-image'), 'src', ''),
    text: 'aa',
    link: '',
    type: 'development'
  },
  {
    image: _.get(PreloadManager.getResult('vizient-image'), 'src', ''),
    text: 'aa',
    link: '',
    type: 'marketing'
  }
]
export default ({ data = fakeData() }) => {
  const [listData, setListData] = useState([])

  const [projectType, setProjectType] = useState(getLocationSearch('type'))

  useEffect(() => {
    setListData(data)

    history.listen(() => {
      setTimeout(() => {
        setListData([])
        setProjectType(getLocationSearch('type'))
      }, 50)
    })
    return () => history.listen(null)
  }, [])

  useEffect(() => {
    if (!listData.length) {
      // setListData(data)
      setListData(_.filter(data, item => {
        const type = projectType
        if (type && type !== 'all') {
          return item.type === type
        } else {
          return item
        }
      }))
    }
  }, [projectType])

  return (
    <div>
      <AnimateBanner height={600} />
      <Title/>
      <NavBar
        onNavChange={type => {
          history.replace(`/ourwork?type=${type}`)
        }}
      />
      <div style={{ marginTop: '100px', paddingBottom: '100px'}}>
        <ProjectList listData={listData} />
      </div>
      <Footer />
    </div>
  )
}
