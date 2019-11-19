import PreloadManager from '../scripts/PreloadManager'
import VizentImage from '~/assets/imgs/vizient-1.png'
import _ from 'lodash'
export default () => ({
  intro: {
    title: 'iLabs3.0 Intro',
    projects: [
      {
        value: 'vizient',
        name: 'Vizient',
        label: 'Enterprise platform',
        image: _.get(PreloadManager.getResult('project-vizient-img'), 'src', ''),
        background: '#FF4E02',
        masks: new Array(12).fill(0),
        project: 'vizient',
      },
      {
        value: 'dcom',
        name: 'Vizient 1',
        label: 'Enterprise platform 1',
        image: _.get(PreloadManager.getResult('project-vizient-img'), 'src', ''),
        background: '#FF4E02',
        masks: new Array(12).fill(0),
      },
      {
        name: 'Vizient 2',
        label: 'Enterprise platform 2',
        image: _.get(PreloadManager.getResult('project-vizient-img'), 'src', ''),
        background: '#FF4E02',
        masks: new Array(12).fill(0),
      },
      {
        name: 'Vizient',
        label: 'Enterprise platform',
        image: _.get(PreloadManager.getResult('project-vizient-img'), 'src', ''),
        background: '#FF4E02',
        masks: new Array(12).fill(0),
      },
      {
        name: 'Vizient 1',
        label: 'Enterprise platform 1',
        image: _.get(PreloadManager.getResult('project-vizient-img'), 'src', ''),
        background: '#FF4E02',
        masks: new Array(12).fill(0),
      },
      {
        name: 'Vizient 2',
        label: 'Enterprise platform 2',
        image: _.get(PreloadManager.getResult('project-vizient-img'), 'src', ''),
        background: '#FF4E02',
        masks: new Array(12).fill(0),
      },
    ],
  },
  vizient: {
    image: PreloadManager.getResult('project-vizient-img'),
  },
})