import React from 'react'
import TheStory from 'components/TheStory'
import Banner from 'components/Banner'
import TextAndAnimation from 'components/TextAndAnimation'
import AvatarComments from 'components/AvatarComments'

import StartSmall from 'assets/imgs/crew/5-phone-double.json'
import Streamlined from 'assets/imgs/crew/6-phone-single.json'
import StyledPage from 'components/Styled/Page'
import StyledSection from 'components/Styled/Section'
import BannerContent from './BannerContent'
import crewData from 'data/crewData'

import useImage from 'hooks/useImage'

export default () => {
  const BgImage = useImage('dcom-banner-image')

  return (
    <StyledPage>
      <div>
        <StyledSection>
          <Banner image={null}>
            <BannerContent />
          </Banner>
        </StyledSection>

        <TheStory {...crewData.theStoryData}></TheStory>

        {/* <div style={{ background: '#f5f5f5', paddingTop: '70px' }}>
        </div> */}

        <TextAndAnimation
          layoutType='left-text'
          {...crewData.startSmall}
          wrapMinHeight="988px"
          titleHeight="120px"
          titleStyle={
            {
              width: '520px'
            }
          }
          animateIcon={StartSmall}
          animationStyle={{
            top: '-120px',
            width: '720px'
          }}
          animateWidth={888}
        />

        <TextAndAnimation
          layoutType='right-text'
          {...crewData.streamlined}
          titleHeight="120px"
          titleStyle={
            {
              width: '520px'
            }
          }
          animateIcon={Streamlined}
          animationStyle={{
            top: '-200px',
            left: '-300px',
            width: '720px',
            height: '950px'
          }}
          animateWidth={1200}
        />

        <TextAndAnimation
          layoutType='up-text'
          {...crewData.buildTeam}
          wrapMinHeight="420px"
          titleStyle={
            {
              width: '600px'
            }
          }
        />
        <AvatarComments dataList={crewData.commentList} />

      </div>
    </StyledPage>
  )
}