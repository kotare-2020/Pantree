import React from 'react'
import PlanRecipeCard from './PlanRecipeCard'

class PlanColumn extends React.Component {
  render(){
    return (
      <>
      <div className="plan-column">
        <div className="day-number">Day Number</div>
        <PlanRecipeCard/>
        <button>Add</button>
      </div>
      </>
    )
  }
}

export default PlanColumn