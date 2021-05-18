import React, { Component } from "react";
import Header from "../components/otherPage/Header";
import Breadcrumbs from "../components/otherPage/Breadcrumbs";
import BoxLists from "../components/otherPage/cart/BoxLists";
import ServiceArea from "../components/otherPage/cart/ServiceArea";
import Newslater from "../components/otherPage/cart/Newslater";
import Footer from "../components/otherPage/Footer";
import axios from "axios";

class ShoppingCart extends Component {
  constructor() {
    const userToken = JSON.parse(localStorage.getItem("token"));
    super();
    this.state = {
      data: [],
      user_id: userToken.user_id,
      total: 0.0,
    };

    this.removeProduct = this.removeProduct.bind(this);
  }

  setTotal = () => {
    this.setState({
      total: this.state.data.reduce((a, v) => (a = a + v.in_order_total), 0),
    });
  };

  handleRemove = (product) => {
    const url = `http://localhost:1337/delete_order?order_id=${product.in_order_id}`;
    axios
      .get(url)
      .then((res) => {
        this.setState((previousState) => {
          return {
            data: previousState.data.filter(
              (m) => m.in_order_id !== product.in_order_id
            ),
          };
        });
        this.setTotal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  removeProduct = (e, product) => {
    this.handleRemove(product);
  };

  componentDidMount() {
    axios
      .get(`http://localhost:1337/order?user_id=${this.state.user_id}`)
      .then((results) => {
        this.setState({ data: results.data.results });
        this.setTotal();
      })
      .catch((err) => console.log(err));
  }
  render() {
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    const { data, total } = this.state;

    return (
      <>
        <Header />
        <Breadcrumbs to="Cart" />
        <div className="shopping-cart section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Shopping Summery */}
                <table className="table shopping-summery">
                  <thead>
                    <tr className="main-hading">
                      <th>PRODUCT</th>
                      <th>NAME</th>
                      <th className="text-center">UNIT PRICE</th>
                      <th className="text-center">QUANTITY</th>
                      <th className="text-center">TOTAL</th>
                      <th className="text-center">
                        <i className="ti-trash remove-icon" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((data, index) => {
                      return (
                        <BoxLists
                          formatter={formatter}
                          data={data}
                          removeProduct={this.removeProduct}
                        />
                      );
                    })}
                  </tbody>
                </table>
                {/*/ End Shopping Summery */}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                {/* Total Amount */}
                <div className="total-amount">
                  <div className="row">
                    <div className="col-lg-8 col-md-5 col-12">
                      <div className="left">
                        <div className="coupon">
                          <form action="#" target="_blank">
                            <input
                              name="Coupon"
                              placeholder="Enter Your Coupon"
                            />
                            <button className="btn">Apply</button>
                          </form>
                        </div>
                        <div className="checkbox">
                          <label className="checkbox-inline" htmlFor={2}>
                            <input name="news" id={2} type="checkbox" />{" "}
                            Shipping (+10$)
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-7 col-12">
                      <div className="right">
                        <ul>
                          <li>
                            Cart Subtotal
                            <span>{formatter.format(total)}</span>
                          </li>
                          <li>
                            Shipping<span>Free</span>
                          </li>
                          <li>
                            You Save<span>$0.00</span>
                          </li>
                          <li className="last">
                            You Pay
                            <span>{formatter.format(total)}</span>
                          </li>
                        </ul>
                        <div className="button5">
                          <a href="#" className="btn">
                            Checkout
                          </a>
                          <a href="#" className="btn">
                            Continue shopping
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/ End Total Amount */}
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

export default ShoppingCart;
