import React, { useEffect, useState } from 'react'
import Preload from 'components/Preload'
import './App.css'
import 'assets/styles/common.sass'
import routes from './routes'
import { isPCOS, flexible } from './utils/flexible'
import PreloadManager from 'scripts/PreloadManager'
import classNames from 'classnames'
import history from 'history.js'

function App() {
  const [loaded, setLoaded] = useState(false)
  const [assetLoaded, setAssetLoaded] = useState(false)

  const [jsLoaded, setJsLoaded] = useState(false)

  const loadJS = () => Promise.all([
    import('./views/Home'),
    import('./views/CaseStudy'),
    import('./views/OurWork'),
    import('./views/Contact'),
    import('views/CaseStudy/Vizient'),
    import('views/CaseStudy/Dcom'),
    import('views/CaseStudy/Crew'),

    import('views/CaseStudy/GS'),
    import('views/CaseStudy/GS/Questions'),
    import('views/CaseStudy/GS/TheChallenge'),
    import('views/CaseStudy/GS/Presentation'),
    import('views/CaseStudy/GS/FirstLook'),
    import('views/CaseStudy/GS/Progressive'),
    import('views/CaseStudy/GS/Others'),

    import('assets/imgs/gs/1-hero'),
    import('assets/imgs/gs/2-story/1-yearly-users'),
    import('assets/imgs/gs/2-story/2-school-profiles'),
    import('assets/imgs/gs/3-challenge/1-navigation'),
    import('assets/imgs/gs/3-challenge/2-engagement'),
    import('assets/imgs/gs/3-challenge/3-userbase'),
    import('assets/imgs/gs/3-challenge/4-vizualization'),
    import('assets/imgs/gs/3-challenge/5-devices'),
    import('assets/imgs/gs/4-solution/data.json'),
    import('assets/imgs/gs/13-colors/1.json'),
    import('assets/imgs/gs/13-colors/2.json'),
    import('assets/imgs/gs/13-colors/3.json'),
    import('assets/imgs/gs/13-colors/4.json')
  ]).then(() => {
    setJsLoaded(true)
  })

  const doneLoad = () => {
    setTimeout(() => {
      setLoaded(true)
    }, 3000)
  }

  const loadFile = () => {
    PreloadManager.loadManifest([
      {
        id: 'project-vizient-img',
        src: require('assets/imgs/vizient-1.png')
      },
      {
        id: 'banner-mac-image',
        src: require('assets/imgs/vizient/1-Mac.png')
      },
      {
        id: 'vizient-image',
        src: require('assets/imgs/vizient/1-Banner.png')
      },
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
        id: 'dcom-banner-image',
        src: require('assets/imgs/dcom/Bg.png')
      },
      {
        id: 'dcom-brand-image',
        src: require('assets/imgs/dcom/image.png')
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
        id: 'vizient-thumbnail',
        src: require('assets/imgs/projects/thumbnails/vizient.png'),
      },
      {
        id: 'crew-thumbnail',
        src: require('assets/imgs/projects/thumbnails/crew.png'),
      },
      {
        id: 'gs-thumbnail',
        src: require('assets/imgs/projects/thumbnails/gs.png'),
      },
      {
        id: 'dcom-thumbnail',
        src: require('assets/imgs/projects/thumbnails/dcom.png'),
      },
      {
        id: 'service-design-1',
        src: require("assets/imgs/home/services/Design-1.png")
      },
      {
        id: 'service-design-2',
        src: require("assets/imgs/home/services/Design-2.png")
      },
      {
        id: 'service-design-3',
        src: require("assets/imgs/home/services/Design-3.png")
      },
      {
        id: 'service-design-4',
        src: require("assets/imgs/home/services/Design-4.png")
      },
      {
        id: 'service-design-5',
        src: require("assets/imgs/home/services/Design-5.png")
      },
      {
        id: 'service-dev-1',
        src: require("assets/imgs/home/services/Dev-1.png")
      },
      {
        id: 'service-dev-2',
        src: require("assets/imgs/home/services/Dev-2.png")
      },
      {
        id: 'service-dev-3',
        src: require("assets/imgs/home/services/Dev-3.png")
      },
      {
        id: 'service-dev-4',
        src: require("assets/imgs/home/services/Dev-4.png")
      },
      {
        id: 'service-dev-5',
        src: require("assets/imgs/home/services/Dev-5.png")
      },
      {
        id: 'service-dev-6',
        src: require("assets/imgs/home/services/Dev-6.png")
      }
    ])

    PreloadManager.load()
    PreloadManager.on('complete', function () {
      setAssetLoaded(true)
    }, this)
  }

  useEffect(() => {
    loadJS()
    loadFile()
    history.listen((...args) => {
      const method = args[1]
      if (_.includes(['POP', 'PUSH'], method)) {
        window.scrollTo(0, 0)
      }
    })
    window.addEventListener('load', doneLoad)
    return () => window.removeEventListener('load', doneLoad)
  }, [])

  const isPC = isPCOS()
  window.isPC = isPC
  if (!isPC) {
    flexible(375, 750)
  }

  if (!loaded || !assetLoaded || !jsLoaded) {
    return (
      <div className="App">
        <Preload />
      </div>
    )
  }
  return (
    <div className={classNames("App", { 'is-phone': !isPC })}>
      {routes}
    </div>
  );
}

export default App;
