import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import { logoutUser } from '../actions/auth'

const Nav = props => {
  const { logout } = props
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper green darken-2">
          <a href="/" className="brand-logo left">
            <img className="brand-logo left brand-navbar"src="/images/brand/pantree-logo.svg" />
          </a>
          
          <ul id="nav-mobile" className="right">
            <li>
              <NavLink to="/plan">My plan</NavLink>
            </li>
            <li>
              <NavLink to="/shopping-list">Shopping list</NavLink>
            </li>
            <li>
              <NavLink to="/suppliers">Local suppliers</NavLink>
            </li>
            <li>
              <Link to="/" onClick={() => {logout()}}>
                Log out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
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
