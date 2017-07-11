import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='sm-flex flex-wrap mxn2 header' role='banner'>
      <div className='sm-col-12 p2 center'>
        <h1><NavLink to='/'> Staytu.be </NavLink></h1>
        <ul className='list-reset'>
          <li>
            <NavLink exact={true} strict to='/' className='btn btn-outline btn-medium' activeClassName='btn-active'>Concerts
            </NavLink>
          </li>
          <li>
            <NavLink exact={true} strict to='/about' className='btn btn-outline btn-medium' activeClassName='btn-active'>About</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

