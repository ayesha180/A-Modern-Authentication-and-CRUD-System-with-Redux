import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { loginUser } from '../redux/Actions/authActions';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));

    // If remember me is checked, set cookie for token
    if (rememberMe) {
      Cookies.set('token', 'your-token-here', { expires: 7 }); // Set cookie for 7 days
    } else {
      Cookies.remove('token'); // Remove cookie if not remembered
    }
  };

  return (
    <section className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f4f7fc' }}>
      <div className="card shadow-lg" style={{ maxWidth: '2000px', width: '100%' }}>
        <div className="row g-0">
          {/* Image section */}
          <div className="col-lg-4 d-none d-lg-flex">
            <img
              src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
              alt="Trendy Pants and Shoes"
              className="w-100 rounded-t-5"
              style={{ objectFit: 'cover', height: '100%' }}
            />
          </div>

          {/* Form section */}
          <div className="col-lg-8">
            <div className="card-body py-5 px-md-5">
              <form onSubmit={handleSubmit}>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                  />
                  <label className="form-label" htmlFor="email"></label>
                </div>

                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                  <label className="form-label" htmlFor="password"></label>
                </div>

                {/* Remember me checkbox */}
                <div className="form-check d-flex justify-content-start mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>

                {/* Forgot password link */}
                <div className="d-flex justify-content-end mb-4">
                  <a href="#!" style={{ color: '#007bff' }}>Forgot password?</a>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-lg"
                  style={{
                    backgroundColor: '#007bff',
                    borderColor: '#007bff',
                    fontSize: '16px',
                    padding: '12px',
                    borderRadius: '5px',
                    width: '100%',
                  }}
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
