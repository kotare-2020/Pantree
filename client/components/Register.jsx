import React from 'react'

import { connect } from 'react-redux'
import { loginError, registerUserRequest } from '../actions/auth'
import { createPlan } from '../actions/plan'

class Register extends React.Component {
  state = {
    username: '',
    password: '',
    confirm_password: '',
  }

  componentDidMount() {
    this.props.dispatch(loginError(''))
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    let { username, password, confirm_password } = this.state
    if (confirm_password != password)
      return this.props.dispatch(loginError("Passwords don't match"))

    const confirmSuccess = userInfo => {
      const userId = userInfo.user.id
      this.props.dispatch(createPlan(userId))
      this.props.history.push('/plan')
    }

    this.props.dispatch(
      registerUserRequest({ username, password }, confirmSuccess)
    )
  }

  render() {
    const { auth } = this.props
    return (
      <>
        <h4>Create a new account</h4>
        {auth.errorMessage && <span>{auth.errorMessage}</span>}
        <label>
          Username
          <input
            required
            placeholder="Email"
            type="text"
            name="username"
            autoComplete="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
        </label>
        <label>
          Password
          <input
            required
            placeholder="Password"
            type="password"
            name="password"
            autoComplete="new-password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </label>

        <label>
          Confirm password
          <input
            required
            placeholder="Confirm password"
            type="password"
            name="confirm_password"
            autoComplete="new-password"
            onChange={this.handleChange}
            value={this.state.confirm_password}
          />
        </label>
        <button
          className="landing-button waves-effect waves-light btn"
          onClick={this.handleSubmit}
        >
          Sign up
        </button>
        <button
          className="landing-button waves-effect waves-light btn"
          onClick={this.props.changeComponentView}
        >
          Back to sign in
        </button>
      </>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  }
}

export default connect(mapStateToProps)(Register)
