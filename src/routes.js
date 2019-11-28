import React, { Suspense } from 'react'
import { Router, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import history from './history'
import { lazyImport } from 'utils'

const HomeView = lazyImport(import('./views/Home'))
const CaseStudy = lazyImport(import('./views/CaseStudy'))
const OurWork = lazyImport(import('./views/OurWork'))

const routes = (
  <Suspense fallback={(() => {
    return (
      <div>
        ...
      </div>
    )
  })()}>
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
  </Suspense>
)

export default routes
