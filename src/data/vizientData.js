import React, { Fragment } from 'react'

const isPC = window.isPC

export default {
  banner: {
    title: 'Vizient',
    intro: 'Unifying enterprise UI for under a single banner',
    services: ['Visual Design', 'Prototype', 'Web Development', 'Product Management']
  },
  theStory: {
    story: [
      'Vizient is the largest member-driven, health care performance improvement company in the country.',
      'With dozens of products offered, Vizient tasked us with designing and building a new UI Toolkit to standardize their user interface components across all products.'
    ],
    storyHeight: isPC ? '140px' : '2.56rem',
    dataList: [
      {
        number: 5,
        name: 'Products',
        img: require('assets/imgs/vizient/2-The-story/Product.json')
      },
      {
        number: 10,
        name: 'Team members',
        img: require('assets/imgs/vizient/2-The-story/Teammember.json')
      },
      {
        number: 250,
        suffix: '+',
        name: 'Screens',
        img: require('assets/imgs/vizient/2-The-story/AppscreenIcon.json')
      }
    ]
  },
  theChallenge: {
    title: 'The Challenge',
    intro: 'Vizient has a diverse product suite by way of acquisitions. Hence there was no standardization of product interactions and user interface styles.',
    introHeight: isPC ? '84px' : '1.12rem',
    list: [
      {
        name: 'Many Products',
        text: "With dozens of products operating co-dependently, one of the biggest problems Vizient faced was a lack of standardization across their product suite.",
        img: require('assets/imgs/vizient/3-The-challenge/Many products.json')
      },
      {
        name: 'Inconsistency Interface',
        text: 'If every product uses a different UX toolset, different standards and UI patterns, the result is an inevitably disjointed experience across products.',
        img: require('assets/imgs/vizient/3-The-challenge/Inconsistency Interface.json')
      },
      {
        name: 'Missing Interactions',
        text: 'After rounds of auditing and researching, we found out that several products were missing basic interaction to guide user behaviors.',
        img: require('assets/imgs/vizient/3-The-challenge/Mising Interactions.json')
      },
    ]
  },
  theSolution: {
    controllerId: 'the-solution-trigger',
    title: 'The Solution',
    intro: 'We created a fully functional UI toolkit based on a customized version of Angular Material. A standardized interface and clear documentation allowed us to cut down operational costs significantly, while implementing a single uniform design language.',
    introHeight: isPC ? '112px' : '1.96rem',
    list: [
      {
        name: 'UI Toolkit',
        text: 'We developed a clear and concise UI toolkit, with easy-to-follow guidelines. No more guessing "what color goes there?" or "what size was that table?”',
        img: require('assets/imgs/vizient/4-The-solution/UI Toolkit.json')
      },
      {
        name: 'Clear Documentation',
        text: 'We introduced step-by-step documentation coupled with 1:1 meetings to train Vizient designers and engineers to leverage the toolkit and reduce design and development time.',
        img: require('assets/imgs/vizient/4-The-solution/Clear Document.json')
      },
      {
        name: 'Design Language',
        text: 'We established the visual language to set a foundation and provide continuity between each product. This resulted in consistency and created an seamless brand experience.',
        img: require('assets/imgs/vizient/4-The-solution/Designlanguage.json')
      },
    ]
  },
  componentsForWeb: {
    title: <div>Vizient Components <br /> for the Web</div>,
    titleHeight: 120,
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
    titleMargin: 50,
    titleHeight: 120,
    intro: <p>Angular Material consists of components which implement common interaction patterns according to the Material Design specification. Material Design is a visual language that synthesizes the classic principles of good design. We implemented a customized version of Angular Material that was branded according to Vizient guidelines and also implemented several custom controls.</p>
  },
  typeface: {
    title: 'Typeface',
    intro: <p>Soleto is a fresh, modern sans serif font family. It is optimised for text environments such as numbers heavy tables etc. Iit performs well at large sizes and its seven weights range evenly from Thin through to Black in both upright and italic.</p>
  },
  color: {
    title: 'Color',
    intro: <p>We worked closely with Vizient’s Marketing team to ensure their brand guidelines extended to the Toolkit library. The color system uses an organized approach to applying color to Vizient UI. In this system, a primary and a secondary color are typically selected to represent Vizient brand. Dark and light variants of each color can then be applied to the UI in different ways.</p>
  },
  commentList: [
    {
      img: require('assets/imgs/vizient/12-avatars/AVATAR01.png'),
      name: 'Beth Roed1',
      intro: 'Business Development Director, Cision',
      comment: "“I like the cleaner look. Compare to what we have now, it's quantum leap”"
    },
    {
      img: require('assets/imgs/vizient/12-avatars/AVATAR02.png'),
      name: 'Beth Roed2',
      intro: 'Business Development Director, Cision',
      comment: "“I like the cleaner look. Compare to what we have now, it's quantum leap”"
    },
    {
      img: require('assets/imgs/vizient/12-avatars/AVATAR03.png'),
      name: 'Beth Roed3',
      intro: 'Business Development Director, Cision',
      comment: "“I like the cleaner look. Compare to what we have now, it's quantum leap”"
    },
    {
      img: require('assets/imgs/vizient/12-avatars/AVATAR04.png'),
      name: 'Beth Roed4',
      intro: 'Business Development Director, Cision',
      comment: "“I like the cleaner look. Compare to what we have now, it's quantum leap”"
    },
    {
      img: require('assets/imgs/vizient/12-avatars/AVATAR05.png'),
      name: 'Beth Roed5',
      intro: 'Business Development Director, Cision',
      comment: "“I like the cleaner look. Compare to what we have now, it's quantum leap”"
    }
  ]
}