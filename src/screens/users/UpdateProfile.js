import React, { Component } from "react";
import Header from "../../components/otherPage/Header";
import Breadcrumbs from "../../components/otherPage/Breadcrumbs";
import Footer from "../../components/otherPage/Footer";
import qs from "qs";
import axios from "axios";
import { Redirect } from "react-router-dom";

class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    let param = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      phone: "",
      redirect: null,
      user_id: param["user_id"],
    };

    this.handleOnSabmit = this.handleOnSabmit.bind(this);
    this.onChangeFirstName = this.handleChange.bind(this, "first_name");
    this.onChangeLastName = this.handleChange.bind(this, "last_name");
    this.onChangeEmail = this.handleChange.bind(this, "email");
    this.onChangeAddress = this.handleChange.bind(this, "address");
    this.onChangePhone = this.handleChange.bind(this, "phone");
  }

  handleChange(keyName, e) {
    this.setState({ [keyName]: e.target.value });
  }

  handleOnSabmit(e) {
    let data = {
      user_firstname: this.state.first_name,
      user_lastname: this.state.last_name,
      user_address: this.state.address,
      user_phone_number: this.state.phone,
      user_email: this.state.email,
    };
    this.makeReq(data, this);
    e.preventDefault();
  }

  makeReq = async (data, self) => {
    return await axios
      .post(
        `http://localhost:1337/update_user?user_id=${this.state.user_id}`,
        data
      )
      .then(function (res) {
        self.setState({ redirect: "/" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  componentDidMount() {
    axios
      .get(`http://localhost:1337/user?user_id=${this.state.user_id}`)
      .then((res) => {
        this.setState({
          first_name: res.data.results[0].user_firstname,
          last_name: res.data.results[0].user_lastname,
          email: res.data.results[0].user_email,
          address: res.data.results[0].user_address,
          phone: res.data.results[0].user_phone_number,
        });
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { first_name, last_name, email, address, phone } = this.state;
    console.log(address);

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <>
        <Header />
        <Breadcrumbs to={this.state.first_name} />

        <section className="shop login section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-12">
                <div className="login-form">
                  <h2>Update User</h2>
                  {/* Form */}
                  <form className="form" onSubmit={this.handleOnSabmit}>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          <label>
                            Firstname<span>*</span>
                          </label>
                          <input
                            type="text"
                            value={first_name}
                            onChange={this.onChangeFirstName}
                            placeholder={true}
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label>
                            Lastname<span>*</span>
                          </label>
                          <input
                            type="text"
                            value={last_name}
                            onChange={this.onChangeLastName}
                            placeholder={true}
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>
                            E-mail<span>*</span>
                          </label>
                          <input
                            type="text"
                            value={email}
                            onChange={this.onChangeEmail}
                            placeholder={true}
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>
                            Telephone number<span>*</span>
                          </label>
                          <input
                            type="text"
                            value={phone}
                            onChange={this.onChangePhone}
                            placeholder={true}
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>
                            Address<span>*</span>
                          </label>
                          <textarea
                            onChange={this.onChangeAddress}
                            cols="1"
                            rows="2"
                            value={address}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group login-btn">
                          <button
                            className="btn"
                            style={{ float: "right", marginRight: 0 }}
                            type="submit"
                            value="Submit"
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

export default UpdateProfile;
