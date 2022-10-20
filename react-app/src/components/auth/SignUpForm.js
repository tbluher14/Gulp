import React, { useEffect, useState } from 'react';
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
  const [confirmPassword, setConfirmPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);



  useEffect(() => {
    let errors = [];

    if (first_name.length < 1 || first_name.length > 50) {
      errors.push("First Name must be between 1 and 50 characters")
    }
    if (last_name.length < 1 || last_name.length > 50) {
      errors.push("Last Name must be between 1 and 50 characters")
    }
    if (!email.includes("@")) {
      errors.push("Email must be valid email address")
    }
    if (username < 1 || username > 50) {
      errors.push("User Name must be between 1 and 50 characters")
    }
    if (password !== confirmPassword) {
      errors.push('Passwords must match');
    }
    if (password.length < 1) {
      errors.push('Password must be at least 1 characters');
    }

    setErrors(errors);
  }, [password, confirmPassword]);



  const onSignUp = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    // if (errors.length > 0) return

    if (password === confirmPassword) {
      const data = await dispatch(signUp(username, email, password, first_name, last_name));
      if (data) {
        setErrors(Object.values(data));
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

  const updateConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='form-outer-container'>
      <form onSubmit={onSignUp}>
        <div className='form-header'>Sign Up For Gulp!</div>
        <div className='form-container'>
          <div className='errors_container'>
            {submitted && errors.map((error, ind) => (
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
              required
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
              required
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
              required
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
              required
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
              required
            ></input>
          </div>
          <div>
            <label className='form-field-labels'>Confirm Password:</label>
            <input
              type='password'
              className="form-field"
              name='confirm_password'
              onChange={updateConfirmPassword}
              value={confirmPassword}
              required
            ></input>
          </div>
          <button type='submit' className='form-button'>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
