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
    PreloadManager.loadFile(
      {
        id: 'project-vizient-img',
        src: 'src/assets/imgs/vizient-1.png'
      },
    )

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
