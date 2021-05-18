import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/otherPage/Header";
import Breadcrumbs from "../../components/otherPage/Breadcrumbs";
import ServiceArea from "../../components/otherPage/cart/ServiceArea";
import Newslater from "../../components/otherPage/cart/Newslater";
import Footer from "../../components/otherPage/Footer";
import { Link, Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class OrderList extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      in_order_date: new Date(),
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:1337/order_list")
      .then((results) => {
        this.setState({ data: results.data.results });
      })
      .catch((err) => console.log(err));
  }

  checkDateStart = (date) => {
      this.setState({ in_order_date: date });
  };
  render() {
    const { data } = this.state;
    const { in_order_date } = this.state;
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <>
        <Header />
        <Breadcrumbs to="Order lists" />
        <div className="shopping-cart section">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>
                    Date <span>*</span>
                  </label>
                  <DatePicker
                    selected={in_order_date}
                    onChange={(date) => {
                      this.checkDateStart(date);
                    }}
                  />
                </div>
              </div>

              <div className="col-12">
                <table className="table shopping-summery">
                  <thead>
                    <tr className="main-hading">
                      <th></th>
                      <th>PRODUCT NAME</th>
                      <th>USER NAME</th>
                      <th className="text-center" style={{ width: "80px" }}>
                        TOTAL
                      </th>
                      <th className="text-center">QUANTITY</th>
                      <th className="text-center">ORDER DATE</th>
                      <th className="text-center">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data
                    .filter(
                    (data) => new Date(data.in_order_date).toDateString() == new Date(in_order_date).toDateString() || new Date(in_order_date).toDateString() == new Date().toDateString()
                    )
                    .sort(((a, b) => a.in_order_date < b.in_order_date ? 1 : -1 ))
                    .map((data, index) => (
                      <tr key={index}>
                        <td className="product-des" data-title="Description">
                          <p className="product-name">{index + 1}</p>
                        </td>
                        <td className="product-des" data-title="Description">
                          <p className="product-name">
                            <Link to={"/detail/" + data.product_id}>
                              {data.product_name}
                            </Link>
                          </p>
                        </td>
                        <td className="product-des" data-title="Description">
                          <p className="product-name">{data.user_firstname}</p>
                        </td>
                        <td className="price" data-title="Price">
                          <span>${data.in_order_total} </span>
                        </td>
                        <td className="total-amount" data-title="Total">
                          <span>{data.in_order_quantity}</span>
                        </td>
                        <td className="total-amount" data-title="Total">
                          <span>
                            {new Date(data.in_order_date).toDateString()}
                          </span>
                        </td>
                        <td className="action" data-title="Remove">
                          <span
                            className={
                              data.order_status_name === "success"
                                ? "status-success"
                                : data.order_status_name === "in order"
                                ? "status-warning"
                                : "status-danger"
                            }
                          >
                            {data.order_status_name}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <ServiceArea />
        <Newslater />
        <Footer />
      </>
    );
  }
}
