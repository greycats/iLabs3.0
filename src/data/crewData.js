import React from 'react'
import Star from 'assets/imgs/crew/Star.svg'

const isPC = window.isPC

export default {
  banner: {
    title: 'Crew',
    intro: <>Communicate with teams and <br /> managers on the go</>,
    services: ['Mobile Development'],
    available: [require('assets/imgs/crew/dark-apple.png'), require('assets/imgs/crew/dark-andriod.png')],
    mobileAvailable: [require('assets/imgs/crew/mobile/apple.svg'), require('assets/imgs/crew/mobile/andriod.svg')]
  },
  theStory: {
    story: [
      'Crew is a group messaging app that allows managers and employees to communicate easily, stay in-sync anytime, anywhere. It allows co-workers stay on top of tasks and share shift schedules across the organization.',
      'Crew wanted a team who could co-develop with their backend team to launch an MVP in under 3 months on both Android and iOS.'
    ],
    dataList: [
      {
        number: 5,
        name: 'Reviews on App Store',
        suffix: <img src={Star} />,
        img: require('assets/imgs/crew/2-Story/2-Story-1-Review.json')
      },
      {
        number: 3,
        name: 'Months to MVP on both platforms',
        img: require('assets/imgs/crew/2-Story/2-Story-2-Month.json')
      },
      {
        number: 50,
        name: 'Top 50 business apps on iOS and Android',
        img: require('assets/imgs/crew/2-Story/2-Story-3-Top.json')
      }
    ]
  },
  theSolutions: {
    title: 'The Solutions',
    intro: 'We built an agile development team of 4 engineers plus a SF based lead engineer that worked lock step with the Crew engineering team.',
    list: [
      { img: require('assets/imgs/crew/4-Solution/4-1-Co-Dev.json') },
      { img: require('assets/imgs/crew/4-Solution/4-2-Launch-MVP.json') },
      { img: require('assets/imgs/crew/4-Solution/4-3-Build-a-highly-reliable.json') }
    ]
  },
  theSolutionsMobile: [
    require('assets/imgs/crew/mobile/Solutions-1.png'),
    require('assets/imgs/crew/mobile/Solutions-2.png'),
    require('assets/imgs/crew/mobile/Solutions-3.png'),
  ],
  challengeData: {
    title: 'The Challenge',
    intro: "Our challenge was to build a high-performance communication platform connecting a mobile workforce, keeping in mind that Crew's service is designed specifically for workers who don't have ready access to effective communications services on the job.",
    titleMargin: isPC ? '0.4rem' : '0.1rem',
    wrapStyle: {
      marginBottom: '0.45rem'
    },
    list: [
      {
        lottieData: require('assets/imgs/crew/3-Challenge/Challenge-1.json'),
        title: 'QUICK DEVELOPMENT',
        description: 'To launch on 2 platforms simultaneously on short, regular ship cycles',
        mobileHeight: '1.32rem'
      },
      {
        lottieData: require('assets/imgs/crew/3-Challenge/Challenge-2.json'),
        title: 'CLEAN CODE',
        description: 'To meet a consistently high bar of code quality and performance to satisfy client and user expectations',
        mobileHeight: '1.82rem'
      },
      {
        lottieData: require('assets/imgs/crew/3-Challenge/Challenge-3.json'),
        title: 'QUICK PROGRESS',
        description: 'To meet a consistently high bar of code quality and performance to satisfy client and user expectations',
        mobileHeight: '1.82rem'
      }
    ]
  },
  startSmall: {
    title: <div>Start small, <br />scale when ready</div>,
    titleHeight: 120,
    intro: <p>Despite an aggressive time frame for the MVP, we did not immediately ramp up our team to maximum capacity. Instead, we focused a small team of 2 engineers to understand the roadmap and technical guidelines around performance, scale and acceptable technical debt. We focused on small projects to gain expertise and iron out any project/communication issues. As our start up team became self-sufficient we added additional engineers that we managed independently to scale without slowing down progress for the entire team.</p>
  },
  streamlined: {
    title: <div>Streamlined <br /> Communication</div>,
    titleHeight: 120,
    intro: <p>In a fast-moving project with tight deadlines and short focused sprints, it is important to have efficient communication. We wanted to reduce management overhead on the Crew team so that they could focus on back-end development to maintain the cadence needed to ship the MVP in 3 months. We assigned an on-site technical lead, who worked directly with the Crew team to manage daily communication with our team. This ensured that our team was always on the same page with regards to priorities and trade-offs.</p>
  },
  buildTeam: {
    title: 'Build team chemistry',
    intro: 'Working with an external development team is not a silver bullet that solves all development problems with the addition of more engineers. It requires team members to build relationships and trust, just as it would if a company were to hire everyone in-house. The Crew leadership team understood that. We rotated our off-shore staff so that each of them could to come to San Francisco and work directly with the Crew team. That increased productivity, morale and most importantly the ability for all engineers to operate independently with each other without oversight. This is the end goal of any successful engagement.'
  },
  commentList: [
    {
      title: 'An invaluable tool for our team',
      content: '"Crew had been an invaluable tool for our team to keep each other updating with ongoing situations pertaining to our job. I like the option for private chat, and to input a daily schedule as well. Well worth the time."',
      name: 'fiyre43',
      date: 'on iTunes, Dec 20, 2018'
    },
    {
      title: 'Highly recommend',
      content: '"Great tool for teams. It has been an incredible way to keep tasks and communication centralized and organized. Would highly recommend."',
      name: 'Dannyboy',
      date: 'on ITunes, Nov 20, 2015'
    },
    {
      title: 'A true asset',
      content: '"I am the President of Axcess Professional Staffing and this app has been a true asset to use and our team! Thanks and koodos to CREW"',
      name: 'Stacie Johnson',
      date: 'on Google Play, Feb 22, 2016'
    }
  ]
}