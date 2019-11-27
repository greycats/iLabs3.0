import React, { useEffect, useState } from 'react'
import Preload from 'components/Preload'
import './App.css'
import 'assets/styles/common.sass'
import routes from './routes'
import PreloadManager from 'scripts/PreloadManager'

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

    import('views/CaseStudy/GS'),
    import('views/CaseStudy/GS/Questions'),
    import('views/CaseStudy/GS/TheChallenge'),
    import('views/CaseStudy/GS/Presentation'),
    import('views/CaseStudy/GS/FirstLook'),

    import('assets/imgs/gs/1-hero'),
    import('assets/imgs/gs/2-story-1-yearly-users'),
    import('assets/imgs/gs/2-story-2-school-profiles'),
    import('assets/imgs/gs/3-challenge-1-navigation'),
    import('assets/imgs/gs/3-challenge-2-engagement'),
    import('assets/imgs/gs/3-challenge-3-userbase'),
    import('assets/imgs/gs/3-challenge-4-vizualization'),
    import('assets/imgs/gs/3-challenge-5-devices'),
    import('assets/imgs/gs/4-solution'),
    import('assets/imgs/gs/12-typeface-open_sans-1/data.json'),
    import('assets/imgs/gs/12-typeface-open_sans-2/data.json'),
    import('assets/imgs/gs/12-typeface-open_sans-3/data.json'),
    import('assets/imgs/gs/12-typeface-caecilia-1/data.json'),
    import('assets/imgs/gs/12-typeface-caecilia-2/data.json'),
    import('assets/imgs/gs/12-typeface-caecilia-3/data.json'),
    import('assets/imgs/gs/13-colors-1/data.json'),
    import('assets/imgs/gs/13-colors-2/data.json'),
    import('assets/imgs/gs/13-colors-3/data.json'),
    import('assets/imgs/gs/13-colors-4/data.json')
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
    window.addEventListener('load', doneLoad)
    return () => window.removeEventListener('load', doneLoad)
  }, [])

  if (!loaded || !assetLoaded || !jsLoaded) {
    return (
      <div className="App">
        <Preload />
      </div>
    )
  }
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
