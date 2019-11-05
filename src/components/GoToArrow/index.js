import React, { Component } from 'react'
import { Tween, Timeline } from 'react-gsap'
import './index.sass'

class GoToArrow extends Component {
  static defaultProps = {
    text: '',
    status: 'in'
  }

  state = {
    status: this.props.status
  }

  arrowOnClick = () => {
    // this.setState({ status: this.state.status === 'in' ? 'out' : 'in' })
  }
  render() {
    const { status } = this.state
    const tweenData = {
      empty: {},
      in: {
        circle: {
          to: { css: { height: '60px', width: '60px' } },
          duration: .5,
          ease: "Back.easeInOut"
        },
        line: {
          from: { attr: { d: 'M0 8H00' } },
          to: { attr: { d: 'M0 8H20' } },
          duration: .3,
          delay: .2
        },
        arrow: {
          from: { attr: { d: 'M20 8L20 8L20 8' } },
          to: { attr: { d: 'M13 1L20 8L13 15' } },
          duration: .3,
          delay: .3
        },
        text: {
          from: { y: '20px', opacity: 0 },
          to: { y: 0, opacity: 1 },
          delay: .5,
          duration: .3,
          ease: "Back.easeInOut"
        }
      },
      out: {
        circle: {
          to: { css: { height: 0, width: 0 } },
          duration: .5,
          delay: .3,
          ease: "Back.easeInOut"
        },
        line: {
          from: { x: 0 },
          to: { x: '20px' },
          duration: .3
        },
        arrow: {
          from: { x: 0, attr: { d: 'M13 1L20 8L13 15' } },
          to: { x: '20px', attr: { d: 'M20 8L20 8L20 8' } },
          duration: .3
        },
        text: {
          from: { y: 0, opacity: 1 },
          to: { y: '20px', opacity: 0 },
          delay: .5,
          duration: .3,
          ease: "Back.easeInOut"
        }
      }
    }
    return (
      <div className="go-to-arrow">
        <div className="arrow-wrap" onClick={this.arrowOnClick}>
          <Tween
            {...tweenData[status].circle}
          >
            <div className="arrow-sec">
              <svg width="21" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Tween
                  {...tweenData[status].line}
                >
                  <path d="M0 8H00" stroke="#ffffff" className="line" />
                </Tween>
                <Tween
                  {...tweenData[status].arrow}
                >
                  <path d="M20 8L20 8L20 8" stroke="#ffffff" className="arrow" />
                </Tween>
              </svg>
            </div>
          </Tween>
        </div>
        <Tween
          {...tweenData[status].text}
        >
          <span onClick={this.arrowOnClick}>{this.props.text}</span>
        </Tween>
      </div >
    )
  }
}

export default GoToArrow