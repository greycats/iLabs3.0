import React, { useEffect, useState } from 'react'
import Preload from 'components/Preload'
import './App.css'
import 'assets/styles/common.sass'
import routes from './routes'
import PreloadManager from 'scripts/PreloadManager'


function App() {
  const [loaded, setLoaded] = useState(false)
  const [assetLoaded, setAssetLoaded] = useState(false)

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
    loadFile()
    window.addEventListener('load', doneLoad)
    return () => window.removeEventListener('load', doneLoad)
  }, [])

  if (!loaded || !assetLoaded) {
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
