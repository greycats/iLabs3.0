import React, { useState, useEffect } from 'react'
import { AnimateBanner } from 'components/AnimateBanner'
import AnimationPlayer from 'components/AnimationPlayer'
import ProjectList, { fakeData } from 'components/ProjectList'
import history from 'history.js'
import { getLocationSearch } from 'utils'
import Footer from 'components/Footer'
import CommonTitle from 'components/CommonTitle'

import _ from 'lodash'

const titleData = {
  title: 'A selection of case studies',
  intro: 'Explore some of our latest projects.'
}

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

const Title = () => <AnimationPlayer
  target={
    <div style={{
      minHeight: '600px'
    }}>
      <div className="layout-1240">
        <h1 className="bold" style={{
          fontSize: '96px',
          color: '#fff',
          position: 'relative',
          top: '200px'
        }}>
          our work
      </h1>
      </div>
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
  }, [])

  useEffect(() => {
    if (!listData.length) {
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
      <AnimateBanner height={600}>
        <div style={{
          position: 'absolute',
          left: 0,
          top: '520px',
          height: '80px',
          width: '58%',
          backgroundColor: '#fff'
        }}></div>
      </AnimateBanner>
      <Title />
      {/* <NavBar
        onNavChange={type => {
          history.replace(`/ourwork?type=${type}`)
        }}
      /> */}
      <div className="layout-1240">
        <CommonTitle {...titleData}></CommonTitle>
        <br />
        <br />
        <ProjectList listData={listData} />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  )
}
