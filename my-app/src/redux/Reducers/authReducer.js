

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    REFRESH_TOKEN,
    TOKEN_REFRESH_FAIL,
  } from '../constants/actionTypes';
  
  const initialState = {
    loading: false,
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    error: null,
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return { ...state, loading: true };
      case LOGIN_SUCCESS:
        return { ...state, loading: false, user: action.payload.user, token: action.payload.token };
      case LOGIN_FAIL:
        return { ...state, loading: false, error: action.payload };
      case LOGOUT:
        return { ...state, user: null, token: null };
      case REFRESH_TOKEN:
        return { ...state, token: action.payload };
      case TOKEN_REFRESH_FAIL:
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  