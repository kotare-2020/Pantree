import React from "react"

import { HashRouter as Redirect } from "react-router-dom"
import { connect } from "react-redux"

import { getPlanApi } from "../apis/plans"
import { getPlan } from '../actions/plan'

import Nav from "./Nav"
import PlanColumn from "./PlanColumn"

class Plan extends React.Component {

    componentDidMount(){
        const id = this.props.auth.user.id
        getPlanApi(id)
        .then(plan =>{
            return this.props.dispatch(getPlan(id, plan))
        })
    }


render(){
  const auth  = this.props.auth
  const plans  = this.props.plans

  return (
    <>
      {auth.isAuthenticated ? (
        <>
          <Nav />
          {plans && <div className="plan">
              <PlanColumn days={plans}/>
          </div>}
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
