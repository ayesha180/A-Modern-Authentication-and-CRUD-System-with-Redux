

import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

const App = () => {
  const { token } = useSelector(state => state.auth);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={token ? <Dashboard /> : <LoginForm />}
        />
      </Routes>
    </Router>
  );
};

export default App;
