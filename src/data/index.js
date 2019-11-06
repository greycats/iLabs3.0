import PreloadManager from '../scripts/PreloadManager'
import VizentImage from '~/assets/imgs/vizient-1.png'
export default () => ({
  intro: {
    title: 'iLabs3.0 Intro',
    projects: [
      {
        name: 'Vizient',
        label: 'Enterprise platform',
        // image: PreloadManager.getResult('project-vizient-img'),
        image: VizentImage,
        background: '#FF4E02',
        masks: new Array(12).fill(0),
        project: 'vizient',
      },
      {
        name: 'Vizient 1',
        label: 'Enterprise platform 1',
        image: VizentImage,
        background: '#FF4E02',
        masks: new Array(12).fill(0),
      },
      {
        name: 'Vizient 2',
        label: 'Enterprise platform 2',
        // image: PreloadManager.getResult('project-vizient-img'),
        image: VizentImage,
        background: '#FF4E02',
        masks: new Array(12).fill(0),
      },
      {
        name: 'Vizient',
        label: 'Enterprise platform',
        // image: PreloadManager.getResult('project-vizient-img'),
        image: VizentImage,
        background: '#FF4E02',
        masks: new Array(12).fill(0),
      },
      {
        name: 'Vizient 1',
        label: 'Enterprise platform 1',
        // image: PreloadManager.getResult('project-vizient-img'),
        image: VizentImage,
        background: '#FF4E02',
        masks: new Array(12).fill(0),
      },
      {
        name: 'Vizient 2',
        label: 'Enterprise platform 2',
        image: PreloadManager.getResult('project-vizient-img'),
        image: VizentImage,
        background: '#FF4E02',
        masks: new Array(12).fill(0),
      },
    ],
  },
  vizient: {
    image: PreloadManager.getResult('project-vizient-img'),
  },
})