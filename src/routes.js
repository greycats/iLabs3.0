import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
// import { renderRoutes } from 'react-router-config'
import history from './history'
import HomeView from './views/Home'
// import SignIn from './views/SignIn'
// import SignUpRoutes from './views/SignUp/routes'
// import ResetPwdRoutes from './views/ResetPwd/routes'
// import OnboardingRoutes from './views/OnBoarding/routes'
// import DashboardRoutes from './views/Dashboard/routes'
// import DelegateRoutes from './views/Delegate/routes'
// import StaticPagesRoutes from './views/Static/routes'
// import Board from './views/Board/routes'
// import StaticRouter from './staticViews/routes'

// const routerMap = [
  // ...SignUpRoutes,
  // ...ResetPwdRoutes,
  // ...OnboardingRoutes,
  // ...DashboardRoutes,
  // ...DelegateRoutes,
  // ...StaticPagesRoutes,
  // ...StaticRouter,
  // ...Board
// ]

const routes = (
  <Router history={history}>
    <Switch>
      {/* <Redirect exact from="/" to="/signin" /> */}
      <Route path="/home" render={(props) => {
        return (
          <HomeView
            {...props}
          />
        )
      }} />
      {/* <Route path="/signin" component={SignIn} /> */}
      {/* {renderRoutes(routerMap)} */}
    </Switch>
  </Router>
)

export default routes
