import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'

import Landing from './Landing'
import Plan from './Plan'
import ShoppingList from './ShoppingList'

export const App = (props) => {
  const { auth } = props
  //this currently does not redurect to plan when on exact path '/' while token is still valid
  return (
    <Router>
      <>
        {!auth.isAuthenticated &&
          <Route exact path='/' component={Landing}/>
        }
          <Route path='/plan' component={Plan}/>
          <Route path='/shopping-list' component={ShoppingList}/>
      </>
    </Router>
  )
}

const mapStateToProps = ({ auth }) => {
  return { 
      auth,
  }
}

export default connect(mapStateToProps)(App)