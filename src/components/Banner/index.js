import React from 'react'
import styled from 'styled-components'

const Container = ({image}) => styled.div`
  background-image: url('${image}');
  height: 60vh;
`

export default ({ image }) => {
  const ContainerWithImage = Container({ image })
  return <ContainerWithImage>
    this is banner
  </ContainerWithImage>
}