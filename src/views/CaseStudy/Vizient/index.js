import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'

export default () => {
  return (
    <div>
      vizient
      <div>
        <Controller>
          <Scene duration={600} pin>
            <div>Sticky Example</div>
          </Scene>
        </Controller>
      </div>
    </div>
  )
}