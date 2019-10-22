import PreloadManager from '../scripts/PreloadManager'
export const footer = {
  socials: [
    {
      label: 'Facebook',
      icon: '<svg class="icon icon-facebook"><use xlink:href="public/symbol-defs.svg#icon-facebook"></use></svg>',
    },
    {
      label: 'Linkedin',
      icon: '<svg class="icon icon-linkedin"><use xlink:href="public/symbol-defs.svg#icon-linkedin"></use></svg>',
    },
    {
      label: 'Behance',
      icon: '<svg class="icon icon-behance"><use xlink:href="public/symbol-defs.svg#icon-behance"></use></svg>',
    },
    {
      label: 'dribbble',
      icon: '<svg class="icon icon-dribbble"><use xlink:href="public/symbol-defs.svg#icon-dribbble"></use></svg>',
    },
  ]
};

export default () => ({
  intro: {
    title: 'iLabs3.0 Intro',
    projects: [
      {
        name: 'Vizient',
        label: 'Enterprise platform',
        image: PreloadManager.getResult('project-vizient-img'),
        background: '#FF4E02',
        masks: new Array(12).fill(0),
        project: 'vizient',
      },
      {
        name: 'Greatschool',
        label: 'Website',
        image: PreloadManager.getResult('project-gs-img'),
        background: '#194A7D',
        masks: new Array(12).fill(0),
      },
      {
        name: 'Dictionary',
        label: 'Website',
        image: PreloadManager.getResult('project-dictionary-img'),
        background: '#4F82C1',
        masks: new Array(12).fill(0),
      },
      {
        name: 'Crew',
        label: 'App',
        image: PreloadManager.getResult('project-crew-img'),
        background: '#EBEBEB',
        masks: new Array(12).fill(0),
      },
    ],
    services: [
      {
        name: 'user_research',
        icon: '<svg class="icon icon-research"><use xlink:href="public/symbol-defs.svg#icon-research"></use></svg>',
        iconMobile: '<svg class="icon ico-mobile icon-w-research"><use xlink:href="public/symbol-defs.svg#icon-w-research"></use></svg>',
        heading: 'User Research',
        description: 'Led by design-thinking, we tackle complex interactions and transform them into intuitive and easy-to-use designs.',
      },
      {
        name: 'Ideation',
        icon: '<svg class="icon icon-idea"><use xlink:href="public/symbol-defs.svg#icon-idea"></use></svg>',
        iconMobile: '<svg class="icon ico-mobile icon-w-idea"><use xlink:href="public/symbol-defs.svg#icon-w-idea"></use></svg>',
        heading: 'Ideation',
        description: 'After consulting your doctor, change the formula. Switch to a soy-based formula.',
      },
      {
        name: 'uxui',
        icon: '<svg class="icon icon-design"><use xlink:href="public/symbol-defs.svg#icon-design"></use></svg>',
        iconMobile: '<svg class="icon ico-mobile icon-w-design"><use xlink:href="public/symbol-defs.svg#icon-w-design"></use></svg>',
        heading: 'UX/UI Design',
        description: 'Feeding the baby often during these hours will ensure an abundant supply of milk.',
      },
      {
        name: 'prototype',
        icon: '<svg class="icon icon-prototype"><use xlink:href="public/symbol-defs.svg#icon-prototype"></use></svg>',
        iconMobile: '<svg class="icon ico-mobile icon-w-prototype"><use xlink:href="public/symbol-defs.svg#icon-w-prototype"></use></svg>',
        heading: 'Prototype',
        description: 'And it might set off a whole new excitement astronomy in you all over again.',
      },
      {
        name: 'backend',
        icon: '<svg class="icon icon-backend"><use xlink:href="public/symbol-defs.svg#icon-backend"></use></svg>',
        iconMobile: '<svg class="icon ico-mobile icon-w-backend"><use xlink:href="public/symbol-defs.svg#icon-w-backend"></use></svg>',
        heading: 'Backend Dev',
        description: 'Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple.',
      },
      {
        name: 'mobile',
        icon: '<svg class="icon icon-mobile"><use xlink:href="public/symbol-defs.svg#icon-mobile"></use></svg>',
        iconMobile: '<svg class="icon ico-mobile icon-w-mobile"><use xlink:href="public/symbol-defs.svg#icon-w-mobile"></use></svg>',
        heading: 'Mobile Dev',
        description: 'Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet.',
      },
      {
        name: 'web',
        icon: '<svg class="icon icon-web"><use xlink:href="public/symbol-defs.svg#icon-web"></use></svg>',
        iconMobile: '<svg class="icon ico-mobile icon-w-web"><use xlink:href="public/symbol-defs.svg#icon-w-web"></use></svg>',
        heading: 'Web Dev',
        description: 'Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple.',
      },
      {
        name: 'product_manager',
        icon: '<svg class="icon icon-project"><use xlink:href="public/symbol-defs.svg#icon-project"></use></svg>',
        icon: '<svg class="icon ico-mobile icon-w-project"><use xlink:href="public/symbol-defs.svg#icon-w-project"></use></svg>',
        heading: 'Product Management',
        description: 'Feeding the baby often during these hours will ensure an abundant supply of milk.',
      },
    ],
    clients: [
      {
        name: 'Great Schools',
        url: '',
        width: 104,
        image: PreloadManager.getResult('client-greatschools-img')
      },
      {
        name: '',
        url: '',
        width: 157,
        image: PreloadManager.getResult('client-dictionary-img')
      },
      {
        name: '',
        url: '',
        width: 100,
        image: PreloadManager.getResult('client-vizient-img')
      },
      {
        name: '',
        url: '',
        width: 112,
        image: PreloadManager.getResult('client-xealth-img')
      },
      {
        name: '',
        url: '',
        width: 100,
        image: PreloadManager.getResult('client-portal-img')
      },
      {
        name: '',
        url: '',
        width: 101,
        image: PreloadManager.getResult('client-cision-img')
      },
      {
        name: '',
        url: '',
        width: 115,
        image: PreloadManager.getResult('client-joist-img')
      },
      {
        name: '',
        url: '',
        width: 80,
        image: PreloadManager.getResult('client-cherwell-img')
      },
      {
        name: '',
        url: '',
        width: 85,
        image: PreloadManager.getResult('client-crew-img')
      },
      {
        name: '',
        url: '',
        width: 87,
        image: PreloadManager.getResult('client-pared-img')
      },
      {
        name: '',
        url: '',
        width: 131,
        image: PreloadManager.getResult('client-bombfell-img')
      },
      {
        name: '',
        url: '',
        width: 135,
        image: PreloadManager.getResult('client-wine-img')
      },
    ],
    testimonials1: [
      {
        name: 'Cordelia Freeman',
        position: 'Head of Marketing, Cision',
        content: 'Never get involved in the office pity party, or complaint sessions that come your way.  Seek out people that support you and that you feel good being around.',
        links: [
          {
            type: 'linkedin1',
            url: 'https://linkedin.com'
          }
        ]
      },
      {
        name: 'Cordelia Freeman',
        position: 'Head of Marketing, Cision',
        content: '“Feeding the baby often during these hours will ensure an abundant supply of milk.”',
        links: [
          {
            type: 'linkedin1',
            url: 'https://linkedin.com'
          }
        ]
      },
    ],
    testimonials2: [
      {
        name: 'Cordelia Freeman',
        position: 'Head of Marketing, Cision',
        content: '“Feeding the baby often during these hours will ensure an abundant supply of milk.”',
        links: [
          {
            type: 'linkedin1',
            url: 'https://linkedin.com'
          }
        ]
      },
      {
        name: 'Cordelia Freeman',
        position: 'Head of Marketing, Cision',
        content: 'Never get involved in the office pity party, or complaint sessions that come your way.  Seek out people that support you and that you feel good being around.',
        links: [
          {
            type: 'linkedin1',
            url: 'https://linkedin.com'
          }
        ]
      },
    ],
    works: [
      {
        image: PreloadManager.getResult('work-collab-img'),
        heading: 'Collaborative',
        content: 'We collaborate with you and integrate your input at every step of the way.'
      },
      {
        image: PreloadManager.getResult('work-iterative-img'),
        heading: 'Iterative',
        content: 'We collaborate with you and integrate your input at every step of the way.'
      },
      {
        image: PreloadManager.getResult('work-flexible-img'),
        heading: 'Flexible',
        content: 'We collaborate with you and integrate your input at every step of the way.'
      },
      {
        image: PreloadManager.getResult('work-data-img'),
        heading: 'Data Driven',
        content: 'We collaborate with you and integrate your input at every step of the way.'
      },
    ],
    storyImage: PreloadManager.getResult('story-img'),
    footer: footer
  },
  vizient: {
    image: PreloadManager.getResult('project-vizient-img'),
  },
})
