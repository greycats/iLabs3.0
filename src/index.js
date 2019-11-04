import 'TweenMax'
import './vendors/gsap/plugins/DrawSVGPlugin.min'
import './vendors/gsap/plugins/PixiPlugin.min'
import './vendors/gsap/plugins/MorphSVGPlugin.min'
import 'animation.gsap'
import * as PIXI from 'pixi.js-legacy'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.PIXI = PIXI

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
