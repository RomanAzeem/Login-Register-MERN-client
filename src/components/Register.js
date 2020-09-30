import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Register = (props) => {
  return (
    <form>
      <h3>Register</h3>

      <div className='form-group'>
        <label>Full Name</label>
        <input type='text' className='form-control' placeholder='Full Name' />
      </div>

      <div className='form-group'>
        <label>Email address</label>
        <input
          type='email'
          className='form-control'
          placeholder='Enter email'
        />
      </div>

      <div className='form-group'>
        <label>Password</label>
        <input
          type='password'
          className='form-control'
          placeholder='Enter password'
        />
      </div>
      <div className='form-group'>
        <label>Confirm Password</label>
        <input
          type='password'
          className='form-control'
          placeholder='Confirm password'
        />
      </div>
      <button type='submit' className='btn btn-primary btn-block'>
        Sign Up
      </button>
      <p className='forgot-password text-right'>
        Already registered <Link to={'/login'}>Login?</Link>
      </p>
    </form>
  );
};

Register.propTypes = {};

export default Register;
