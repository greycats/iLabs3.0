import styled from 'styled-components'

export default styled.div`
  padding-top: 60px;

  .animation-banner {
    height: 55vh;
    min-height: 480px;
  }

  @media screen and (max-width: 1024px) {
    .animation-banner {
      height: 50vh;
    }
  }

  @media screen and (max-width: 1280px) {
    .animation-banner {
      height: 55vh;
    }
  }

  @media screen and (min-width: 1600px) {
    .animation-banner {
      height: 65vh;
    }
  }

  @media screen and (min-width: 1900px) {
    .animation-banner {
      height: 60vh;
    }
  }

  @media screen and (max-width: 600px) {
    .animation-banner {
      height: 100vh;
    }
  }
`
