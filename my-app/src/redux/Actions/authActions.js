// src/redux/actions/authActions.js

import axios from '../../axios'; // Custom axios instance
import Cookies from 'js-cookie';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REFRESH_TOKEN,
  TOKEN_REFRESH_FAIL,
} from '../constants/actionTypes';


export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    console.log('Email:', email);  // Logs the email value
    console.log('Password:', password);  

   
    const { data } = await axios.post('auth/login', { username: email, password });

    Cookies.set('token', data.token, { expires: 7 });
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('token', data.token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: data.user, token: data.token },
    });
  } catch (error) {
    console.error('Error details:', error.response || error); 
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const logoutUser = () => (dispatch) => {
  Cookies.remove('token');
  localStorage.removeItem('user');
  localStorage.removeItem('token');

  dispatch({ type: LOGOUT });
};


export const refreshToken = () => async (dispatch) => {
  try {
    const token = Cookies.get('token');
    if (!token) return dispatch({ type: TOKEN_REFRESH_FAIL });

    const { data } = await axios.post('refresh-token', { token });

    Cookies.set('token', data.token, { expires: 7 });
    dispatch({ type: REFRESH_TOKEN, payload: data.token });
  } catch (error) {
    dispatch({
      type: TOKEN_REFRESH_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};
