import React from 'react'

import { connect } from 'react-redux'

import PlanRecipeCard from './PlanRecipeCard'

class PlanColumn extends React.Component {
  componentDidMount(){
    console.log('plancolumn', this.props)
  }

  render(){
    return (
      <>
      <div className="plan-column">
        {/* {this.props.days.map(day => {
          return (
            <>
          <div className="day-number">{day.dayNumber}</div>
          <PlanRecipeCard/>
          <button>Add</button>
          </>
          )
            
        })} */}
      </div>
      </>
    )
  }
}

export default connect()(PlanColumn)