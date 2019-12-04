import React, { useState } from 'react'
import Footer from 'components/Footer'
import Form from './Form'
import GoToArrow from 'components/GoToArrow'
import history from 'history.js'
import logo from 'assets/imgs/logo.png'

export default () => {
  const [isSent, setIsSent] = useState(false)
  return (
    <div style={{
      minHeight: '1300px',
      position: 'relative'
    }}>
      <img style={{
        marginTop: '30px',
        marginLeft: '100px',
        cursor: 'pointer'
      }} src={logo} alt=""
      onClick={() => {
        history.push('/')
      }}
      />
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        paddingTop: '100px',
        minHeight: '100vh'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {
            isSent ?
              <p style={{
                fontSize: '64px',
                color: '#2c2c2c'
              }}>Message sent!</p>
              : <>
                <p style={{
                  fontSize: '64px',
                  color: '#2c2c2c'
                }}>Have a project in mind?</p>
                <br />
                <br />
                <p style={{
                  fontSize: '64px',
                  color: '#2c2c2c'
                }}>Let’s talk.</p>
              </>
          }
          <br />
          <br />
          <p style={{
            color: '#656565',
            fontSize: '16px',
            maxWidth: '808px',
            marginBottom: '50px'
          }}>
            {
              isSent
              ? <p>
                <span>
                  We’ll follow up with you iwithin the next 24 hours.
                </span>
                <br/>
                <span>
                  In the meantime, take a look at our selected projects.
                </span>
                </p>
              : 'We have strive to collaborate with enthusiastic teams, big or small to create something special.We have a tried a true process that will take your ideas and concepts and actualize them into the real world.'
            }
          </p>
          {
            isSent ? <GoToArrow text="Our Work" onClick={() => {
              history.push('/ourwork')
            }}/> : <Form onSubmitted={() => setIsSent(true)} />
          }
        </div>
      </div>
      <div style={{
        position: 'absolute',
        bottom: 0,
        // marginTop: '500px',
        width: '100%'
      }}>
        <Footer />
      </div>
    </div>
  )
}