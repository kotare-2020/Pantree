import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'

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
      {!auth.isAuthenticated ? <Redirect to="/" /> : <Redirect to="/plan" />}

      <Route path="/" exact component={Landing} />
      <Route path="/plan" component={Plan} />
      <Route path="/shopping-list" component={ShoppingList} />
      <Route exact path="/recipes" component={Recipes} />
      <Route path="/recipes/:id" component={RecipeView} />
      <Route path="/suppliers" component={LocalSuppliers} />
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
