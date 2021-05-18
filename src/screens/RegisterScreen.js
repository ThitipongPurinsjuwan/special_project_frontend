import React, { Component } from "react";

class RegisterScreen extends Component {
  render() {
    return (
      <>
        <section className="shop login section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-12">
                <div className="login-form">
                  <h2>Register</h2>
                  <p>Please register in order to checkout more quickly</p>
                  {/* Form */}
                  <form className="form" method="post" action="#">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label>
                            Your Name<span>*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            placeholder
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>
                            Your Email<span>*</span>
                          </label>
                          <input
                            type="text"
                            name="email"
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
                            placeholder
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>
                            Confirm Password<span>*</span>
                          </label>
                          <input
                            type="password"
                            name="password"
                            placeholder
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group login-btn">
                          <button className="btn" type="submit">
                            Register
                          </button>
                          <a href="login.html" className="btn">
                            Login
                          </a>
                        </div>
                        <div className="checkbox">
                          <label className="checkbox-inline" htmlFor={2}>
                            <input name="news" id={2} type="checkbox" />
                            Sign Up for Newsletter
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                  {/*/ End Form */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default RegisterScreen;
