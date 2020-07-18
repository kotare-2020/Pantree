import React from 'react'

import { HashRouter as Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import PlanColumn from './PlanColumn'

class Plan extends React.Component {
  generateColumns() {
    let columns = []
    for (let i = 1; i <= 7; i++) {
      columns.push(<PlanColumn key={i} dayNumber={i} days={this.props.plans} />)
    }
    return columns
  }

  render() {
    const auth = this.props.auth
    const plans = this.props.plans

    return (
      <>
        {auth.isAuthenticated ? (
          <>
            <div className="plan">{this.generateColumns()}</div>
          </>
        ) : (
          <Redirect to="/" />
        )}
      </>
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
