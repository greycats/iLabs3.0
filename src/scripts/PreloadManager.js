import 'preload-js'
import _ from 'lodash'
const queue = new window.createjs.LoadQueue(true)
queue.setMaxConnections(1000)
queue.maintainScriptOrder = false

export const getImage = (id, use64 = false) => use64 ? queue.getResult(id, true) : _.get(queue.getResult(id), 'src', '')

export const getVideo = id => {
  const data = queue.getResult(id)
  const blob = new Blob( [ data ], { type: "video/mp4" } )
  const urlCreator = window.URL || window.webkitURL

  return urlCreator.createObjectURL( blob )
}

export default queue
