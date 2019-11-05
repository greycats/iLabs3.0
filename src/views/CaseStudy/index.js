import React from 'react'
import Vizient from './Vizient'
import { getLocationSearch } from 'utils'

export default () => {
  const name = getLocationSearch('name')

  return (
    <div>
      {
        (() => {
          switch (name) {
            case 'vizient':
              return <Vizient />

            default:
              return <p>case study</p>
          }
        })()
      }
    </div>
  )
}