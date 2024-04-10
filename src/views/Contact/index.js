import React, { useState } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
// import Form from './Form'
// import GoToArrow from 'components/GoToArrow'
// import history from 'history.js'
// import LeftBg from 'assets/imgs/contact/Contact-graphic-left.svg'
// import RightBg from 'assets/imgs/contact/Contact-graphic-right.svg'
// import { scrollTop } from 'utils'
import './style.sass'
import Logo from 'components/BrandLogo/index.js'

export default () => {
  const [isSent, setIsSent] = useState(false)
  return (
    <div className="contact-page">
      <Logo isWhite={false}/>
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
                  We’ll follow up with you within the next 24 hours.
                  <br />
                  In the meantime, take a look at our work.
                </p>
                :
                <p>
                  We love to collaborate with enthusiastic teams, big or small to create something special.
                  <br />
                  We have a tried and tested process to take your ideas/concepts and bring them to life.
                </p>
            }
          </div>
          <a className="content-text" href="mailto:hello@interactivelabs.com">Reach out to us: hello@interactivelabs.com</a>
          {/* {
            isSent ? <GoToArrow text="Our Work" onClick={() => {
              history.push('/ourwork')
            }} /> : <Form onSubmitted={() => {
              setIsSent(true)
              scrollTop(0, 500)
            }} />
          }
          {
            isSent ? (
              <>
                <img className="bg-left" src={LeftBg} />
                <img className="bg-right" src={RightBg} />
              </>
            )
              : null
          } */}
        </div>
      </div>
      <Footer />
    </div>
  )
}