import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Redirect } from 'react-router-dom'
import { loginUser, loginError } from '../actions/auth'
import { fetchPlan } from '../actions/plan'

class SignIn extends React.Component {
  state = {
    username:'',
    password:'',
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  

    const confirmSuccess = () => this.props.history.push('/plan')
    
    let { username, password } = this.state
    this.props.dispatch(loginUser({ username, password }, confirmSuccess))
    
  }

  render() {
    const { auth } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Sign in</h4>
        {auth.errorMessage && <span>{auth.errorMessage}</span>}

        <label>Username
          <input required placeholder="Email" type="text" name="username" autoComplete="username" value={this.state.username} onChange={this.handleChange} />
        </label>

        <label>Password
          <input required placeholder="Password" type="password" name="password" autoComplete="current-password" value={this.state.password} onChange={this.handleChange} />
        </label>

        <button className="landing-button waves-effect waves-light btn" type="submit">Sign in</button>
        <button className="landing-button waves-effect waves-light btn" onClick={this.props.changeComponentView}>Create new account</button>
      </form>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(SignIn)