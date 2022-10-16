import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import BusinessCreateForm from './CreateBusinessForm';
import logo from './gulpedpic.jpg'
import './NavBar.css'

const NavBar = () => {

  const sessionUser = useSelector((state) => state.session.user)
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
        Create Businesssssss
      </div>
      {
        !sessionUser && (
      <div classname='navbar-login-signup'>
        <div classname='navbar-login' onClick={() => history.push(`/login`)}>
          Log In
        </div>
        <div classname='navbar-signup' onClick={() => history.push(`/sign-up`)}>
          Sign Up
        </div>
      </div>
        )
      }
      {
        sessionUser && (
          <div>
            <LogoutButton />
          </div>
        )
      }
    </div>
  );
}

export default NavBar;
