import React from 'react'
import Vizient from './Vizient'
import { getLocationSearch } from 'utils'
import styled from 'styled-components'
import Header from 'components/Header'
import Footer from '../../components/Footer'

const CaseStudyWrap = styled.div`
  min-width: 1366px;
  max-width: 1920px;
  margin: 0 auto;
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

            default:
              return <p>case study</p>
          }
        })()
      }
      <Footer />
    </CaseStudyWrap>
  )
}