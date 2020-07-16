import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/auth'

const Nav = props => {
  const { logout } = props
  return (
    <nav>
      <div className="nav-wrapper green darken-2">
        <a href="/" className="brand-logo left">
          Pantree
        </a>
        <ul id="nav-mobile" className="right">
          <li>
            <a href="/plan">My plan</a>
          </li>
          <li>
            <a href="/shopping-list">Shopping list</a>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {
                logout()
              }}
            >
              Log out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutUser()),
  }
}
const mapStateToProps = ({ auth }) => {
  return {
    auth,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)
