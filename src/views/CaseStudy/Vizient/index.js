import React from 'react'
import TheStory from 'components/TheStory'
import TheChallenge from 'components/TheChallenge'
import Banner from 'components/Banner'
import ComponentSection from 'components/LeftTextRightAnimation'
import VizientImage from '../../../assets/imgs/vizient.png'
import StyledPage from 'components/Styled/Page'
import StyledSection from 'components/Styled/Section'
import ChallengeImg from 'assets/imgs/vizient/challenge-image.png'

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

  const theChallengeData = {
    title: 'The Challenge',
    intro: 'Vizient has a diverse product suite by way of acquisitions. Hence there was no standardization of product interactions,  user interface styles and interactions. ',
    list: [
      {
        name: 'Many Products',
        text: 'Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple.'
      },
      {
        name: 'Inconsistency Interface',
        text: 'Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple.'
      },
      {
        name: 'Missing Interactions',
        text: 'Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple.'
      },
    ]
  }

  const theSolutionData = {
    controllerId: 'the-solution-trigger',
    title: 'The Solution',
    intro: 'We created a fully functional UI toolkit based on a customized version of Angular Material. With a standardized interface and clear documentation we were able to cut down on operational costs, all while implementing a single uniform design language.',
    list: [
      {
        name: 'UI Toolkit',
        text: 'Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple.'
      },
      {
        name: 'Clear Documentation',
        text: 'Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple.'
      },
      {
        name: 'Design Language',
        text: 'Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple.'
      },
    ]
  }

  return (
    <StyledPage>
      <div>
        <StyledSection>
          <Banner image={VizientImage}>
            text
          </Banner>
        </StyledSection>
        <TheStory {...theStoryData}></TheStory>
        <div style={{ background: `url(${ChallengeImg})`, backgroundSize: 'contain' }}>
          <TheChallenge {...theChallengeData}></TheChallenge>
        </div>
        <TheChallenge {...theSolutionData}></TheChallenge>
        <ComponentSection />
      </div>
    </StyledPage>
  )
}