import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Route, Redirect } from 'react-router-dom'

export const PublicRoute = ({
  isAuthenticated, 
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={(props) => (
      isAuthenticated ? (
          <Redirect to="/" />           
      ) : (
          <Component {...props} />
      )
  )} />
)

const mapStateToProps = globalState => ({
    isAuthenticated: !!globalState.auth.isAuthenticated,
})

export default connect(mapStateToProps)(PublicRoute)