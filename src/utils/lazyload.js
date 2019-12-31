import _ from 'lodash'

const _result = {

}

export const load = files => {
  Promise.all(_.map(files, file => file.src)).then(results => {
    for (let index = 0; index < results.length; index++) {
      _result[files[index].id] = results[index].default;
    }
  })
}

export const loadGSdata = () => {
  load([
    {
      id: 'gs_challenge',
      src: import('assets/imgs/2x/CaseStudy/gs/challenge/data.json'),
    },
    {
      id: 'gs_solution',
      src: import('assets/imgs/2x/CaseStudy/gs/solution/data.json'),
    },
    {
      id: 'gs_first-glance-1',
      src: import('assets/imgs/2x/CaseStudy/gs/first-glance-1/data.json'),
    },
    {
      id: 'gs_first-glance-2',
      src: import('assets/imgs/2x/CaseStudy/gs/first-glance-2/data.json'),
    },
    {
      id: 'gs_approach',
      src: import('assets/imgs/2x/CaseStudy/gs/approach/data.json'),
    },
    {
      id: 'gs_presentation',
      src: import('assets/imgs/2x/CaseStudy/gs/data/data.json')
    },
    {
      id: 'gs_disclosure-1',
      src: import('assets/imgs/2x/CaseStudy/gs/disclosure-1/data.json')
    },
    {
      id: 'gs_disclosure-2',
      src: import('assets/imgs/2x/CaseStudy/gs/disclosure-2/data.json')
    },
    {
      id: 'gs_deeper',
      src: import('assets/imgs/2x/CaseStudy/gs/deeper/data.json')
    },
    {
      id: 'gs_reviews',
      src: import('assets/imgs/2x/CaseStudy/gs/reviews/data.json')
    },
    {
      id: 'gs_devices',
      src: import('assets/imgs/2x/CaseStudy/gs/devices/data.json')
    },
    {
      id: 'gs_grid',
      src: import('assets/imgs/2x/CaseStudy/gs/grid/data.json')
    },
    {
      id: 'gs_sitemap',
      src: import('assets/imgs/2x/CaseStudy/gs/sitemap/data.json')
    }
  ])
}

export const getResult = id => _result[id]