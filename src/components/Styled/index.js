import styled from 'styled-components'

export const SectionTitleWrap = styled.div`
  max-width: 420px;
  overflow: hidden
`

export const AbsolutePositionWrap = ({top = 'unset', right = 'unset', bottom = 'unset', left ='unset'}) => styled.div`
  position: absolute;
  top: ${top};
  right: ${right};
  bottom: ${bottom};
  left: ${left};
`

export const StyledSectionWitheTitle = styled.h1`
  color: white;
  font-size: 64px;
  font-weight: bold;
`
