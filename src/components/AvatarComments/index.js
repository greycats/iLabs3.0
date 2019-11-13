import React, { Component } from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'
import ControllerList from 'components/AnimateWrap/controllerList'
import OrangeIcon from 'assets/imgs/vizient/Orange Icon.png'
import classnames from 'classnames'
import './index.sass'

export default class AvatarCommemts extends Component {
  static defaultProps = {
    controllerId: 'avatar-comment-triggrt',
    dataList: [],
    playState: 'play'
  }

  state = {
    avatarActive: 0,
    textActive: 0
  }

  componentWillMount() {
    const { dataList } = this.props
    const styleList = [
      { position: { left: 157, top: 107 }, size: { width: 150, height: 150 } },
      { position: { left: 0, top: 0 }, size: { width: 80, height: 80 } },
      { position: { left: 297, top: 20 }, size: { width: 60, height: 60 } },
      { position: { left: 60, top: 342 }, size: { width: 60, height: 60 } },
      { position: { left: 326, top: 287 }, size: { width: 80, height: 80 } }
    ]
    dataList.forEach((item, index) => item.style = styleList[index])
    this.setState({ dataList })
  }

  clickAvatar = (index) => {
    const { avatarActive, dataList } = this.state
    if (index === avatarActive) return
    const activeStyle = dataList[avatarActive].style
    dataList[avatarActive].style = dataList[index].style
    dataList[index].style = activeStyle
    this.setState({ avatarActive: index, dataList, playState: 'reverse' }, () => {
      setTimeout(() => {
        this.setState({ textActive: index, playState: 'play' })
      }, 500)
    })
  }

  render() {
    const { avatarActive, textActive, dataList, playState } = this.state
    const { controllerId } = this.props
    const animateList = dataList.map((item, index) => {
      return {
        content: (
          <div
            className={classnames("avatar-item", { 'active': avatarActive === index })}
            style={{ transition: 'left .8s, top .8s', ...item.style.position }}
            onClick={() => this.clickAvatar(index)}
            key={index}
          >
            <img src={item.img} className="avatar" style={item.style.size} />
            <img src={OrangeIcon} className="orange-icon" />
          </div>
        ),
        from: { css: { transform: 'scale(0)' } },
        to: { css: { transform: 'scale(1)' } },
        duration: 5000
      }
    }
    )
    return (
      <div>
        <div id={controllerId}></div>
        <div className="panel avatar-comments">
          <div className="avatar-wrap">
            <ControllerList animateList={animateList} controllerId={controllerId} />
          </div>
          <Controller>
            <Scene
              triggerElement={'#' + controllerId}
              duration={500}
              reverse={false}
            >
              {(progress) => (
                <div className="comments-wrap">
                  {
                    progress ? (
                      <Tween
                        staggerFrom={{
                          opacity: 0,
                          top: '20px'
                        }}
                        staggerTo={{
                          opacity: 1,
                          top: 0
                        }}
                        stagger={0.15}
                        duration={.2}
                        playState={playState}
                      >
                        <div className="name">{dataList[textActive].name}</div>
                        <div className="intro">{dataList[textActive].intro}</div>
                        <div className="comment">{dataList[textActive].comment}</div>
                      </Tween>
                    ) : null}
                </div>)}
            </Scene>
          </Controller>
        </div>
      </div>
    )
  }
}