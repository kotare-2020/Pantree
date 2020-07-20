import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { selectedDay } from '../actions/selectedDay'

import PlanRecipeCard from './PlanRecipeCard'

class PlanColumn extends React.Component {
  handleClick = () => {
    return this.props.dispatch(selectedDay(this.props.dayNumber))
  }

  setDayRecipes = () =>{
    return this.props.day.recipes.map((recipe, i) => {
      return <PlanRecipeCard key={`${recipe.recipeUuid}-${this.props.dayNumber}`} days={this.props.days} dayNumber={this.props.dayNumber} recipe={recipe}/>
    })
  }

  render(){
    return (
      <>
      <div className="plan-column">
        <h3>{this.props.dayNumber}</h3>
        {this.setDayRecipes()}
        <Link to='/recipes'><button onClick={this.handleClick}>Add</button></Link>
      </div>
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    days: globalState.plans
  }
}


export default connect(mapStateToProps)(PlanColumn)