import React from 'react'
import { HashRouter as Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { savePlan } from '../actions/plan'

import PlanColumn from './PlanColumn'

class Plan extends React.Component {
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
    const auth = this.props.auth

    return (
      <div className='plan-container'>
        {auth.isAuthenticated ? (
          <>
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
            <div className='plan'>
              {this.generateColumns()}
            </div>
          </>
        ) : (
            <Redirect to='/' />
          )}
      </div>
    )
  }
}

const mapStateToProps = ({ auth, plans }) => {
  return {
    auth,
    plans,
  }
}

export default connect(mapStateToProps)(Plan)
