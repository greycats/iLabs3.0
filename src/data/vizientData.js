import React, { Fragment } from 'react'

export default {
  theStory: {
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
  },
  theChallenge: {
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
  },
  theSolution: {
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
  },
  componentsForWeb: {
    title: <div>Vizient Components <br /> for the Web</div>,
    titleHeight: "120px",
    intro: (
      <Fragment>
        <p>
          The Toolkit system includes the resources needed to create user interfaces consistent with the Vizient’s product principles, design language, and best practices.
      </p>
        <p>
          Rather than focusing on pixels, developers can focus on the application logic, while designers can focus on user experiences, interactions, and flows.
      </p>
      </Fragment>
    )
  },
  basedOn: {
    title: <div>Based on <br /> material design</div>,
    titleHeight: "120px",
    intro: <p>Angular Material comprises a range of components which implement common interaction patterns according to the Material Design specification. Material Design is a visual language that synthesizes the classic principles of good design with the innovation of technology and science.</p>
  },
  typeface: {
    title: 'Typeface',
    intro: <p>Soleto is a fresh, modern sans serif font family. Optimised for text environments it performs well at large sizes and its seven weights range evenly from Thin through to Black in both upright and italic.</p>
  },
  color: {
    title: 'Color',
    intro: <p>We worked closely with Vizient’s Marketing team to ensure their brand guidelines extended to the Toolkit library. The color system uses an organized approach to applying color to Vizient UI. In this system, a primary and a secondary color are typically selected to represent Vizient brand. Dark and light variants of each color can then be applied to the UI in different ways.</p>
  },
  commentList: [
    {
      img: require('assets/imgs/vizient/AVATAR01.png'),
      name: 'Beth Roed1',
      intro: 'Business Development Director, Cision',
      comment: "“I like the cleaner look. Compare to what we have now, it's quantum leap”"
    },
    {
      img: require('assets/imgs/vizient/AVATAR02.png'),
      name: 'Beth Roed2',
      intro: 'Business Development Director, Cision',
      comment: "“I like the cleaner look. Compare to what we have now, it's quantum leap”"
    },
    {
      img: require('assets/imgs/vizient/AVATAR03.png'),
      name: 'Beth Roed3',
      intro: 'Business Development Director, Cision',
      comment: "“I like the cleaner look. Compare to what we have now, it's quantum leap”"
    },
    {
      img: require('assets/imgs/vizient/AVATAR04.png'),
      name: 'Beth Roed4',
      intro: 'Business Development Director, Cision',
      comment: "“I like the cleaner look. Compare to what we have now, it's quantum leap”"
    },
    {
      img: require('assets/imgs/vizient/AVATAR05.png'),
      name: 'Beth Roed5',
      intro: 'Business Development Director, Cision',
      comment: "“I like the cleaner look. Compare to what we have now, it's quantum leap”"
    }
  ]
}