import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import Nav from './Nav'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = rest.isAuthenticated

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <>
            <Nav />
            <Component {...props} />
          </>
        ) : (
          <>
          <Redirect to='/' />
          </>
        )
      }
    />
  )
}

const mapStateToProps = globalState => {
  return {
    isAuthenticated: globalState.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps)(PrivateRoute)
