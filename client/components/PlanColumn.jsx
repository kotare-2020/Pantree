import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { selectedDay } from '../actions/selectedDay'

import PlanRecipeCard from './PlanRecipeCard'

class PlanColumn extends React.Component {
  handleClick = () => {
    return this.props.dispatch(selectedDay(this.props.dayNumber))
  }

  setDayRecipes = (days) =>{
    // const days = this.props.days
    console.log(days)
    return days.map((day, i) => {
      if(day.dayNumber == this.props.dayNumber){
        return day.recipes.map((recipe, i) => {
          return <PlanRecipeCard key={`${recipe.recipeUuid}-${this.props.dayNumber}`} days={this.props.days} dayNumber={this.props.dayNumber} recipe={recipe}/>
        })
      }
    })
  }

  render(){
    return (
      <>
      <div className="plan-column">
        <h3>{this.props.dayNumber}</h3>
        {this.setDayRecipes(this.props.days)}
        <Link to='/recipes'><button onClick={this.handleClick}>Add</button></Link>
      </div>
      </>
    )
  }
}

function mapStateToProps(globalState) {
  console.log("hi")
  return {
    days: globalState.plans
  }
}


export default connect(mapStateToProps)(PlanColumn)