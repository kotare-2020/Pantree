import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Route, Redirect } from 'react-router-dom'

import Nav from './Nav'

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <div>
          <Nav />
          <Component {...props} />
        </div>
      ) : (
        <Redirect to='/' />
      )
    }
  />
)

const mapStateToProps = globalState => {
  return {
    isAuthenticated: !!globalState.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps)(PrivateRoute)
