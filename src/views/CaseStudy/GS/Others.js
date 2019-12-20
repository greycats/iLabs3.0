import React, { useState, useEffect } from 'react'
import TextAndAnimation from 'components/TextAndAnimation'
import CommentsCard from 'components/CommentsCard'
import AnimationPlayer, { LottieAnimation } from 'components/AnimationPlayer'


export default ({ GSData }) => {
  const isPC = window.isPC
  return (
    <div>
      <TextAndAnimation
        layoutType='left-text'
        {...GSData.designed}
        titleStyle={{
          width: '520px'
        }}
        animateIcon={GSData.other.disclouse}
        animationStyle={{
          width: 720
        }}
        wrapStyle={isPC ? {
          padding: 0
        } : {}}
      />

      <TextAndAnimation
        layoutType='left-text'
        {...GSData.digDeeper}
        titleStyle={{
          width: '520px'
        }}
        animateIcon={GSData.other.deeper}
        animationStyle={{
          width: 720,
          transform: 'translateY(-50px)',
        }}
      />

      <TextAndAnimation
        layoutType='left-text'
        {...GSData.higherQuality}
        titleStyle={{
          width: '520px'
        }}
        animateIcon={GSData.other.review}
        wrapStyle={isPC ? {
          padding: '100px 0 50px'
        } : {}}
        animationStyle={{
          width: 720,
          transform: 'translateY(-160px)',
        }}
      />

      <div style={isPC ? { height: 750, marginBottom: 70 } : { height: '1.5rem' }}>
        <LottieAnimation
          options={{
            animationData: GSData.other.device
          }}
          width={'100vw'}
        />
      </div>

      <div className="layout-1240">
        <TextAndAnimation
          layoutType='left-text'
          wrapMinHeight={450}
          title={GSData.typeface.title}
          intro={GSData.typeface.intro}
          titleStyle={{
            width: '586px'
          }}
        />
        <div style={isPC ? {
          height: 550,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'baseline'
        } : {
            padding: '0 0.25rem',
            height: '7.8rem'
          }}
        >
          {
            GSData.typeface.animationList.map((item, index) => (
              <div key={index} style={isPC ? item.style : item.mobileStyle}>
                <AnimationPlayer
                  target={
                    <img src={!isPC && item.mobileImg ? item.mobileImg : item.img} style={{ position: 'relative' }} />
                  }
                  delay={isPC ? 0 : (index * 0.2)}
                  animations={
                    [{
                      from: { opacity: 0, top: '50px' },
                      to: { opacity: 1, top: 0 }
                    }]
                  }
                />
              </div>
            ))
          }
        </div>
      </div>

      <div className="layout-1240">
        <TextAndAnimation
          layoutType='right-text'
          wrapMinHeight={isPC ? 450 : '2.5rem'}
          title={GSData.colors.title}
          intro={GSData.colors.intro}
          titleStyle={{
            width: '600px'
          }}
          wrapStyle={{
            paddingBottom: 0
          }}
        />
        <div style={{
          height: 654,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          marginTop: isPC ? '-200px' : '-0.5rem',
          marginBottom: 105,
          padding: isPC ? 0 : '0 0.25rem'
        }}>
          {
            GSData.colors.animationList.map((item, index) => (
              <div key={index} style={isPC ? { width: 264 } : { width: '45%' }}>
                <LottieAnimation
                  options={{
                    animationData: item.img,
                  }}
                />
              </div>
            ))
          }
        </div>
      </div>

      <TextAndAnimation
        layoutType='left-text'
        {...GSData.grid}
        titleStyle={{
          width: '243px'
        }}
        animateIcon={GSData.other.grid}
        mobileAnimationStyle={{
          width: '100vw',
          marginLeft: '-0.25rem'
        }}
      />

      <div className="layout-1240" style={{ marginBottom: 50 }}>
        <TextAndAnimation
          layoutType='up-text'
          {...GSData.sitemap}
          titleStyle={{
            width: '600px'
          }}
          wrapMinHeight={isPC ? 1020 : '4.5rem'}
          animateIcon={GSData.other.sitemap}
          mobileAnimationStyle={{
            width: '100vw',
            marginLeft: '-0.25rem'
          }}
        />
      </div>
      <CommentsCard commentList={GSData.commentList} />
    </div>
  )
}