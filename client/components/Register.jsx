import React from 'react'

import {connect} from 'react-redux'
import {loginError, registerUserRequest} from '../actions/auth'

class Register extends React.Component {
  state = {
    username: '',
    password: '',
    confirm_password: '',
  }

  componentDidMount() {
    this.props.dispatch(loginError(''))
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
    let { username, password, confirm_password } = this.state
    if (confirm_password != password) return this.props.dispatch(loginError("Passwords don't match"))
    const confirmSuccess = () => { this.props.history.push('/plan') }
    this.props.dispatch(registerUserRequest({ username, password }, confirmSuccess))
  }

  render() {
    const {auth} = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Register</h1>
        <hr />
        {auth.errorMessage && <span>{auth.errorMessage}</span>}
        <label>Username
          <input required placeholder="Email" type="text" name="username" autoComplete="username" onChange={this.handleChange} value={this.state.username}/>
        </label>
        <br />
        <div>
          <label>Password
            <input required placeholder="Password" type="password" name="password"  autoComplete="new-password" onChange={this.handleChange} value={this.state.password}/>
          </label>
          
          <label>Confirm password
            <input required placeholder="Confirm password" type="password" name="confirm_password" autoComplete="new-password" onChange={this.handleChange} value={this.state.confirm_password}/>
          </label>
        </div>
        <input value="Register" type="submit" />
        <br />
        <br />
        <button value="signIn" onClick={this.props.changeComponentView}>Or, sign in</button>
      </form>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Register)