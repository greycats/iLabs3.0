import React from 'react'
import TheStory from 'components/TheStory'
import Banner from 'components/Banner'
import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'
import VizientImage from '../../../assets/imgs/vizient.png'

export default () => {
  const theStoryData = {
    story: [
      'Vizient is the largest member-driven, health care performance improvement company in the country.',
      'With dozens of products offered, Vizient tasked us with designing and building a new UI Toolkit to homogenize their user interface components across all services.'
    ],
    dataList: [
      {
        number: 5,
        name: 'Products'
      },
      {
        number: 10,
        name: 'Team members'
      },
      {
        number: 250,
        suffix: '+',
        name: 'App Screens'
      }
    ]
  }

  return (
    <div>
      <Banner image={VizientImage}/>
      <TheStory {...theStoryData}></TheStory>
    </div>
  )
}