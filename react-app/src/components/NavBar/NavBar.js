import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import BusinessCreateForm from './CreateBusinessForm';
import logo from './gulpedpic.jpg'
import './NavBar.css'
import { searchBusinessThunk } from '../../store/querybusiness';

const NavBar = () => {

  const sessionUser = useSelector((state) => state.session.user)
  const dispatch = useDispatch();
  const history = useHistory()

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    dispatch(searchBusinessThunk(search));

    const url = `/search?name=${search}`;
    setSearch("");
    history.push(url);
  };

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
      <div className='navbar-logo-container' exact to="/">
        <img className='navbar-logo' src={logo} onClick={() => history.push(`/`)}></img>
      </div>


      {/* <div className='navbar-search-bar'>Search Bar</div> */}

      <div >
          <input
            type="text"
            placeholder="Search Business Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch(e);
              }
            }}
          ></input>
          <button onClick={handleSearch}>
          </button>
        </div>


      {
        !sessionUser && (
          <div className='navbar-business-login-signup-container'>
            <div className='navbar-create-business' onClick={() => history.push(`/testing`)}>Create Business</div>
            <div id='navbar-login-button' onClick={() => history.push(`/login`)}>Log In</div>
            <div id='navbar-signup-button' onClick={() => history.push(`/sign-up`)}>Sign Up</div>
          </div>
        )
      }
      {
        sessionUser && (
          <div className='navbar-loggedin-container'>
            <div>
              <div className='navbar-create-business' onClick={() => history.push(`/testing`)}>Create Business</div>
            </div>
            <div className='nav-bar-logout-button'>
              <LogoutButton />
            </div>
          </div>
        )
      }

      {/* {
        !sessionUser && (
      <div classname='navbar-login-signup'>
        <div classname='navbar-login-button-a' onClick={() => history.push(`/login`)}>Log In</div>
        <div classname='navbar-signup-button-b' onClick={() => history.push(`/sign-up`)}>Sign Up</div>
      </div>
        )
      }
      {
        sessionUser && (
          <div>
            <LogoutButton />
          </div>
        )
      } */}

    </div>
  );
}

export default NavBar;
