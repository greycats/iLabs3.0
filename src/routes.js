import React, { Suspense } from 'react'
import { Router, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import history from './history'
import { lazyImport } from 'utils'
import { FullPageLoading, LoadingWithBanner } from 'components/TempLoading'

const HomeView = lazyImport(import('./views/Home'))
const CaseStudy = lazyImport(import('./views/CaseStudy'))
const OurWork = lazyImport(import('./views/OurWork'))
const Contact = lazyImport(import('./views/Contact'))
const SizzleReel = lazyImport(import('./views/SizzleReel'))
const Anniversary = lazyImport(import('./views/Anniversary'))

const routes = (
  <Suspense
    fallback={(() => {
      return window.isPC || window.innerWidth > 800 ? <LoadingWithBanner /> : <FullPageLoading />
    })()}
  >
    <Router history={history} basename={process.env.PUBLIC_URL}>
      <AnimatedSwitch atEnter={{ opacity: 0 }} atLeave={{}} atActive={{ opacity: 1 }} className="switch-wrapper">
        <Route exact path="/" render={(props) => <HomeView {...props} />} />
        <Route path="/casestudy" render={(props) => <CaseStudy {...props} />} />
        <Route path="/ourwork" render={(props) => <OurWork {...props} />} />
        <Route path="/contact" render={(props) => <Contact {...props} />} />
        <Route path="/sizzlereel" render={(props) => <SizzleReel {...props} />} />
        <Route path="/10thanniversary" render={(props) => <Anniversary {...props} />} />
      </AnimatedSwitch>
    </Router>
  </Suspense>
)

export default routes
