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
      console.log("this is data", data)
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
    <form
    onSubmit={onLogin}
    className='login-form-container'>
      <div>
        <label htmlFor='email' className='login-form-field-labels'>Email</label>
        <input
          name='email'
          className='login-form-field-labels'
          type='text'
          placeholder='Email'
          value={email}
          required
          onChange={updateEmail}
          />
      </div>
      <div>
        <label htmlFor='password' className='login-form-field-labels'>Password</label>
        <input
          name='password'
          type='password'
          required
          className='login-form-field-labels'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
          />
        <div className='login_errors_container'>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <button type='submit' className='login-button'>Login</button>
        <button onClick={() =>{setEmail("demo@aa.io"); setPassword("password")}}
          type="submit" className='demo-user-button-login-page'>Demo User</button>
      </div>
    </form>
  );
};

export default LoginForm;
