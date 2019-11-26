import React from 'react'
import { Router, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import history from './history'
import HomeView from './views/Home'
import CaseStudy from './views/CaseStudy'
import OurWork from './views/OurWork'


const routes = (
  <Router history={history}>
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{}}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
      <Route path="/home" render={(props) => {
        return (
          <HomeView
            {...props}
          />
        )
      }} />
      <Route path="/casestudy" render={(props) => {
        return (
          <CaseStudy
            {...props}
          />
        )
      }} />
      <Route path="/ourwork" render={(props) => {
        return (
          <OurWork
            {...props}
          />
        )
      }} />
    </AnimatedSwitch>
  </Router>
)

export default routes
