import React, { useEffect, useState } from 'react';
import Preload from 'components/Preload'
import './App.css';
import routes from './routes'

function App() {
  const [ loaded, setLoaded ] = useState(false)

  const doneLoad = () => {
    setTimeout(() => {
      setLoaded(true)
    }, 3000)
  }

  useEffect(() => {
    window.addEventListener('load', doneLoad)
    return () => window.removeEventListener('load', doneLoad)
  }, [])

  console.log('loaded', loaded)
  if (!loaded) {
    return (
      <div className="App">
        <Preload />
      </div>
    )
  }
  return (
    <div className="App">
      { routes }
    </div>
  );
}

export default App;
