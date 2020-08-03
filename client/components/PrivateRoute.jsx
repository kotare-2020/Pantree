import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Nav from './Nav'

class PrivateRoute extends React.Component {
  render() {
    const Component = this.props.component
    const isAuthenticated = this.props.auth.isAuthenticated

    return (
      isAuthenticated ? (
      <>
        <Nav />
        <Component />
      </>
      ) : (
        <Redirect to='/' />
      )
    )
  }
}

const mapStateToProps = globalState => {
  return {
    auth: globalState.auth,
  }
}

export default connect(mapStateToProps)(PrivateRoute)