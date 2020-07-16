import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Landing from './Landing'
import Plan from './Plan'

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Landing}/>
      <Route path='/plan' component={Plan}/>
    </Router>
  )
}

export default App
