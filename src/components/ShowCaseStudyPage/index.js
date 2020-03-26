import React from 'react'
import { LoadingWithBanner, FullPageLoading } from 'components/TempLoading'
import useLoadData from 'hooks/useLoadData.js'

const ShowCaseStudyPage = ({ lazyloadMethod = () => {}, commonDataMethod = () => {}, component = null }) => {
  const [caseData] = useLoadData({
    lazyloadMethod,
    commonDataMethod,
  })

  if (!caseData) {
    return window.isPC ? <LoadingWithBanner /> : <FullPageLoading />
  }

  return component({caseData})
}

export default ShowCaseStudyPage
