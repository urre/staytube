import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header
      className="sm-flex flex-wrap items-center justify-between header"
      role="banner"
    >
      <h1>
        <NavLink to="/"> Staytu.be </NavLink>
      </h1>
      <nav>
        <ul className="list-reset">
          <li>
            <NavLink
              exact={true}
              strict
              to="/"
              className="btn btn-outline btn-medium"
              activeClassName="btn-active"
            >
              Concerts
            </NavLink>
          </li>
          <li>
            <NavLink
              exact={true}
              strict
              to="/about"
              className="btn btn-outline btn-medium"
              activeClassName="btn-active"
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
