import React, { Fragment } from 'react'

export default {
  theStoryData: {
    story: [
      'With 2,000,000+ trusted definitions and synonyms, 100+ million app downloads, Dictionary.com is the #1 English dictionary app for iPhone and Android.',
      'As with any large app, user fatigue sets in after prolonged usage. Dictionary.com tasked us with building a refresh that would impact their core metrics - namely, retention, monetization and user reviews on the app stores.'
    ],
    dataList: [
      {
        number: 4.5,
        decimals: 1,
        name: 'Reviews on App Store',
        img: require('assets/imgs/vizient/The-story/Product.json')
      },
      {
        number: 10,
        suffix: <sup style={{ fontSize: '20px' }}>%</sup>,
        name: 'Increase in visit frequency',
        img: require('assets/imgs/vizient/The-story/Teammember.json')
      },
      {
        number: 10,
        suffix: <sup style={{ fontSize: '20px' }}>M+</sup>,
        name: 'Unique monthly visitors',
        img: require('assets/imgs/vizient/The-story/AppscreenIcon.json')
      }
    ]
  },
  theChallenge: {
    title: 'The Challenge',
    intro: <p>Our research indicated that we needed to upgrade a few of the core flows in terms of usability. The main challenge for us was to ease in a large existing user base into new designs and experiences while maintaining or improving core metrics. Additionally we had a short time frame in which to launch the changes to meet the end of year deadline.</p>
  },
  onboardingData: {
    title: 'Onboarding New Users',
    intro: 'We redesigned the onboarding experience that introduced users to the improvements within the app. Fun illustrations and clear instructions helped users get familiar with the updates and boost brand loyalty.'
  }
}