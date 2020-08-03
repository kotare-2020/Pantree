import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import { logoutUser } from '../actions/auth'
import { clearSelectedDay } from '../actions/selectedDay'

const Nav = props => {
  const { logout } = props
  const { clearDay } = props

  const handleClick = () => {
    M.toast({
      html:
        '<span><i class="tiny material-icons">thumb_up</i> Plan saved!</span>',
    })
  }

  return (
    <header>
      <div className='navbar-fixed'>
        <nav>
          <div className='nav-wrapper teal darken-1'>
            <a href='/' className='hide-on-med-and-down brand-logo left'>
              <img
                className='brand-logo left brand-navbar'
                src='/images/brand/pantree-logo.svg'
              />
            </a>

            <ul id='nav-mobile' className='right'>
              <li>
                <NavLink to='/plan'>My plan</NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick} to='/shopping-list'>
                  Shopping list
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/recipes'
                  onClick={() => {
                    clearDay()
                  }}>
                  Recipes
                </NavLink>
              </li>
              <li>
                <NavLink to='/suppliers'>Local suppliers</NavLink>
              </li>
              <li>
                <Link
                  to='/'
                  onClick={() => {
                    logout()
                  }}>
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutUser()),
    clearDay: () => dispatch(clearSelectedDay()),
  }
}

const mapStateToProps = globalState => {
  return {
    auth: globalState.auth,
    plans: globalState.plans,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)
