import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import "./SignUpForm.css"
// import "../..//index.css"

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [first_name, setFirst_Name] = useState('');
  const [last_name, setLast_Name] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password, first_name, last_name));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateFirstname = (e) => {
    setFirst_Name(e.target.value);
  };

  const updateLastname = (e) => {
    setLast_Name(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='form-outer-container'>
      <form
        onSubmit={onSignUp}
        className='form-container'
      >
        <h1 className='sign_up_header'>Sign Up For Gulp!</h1>
        <div className='errors_container'>
          {errors.map((error, ind) => (
            <div className="errorMessageContainer" key={ind}>
              <i class="fa-solid fa-exclamation exclamation-point"></i>
              <div className="errorMessage">{error}</div>
            </div>
          ))}
        </div>
        <div>
          <label className='form-field-labels'>First Name:</label>
          <input
            type='text'
            className="form-field"
            name='first_name'
            onChange={updateFirstname}
            value={first_name}
          ></input>
        </div>
        <div>
          <label className='form-field-labels'>Last Name:</label>
          <input
            type='text'
            className="form-field"
            name='last_name'
            onChange={updateLastname}
            value={last_name}
          ></input>
        </div>
        <div>
          <label className='form-field-labels'>User Name:</label>
          <input
            type='text'
            className="form-field"
            name='username'
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div>
          <label className='form-field-labels'>Email:</label>
          <input
            type='text'
            className="form-field"
            name='email'
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div>
          <label className='form-field-labels'>Password:</label>
          <input
            type='password'
            className="form-field"
            name='password'
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div>
          <label className='form-field-labels'>Repeat Password:</label>
          <input
            type='password'
            className="form-field"
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <button type='submit' className='form-button'>Sign Up</button>
      </form>

    </div>
  );
};

export default SignUpForm;
