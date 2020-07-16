import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'

import Landing from './Landing'
import Plan from './Plan'

export const App = (props) => {
  const { auth } = props
  return (
    <Router>
      <Route exact path='/' component={Landing}/>
      <Route path='/plan' component={Plan}/>
      {auth.isAuthenticated && <Redirect to="/plan"/>}
    </Router>
  )
}

const mapStateToProps = ({ auth }) => {
  return { 
      auth,
  }
}

export default connect(mapStateToProps)(App)