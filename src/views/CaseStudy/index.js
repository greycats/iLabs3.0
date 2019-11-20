import React from 'react'
import styled from 'styled-components'

import { getLocationSearch } from 'utils'

import Header from 'components/Header'
import Footer from '../../components/Footer'
import Vizient from './Vizient'
import Dcom from './Dcom'
import Crew from './Crew'

const CaseStudyWrap = styled.div`
  min-width: 1366px;
  max-width: 1920px;
  margin: 0 auto;
  overflow: hidden;
`

export default () => {
  const name = getLocationSearch('name')

  return (
    <CaseStudyWrap>
      <Header />
      {
        (() => {
          switch (name) {
            case 'vizient':
              return <Vizient />

            case 'dcom':
              return <Dcom />

            case 'crew':
              return <Crew />

            default:
              return <p>case study</p>
          }
        })()
      }
      <Footer />
    </CaseStudyWrap>
  )
}