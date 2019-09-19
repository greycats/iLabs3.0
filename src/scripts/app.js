'use strict'
import 'babel-polyfill'
import 'TweenMax'
import '../vendors/gsap/plugins/DrawSVGPlugin.min'
import '../vendors/gsap/plugins/PixiPlugin.min'
import '../vendors/gsap/plugins/MorphSVGPlugin.min'
import '../vendors/icons/svgxuse'
import 'animation.gsap'
// import * as PIXI from 'pixi.js'
import * as PIXI from 'pixi.js-legacy'
import '../styles/main.scss'
import AppManager from './AppManager'
window.PIXI = PIXI
global.MENU
global.OVERLAY
global.MODELS
global.SKYTEX
global.PROD = false
global.BASE = 'public'
global.LAYOUT = {}
global.SCROLLED = false

AppManager.preload()
