import React from 'react'
import styled from 'styled-components'

const Container = ({image}) => styled.div`
  background-image: url('${image}');
  background-repeat: no-repeat;
  background-size: 100%;
  height: 60vh;
`

export default ({ image, children }) => {
  const ContainerWithImage = Container({ image })
  return <ContainerWithImage>
    {children}
  </ContainerWithImage>
}