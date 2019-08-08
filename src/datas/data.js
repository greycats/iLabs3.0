import PreloadManager from '../scripts/PreloadManager'
export default () => ({
  intro: {
    title: 'iLabs3.0 Intro',
    projects: [
      {
        name: 'Vizient',
        label: 'Enterprise platform',
        image: PreloadManager.getResult('project-vizient-img'),
        masks: new Array(12).fill(0),
      },
    ],
  },
})
