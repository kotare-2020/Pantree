import React from "react"
import { HashRouter as Redirect } from "react-router-dom"
import { connect } from "react-redux"

import Nav from "./Nav"
import PlanColumn from "./PlanColumn"

const Plan = (props) => {
  const { auth } = props
  return (
    <>
      {auth.isAuthenticated ? (
        <>
          <Nav />
          <div className="plan">
              {/* Here be a map */}
              <PlanColumn/>
          </div>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  }
}

export default connect(mapStateToProps)(Plan)
