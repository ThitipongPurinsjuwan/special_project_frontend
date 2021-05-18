import React, { Component } from "react";
import Header from "../components/otherPage/Header";
import Breadcrumbs from "../components/otherPage/Breadcrumbs";
import Footer from "../components/otherPage/Footer";

class InsertScreen extends Component {
  render() {
    return (
      <>
        <Header />
        <Breadcrumbs to="create" />

        <section className="shop login section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-12">
                <div className="login-form">
                  <h2>Create Employees & Users</h2>
                  {/* Form */}
                  <form className="form" method="post" action="#">
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          <label>
                            First Name<span>*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            placeholder
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label>
                            Last Name<span>*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            placeholder
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label>
                            Username<span>*</span>
                          </label>
                          <input
                            type="password"
                            name="password"
                            placeholder
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label>
                            Password<span>*</span>
                          </label>
                          <input
                            type="password"
                            name="password"
                            placeholder
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-6">
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
                      <div className="col-6">
                        <div className="form-group">
                          <label>
                            Telephone Number<span>*</span>
                          </label>
                          <input
                            type="text"
                            name="password"
                            placeholder
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label>
                            Status Of User<span>*</span>
                          </label>
                          <select>
                            <option selected="selected" hidden>
                              choose...
                            </option>
                            <option>Admin</option>
                            <option>Employee</option>
                            <option>User</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>
                            Address<span>*</span>
                          </label>
                          <textarea
                            id="address"
                            name="address"
                            rows="3"
                            cols="33"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group login-btn">
                          <button
                            className="btn"
                            style={{ float: "right", marginRight: 0 }}
                            type="submit"
                          >
                            Save
                          </button>
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
        <Footer />
      </>
    );
  }
}

export default InsertScreen;
