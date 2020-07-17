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
            // console.log('didmount', plan)
            return this.props.dispatch(getPlan(id, plan))
        })
    }

    componentDidUpdate(prevProps){
        if(prevProps.plans != this.props.plans){
            const id = this.props.auth.user.id
            getPlanApi(id)
            .then(plan =>{
                // console.log('didmount', plan)
                return this.props.dispatch(getPlan(id, plan))
            })
        }
    }


render(){
  const auth  = this.props.auth
  const plans  = this.props.plans
  console.log("render ", plans)

  return (
    <>
      {auth.isAuthenticated ? (
        <>
          <Nav />
          {this.props.plans && <div className="plan">
              <PlanColumn days={this.props.plans}/>
            {/* if plans is not null send props else dont */}
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
