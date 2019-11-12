import React from 'react'
import TheStory from 'components/TheStory'
import TheChallenge from 'components/TheChallenge'
import Banner from 'components/Banner'
import ComponentSection from 'components/LeftTextRightAnimation'
import Challenge from 'components/Challenge'
import Toolkit from './Toolkit'
import Grid from './Grid.js'
import Leverage from './Leverage'
import VizientImage from '../../../assets/imgs/vizient/Banner.png'
import StyledPage from 'components/Styled/Page'
import StyledSection from 'components/Styled/Section'
import ChallengeImg from 'assets/imgs/vizient/challenge-image.png'

import BannerContent from './BannerContent'

export default () => {
  const theStoryData = {
    story: [
      'Vizient is the largest member-driven, health care performance improvement company in the country.',
      'With dozens of products offered, Vizient tasked us with designing and building a new UI Toolkit to homogenize their user interface components across all services.'
    ],
    dataList: [
      {
        number: 5,
        name: 'Products',
        img: require('assets/imgs/vizient/The-story/Product.json')
      },
      {
        number: 10,
        name: 'Team members',
        img: require('assets/imgs/vizient/The-story/Teammember.json')
      },
      {
        number: 250,
        suffix: '+',
        name: 'App Screens',
        img: require('assets/imgs/vizient/The-story/AppscreenIcon.json')
      }
    ]
  }

  const theChallengeData = {
    title: 'The Challenge',
    intro: 'Vizient has a diverse product suite by way of acquisitions. Hence there was no standardization of product interactions,  user interface styles and interactions. ',
    list: [
      {
        name: 'Many Products',
        text: 'Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple.',
        img: require('assets/imgs/vizient/The-challenge/Many products.json')
      },
      {
        name: 'Inconsistency Interface',
        text: 'Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple.',
        img: require('assets/imgs/vizient/The-challenge/Inconsistency Interface.json')
      },
      {
        name: 'Missing Interactions',
        text: 'Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple.',
        img: require('assets/imgs/vizient/The-challenge/Mising Interactions.json')
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
        text: 'Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple.',
        img: require('assets/imgs/vizient/The-solution/UI Toolkit.json')
      },
      {
        name: 'Clear Documentation',
        text: 'Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple.',
        img: require('assets/imgs/vizient/The-solution/Clear Document.json')
      },
      {
        name: 'Design Language',
        text: 'Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple.',
        img: require('assets/imgs/vizient/The-solution/Designlanguage.json')
      },
    ]
  }

  return (
    <StyledPage>
      <div>
        <StyledSection>
          <Banner image={VizientImage}>
            <BannerContent />
          </Banner>
        </StyledSection>
        <TheStory {...theStoryData}></TheStory>
        <Challenge/>
        <TheChallenge {...theSolutionData}></TheChallenge>
        <Toolkit />
        <ComponentSection />
        <Leverage />
        <Grid />
      </div>
    </StyledPage>
  )
}