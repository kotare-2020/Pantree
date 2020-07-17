import React from 'react'
import { HashRouter as Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Nav from './Nav'

const Plan = (props) => {
    const { auth } = props
    return (
        <>
        {auth.isAuthenticated ?
            <Nav />
        :
            <Redirect to='/'/>
        }
        </>       
    )
}

const mapStateToProps = ({ auth }) => {
    return { 
        auth,
    }
  }

export default connect(mapStateToProps)(Plan)