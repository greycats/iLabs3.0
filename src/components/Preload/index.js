import React, { useEffect, Fragment } from 'react'
import logo from 'logo.svg';
// import TimelineMax from '../../gsap/TimelineMax.min'
import PreloadManager from 'scripts/PreloadManager'
import { Power0 } from 'gsap'

// const TimelineMax = require('../../gsap/TimelineMax.min')
const TimelineMax = window.TimelineMax
const TweenMax = window.TweenMax
const tl = new TimelineMax()

export default () => {
  function drawLoading () {
    TweenMax.killTweensOf(['.preload'])
    tl.set('#Polystar_1', {
      strokeDasharray: '100 300',
      strokeDashoffset: 0,
      opacity: 1,
    })
    tl.set('.st0', {
      drawSVG: 0,
      opacity: 1,
    })
    tl.to('#Polystar_1', 1.8, {
      strokeDashoffset: -800,
      repeat: -1,
      ease: Power0.easeNone,
    })
  }
  useEffect(() => {
    drawLoading()
  }, [])
  return (
    <Fragment>
      <section className="preload">
        <svg xmlns="http://www.w3.org/2000/svg" id="preload_svg" viewBox="0 0 1920 1080">
          <g id="Layer_12">
            <path id="Polystar_1" d="M959.94 462.7l87 157.39H872.81z" />
          </g>
          <g id="Layer_11">
            <path id="Shape_1" className="st0 line1" d="M960 466.13v101.12" />
          </g>
          <g id="Layer_10">
            <path id="Shape_2" className="st0 line1" d="M973.38 486.63L960 567.25" />
          </g>
          <g id="Layer_9">
            <path id="Shape_3" className="st0 line1" d="M982.13 504.81L960 567.25" />
          </g>
          <g id="Layer_8">
            <path id="Shape_4" className="st0 line1" d="M991.81 522.63L960 567.25" />
          </g>
          <g id="Layer_7">
            <path id="Shape_5" className="st0 line1" d="M1001.69 538.63L960 567.25" />
          </g>
          <g id="Layer_6">
            <path id="Shape_6" className="st0 line1" d="M1010.69 554.88L960 567.25" />
          </g>
          <g id="Layer_5">
            <path id="Shape_7" className="st0 line1" d="M1019.94 572.25l-59.94-5" />
          </g>
          <g id="Layer_4">
            <path id="Shape_8" className="st0 line1" d="M1032.56 593.75L960 567.25" />
          </g>
          <g id="Layer_3">
            <path id="Shape_9" className="st0 line1" d="M1044.31 618.75L960 567.25" />
          </g>
          <g id="Layer_2">
            <path id="Shape_10" className="st0" d="M902.88 567.25H960" />
          </g>
        </svg>
      </section>
      <img src={logo} className="logo-img" alt="" />
    </Fragment>
  )
}