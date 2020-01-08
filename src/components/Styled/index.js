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
  min-height: 6rem;
  .banner-bg {
    width: 100%;
  }
  .mobile-banner-text {
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    padding: 0.3rem 0.25rem;

    .mobile-title {
      font-size: 42px;
      line-height: 60px;
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
      margin-top: 0.35rem;
      margin-bottom: 0.05rem;
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
        height: 0.28rem;
        margin-right: 0.2rem;
      }
    }
  }
`