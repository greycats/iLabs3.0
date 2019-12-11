import React, { Suspense } from 'react'
import { Router, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import history from './history'
import { lazyImport } from 'utils'

const HomeView = lazyImport(import('./views/Home'))
const CaseStudy = lazyImport(import('./views/CaseStudy'))
const OurWork = lazyImport(import('./views/OurWork'))
const Contact = lazyImport(import('./views/Contact'))
import { FullPageLoading } from 'components/TempLoading'

const routes = (
  <Suspense fallback={(() => {
    return window.isPC
    ? <FullPageLoading />
    : <FullPageLoading />
  })()}>
  <Router history={history}>
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{}}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
      <Route exact path="/" render={(props) => {
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
      <Route path="/contact" render={(props) => {
        return (
          <Contact
            {...props}
          />
        )
      }} />
    </AnimatedSwitch>
  </Router>
  </Suspense>
)

export default routes
