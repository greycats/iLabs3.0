import AppManager from '../managers/AppManager'
import { PerspectiveCamera } from 'three'
import p2 from 'p2'

export default class AbstractView {
  constructor() {
    this.ui = AppManager.ui // global ui for each view
    this.postProc = false
  }

  startScene() {
    this.init(() => {
      // Creation scene time, need a callback the first time
      AppManager.callbackInit()
    })
  }

  resizeHandler() {
    this.width = window.innerWidth
    this.height = window.innerHeight

    // let coef = false

    // if (this.id === 0) {
    //   coef = window.innerWidth > 1920 ? 0.65 : 0.7
    // }

    // if (this.id === 1) {
    //   coef = window.innerWidth > 1920 ? 0.65 : 0.8
    // }

    // if (this.name === 'intro' || this.id === 2 || this.id === 3) {
    //   coef = window.innerWidth > 1920 ? 0.65 : 0.75
    // }

    // // Resize Scene
    // SceneManager.resizeHandler({
    //   camera: this.camera,
    //   cssScene: this.cssScene,
    //   coef,
    // })
  }

  render() {}
}
