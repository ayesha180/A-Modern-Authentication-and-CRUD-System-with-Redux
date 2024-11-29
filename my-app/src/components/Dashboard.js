

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshToken, logoutUser } from '../redux/Actions/authActions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user, token, loading } = useSelector(state => state.auth);

  useEffect(() => {
    if (token) {
      const interval = setInterval(() => {
        dispatch(refreshToken()); 
      }, 5 * 60 * 1000); 

      return () => clearInterval(interval);
    }
  }, [token, dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
