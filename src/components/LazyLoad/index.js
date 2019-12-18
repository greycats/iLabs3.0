import React, { Suspense, useEffect, useState } from 'react'
import { lazyImport } from 'utils'

export default ({
  fallback = () => {},
  src,
  ...others
}) => {
  const [MainComponent, setMainComponent] = useState(null)
  useEffect(() => {
    setMainComponent(lazyImport(import(src)))
  }, [])
  return (
    <Suspense fallback={fallback}>
      MainComponent ?
      <MainComponent {...others}/> : <></>
    </Suspense>
  )
}