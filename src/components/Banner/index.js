import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
`
const ChildrenContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
export default ({ image, children }) => {
  return (
    <Container>
      <img src={image} />
      <ChildrenContainer>
        {children}
      </ChildrenContainer>
    </Container>
  )
}