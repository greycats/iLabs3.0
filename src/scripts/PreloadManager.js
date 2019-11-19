import 'preload-js'
import _ from 'lodash'
const queue = new window.createjs.LoadQueue(true)
queue.setMaxConnections(60)
queue.maintainScriptOrder = false

export const getImage = (id, use64 = false) => use64 ? queue.getResult(id, true) : _.get(queue.getResult(id), 'src', '')

export default queue
