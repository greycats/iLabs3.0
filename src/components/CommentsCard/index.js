import React from 'react'
import AnimationPlayer from 'components/AnimationPlayer'
import Star from 'assets/imgs/dcom/Star.svg'
import { hashCode } from 'utils'
import MobileCarousel from 'components/MobileCarousel'
import './index.sass'

const isPC = window.isPC

const CommentsCard = ({ commentList }) => commentList.map((item, index) => (
  <div className="comment-card-item" key={index}>
    <img className="card-star" src={Star} />
    <div className="card-title">{item.title}</div>
    <div className="card-content">{item.content}</div>
    <div className="card-name">{item.name}</div>
    <div className="card-date">{item.date}</div>
  </div>
))

const PCComments = ({
  commentList = [],
  id = hashCode('comment-card')
}) => {
  return (
    <div className="comment-card-wrap">
      <AnimationPlayer
        id={id}
        target={
          <div style={{ position: 'relative' }}>
            <div className="comment-card-list">
              <CommentsCard commentList={commentList} />
            </div>
          </div>
        }
        triggerRelativePosition={{ top: '-100px' }}
        animations={[
          {
            from: {
              opacity: 0,
              top: '100px'
            },
            to: {
              opacity: 1,
              top: 0
            },
            duration: 1.5
          }
        ]}
      />
    </div>
  )
}

const MobileComments = ({
  commentList = []
}) => {
  return (
    <div className="m-comment-card-wrap">
      <MobileCarousel
        list={CommentsCard({ commentList })}
      />
    </div>
  )
}

export default isPC ? PCComments : MobileComments