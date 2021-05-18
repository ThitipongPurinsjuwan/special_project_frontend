import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectFirstname: "",
      selectLastname: "",
      selectEmail: "",
      selectAddress: "",
      selectPhone_number: "",
      selectUsername: "",
      selectPassword: "",
      status_id: "2",
      redirect: null,
    };

    this.handleOnSabmit = this.handleOnSabmit.bind(this);
    this.onChangefirstname = this.handleChange.bind(this, "selectFirstname");
    this.onChangelastname = this.handleChange.bind(this, "selectLastname");
    this.onChangeemail = this.handleChange.bind(this, "selectEmail");
    this.onChangeaddress = this.handleChange.bind(this, "selectAddress");
    this.onChangephone_number = this.handleChange.bind(
      this,
      "selectPhone_number"
    );
    this.onChangeusername = this.handleChange.bind(this, "selectUsername");
    this.onChangepassword = this.handleChange.bind(this, "selectPassword");
  }
  handleChange(keyName, e) {
    this.setState({ [keyName]: e.target.value });
  }

  handleOnSabmit(e) {
    let data = {
      user_firstname: this.state.selectFirstname,
      user_lastname: this.state.selectLastname,
      user_address: this.state.selectAddress,
      user_phone_number: this.state.selectPhone_number,
      user_username: this.state.selectUsername,
      user_password: this.state.selectPassword,
      user_email: this.state.selectEmail,
      user_status_id: this.state.status_id,
    };
    this.makeReq(data, this);
    e.preventDefault();
  }

  makeReq = async (data, self) => {
    return await axios
      .post("http://localhost:1337/insert_user", data)
      .then(function (res) {
        console.log(res);
        self.setState({ redirect: "/login" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const {
      selectFirstname,
      selectLastname,
      selectAddress,
      selectPhone_number,
      selectUsername,
      selectPassword,
      selectEmail,
    } = this.state;

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
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
                  <form className="form" onSubmit={this.handleOnSabmit}>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          <label>
                            FirstName<span>*</span>
                          </label>
                          <input
                            type="text"
                            name="FirstName"
                            value={selectFirstname}
                            onChange={this.onChangefirstname}
                            placeholder
                            required="required"
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="form-group">
                          <label>
                            LastName<span>*</span>
                          </label>
                          <input
                            type="text"
                            name="LastName"
                            value={selectLastname}
                            onChange={this.onChangelastname}
                            placeholder
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>
                            Email<span>*</span>
                          </label>
                          <input
                            type="text"
                            name="Email"
                            value={selectEmail}
                            onChange={this.onChangeemail}
                            placeholder
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>
                            Address<span>*</span>
                          </label>
                          <input
                            type="text"
                            name="Address"
                            value={selectAddress}
                            onChange={this.onChangeaddress}
                            placeholder
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>
                            Phone Number<span>*</span>
                          </label>
                          <input
                            type="text"
                            name="Phone Number"
                            value={selectPhone_number}
                            onChange={this.onChangephone_number}
                            placeholder
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>
                            UserName<span>*</span>
                          </label>
                          <input
                            type="text"
                            name="UserName"
                            value={selectUsername}
                            onChange={this.onChangeusername}
                            placeholder
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>
                            Password<span>*</span>
                          </label>
                          <input
                            type="password"
                            name="password"
                            value={selectPassword}
                            onChange={this.onChangepassword}
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
