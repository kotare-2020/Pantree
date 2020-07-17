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
            <div className="container">
                <div className="row">
                    <div className="col s6">
                        <LandingAbout/>
                    </div>
                    <div className="col s6 offset-by-6">
                        {this.state.componentView === "signIn" && <SignIn history={this.props.history} changeComponentView={this.changeComponentView} />}
                        {this.state.componentView === "register" && <Register history={this.props.history} changeComponentView={this.changeComponentView} />}
                    </div>
                </div>
            {auth.isAuthenticated && <Redirect to="/plan"/>}
            </div>
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