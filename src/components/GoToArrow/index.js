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
    this.setState({ status: 'out' })
  }
  render() {
    return (
      <div className="go-to-arrow">
          <div className="arrow-wrap">
            <Tween
              to={{ css: { height: '60px', width: '60px' } }}
              duration={.3}
            >
              <div className="arrow-sec" onClick={this.arrowOnClick}>
                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Tween
                    from={{ x: '-20px' }}
                    to={{ x: 0 }}
                    duration={.3}
                    delay={.2}
                  >
                    <path d="M0 8H20" stroke="#ffffff" className="line" />
                  </Tween>
                  <Tween
                    to={{ attr: { d: 'M13 1L20 8L13 15' } }}
                    duration={.3}
                    delay={.3}
                  >
                    <path d="M20 8L20 8L20 8" stroke="#ffffff" className="arrow" />
                  </Tween>
                </svg>
              </div>
            </Tween>
          </div>
          <Tween
            from={{ y: '20px', opacity: 0 }}
            to={{ y: 0, opacity: 1 }}
            delay={.5}
            duration={.3}
          >
            <span>{this.props.text}</span>
          </Tween>
      </div >
    )
  }
}

export default GoToArrow