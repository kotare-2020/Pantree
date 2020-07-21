import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { selectedDay } from '../actions/selectedDay'

import PlanRecipeCard from './PlanRecipeCard'

class PlanColumn extends React.Component {
  handleClick = () => {
    return this.props.dispatch(selectedDay(this.props.dayNumber))
  }

  setDayRecipes = () => {
    return this.props.day.recipes.map((recipe, i) => {
      return <PlanRecipeCard key={`${recipe.recipeUuid}-${this.props.dayNumber}`} days={this.props.days} dayNumber={this.props.dayNumber} recipe={recipe} itemIndex={i} />
    })
  }

  dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  render() {
    return (
      <>
        {/* <div className="plan-column"> */}
        <div className="col s1 m12 l12">
          <h4 className="plan-col-header flow-text">{this.dayOfWeek[this.props.dayNumber - 1]}</h4>

          {this.setDayRecipes()}

          <div className="add-btn">
            <Link to='/recipes' className="btn-floating btn-small waves-effect waves-light teal lighten-2" onClick={this.handleClick}><i className="material-icons">add</i></Link>
          </div>
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