import React, { lazy } from 'react'
import styled from 'styled-components'
import BrandLogo from 'components/BrandLogo/index.js'
import history from 'history.js'

import { getLocationSearch } from 'utils'

import Header from 'components/Header'
import Footer from 'components/Footer'

const Vizient = lazy(() => import('views/CaseStudy/Vizient'))
const Dcom = lazy(() => import('views/CaseStudy/Dcom'))
const Crew = lazy(() => import('views/CaseStudy/Crew'))
const GS = lazy(() => import('views/CaseStudy/GS'))

export const CaseStudyWrap = window.isPC || window.innerWidth > 800?
  styled.div`
    min-width: 1440px;
    max-width: 1920px;
    margin: 0 auto;
    overflow: hidden;
  `
  :
  styled.div`
    width: 100%;
    overflow: hidden;
  `

export default () => {
  const name = getLocationSearch('name')

  return (
    <CaseStudyWrap>
      <BrandLogo isWhite={false}/>
      <Header showLogo={false}/>
      {
        (() => {
          switch (name) {
            case 'vizient':
              return <Vizient />

            case 'dcom':
              return <Dcom />

            case 'crew':
              return <Crew />

            case 'gs':
              return <GS />

            default:
              return <p>case study</p>
          }
        })()
      }
      <Footer />
    </CaseStudyWrap>
  )
}