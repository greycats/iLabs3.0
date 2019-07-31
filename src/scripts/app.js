'use strict'
import 'babel-polyfill'
import '../vendors/gsap/TweenMax.min'
import '../vendors/gsap/plugins/DrawSVGPlugin.min'
import AppManager from './AppManager'

global.MENU
global.OVERLAY
global.MODELS
global.SKYTEX
global.PROD = false
global.BASE = ''
global.SCROLLED = false

AppManager.preload()
