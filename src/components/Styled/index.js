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
  line-height: 130px;
`
export const MobileBannerContainer = styled.div`
  position: relative;
  .mobile-banner-text {
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;

    .mobile-title {
      font-size: 48px;
      line-height: 1;
      margin-bottom: 0.25rem;
    }

    .title-tip {
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 1px;
    }

    .list-title {
      text-transform: uppercase;
      font-weight: bold;
      margin-top: 35px;
      font-size: 12px;
      line-height: 1;
      letter-spacing: 2px;
    }

    .list-wrap {
      line-height: 34px;
      letter-spacing: 1px;
    }

    .imgs {
      margin-top: 0.1rem;
      img {
        margin-right: 0.2rem;
      }
    }
  }
`