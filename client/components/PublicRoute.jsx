import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = rest.isAuthenticated

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Redirect to='/' /> : <Component {...props} />
      }
    />
  )
}

const mapStateToProps = globalState => {
  return {
    isAuthenticated: globalState.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps)(PublicRoute)
