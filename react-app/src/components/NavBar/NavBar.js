import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import BusinessCreateForm from './CreateBusinessForm';
import logo from './gulpedpic.jpg'
import './NavBar.css'
import { searchBusinessThunk } from '../../store/querybusiness';
import MyBusinesses from './MyBusinesses';

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
    <div className='navbar-container'>

      <div className='navbar-logo-container' exact to="/">
        <img className='navbar-logo' src={logo} onClick={() => history.push(`/`)}></img>
      </div>

      <div className='navbar-search-container'>
        <input
          className='navbar-search-box'
          type="text"
          placeholder="Search Business Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => {if (e.key === "Enter") {handleSearch(e)}}}>
        </input>

        <button onClick={handleSearch} className='navbar-search-button'>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>


      {
        !sessionUser && (
          <div className='navbar-business-login-signup-container'>
            <div className='navbar-create-business' onClick={() => history.push(`/create-business-form`)}>Create Business</div>
            <div id='navbar-login-button' onClick={() => history.push(`/login`)}>Log In</div>
            <div id='navbar-signup-button' onClick={() => history.push(`/sign-up`)}>Sign Up</div>
          </div>
        )
      }
      {
        sessionUser && (
          <div className='navbar-loggedin-container'>
            <div className='navbar-create-business' onClick={() => history.push(`/create-business-form`)}>Create Business</div>
            <div className='navbar-mybusinesses' onClick={ () => history.push('/my-businesses')}> My Businesses </div>
            <div className='navbar-logged-out-button'>
              <LogoutButton/>
            </div>
          </div>
        )
      }

    </div>
  );
}

export default NavBar;
