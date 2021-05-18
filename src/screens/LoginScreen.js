import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function LoginScreen({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  async function loginUser(credentials) {
    return fetch("http://localhost:1337/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      user_username: username,
      user_password: password,
    });
    setToken(token.results[0]);
  };

  return (
    <>
      <section className="shop login section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-12">
              <div className="login-form">
                <h2>Login</h2>
                <p>Please register in order to checkout more quickly</p>
                <form className="form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Your Username<span>*</span>
                        </label>
                        <input
                          type="text"
                          name="username"
                          onChange={(e) => setUserName(e.target.value)}
                          placeholder
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Your Password<span>*</span>
                        </label>
                        <input
                          type="password"
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group login-btn">
                        <button className="btn" type="submit">
                          Login
                        </button>
                        <Link to="/register" className="btn">
                          Register
                        </Link>
                      </div>
                      <div className="checkbox">
                        <label className="checkbox-inline" htmlFor={2}>
                          <input name="news" id={2} type="checkbox" />
                          Remember me
                        </label>
                      </div>
                      <a href="#" className="lost-pass">
                        Lost your password?
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

LoginScreen.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default LoginScreen;
