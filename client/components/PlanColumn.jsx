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
    const days = this.props.days
    return days.map((day, i) => {
      if(day.dayNumber == this.props.dayNumber){
        return day.recipes.map((recipe, i) => {
          return <PlanRecipeCard key={recipe.recipeUuid} days={this.props.days} dayNumber={this.props.dayNumber} recipe={recipe}/>
        })
      }
    })
  }

  dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  render(){
    return (
      <>
      <div className="plan-column">
        <h3>{this.dayOfWeek[this.props.dayNumber-1]}</h3>
        {this.setDayRecipes()}
        <Link to='/recipes'><button className="waves-effect add-btn waves-light btn" onClick={this.handleClick}>Add</button></Link>
      </div>
      </>
    )
  }
}



export default connect()(PlanColumn)