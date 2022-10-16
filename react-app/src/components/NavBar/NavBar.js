import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import BusinessCreateForm from './CreateBusinessForm';
import ProfileButton from './ProfileButton';
import logo from './gulpedpic.jpg'
import './NavBar.css'

const NavBar = () => {

  const history = useHistory()

  return (
    // <nav>
    //   <ul>
    //     <li>
    //       <NavLink to='/' exact={true} activeClassName='active'>
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to='/login' exact={true} activeClassName='active'>
    //         Login
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to='/sign-up' exact={true} activeClassName='active'>
    //         Sign Up
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to='/users' exact={true} activeClassName='active'>
    //         Users
    //       </NavLink>
    //     </li>
    //     <li>
    //       <LogoutButton />
    //     </li>
    //   </ul>
    // </nav>

    <div className='navbar-container'>
      <NavLink exact to="/">
        <img className='navbar-logo' src={logo}></img>
      </NavLink>
      <div className='navbar-search-bar'>Search Bar</div>
      <div className='navbar-create-business' onClick={() => history.push(`/testing`)}>
        Create Business
      </div>
      <div className='navbar-profile-button' onClick={() => history.push('/')}>
        <ProfileButton />
      </div>
    </div>
  );
}

export default NavBar;
