import axios from 'axios';

import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './types';

//Register User
export const registerUser = (userData) => (dispatch, state) => {
  const { userName, email, password } = userData;
  axios
    .post('/api/users/register', { userName, email, password })
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      //dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: REGISTER_FAIL });
    });
};

//LoginIn User
export const loginUser = (userData) => (dispatch, getState) => {
  const { email, password } = userData;
  axios
    .post('/api/users/login', { email, password })
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      //dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: LOGIN_FAILED });
    });
};
