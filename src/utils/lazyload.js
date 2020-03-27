import _ from 'lodash'
import { toDataURL } from './index'

const _result = {

}

const _image = {

}

export const load = (files, onLoad = () => {}) => {
  Promise.all(_.map(files, file => file.src)).then(results => {
    for (let index = 0; index < results.length; index++) {
      _result[files[index].id] = results[index].default;
    }

    onLoad()
  })
}

export const loadImage = (files, onLoad = () => {}) => {
  Promise.all(_.map(files, file => file.src)).then(async results => {
    for (let index = 0; index < results.length; index++) {
      _image[files[index].id] = await toDataURL(results[index].default);
    }

    onLoad()
  })
}

export const getImageResult = id => _image[id]

export const loadGSdata = () => {
  load([
    {
      id: 'gs_banner',
      src: import('assets/imgs/banners/GS/@2x/GreatSchools-3-Floating-@2x/data.json')
    },
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

export const loadCrewData = () => {
  load([
    {
      id: 'crew_banner',
      src: import('assets/imgs/banners/Crew/@2x/Crew-3-Floating-@2x/data.json')
    },
    {
      id: 'crew_phone-double',
      src: import('assets/imgs/2x/CaseStudy/crew/phone-double/data.json')
    },
    {
      id: 'crew_phone-single',
      src: import('assets/imgs/2x/CaseStudy/crew/phone-single/data.json')
    }
  ])
}

export const loadVizientData = () => {
  load([
    {
      id: 'viz_components',
      src: import('assets/imgs/2x/CaseStudy/vizient/components/data.json')
    },
    {
      id: 'viz_color',
      src: import('assets/imgs/2x/CaseStudy/vizient/color/data.json')
    },
    {
      id: 'viz_material',
      src: import('assets/imgs/2x/CaseStudy/vizient/material/data.json')
    },
    {
      id: 'viz_type',
      src: import('assets/imgs/2x/CaseStudy/vizient/type/data.json')
    },
    {
      id: 'viz_banner',
      src: import('assets/imgs/banners/Vizient/@2x/Vizient-FX-4-Floating-@2x/data.json')
    }
  ])
}

export const loadDcomData = () => {
  load([
    {
      id: 'dcom_banner',
      src: import('assets/imgs/banners/Dcom/@2x/Dcom-3-Floating-@2x/data.json')
    }
  ])
}

export const loadFitOnData = () => {
  load([
    {
      id: 'fiton_banner',
      src: import('assets/imgs/fiton/Hero banner/Hero banner 2x.json')
    },
    {
      id: 'fiton_visual',
      src: import('assets/imgs/fiton/Celebrate.json')
    },
    {
      id: 'fiton_motivation',
      src: import('assets/imgs/fiton/Motivation.json')
    },
    {
      id: 'fiton_realtime',
      src: import('assets/imgs/fiton/Real time feedback.json')
    }
  ])
}

export const getResult = id => _result[id]