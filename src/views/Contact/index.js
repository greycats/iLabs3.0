import React from 'react'
import Footer from 'components/Footer'
import Form from './Form'

export default () => {
  return (
    <div style={{
      minHeight: '1300px',
      position: 'relative'
    }}>
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
          <br />
          <br />
          <p style={{
            color: '#656565',
            fontSize: '16px',
            maxWidth: '808px',
            marginBottom: '50px'
          }}>
            We have strive to collaborate with enthusiastic teams, big or small to create something special.We have a tried a true process that will take your ideas and concepts and actualize them into the real world.
          </p>
          <Form />
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