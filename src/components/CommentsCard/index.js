import React from 'react'
import AnimationPlayer, { LottieAnimation } from 'components/AnimationPlayer'
import Star from 'assets/imgs/dcom/Star.svg'
import { hashCode } from 'utils'
import './index.sass'

const CommentsCard = ({ commentList }) => (
  <div className="comment-card-list">
    {
      commentList.map((item, index) => (
        <div className="comment-card-item" key={index}>
          <img src={Star} />
          <div className="title">{item.title}</div>
          <div className="content">{item.content}</div>
          <div className="name">{item.name}</div>
          <div className="date">{item.date}</div>
        </div>
      ))
    }
  </div>
)

export default ({
  commentList = [],
  id = hashCode('comment-card')
}) => {
  return (
    <div className="comment-card-wrap">
      <AnimationPlayer
        id={id}
        target={
          <div style={{ position: 'relative' }}>
            <CommentsCard commentList={commentList} />
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