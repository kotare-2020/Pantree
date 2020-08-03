import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Route, withRouter } from 'react-router-dom'

import Nav from './Nav'

class PrivateRoute extends React.Component {
  redirectToLanding = () => {
    this.props.history.push('/')
  }

  render() {
    const Component = this.props.component
    const isAuthenticated = this.props.auth.isAuthenticated

    if (!isAuthenticated) {
      this.redirectToLanding()
    }

    return (
      <>
        <Nav />
        <Component />
      </>
    )
  }
}

const mapStateToProps = globalState => {
  return {
    auth: globalState.auth,
  }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute))
