import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/otherPage/Header";
import Breadcrumbs from "../../components/otherPage/Breadcrumbs";
import ServiceArea from "../../components/otherPage/cart/ServiceArea";
import Newslater from "../../components/otherPage/cart/Newslater";
import Footer from "../../components/otherPage/Footer";
import { Link } from "react-router-dom";

export default class OrderList extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
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
  render() {
    const { data } = this.state;
    return (
      <>
        <Header />
        <Breadcrumbs to="Order lists" />
        <div className="shopping-cart section">
          <div className="container">
            <div className="row">
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
                      <th className="text-center">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((data, index) => (
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
