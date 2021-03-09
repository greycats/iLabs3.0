import { useState, useEffect } from 'react'

const useLoadData = ({ lazyloadMethod = () => {}, commonDataMethod = () => {} }) => {
  const [caseData, setCaseData] = useState(null)

  const loadData = () => {
    commonDataMethod()
  }

  const getData = async () => {
    const data = await lazyloadMethod()
    setCaseData(data)
  }

  useEffect(() => {
    getData()
    loadData()
  }, [])

  return [caseData]
}

export default useLoadData
