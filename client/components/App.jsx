import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'

import Landing from './Landing'
import Plan from './Plan'
import ShoppingList from './ShoppingList'
import Recipes from './Recipes'
import RecipeView from './RecipeView'
import LocalSuppliers from './Suppliers'

export const App = props => {
  return (
    <Router>
      <Switch>
        {/* need to create public route so that user doesn't always get redirected to plan */}
        <Route exact path='/'>
          {props.auth.isAuthenticated ? <Redirect to ='/plan' /> : <Landing />}
        </Route>

        <PrivateRoute path='/plan' component={Plan} />
        <PrivateRoute path='/shopping-list' component={ShoppingList} />
        <PrivateRoute exact path='/recipes' component={Recipes} />
        <PrivateRoute path='/recipes/:id' component={RecipeView} />
        <PrivateRoute path='/suppliers' component={LocalSuppliers} />
        <PrivateRoute component={Plan} />
      </Switch>
    </Router>
  )
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(App)
