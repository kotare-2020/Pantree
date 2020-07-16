import React from 'react'

const Nav = () => {
  return (
    <nav>
      <div class="nav-wrapper green darken-2">
        <a href="/" class="brand-logo">
          Pantree
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="/plan">My plan</a>
          </li>
          <li>
            <a href="/shopping-list">Shopping list</a>
          </li>
          <li>
            <a href="#">Log out</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
