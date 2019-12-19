import React, { useState } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Form from './Form'
import GoToArrow from 'components/GoToArrow'
import history from 'history.js'
import LeftBg from 'assets/imgs/contact/Contact-graphic-left.svg'
import RightBg from 'assets/imgs/contact/Contact-graphic-right.svg'
import './style.sass'

export default () => {
  const [isSent, setIsSent] = useState(false)
  return (
    <div className="contact-page">
      <Header />
      <div className="contact-wrap">
        <div className="contact-content">
          <div className="content-title">
            {
              isSent ?
                <p>Message sent!</p>
                :
                <p>Have a project in mind? <br />Let’s talk.</p>
            }
          </div>
          <div className="contact-intro">
            {
              isSent
                ?
                <p>
                  We’ll follow up with you iwithin the next 24 hours.
                  <br />
                  In the meantime, take a look at our selected projects.
                </p>
                :
                <p>
                  We have strive to collaborate with enthusiastic teams, big or small to create something special.
                  <br />
                  We have a tried a true process that will take your ideas and concepts and actualize them into the real world.
                </p>
            }
          </div>
          {
            isSent ? <GoToArrow text="Our Work" onClick={() => {
              history.push('/ourwork')
            }} /> : <Form onSubmitted={() => setIsSent(true)} />
          }
          {
            isSent ? (
              <>
                <img className="bg-left" src={LeftBg} />
                <img className="bg-right" src={RightBg} />
              </>
            )
              : null
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}