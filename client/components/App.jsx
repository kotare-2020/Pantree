import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'

import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

import Landing from './Landing'
import Plan from './Plan'
import ShoppingList from './ShoppingList'
import Recipes from './Recipes'
import RecipeView from './RecipeView'
import LocalSuppliers from './Suppliers'

export const App = props => {
  const { auth } = props
  return (
    <Router>
          <PublicRoute path='/' component={Landing} exact={true} />

          <PrivateRoute path='/plan' component={Plan} />
          <PrivateRoute path='/shopping-list' component={ShoppingList} />
          <PrivateRoute path='/recipes' component={Recipes} exact={true} />
          <PrivateRoute path='/recipes/:id' component={RecipeView} />
          <PrivateRoute path='/suppliers' component={LocalSuppliers} />
    </Router>
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  }
}

export default connect(mapStateToProps)(App)
