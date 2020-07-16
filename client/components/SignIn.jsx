import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Redirect } from 'react-router-dom' 
import { loginUser, loginError } from '../actions/auth'

class SignIn extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let { username, password } = this.state
    const confirmSuccess = () => this.props.history.push('/plan')
    this.props.dispatch(loginUser({username, password}, confirmSuccess))
  }
  render() {
    const {auth} = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <br/>
        {auth.errorMessage && <span>{auth.errorMessage}</span>}

        <label>Username
          <input required placeholder="Email" type="text" name="username" autoComplete="username" value={this.state.username} onChange={this.handleChange}/>
        </label>

        <label>Password
          <input required placeholder="Password" type="password" name="password" autoComplete="current-password" value={this.state.password} onChange={this.handleChange}/>
        </label>

        <input value='Login' type="submit" />
      </form>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(SignIn)