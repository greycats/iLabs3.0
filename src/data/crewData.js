import React from 'react'
import Star from 'assets/imgs/crew/Star.png'

export default {
  theStoryData: {
    story: [
      'Crew is a group messaging app that allows managers and employees to communicate easily, stay in-sync anytime, anywhere. It allows co-workers stay on top of tasks and share shift schedules across the organization.',
      'Crew wanted a team who could co-develop with their backend team to launch an MVP in under 3 months on both Android and iOS.'
    ],
    dataList: [
      {
        number: 5,
        name: 'Reviews on App Store',
        suffix: <img src={Star} />,
        img: require('assets/imgs/crew/2-Story-1-Review.json')
      },
      {
        number: 3,
        name: 'Months to MVP on both platforms',
        img: require('assets/imgs/crew/2-Story-2-Month.json')
      },
      {
        number: 50,
        name: 'Top 50 business apps on iOS and Android',
        img: require('assets/imgs/crew/2-Story-3-Top.json')
      }
    ]
  },
  theSolutions: {
    title: 'The Solutions',
    intro: 'We built an agile development team of 4 engineers plus a SF based lead engineer that worked lock step with the Crew engineering team.',
    list: [
      { img: require('assets/imgs/crew/4-1-Co-Dev.json') },
      { img: require('assets/imgs/crew/4-2-Launch-MVP.json') },
      { img: require('assets/imgs/crew/4-3-Build-a-highly-reliable.json') }
    ]
  },
  startSmall: {
    title: <div>Start small, <br />scale when ready'</div>,
    intro: <p>Despite an aggressive time frame for the MVP, we did not immediately ramp up our team to maximum capacity. Instead, we focused a small team of 2 engineers to understand the roadmap and technical guidelines around performance, scale and acceptable technical debt. We focused on small projects to gain expertise and iron out any project/communication issues. As our start up team became self-sufficient we added additional engineers that we managed independently to scale without slowing down progress for the entire team.</p>
  },
  streamlined: {
    title: <div>Streamlined <br /> Communication</div>,
    intro: <p>In a fast-moving project with tight deadlines and short focused sprints, it is important to have efficient communication. We wanted to reduce management overhead on the Crew team so that they could focus on back-end development to maintain the cadence needed to ship the MVP in 3 months. We assigned an on-site technical lead, who worked directly with the Crew team to manage daily communication with our team. This ensured that our team was always on the same page with regards to priorities and trade-offs.</p>
  },
  buildTeam: {
    title: 'Build team chemistry',
    intro: 'Working with an external development team is not a silver bullet that solves all development problems with the addition of more engineers. It requires team members to build relationships and trust, just as it would if a company were to hire everyone in-house. The Crew leadership team understood that. We rotated our off-shore staff so that each of them could to come to San Francisco and work directly with the Crew team. That increased productivity, morale and most importantly the ability for all engineers to operate independently with each other without oversight. This is the end goal of any successful engagement.'
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