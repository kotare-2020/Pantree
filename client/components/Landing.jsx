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
        document.body.style.backgroundImage = 'linear-gradient(120deg, #b9f6caa1 50%, white 50%)';
        document.body.style.height = '100vh';

        const confirmSuccess = () => { }
        this.props.dispatch(checkAuth(confirmSuccess))
    }

    render() {
        const { auth } = this.props
        return (
            <div className="container">
                <div className="float-middle">
                    <div className="row">
                    <div className="col s5">
                        <LandingAbout/>
                    </div>
                    <div className="col s1">
                    </div>
                    <div className="col s2">
                    </div>
                    <div className="col s4">
                        {this.state.componentView === "signIn" && <SignIn history={this.props.history} changeComponentView={this.changeComponentView} />}
                        {this.state.componentView === "register" && <Register history={this.props.history} changeComponentView={this.changeComponentView} />}
                    </div>
                    </div>
                </div>
                {auth.isAuthenticated && <Redirect to="/plan"/>}
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return { 
        auth,
    }
}

export default connect(mapStateToProps)(Landing)