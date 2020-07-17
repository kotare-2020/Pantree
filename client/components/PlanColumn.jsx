import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { selectedDay } from '../actions/selectedDay'

import PlanRecipeCard from './PlanRecipeCard'

class PlanColumn extends React.Component {

  handleClick = ()=> {
    return this.props.dispatch(selectedDay(this.props.dayNumber))
  }

  setDayRecipes = ()=>{
    const days = this.props.days
    return days.map((day,i) => {
      if(day.dayNumber == this.props.dayNumber){
        return <PlanRecipeCard key={i} days={this.props.days}/>
      }
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



export default connect()(PlanColumn)