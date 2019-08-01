'use strict'
import 'babel-polyfill'
import 'TweenMax'
import '../vendors/gsap/plugins/DrawSVGPlugin.min'
import 'animation.gsap'
import '../styles/main.scss'
import AppManager from './AppManager'

global.MENU
global.OVERLAY
global.MODELS
global.SKYTEX
global.PROD = false
global.BASE = 'public'
global.SCROLLED = false

AppManager.preload()
