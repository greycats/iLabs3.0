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

export const getResult = id => _result[id]