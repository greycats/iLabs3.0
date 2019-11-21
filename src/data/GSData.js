import React from 'react'

export default {
  theStory: {
    story: ['GreatSchools is the leading national nonprofit empowering parents to unlock educational opportunities for their children. GreatSchools provides school information and parenting resources to help millions of American families choose the right school, support learning at home, and guide their children to great futures. We were tasked with a complete re-design of the most trafficed page on the site, which was the school profile page.'],
    dataList: [
      {
        number: 40,
        name: 'Yearly Users',
        suffix: <span style={{ fontSize: '28px' }}>M</span>,
        img: require('assets/imgs/dcom/Review.json')
      },
      {
        number: 271,
        suffix: <span style={{ fontSize: '28px' }}>K</span>,
        name: 'School Profiles',
        img: require('assets/imgs/dcom/Increase-icon.json')
      }
    ]
  },
  theChallenge: {
    title: 'The Challenge',
    intro: 'User research indicated that the school profiles had become difficult to navigate over several iterations and new feature additions. We were brought on board to solve several design issues.',
    list: [
      {
        name: 'Simple navigation',
        text: 'Simplify navigation to showcase the most important data upfront',
        img: require('assets/imgs/vizient/The-challenge/Many products.json')
      },
      {
        name: 'Increase engagement',
        text: 'Make reviews more prominent to increase engagement with the profiles',
        img: require('assets/imgs/vizient/The-challenge/Inconsistency Interface.json')
      },
      {
        name: 'Diverse userbase',
        text: 'Redesign the page to account for the needs of a diverse userbase',
        img: require('assets/imgs/vizient/The-challenge/Mising Interactions.json')
      },
      {
        name: 'Visualization',
        text: 'Present vast quantities of data in a meaningful way',
        img: require('assets/imgs/vizient/The-challenge/Mising Interactions.json')
      },
    ]
  },
  theSolution: {
    title: 'The Solution',
    subTitle: 'Digging deeper',
    intro: <p>We needed to dig deeper into the metrics and research to really understand the core user issues. We applied a holistic approach to examine the site. We audited the site, based on use case, users journeys to create a strategic road map to address those issues.</p>
  },
  importance: {
    title: <div>The importance <br /> of the first glance</div>,
    titleHeight: '120px',
    intro: <p>GreatSchools aggregates 80 data points to rank schools in a fair and balanced manner. Presenting that much information at one time would overwhelm users. The challenge was to present the easiest, most relevant data to users up front, then provide mechanisms for them to discover more and dig deeper on their own.</p>
  },
  presentation: {
    title: <div>It's all about data <br /> presentation</div>,
    titleHeight: '120px',
    intro: <p>We tested various combinations of data presentation and discovery models.</p>
  },
  progressive: {
    title: 'Progressive disclosure eases data overload',
    titleHeight: '120px',
    intro: (<div>
      <p>Organized related metrics into groups and presented them as shelves that the user could quickly scan through.</p>
      <p>Analyzed usage to understand the most highly used groups of metrics and the datapoints within that group.</p>
    </div>)
  },
  designed: {
    intro: (<div>
      <p>Designed progressive disclosure so that the most important datapoints were presented up front, with the option for the user to dig deeper into the secondary or tertiary metrics.</p>
      <p>Enhanced the visual treatment to keep the page clean, clear and digestable.</p>
      <p>Designed the page ground up to be mobile optimized.</p>
    </div>)
  },
  digDeeper: {
    title: 'Dig deeper without losing context',
    titleHeight: '120px',
    intro: <p>When users find interesting data points, they naturally want to dig deeper. It is important to present more information to the user within the context of the data they are looking at. We designed Pop-Hovers and Pop-Outs to reduce click paths and let the use focus on data.</p>
  },
  higherQuality: {
    title: 'Higher quality user reviews increase engagement',
    titleHeight: '120px',
    intro: <p>User reviews play a key role in influencing a parent's perception about a school. School profiles with a large amount of higher quality reviews were proven to have more engagement. Beside auditing the review section, we looked closely at Foresee data to identify ways to enoucarage users to provide higher quality reviews.</p>
  },
  typeface: {
    title: 'Typeface',
    intro: (<div>
      <p> The GreatSchools brand is a visual system that communicates the heart of its identity. Typography is an essential part to express Greatschools personality to the audiences. We use Open Sans and Caecilia as our primary typefaces.</p>
      <p>Caecilia is a serif font with a rather ancient root which establish a trustworthy and respectable feeling. This typeface is dedicated to school names and add some accent to the school profile page.</p>
      <p>Open Sans is a humanist sans-serif typeface that we use for headers, sub-headers, and body text because of its high readability. The font features natural width and open curves which conveys friendliness and openness. </p>
    </div>)
  },
  colors: {
    title: 'Colors',
    intro: <p>The platform closely follows the brand colors which are shades of blue and green. These color schemes fit well with the GreatSchool nurturing brand personality, at the same time, offer good contrast and clarity to the visual elements. </p>
  },
  grid: {
    title: 'Grid',
    intro: (<div>
      <p>Grids offer a guide to the placement of information and help generate visual hierarchy. They promote rhythm and consistency in a design and help  develop relationships between elements based on rational proportions.</p>
      <p>In Greatschools, since the information is heavy, grids help create consistency, proportion, rhythm, and harmony across the designs and make it easier for the user to follow. </p>
    </div>)
  },
  sitemapc: {
    title: 'Sitemap',
    intro: <p>Here is the overall sitemap of GreatSchools! it is provides information about the flow of platform and the relationships between them.</p>
  },
  commentList: [
    {
      title: 'Wow, this is very informative',
      content: "Wow, this is very informative. I've never seen anything like this actually. Very detailed. So whatever my child is interested in the most. I can actually find the school that will fit him best. This is awesome.",
      name: 'ErisTay',
      date: 'Female, 32,usertesting.com'
    },
    {
      title: 'I love the website',
      content: 'I love the website where I can find an ideal school for my son... I believe that the section was well put together and it focused on what I believe is the most important while looking for a school.',
      name: 'Ashley Martinez',
      date: 'Female, 25,usertesting.com '
    },
    {
      title: 'Very positive experience',
      content: 'Overall I have had a very positive experience. I definitely found this to be one of the easier to use review type system here.',
      name: 'ROCMom',
      date: 'Female, 50,usertesting.com '
    }
  ]
}