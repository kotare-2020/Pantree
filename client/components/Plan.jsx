import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchPlan, savePlan } from '../actions/plan'
import { setPlanNeedsFetching } from '../actions/planNeedsFetching'

import PlanColumn from './PlanColumn'

class Plan extends React.Component {
  componentDidMount() {
    if (this.props.planNeedsFetching) {
      this.props.dispatch(fetchPlan(this.props.auth.user.id))
      this.props.dispatch(setPlanNeedsFetching(false))
    }
  }

  generateColumns() {
    let columns = []

    for (let i = 1; i <= 7; i++) {
      const day = this.props.plans.find(d => d.dayNumber === i) || {
        dayNumber: i,
        recipes: [],
      }
      columns.push(
        <PlanColumn
          key={`${day.dayNumber}-${day.recipes.length}`}
          dayNumber={i}
          day={day}
        />
      )
    }

    return columns
  }

  handleClick = () => {
    const userId = this.props.auth.user.id
    this.props.dispatch(savePlan(userId, this.props.plans))
    M.toast({
      html: '<span><i class="tiny material-icons">thumb_up</i> Done!</span>',
    })
  }

  render() {
    return (
      <div className='plan-container'>
        <div className='plan-header'>
          <span className='left'>My plan</span>
          <button
            onClick={this.handleClick}
            className='btn waves-effect waves-light btn-large right'>
            Save plan
            <i className='material-icons left'>save</i>
          </button>
        </div>
        <div id='clear-float'></div>
        <div className='plan'>{this.generateColumns()}</div>
      </div>
    )
  }
}

const mapStateToProps = globalState => {
  return {
    auth: globalState.auth,
    plans: globalState.plans,
    planNeedsFetching: globalState.planNeedsFetching,
  }
}

export default withRouter(connect(mapStateToProps)(Plan))