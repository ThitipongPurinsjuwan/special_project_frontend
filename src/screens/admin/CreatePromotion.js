import React, { Component } from "react";
import Header from "../../components/otherPage/Header";
import Breadcrumbs from "../../components/otherPage/Breadcrumbs";
import Footer from "../../components/otherPage/Footer";
import axios from "axios";
import { Redirect } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreatePromotion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      sales_percentage: "",
      promotion_date_start: new Date(),
      promotion_date_end: new Date(),
      redirect: null,
    };

    this.handleOnSabmit = this.handleOnSabmit.bind(this);
    this.onChangeName = this.handleChange.bind(this, "name");
    this.onChangeSales_percentage = this.handleChange.bind(
      this,
      "sales_percentage"
    );
    this.onChangePromotion_date_start = this.handleChange.bind(
      this,
      "promotion_date_start"
    );
    this.onChangePromotion_date_end = this.handleChange.bind(
      this,
      "promotion_date_end"
    );
  }
  handleChange(keyName, e) {
    this.setState({ [keyName]: e.target.value });
  }
  handleOnSabmit(e) {
    let data = {
      promotion_name: this.state.name,
      sales_percentage: this.state.sales_percentage,
      promotion_date_start: this.state.promotion_date_start,
      promotion_date_end: this.state.promotion_date_end,
    };
    this.makeReq(data, this);
    e.preventDefault();
  }
  makeReq = async (data, self) => {
    return await axios
      .post("http://localhost:1337/insert_promotion", data)
      .then(function (res) {
        console.log(res);
        self.setState({ redirect: "/promotion" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  checkDateStart = (date) => {
    if (date <= this.state.promotion_date_end) {
      this.setState({ promotion_date_start: date });
    }
  };
  checkDateEnd = (date) => {
    if (date >= this.state.promotion_date_start) {
      this.setState({ promotion_date_end: date });
    }
  };
  render() {
    const { name, sales_percentage, promotion_date_start, promotion_date_end } =
      this.state;
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <>
        <Header />
        <Breadcrumbs to="create promotion" />

        <section className="shop login section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-12">
                <div className="login-form">
                  <h2>Create Promotion</h2>
                  <form className="form" onSubmit={this.handleOnSabmit}>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label>
                            Name<span>*</span>
                          </label>
                          <input
                            type="text"
                            value={name}
                            onChange={this.onChangeName}
                            placeholder
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label>
                            Sales<span>*</span>
                          </label>
                          <input
                            type="number"
                            value={sales_percentage}
                            onChange={this.onChangeSales_percentage}
                            placeholder
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-6"></div>
                      <div className="col-6">
                        <div className="form-group">
                          <label>
                            Date Start<span>*</span>
                          </label>
                          <DatePicker
                            selected={promotion_date_start}
                            onChange={(date) => {
                              this.checkDateStart(date);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label>
                            Date End<span>*</span>
                          </label>
                          <DatePicker
                            selected={promotion_date_end}
                            onChange={(date) => {
                              this.checkDateEnd(date);
                            }}
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

export default CreatePromotion;
