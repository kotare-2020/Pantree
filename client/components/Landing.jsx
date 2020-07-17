import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Redirect } from 'react-router-dom'
import { checkAuth } from '../actions/auth'

import LandingAbout from './LandingAbout'
import SignIn from './SignIn'
import Register from './Register'

class Landing extends React.Component {
    state = {
        componentView: "signIn"
    }

    changeComponentView = (e) => {
        this.setState({
            componentView: e.target.value
        })
    }

    componentDidMount = () => {
        const confirmSuccess = () => { }
        this.props.dispatch(checkAuth(confirmSuccess))
    }

    render() {
        const { auth } = this.props
        return (
            <>
            <div>
                <LandingAbout/>
                {this.state.componentView === "signIn" && <SignIn history={this.props.history} changeComponentView={this.changeComponentView} />}
                {this.state.componentView === "register" && <Register history={this.props.history} changeComponentView={this.changeComponentView} />}
            </div>
            {auth.isAuthenticated && <Redirect to="/plan"/>}
            </>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return { 
        auth,
    }
}

export default connect(mapStateToProps)(Landing)