import React, { useEffect, useState } from 'react'
import Preload from 'components/Preload'
import './App.css'
import 'assets/styles/common.sass'
import routes from './routes'
import { isPCOS, flexible } from './utils/flexible'
import PreloadManager from 'scripts/PreloadManager'
import classNames from 'classnames'

function App() {
  const [loaded, setLoaded] = useState(false)
  const [assetLoaded, setAssetLoaded] = useState(false)

  const [jsLoaded, setJsLoaded] = useState(false)

  const loadJS = () => Promise.all([
    import('./views/Home'),
    import('./views/CaseStudy'),
    import('./views/OurWork'),
    import('views/CaseStudy/Vizient'),
    import('views/CaseStudy/Dcom'),
    import('views/CaseStudy/Crew'),
    import('views/CaseStudy/GS')
  ]).then(() => {
    console.log('js loaded!')
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
        src: require('assets/imgs/vizient/Mac.png')
      },
      {
        id: 'vizient-image',
        src: require('assets/imgs/vizient/Banner.png')
      },
      {
        id: 'vizient-mac-image',
        src: require('assets/imgs/vizient/Mac2.png')
      },
      {
        id: 'toolkit',
        src: require('assets/imgs/vizient/toolkit.png')
      },
      {
        id: 'orange-path',
        src: require('assets/imgs/vizient/Path 15.png')
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
    ])

    PreloadManager.load()
    PreloadManager.on('complete', function () {
      setAssetLoaded(true)
    }, this)
  }

  useEffect(() => {
    loadJS()
    loadFile()
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
