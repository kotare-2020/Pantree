import React from 'react'

import { connect } from 'react-redux'

import PlanRecipeCard from './PlanRecipeCard'

class PlanColumn extends React.Component {

  render(){
    const days = this.props.days
    console.log(days)
    return (
      <>
      <div className="plan-column">
        {this.props.days.map((day,i) => {
          return (
          <div key={i}>
          <div  className="day-number">{day.dayNumber}</div>
          <PlanRecipeCard />
          <button>Add</button>
          </div>
          )
            
        })}
      </div>
      </>
    )
  }
}

export default connect()(PlanColumn)