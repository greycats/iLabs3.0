import React from 'react'

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
        img: require('assets/imgs/dcom/Review.json')
      },
      {
        number: 10,
        suffix: <sup style={{ fontSize: '20px' }}>%</sup>,
        name: 'Increase in visit frequency',
        img: require('assets/imgs/dcom/Increase-icon.json')
      },
      {
        number: 10,
        suffix: <sup style={{ fontSize: '20px' }}>M+</sup>,
        name: 'Unique monthly visitors',
        img: require('assets/imgs/dcom/Star-icon.json')
      }
    ]
  },
  theChallenge: {
    title: 'The Challenge',
    intro: <p>Our research indicated that we needed to upgrade a few of the core flows in terms of usability. The main challenge for us was to ease in a large existing user base into new designs and experiences while maintaining or improving core metrics. Additionally we had a short time frame in which to launch the changes to meet the end of year deadline.</p>
  },
  theSolution: {
    title: 'The Solution',
    intro: 'We reviewed usage data and conducted a thorough audit based on the users reviews of the iOS and Android apps. We created a matrix of pain points and defined core flows that needed an upgrade. Keeping an eye on existing and potential future users of the app, we created multiples ideas, prototypes and validated them through usability testing. We also product managed this critical release and provided detailed specifications and priorities for their internal engineering team. The updated app was launch well ahead of schedule to meet the pre-Christmas deadline.',
    description: '“Our solution for the iOS version led to a significant rise in page views and retention. We applied material design principles to the Android app which showed similar results.”'
  },
  smoothTransition: {
    title: 'A smooth transition from Dictionary to Thesaurus',
    intro: <p>Our research showed that Thesaurus was one of the highly used app features. Previously users had to go through a 2 step process to use the Thesaurus. Now, user can search for thesaurus anywhere between the app with a simple toggle.</p>
  },
  intuitive: {
    title: <div>Intuitive Search <br /> Function</div>,
    intro: (
      <div>
        <p>The search box is the most frequently used element in Dictionary.com. We realized that users were searching for the same words within different sessions, which led to a re-think of the recent searches feature. We allowed the users to have one touch access to their previously searched words.</p>
        <p>We added more contrast and simplicity to the design. The new search box is more visible, quickly recognizable and easy to use. It is persistent in the header through out the user journey.</p>
        <p>Simple and mobile friendly gestures let the users easily swipe/tap anywhere on the ribon to find definitions, thesaurus (synonyms), origins and additional information of the desired words.</p>
      </div>
    )
  },
  onboardingData: {
    title: 'Onboarding New Users',
    intro: 'We redesigned the onboarding experience that introduced users to the improvements within the app. Fun illustrations and clear instructions helped users get familiar with the updates and boost brand loyalty.'
  },
  homeScreen: {
    title: 'Home Screen',
    intro: <p>We brought a simpler, modern look to the app's home screen. Using the Facebook feed pattern, the new list view layout exposes the user to more content than they did in the previous version. Icons, imagery and catchy headlines were tested to encourage users to explore and stay longer within the app.</p>
  },
  commentList: [
    {
      title: 'Great for writers and readers',
      content: 'I find this app to be even better than the desktop webpage which I used frequently at university...',
      name: 'Meganrgal 05',
      date: 'DEC 24, 2016 on App store'
    },
    {
      title: 'So easy and helpful',
      content: "“Love this app. It is so user friendly and I usually end up spending more time on it then I had planned. I find what I'm looking for plus learn new words all the time...”",
      name: 'MCHRL',
      date: 'DEc 29, 2016 on Appstore'
    },
    {
      title: 'Great app!',
      content: 'This Dictionary is so far the best I have ever downloaded!',
      name: 'Minh Anh',
      date: 'DEC 18, 2016 on App store'
    }
  ]
}