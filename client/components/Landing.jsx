import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Redirect } from 'react-router-dom'
import { checkAuth } from '../actions/auth'

import LandingAbout from './LandingAbout'
import SignIn from './SignIn'
import Register from './Register'

class Landing extends React.Component {
    componentDidMount = () => {
        const confirmSuccess = () => { }
        this.props.dispatch(checkAuth(confirmSuccess))
    }

    render() {
        return (
            <div>
                <LandingAbout/>
                <SignIn history={this.props.history}/>
                <Register history={this.props.history}/>
            </div>
        )
    }
}

// const mapStateToProps = ({ auth }) => {
//     return { 
//         auth,
//     }
// }

export default connect()(Landing)