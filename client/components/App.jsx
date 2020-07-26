import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import Nav from './Nav'
import Landing from './Landing'
import Plan from './Plan'
import ShoppingList from './ShoppingList'
import Recipes from './Recipes'
import RecipeView from './RecipeView'
import LocalSuppliers from './Suppliers'

export const App = props => {
  const { auth } = props
 
  //this currently does not redurect to plan when on exact path '/' while token is still valid
  return (
    <>
    <Router>
      {auth.isAuthenticated &&     
      <header>
        <Nav/>
      </header>
    }
      {/* Remeber you might need to take this line out! */}
      {!auth.isAuthenticated ? <Redirect to="/" /> : <Redirect to="/plan" />}

      <Route path="/" exact component={Landing} />
      <PrivateRoute path="/plan" component={Plan} />
      <PrivateRoute path="/shopping-list" component={ShoppingList} />
      <PrivateRoute exact path="/recipes" component={Recipes} />
      <PrivateRoute path="/recipes/:id" component={RecipeView} />
      <PrivateRoute path="/suppliers" component={LocalSuppliers} />
    </Router>
    </>
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  }
}

export default connect(mapStateToProps)(App)
