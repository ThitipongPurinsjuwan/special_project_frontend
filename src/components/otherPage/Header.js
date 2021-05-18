import React, { Component, useEffect, useState } from "react";
import { Link, Redirect, useLocation } from "react-router-dom";
import useToken from "../token";
import ShopItem from "./cart/ShopItem";
import axios from "axios";

function Header() {
  const location = useLocation();
  const { token, removeToken } = useToken();
  const [data, setData] = useState([]);
  const [total, setTotal] = useState();

  useEffect(() => {
    var api_usrl;
    if (token) {
      api_usrl = `http://localhost:1337/order?user_id=${token.user_id}`;
    } else {
      api_usrl = `http://localhost:1337/order?user_id=-1`;
    }
    axios
      .get(api_usrl)
      .then((results) => {
        setData(results.data.results);
        setTotal(data.reduce((a, v) => (a = a + v.in_order_total), 0));
      })
      .catch((err) => console.log(err));
  }, []);

  const Login = () => {
    return (
      <li>
        <i className="ti-power-off" />
        <a href="#" onClick={() => window.location.replace("/")}>
          Login
        </a>
      </li>
    );
  };
  const Logout = () => {
    return (
      <li>
        <i className="ti-power-off" />
        <Link
          to="#"
          onClick={() => {
            removeToken();
            window.location.replace(location.pathname);
          }}
        >
          Logout
        </Link>
      </li>
    );
  };
  const Accout = () => {
    return (
      <li>
        <i className="ti-user" />{" "}
        <Link to={"/profile?user_id=" + token.user_id}>
          My account({token.user_firstname})
        </Link>
      </li>
    );
  };
  const AdminMenu = () => (
    <li>
      <Link to="/shop">Admin</Link>
      <ul className="dropdown">
        {/* <li>
          <Link to="/create">User & Employee</Link>
        </li> */}
        <li>
          <Link to="/createProduct">Create Product</Link>
        </li>
        <li>
          <Link to="/listsProduct">Lists Product</Link>
        </li>
        {/* <li>
          <Link to="/detail">Products</Link>
        </li> */}
        <li>
          <Link to="/detail">Promotion</Link>
        </li>
        <li>
          <Link to="/orderlists">Orders list</Link>
        </li>
        {/* <li>
          <Link to="/register">Register Screen</Link>
        </li>
        <li>
          <Link to="/login">Login Screen</Link>
        </li> */}
      </ul>
    </li>
  );
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <>
      <header className="header shop">
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-12">
                {/* Top Left */}
                <div className="top-left">
                  <ul className="list-main">
                    <li>
                      <i className="ti-headphone-alt" /> +060 (800) 801-582
                    </li>
                    <li>
                      <i className="ti-email" /> support@shophub.com
                    </li>
                  </ul>
                </div>
                {/*/ End Top Left */}
              </div>
              <div className="col-lg-7 col-md-12 col-12">
                {/* Top Right */}
                <div className="right-content">
                  <ul className="list-main">
                    <li>
                      <i className="ti-location-pin" /> Store location
                    </li>
                    <li>
                      <i className="ti-alarm-clock" />{" "}
                      <a href="#">Daily deal</a>
                    </li>

                    {token ? Accout() : <></>}
                    {!token ? Login() : Logout()}
                  </ul>
                </div>

                {/* End Top Right */}
              </div>
            </div>
          </div>
        </div>

        <div className="middle-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-12">
                {/* Logo */}
                <div className="logo">
                  <a href="index.html">
                    <img src="/assets/images/logo.png" alt="logo" />
                  </a>
                </div>
                {/*/ End Logo */}
                {/* Search Form */}
                <div className="search-top">
                  <div className="top-search">
                    <a href="#0">
                      <i className="ti-search" />
                    </a>
                  </div>
                  {/* Search Form */}
                  <div className="search-top">
                    <form className="search-form">
                      <input
                        type="text"
                        placeholder="Search here..."
                        name="search"
                      />
                      <button value="search" type="submit">
                        <i className="ti-search" />
                      </button>
                    </form>
                  </div>
                  {/*/ End Search Form */}
                </div>
                {/*/ End Search Form */}
                <div className="mobile-nav" />
              </div>
              <div className="col-lg-8 col-md-7 col-12">
                <div className="search-bar-top">
                  <div className="search-bar">
                    <select>
                      <option selected="selected">All Category</option>
                      <option>watch</option>
                      <option>mobile</option>
                      <option>kid’s item</option>
                    </select>
                    <form>
                      <input
                        name="search"
                        placeholder="Search Products Here....."
                        type="search"
                      />
                      <button className="btnn">
                        <i className="ti-search" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-12">
                <div className="right-bar">
                  {/* Search Form */}
                  <div className="sinlge-bar">
                    <a href="#" className="single-icon">
                      <i className="fa fa-heart-o" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="sinlge-bar">
                    <a href="#" className="single-icon">
                      <i className="fa fa-user-circle-o" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="sinlge-bar shopping">
                    <Link to="/cart" className="single-icon">
                      <i className="ti-bag" />{" "}
                      <span className="total-count">{data.length}</span>
                    </Link>
                    {/* Shopping Item */}
                    <div className="shopping-item">
                      <div className="dropdown-cart-header">
                        <span>{data.length} Items</span>
                        <a href="#">View Cart</a>
                      </div>
                      <ul className="shopping-list">
                        {data.map((item, index) => (
                          <ShopItem data={item} formatter={formatter} />
                        ))}
                      </ul>
                      <div className="bottom">
                        <div className="total">
                          <span>Total</span>
                          <span className="total-amount">
                            {formatter.format(total)}
                          </span>
                        </div>
                        <a href="checkout.html" className="btn animate">
                          Checkout
                        </a>
                      </div>
                    </div>
                    {/*/ End Shopping Item */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header Inner */}
        <div className="header-inner">
          <div className="container">
            <div className="cat-nav-head">
              <div className="row">
                <div className="col-12">
                  <div className="menu-area">
                    {/* Main Menu */}
                    <nav className="navbar navbar-expand-lg">
                      <div className="navbar-collapse">
                        <div className="nav-inner">
                          <ul className="nav main-menu menu navbar-nav">
                            <li className="active">
                              <Link to="/Home">Home</Link>
                            </li>
                            <li>
                              <a href="#">
                                Shop
                                <i className="ti-angle-down" />
                                <span className="new">New</span>
                              </a>
                              <ul className="dropdown">
                                <li>
                                  <Link to="/bag">Bag</Link>
                                </li>
                                <li>
                                  <Link to="/shose">Shoes</Link>
                                </li>
                              </ul>
                            </li>

                            <li>
                              <a href="#">
                                Blog
                                <i className="ti-angle-down" />
                              </a>
                              <ul className="dropdown">
                                <li>
                                  <Link to="/review">Review</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to="/contact">Contact Us</Link>
                            </li>
                            {token ? (
                              token.user_status_id === 3 ? (
                                AdminMenu()
                              ) : (
                                <></>
                              )
                            ) : (
                              <></>
                            )}
                          </ul>
                        </div>
                      </div>
                    </nav>
                    {/*/ End Main Menu */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Header Inner */}
      </header>
    </>
  );
}

export default Header;
