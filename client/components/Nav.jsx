import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import { logoutUser } from '../actions/auth'
import { clearSelectedDay } from '../actions/selectedDay'

const Nav = props => {
  const { logout } = props
  const { clearDay } = props

  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper teal darken-1">
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
              <NavLink to="/recipes" onClick={() => {clearDay()}}>Recipes</NavLink>
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
    clearDay: () => dispatch(clearSelectedDay())
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)
