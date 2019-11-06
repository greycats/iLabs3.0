import React from 'react'
import TheStory from 'components/TheStory'
import Banner from 'components/Banner'
import Header from 'components/Header'
import VizientImage from '../../../assets/imgs/vizient.png'
import StyledPage from 'components/Styled/Page'
import StyledSection from 'components/Styled/Section'

export default () => {
  const theStoryData = {
    story: [
      'Vizient is the largest member-driven, health care performance improvement company in the country.',
      'With dozens of products offered, Vizient tasked us with designing and building a new UI Toolkit to homogenize their user interface components across all services.'
    ],
    dataList: [
      {
        number: 5,
        name: 'Products'
      },
      {
        number: 10,
        name: 'Team members'
      },
      {
        number: 250,
        suffix: '+',
        name: 'App Screens'
      }
    ]
  }

  return (
    <StyledPage>
      <Header />
      <div>
        <StyledSection>
          <Banner image={VizientImage}>
            text
          </Banner>
        </StyledSection>
        <TheStory {...theStoryData}></TheStory>
        <div style={{ width: '100vw', height: '100vh', background: '#eee' }}></div>
      </div>
    </StyledPage>
  )
}