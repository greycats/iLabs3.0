import { getImage } from 'scripts/PreloadManager.js'

export const designListData = () => [
  {
    text: 'User Research',
    icon: require('assets/imgs/home/Design/User-Research.svg'),
    image: getImage('service-design-1')
  },
  {
    text: 'Ideation',
    icon: require('assets/imgs/home/Design/Ideation.svg'),
    image: getImage('service-design-2')
  },
  {
    text: 'Creative Concept',
    icon: require('assets/imgs/home/Design/Creative-Concept.svg'),
    image: getImage('service-design-3')
  },
  {
    text: 'Visual Design',
    icon: require('assets/imgs/home/Design/Visual-Design.svg'),
    image: getImage('service-design-4')
  },
  {
    text: 'Prototype & Interation Design',
    icon: require('assets/imgs/home/Design/Prototype.svg'),
    image: getImage('service-design-5')
  }
]

export const devListData = () => [
  {
    text: 'Mobile Development',
    icon: require('assets/imgs/home/Dev/Mobile-Development.svg'),
    image: getImage('service-dev-1')
  },
  {
    text: 'Fullstack Web Development',
    icon: require('assets/imgs/home/Dev/Fullstack-Web-Development.svg'),
    image: getImage('service-dev-2')
  },
  {
    text: 'Analytics and Big Data Solutions',
    icon: require('assets/imgs/home/Dev/Analytics-Big-Data.svg'),
    image: getImage('service-dev-3')
  },
  {
    text: 'Support and DevOps',
    icon: require('assets/imgs/home/Dev/Support-DevOps.svg'),
    image: getImage('service-dev-4')
  },
  {
    text: 'Technology Infrastructure Support',
    icon: require('assets/imgs/home/Dev/Technology-Infrastructure.svg'),
    image: getImage('service-dev-5')
  },
  {
    text: 'IT Security',
    icon: require('assets/imgs/home/Dev/IT-Security.svg'),
    image: getImage('service-dev-6')
  }
]