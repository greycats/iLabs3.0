import React from 'react'
import Vizient from './Vizient'
import { getLocationSearch } from 'utils'
import Header from 'components/Header'
import Footer from '../../components/Footer'

export default () => {
  const name = getLocationSearch('name')

  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  )
}