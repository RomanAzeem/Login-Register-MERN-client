import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../redux/actions/userAction';

const Login = ({ user, loginUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    loginUser(password);

    {
      user.success && alert(user.name);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login In</h3>
      <div className='form-group'>
        <label>Email address</label>
        <input
          type='email'
          className='form-control'
          placeholder='Enter email'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className='form-group'>
        <label>Password</label>
        <input
          type='password'
          className='form-control'
          placeholder='Enter password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <div className='form-group'>
        <div className='custom-control custom-checkbox'>
          <input
            type='checkbox'
            className='custom-control-input'
            id='customCheck1'
          />
          <label className='custom-control-label' htmlFor='customCheck1'>
            Remember me
          </label>
        </div>
      </div>

      <input
        type='submit'
        className='btn btn-primary btn-block'
        value='Submit'
      />
    </form>
  );
};

Login.propTypes = {
  user: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, { loginUser })(Login);
