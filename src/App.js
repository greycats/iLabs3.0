import React, { useEffect, useState } from 'react'
import ReactGA from 'react-ga'
import _ from 'lodash'
import Preload from 'components/Preload'
import './App.css'
import 'assets/styles/common.sass'
import routes from './routes'
import { isPCOS, flexible } from './utils/flexible'
import PreloadManager from 'scripts/PreloadManager'
import classNames from 'classnames'
import history from 'history.js'
import useShareState, { AppContext, isDataReadyAction } from 'hooks/useShareState'
import { logoList } from 'views/Home/OurClients/data.js'
import MenuContent from 'components/Header/Menu'

import { loadImage } from 'utils/lazyload.js'

function App() {
  const [store, dispatch] = useShareState()
  const [inited, setInited] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [assetLoaded, setAssetLoaded] = useState(false)

  const [jsLoaded, setJsLoaded] = useState(false)

  const doneLoad = () => {
    setTimeout(() => {
      setLoaded(true)
    }, 3000)
  }

  const loadFile = () => {
    PreloadManager.loadManifest([
      {
        id: 'vizient-mac-image',
        src: require('assets/imgs/vizient/8-Leveraged/Mac.png')
      },
      {
        id: 'toolkit',
        src: require('assets/imgs/vizient/5-toolkit/mac.png')
      },
      {
        id: 'orange-path',
        src: require('assets/imgs/vizient/5-toolkit/Path 2.png')
      },
      {
        id: 'apple',
        src: require('assets/imgs/dcom/appleicon.png')
      },
      {
        id: 'andriod-icon',
        src: require('assets/imgs/dcom/andriodicon.png')
      },
      {
        id: 'service-bg',
        src: require("assets/imgs/services/service-bg.png")
      },
      {
        id: 'service-design-1',
        src: require("assets/imgs/services/images/User Research.jpg")
      },
      {
        id: 'service-design-2',
        src: require("assets/imgs/services/images/Ideation.jpg")
      },
      {
        id: 'service-design-3',
        src: require("assets/imgs/services/images/Creative Concept.jpg")
      },
      {
        id: 'service-design-4',
        src: require("assets/imgs/services/images/Visual Design.jpg")
      },
      {
        id: 'service-design-5',
        src: require("assets/imgs/services/images/Prototype.jpg")
      },
      {
        id: 'service-dev-1',
        src: require("assets/imgs/services/images/Mobile Dev.jpg")
      },
      {
        id: 'service-dev-2',
        src: require("assets/imgs/services/images/Fullstack Web.jpg")
      },
      {
        id: 'service-dev-3',
        src: require("assets/imgs/services/images/Analytics.jpg")
      },
      {
        id: 'service-dev-4',
        src: require("assets/imgs/services/images/Support and DevOps.jpg")
      },
      {
        id: 'service-dev-5',
        src: require("assets/imgs/services/images/Technology.jpg")
      },
      {
        id: 'service-dev-6',
        src: require("assets/imgs/services/images/IT Security.jpg")
      },
      {
        id: 'loading-banner-vizient',
        src: require('assets/imgs/banners/vizient.jpg')
      },
      {
        id: 'loading-banner-gs',
        src: require('assets/imgs/banners/gs.jpg')
      },
      {
        id: 'loading-banner-crew',
        src: require('assets/imgs/banners/crew.jpg')
      },
      {
        id: 'loading-banner-dcom',
        src: require('assets/imgs/banners/dcom.jpg')
      },
      {
        id: 'video-poster-1',
        src: require('assets/imgs/video/dekstop/Scene 1.jpg')
      },
      {
        id: 'video-poster-2',
        src: require('assets/imgs/video/dekstop/Scene 2.jpg')
      },
      {
        id: 'video-poster-3',
        src: require('assets/imgs/video/dekstop/Scene 3.jpg')
      },
    ].concat(
      _.map(logoList, item => {
        return {
            id: `client-${item.img}`,
            type: createjs.LoadQueue.IMAGE,
            src: require(`assets/imgs/client-logos/${item.img}.svg`)
          }
      })
    ))

    PreloadManager.load()
    PreloadManager.on('complete', function () {
      setTimeout(() => {
        setAssetLoaded(true)
      }, 500)
    }, this)
  }

  useEffect(() => {
    loadImage([
      {
        id: 'vizient-thumbnail',
        src: import('assets/imgs/projects/thumbnails/vizient.png'),
      },
      {
        id: 'crew-thumbnail',
        src: import('assets/imgs/projects/thumbnails/crew.png'),
      },
      {
        id: 'gs-thumbnail',
        src: import('assets/imgs/projects/thumbnails/gs.png'),
      },
      {
        id: 'dcom-thumbnail',
        src: import('assets/imgs/projects/thumbnails/dcom.png'),
      },
      {
        id: 'vizient-mobile-bg',
        src: import('assets/imgs/vizient/mobile/banner.png')
      },
      {
        id: 'crew-mobile-bg',
        src: import('assets/imgs/crew/mobile/banner.png')
      },
      {
        id: 'dcom-mobile-bg',
        src: import('assets/imgs/dcom/mobile/banner.png')
      },
      {
        id: 'gs-mobile-bg',
        src: import('assets/imgs/gs/mobile/banner.png')
      }
    ], () => {
      setJsLoaded(true)
    })
    setTimeout(() => {
      loadFile()
    }, 3000)
    ReactGA.initialize('UA-96911906')
    history.listen((...args) => {
      const location = args[0]
      const method = args[1]
      if (_.includes(['POP', 'PUSH'], method)) {
        window.scrollTo(0, 0)
      }
      ReactGA.set({ page: location.pathname })
      ReactGA.pageview(location.pathname)
    })
    window.addEventListener('load', doneLoad)
    return () => window.removeEventListener('load', doneLoad)
  }, [])

  const isPC = isPCOS()
  window.isPC = isPC
  if (!isPC) {
    flexible(750)
  }

  useEffect(() => {
    if (loaded && assetLoaded && jsLoaded) {
      isDataReadyAction(dispatch, true)
    }
  }, [loaded, assetLoaded, jsLoaded])

  useEffect(() => {
    if (store.isDataReady) {
      setTimeout(() => {
        setInited(true)
      }, 500)
    }
  }, [store])

  if (inited) {
    return (
      <AppContext.Provider value={{ store, dispatch }}>
        <div className={classNames("App", { 'is-phone': !isPC })}>
          <MenuContent/>
          {routes}
        </div>
      </AppContext.Provider>
    )
  }
  return (
    <div className="App">
      <Preload loaded={store.isDataReady}/>
    </div>
  )

}

export default App;
