import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import * as sessionActions from '../../store/session';
import './LoginForm.css'


const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  // const demoLogin = (e) => {
  //   e.preventDefault()
  //   return dispatch(sessionActions.login({
  //     email: "demo@aa.io",
  //     password: "password"
  //   }))
  // }


  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='form-outer-container'>
      <form onSubmit={onLogin}>
      <div className='form-header'>Log In</div>
      <div className='form-container'>
        <div className='errors_container'>
          {errors.map((error, ind) => (
            <div className="errorMessageContainer" key={ind}>
              <i className="fa-solid fa-exclamation exclamation-point"></i>
              <div className="errorMessage">{error}</div>
            </div>
          ))}
        </div>
        <div>
          <label htmlFor='email' className='form-field-labels'>Email:</label>
          <input
            name='email'
            className='form-field'
            type='text'
            placeholder='Email'
            value={email}
            required
            onChange={updateEmail}
          />
        </div>

        <div>
          <label htmlFor='password' className='form-field-labels'>Password:</label>
          <input
            name='password'
            type='password'
            required
            className='form-field'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
        </div>

        {/* <div className='login-button-container'> */}
        <button type='submit' className='login-button'>Login</button>
        <button onClick={() => { setEmail("demolition@aa.io"); setPassword("password") }}
          type="submit" className='login-button'>Demo User</button>
        {/* </div> */}
        </div>
      </form>

    </div>
  );
};

export default LoginForm;
