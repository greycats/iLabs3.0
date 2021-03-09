import React from 'react'
export default async () => {
  return {
    banner: {
    },
    theStory: {
      story: [
        'A regular workout routine is essential for staying healthy and fit, yet the traditional gym membership can be expensive, exhaustive & time-consuming for busy people. Taking technology to the fitness world, FitOn offers a variety of live work-out sessions, from cardio to strength training to HIIT to pilates and more, all guided by world-class trainers.',
      ],
      dataList: [
        {
          number: 1,
          name: 'in Health and Fitness on US App Store',
          prefix: <span style={{ fontSize: '40px' }}>#</span>,
          img: (await import('assets/imgs/fiton/▽ Health and fitness 3.json')).default,
        },
        {
          number: 5.0,
          decimals: 1,
          name: 'rating on App store / 163K reviews',
          img: (await import('assets/imgs/fiton/▽ review-icon 3.json')).default,
        },
        {
          number: 6,
          prefix: <span style={{ fontSize: '40px' }}>+</span>,
          suffix: <span style={{ fontSize: '40px' }}>M</span>,
          name: 'users',
          img: (await import('assets/imgs/fiton/▽ Download 3.json')).default,
        },
      ],
    },
    theSolution: {
      title: 'The Solution',
      intro:
        'Our main focus was designing and building a product that makes working out super easy, fun, and accessible via a wide variety of devices. From day one, we collaborated closely with FitOn, truly working together as if we were one company.',
      list: [
        {
          text: 'Research',
          img: require('assets/imgs/fiton/▽ Research 3.json'),
        },
        {
          text: 'Wireframing',
          img: require('assets/imgs/fiton/▽ Wireframing 3.json'),
        },
        {
          text: 'Rapid Prototyping',
          img: require('assets/imgs/fiton/▽ Rapid prototype 3.json'),
        },
        {
          text: 'iOS, Android, Web, & Apple TV',
          img: require('assets/imgs/fiton/▽ iOS, ANdroid 3.json'),
        },
      ],
    },
    visual: {
      title: (
        <div>
          Visually bold & <br /> engaging
        </div>
      ),
      titleHeight: 120,
      intro: (
        <p>
          Empowered, confident, and encouraging are the brand personalities that dictate our visual direction for FitOn. A palette of bold, lively,
          highly-saturated colors in a variety of hues, coupled with captivating photography gives the app a premium look, while also play as a mental energy
          boost for users.
        </p>
      ),
    },
    motivation: {
      title: (
        <div>
          Motivation through friends
        </div>
      ),
      titleHeight: 120,
      intro: (
        <p>
          We make it easy for users to invite their friends by connecting to their Facebook account & phone's contact list. Understanding that the user’s motivation may drop in the middle of the session out of discomfort, we turned the session screen into a live call/chat room in which social interaction feeds the physical effort. A dedicated “Friends” tab with photos, notification & leaderboard keeps users engaged with their friends' progress and gears them up for healthy competition.
        </p>
      ),
    },
    realtime: {
      title: (
        <div>
          Real-time feedback
        </div>
      ),
      titleHeight: 60,
      intro: (
        <p>
          FitOn connects to several fitness devices to measure real-time heart rate and calories burnt. Showing that data in the session screen prominently fuels users to perform better.
        </p>
      ),
    },
    celebrate: {
      title: (
        <div>
          Celebrate every win
        </div>
      ),
      intro: (
        <p>
          Keeping a good work-out streak is not an easy task. That's why it's important to celebrate every effort and keep users committed to their programs. With that in mind, we crafted a whole collection of achievement badges that are visually fun and appealing to earn as recognition & reward.
        </p>
      ),
    },
    commentList: [
      {
        title: 'Best fitness app yet!',
        content: '"I am obsessed with FitON! As a fitness class addict, I think it’s amazing that you can sign up for a class and take it at the same time as other FitON users (so you know you’re not suffering alone 😉)! The social aspect of this app is really cool and unlike anything I’ve seen in other fitness apps...!"',
        name: 'MaggieNo',
        date: 'Dec 04, 2018 on AppStore'
      },
      {
        title: 'Go-to Fitness App!',
        content: '"FitOn has everything I’ve been looking for in a fitness app - fast but challenging workouts with no equipment required (at least from what I’ve seen), both on-demand and scheduled, with the added bonus of working out with friends!"',
        name: 'fostaaah',
        date: 'Dec 10, 2018 on AppStore'
      },
      {
        title: 'Finally! A fitness app I love!!',
        content: '"I’m in love with this app. As a working mom with a young toddler getting to the gym is not an option for me. The fact the videos are live keeps it fun and motivating… I’m making fitness a goal this new year and I have no idea how I would be able to achieve that without this. So happy about this app!"',
        name: 'Allison Beal',
        date: 'Dec 14, 2018 on AppStore'
      }
    ]
  }
}
