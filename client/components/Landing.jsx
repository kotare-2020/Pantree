import React from 'react'
import { connect } from 'react-redux'
import { checkAuth } from '../actions/auth'

import LandingAbout from './LandingAbout'
import SignIn from './SignIn'
import Register from './Register'

class Landing extends React.Component {
  state = {
    componentView: 'SignIn',
  }

  changeComponentView = e => {
    if (this.state.componentView === 'SignIn') {
      this.setState({
        componentView: 'Register',
      })
    } else {
      this.setState({
        componentView: 'SignIn',
      })
    }
  }

  componentDidMount = () => {
    document.body.style.backgroundImage =
      'linear-gradient(120deg, rgba(2,101,139,1) 0%, rgba(90,206,163,1) 50%, rgba(255,255,255,1) 50.1%, rgba(255,255,255,1) 100%)'
    document.body.style.height = '100vh'
    
    const confirmSuccess = () => {}
    this.props.dispatch(checkAuth(confirmSuccess))
  }

  componentWillUnmount() {
    document.body.style.backgroundImage = null
    document.body.style.hight = null
  }

  render() {
    return (
      <div className='container'>
        <div className='float-middle'>
          <div className='row'>
            <div className='col s5'>
              <LandingAbout />
            </div>
            <div className='col s1'></div>
            <div className='col s2'></div>
            <div className='col s4'>
              {this.state.componentView === 'SignIn' && (
                <SignIn
                  history={this.props.history}
                  changeComponentView={this.changeComponentView}
                />
              )}
              {this.state.componentView === 'Register' && (
                <Register
                  history={this.props.history}
                  changeComponentView={this.changeComponentView}
                />
              )}
            </div>
          </div>
        </div>
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
