import React, { Component } from "react";
import { Link } from "react-router-dom";

class Shops extends Component {
  render() {
    return (
      <>
        <section className="product-area shop-sidebar shop section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-12">
                <div className="shop-sidebar">
                  {/* Single Widget */}
                  <div className="single-widget category">
                    <h3 className="title">Categories</h3>
                    <ul className="categor-list">
                      <li>
                        <Link to="#">T-shirts</Link>
                      </li>
                      <li>
                        <Link to="#">jacket</Link>
                      </li>
                      <li>
                        <Link to="#">jeans</Link>
                      </li>
                      <li>
                        <Link to="#">sweatshirts</Link>
                      </li>
                      <li>
                        <Link to="#">trousers</Link>
                      </li>
                      <li>
                        <Link to="#">kitwears</Link>
                      </li>
                      <li>
                        <Link to="#">accessories</Link>
                      </li>
                    </ul>
                  </div>
                  {/*/ End Single Widget */}
                  {/* Shop By Price */}
                  <div className="single-widget range">
                    <h3 className="title">Shop by Price</h3>
                    <div className="price-filter">
                      <div className="price-filter-inner">
                        <div
                          id="slider-range"
                          className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                        >
                          <div
                            className="ui-slider-range ui-widget-header ui-corner-all"
                            style={{ width: "26%", left: "24%" }}
                          />
                          <span
                            className="ui-slider-handle ui-state-default ui-corner-all"
                            tabIndex={0}
                            style={{ left: "24%" }}
                          />
                          <span
                            className="ui-slider-handle ui-state-default ui-corner-all"
                            tabIndex={0}
                            style={{ left: "50%" }}
                          />
                        </div>
                        <div className="price_slider_amount">
                          <div className="label-input">
                            <span>Range:</span>
                            <input
                              type="text"
                              id="amount"
                              name="price"
                              placeholder="Add Your Price"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="check-box-list">
                      <li>
                        <label className="checkbox-inline" htmlFor={1}>
                          <input name="news" id={1} type="checkbox" />
                          $20 - $50<span className="count">(3)</span>
                        </label>
                      </li>
                      <li>
                        <label className="checkbox-inline" htmlFor={2}>
                          <input name="news" id={2} type="checkbox" />
                          $50 - $100<span className="count">(5)</span>
                        </label>
                      </li>
                      <li>
                        <label className="checkbox-inline" htmlFor={3}>
                          <input name="news" id={3} type="checkbox" />
                          $100 - $250<span className="count">(8)</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  {/*/ End Shop By Price */}
                  {/* Single Widget */}
                  <div className="single-widget recent-post">
                    <h3 className="title">Recent post</h3>
                    {/* Single Post */}
                    <div className="single-post first">
                      <div className="image">
                        <img
                          src="https://wpthemesgrid.com/themes/eshop/images/modal2.png"
                          alt="#"
                        />
                      </div>
                      <div className="content">
                        <h5>
                          <Link to="#">Girls Dress</Link>
                        </h5>
                        <p className="price">$99.50</p>
                        <ul className="reviews">
                          <li className="yellow">
                            <i className="ti-star" />
                          </li>
                          <li className="yellow">
                            <i className="ti-star" />
                          </li>
                          <li className="yellow">
                            <i className="ti-star" />
                          </li>
                          <li>
                            <i className="ti-star" />
                          </li>
                          <li>
                            <i className="ti-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Post */}
                    {/* Single Post */}
                    <div className="single-post first">
                      <div className="image">
                        <img
                          src="https://wpthemesgrid.com/themes/eshop/images/single-shop-img2.png"
                          alt="#"
                        />
                      </div>
                      <div className="content">
                        <h5>
                          <Link to="#">Women Clothings</Link>
                        </h5>
                        <p className="price">$99.50</p>
                        <ul className="reviews">
                          <li className="yellow">
                            <i className="ti-star" />
                          </li>
                          <li className="yellow">
                            <i className="ti-star" />
                          </li>
                          <li className="yellow">
                            <i className="ti-star" />
                          </li>
                          <li className="yellow">
                            <i className="ti-star" />
                          </li>
                          <li>
                            <i className="ti-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Post */}
                    {/* Single Post */}
                    <div className="single-post first">
                      <div className="image">
                        <img
                          src="https://wpthemesgrid.com/themes/eshop/images/single-shop-img1.png"
                          alt="#"
                        />
                      </div>
                      <div className="content">
                        <h5>
                          <Link to="#">Man Tshirt</Link>
                        </h5>
                        <p className="price">$99.50</p>
                        <ul className="reviews">
                          <li className="yellow">
                            <i className="ti-star" />
                          </li>
                          <li className="yellow">
                            <i className="ti-star" />
                          </li>
                          <li className="yellow">
                            <i className="ti-star" />
                          </li>
                          <li className="yellow">
                            <i className="ti-star" />
                          </li>
                          <li className="yellow">
                            <i className="ti-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Post */}
                  </div>
                  {/*/ End Single Widget */}
                  {/* Single Widget */}
                  <div className="single-widget category">
                    <h3 className="title">Manufacturers</h3>
                    <ul className="categor-list">
                      <li>
                        <Link to="#">Forever</Link>
                      </li>
                      <li>
                        <Link to="#">giordano</Link>
                      </li>
                      <li>
                        <Link to="#">abercrombie</Link>
                      </li>
                      <li>
                        <Link to="#">ecko united</Link>
                      </li>
                      <li>
                        <Link to="#">zara</Link>
                      </li>
                    </ul>
                  </div>
                  {/*/ End Single Widget */}
                </div>
              </div>
              <div className="col-lg-9 col-md-8 col-12">
                <div className="row">
                  <div className="col-12">
                    {/* Shop Top */}
                    <div className="shop-top">
                      <div className="shop-shorter">
                        <div className="single-shorter">
                          <label>Show :</label>
                          <select style={{ display: "none" }}>
                            <option selected="selected">09</option>
                            <option>15</option>
                            <option>25</option>
                            <option>30</option>
                          </select>
                          <div className="nice-select" tabIndex={0}>
                            <span className="current">09</span>
                            <ul className="list">
                              <li data-value={9} className="option selected">
                                09
                              </li>
                              <li data-value={15} className="option">
                                15
                              </li>
                              <li data-value={25} className="option">
                                25
                              </li>
                              <li data-value={30} className="option">
                                30
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="single-shorter">
                          <label>Sort By :</label>
                          <select style={{ display: "none" }}>
                            <option selected="selected">Name</option>
                            <option>Price</option>
                            <option>Size</option>
                          </select>
                          <div className="nice-select" tabIndex={0}>
                            <span className="current">Name</span>
                            <ul className="list">
                              <li data-value="Name" className="option selected">
                                Name
                              </li>
                              <li data-value="Price" className="option">
                                Price
                              </li>
                              <li data-value="Size" className="option">
                                Size
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <ul className="view-mode">
                        <li className="active">
                          <Link to="shop-grid.html">
                            <i className="fa fa-th-large" />
                          </Link>
                        </li>
                        <li>
                          <Link to="shop-list.html">
                            <i className="fa fa-th-list" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/*/ End Shop Top */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-product">
                      <div className="product-img">
                        <Link to="/detail">
                          <img
                            className="default-img"
                            src="https://wpthemesgrid.com/themes/eshop/images/modal2.png"
                            alt="#"
                          />
                          <img
                            className="hover-img"
                            src="https://wpthemesgrid.com/themes/eshop/images/modal1.png"
                            alt="#"
                          />
                        </Link>
                        <div className="button-head">
                          <div className="product-action">
                            <Link
                              data-toggle="modal"
                              data-target="#exampleModal"
                              title="Quick View"
                              to="#"
                            >
                              <i className=" ti-eye" />
                              <span>Quick Shop</span>
                            </Link>
                            <Link title="Wishlist" to="#">
                              <i className=" ti-heart " />
                              <span>Add to Wishlist</span>
                            </Link>
                            <Link title="Compare" to="#">
                              <i className="ti-bar-chart-alt" />
                              <span>Add to Compare</span>
                            </Link>
                          </div>
                          <div className="product-action-2">
                            <Link title="Add to cart" to="#">
                              Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <h3>
                          <Link to="/detail">Women Hot Collection</Link>
                        </h3>
                        <div className="product-price">
                          <span>$29.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-product">
                      <div className="product-img">
                        <Link to="/detail">
                          <img
                            className="default-img"
                            src="https://wpthemesgrid.com/themes/eshop/images/modal2.png"
                            alt="#"
                          />
                          <img
                            className="hover-img"
                            src="https://wpthemesgrid.com/themes/eshop/images/modal1.png"
                            alt="#"
                          />
                        </Link>
                        <div className="button-head">
                          <div className="product-action">
                            <Link
                              data-toggle="modal"
                              data-target="#exampleModal"
                              title="Quick View"
                              to="#"
                            >
                              <i className=" ti-eye" />
                              <span>Quick Shop</span>
                            </Link>
                            <Link title="Wishlist" to="#">
                              <i className=" ti-heart " />
                              <span>Add to Wishlist</span>
                            </Link>
                            <Link title="Compare" to="#">
                              <i className="ti-bar-chart-alt" />
                              <span>Add to Compare</span>
                            </Link>
                          </div>
                          <div className="product-action-2">
                            <Link title="Add to cart" to="#">
                              Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <h3>
                          <Link to="/detail">Awesome Pink Show</Link>
                        </h3>
                        <div className="product-price">
                          <span>$29.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-product">
                      <div className="product-img">
                        <Link to="/detail">
                          <img
                            className="default-img"
                            src="https://wpthemesgrid.com/themes/eshop/images/modal2.png"
                            alt="#"
                          />
                          <img
                            className="hover-img"
                            src="https://wpthemesgrid.com/themes/eshop/images/modal1.png"
                            alt="#"
                          />
                        </Link>
                        <div className="button-head">
                          <div className="product-action">
                            <Link
                              data-toggle="modal"
                              data-target="#exampleModal"
                              title="Quick View"
                              to="#"
                            >
                              <i className=" ti-eye" />
                              <span>Quick Shop</span>
                            </Link>
                            <Link title="Wishlist" to="#">
                              <i className=" ti-heart " />
                              <span>Add to Wishlist</span>
                            </Link>
                            <Link title="Compare" to="#">
                              <i className="ti-bar-chart-alt" />
                              <span>Add to Compare</span>
                            </Link>
                          </div>
                          <div className="product-action-2">
                            <Link title="Add to cart" to="#">
                              Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <h3>
                          <Link to="/detail">Awesome Bags Collection</Link>
                        </h3>
                        <div className="product-price">
                          <span>$29.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-product">
                      <div className="product-img">
                        <Link to="/detail">
                          <img
                            className="default-img"
                            src="https://wpthemesgrid.com/themes/eshop/images/modal2.png"
                            alt="#"
                          />
                          <img
                            className="hover-img"
                            src="https://wpthemesgrid.com/themes/eshop/images/modal1.png"
                            alt="#"
                          />
                          <span className="new">New</span>
                        </Link>
                        <div className="button-head">
                          <div className="product-action">
                            <Link
                              data-toggle="modal"
                              data-target="#exampleModal"
                              title="Quick View"
                              to="#"
                            >
                              <i className=" ti-eye" />
                              <span>Quick Shop</span>
                            </Link>
                            <Link title="Wishlist" to="#">
                              <i className=" ti-heart " />
                              <span>Add to Wishlist</span>
                            </Link>
                            <Link title="Compare" to="#">
                              <i className="ti-bar-chart-alt" />
                              <span>Add to Compare</span>
                            </Link>
                          </div>
                          <div className="product-action-2">
                            <Link title="Add to cart" to="#">
                              Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <h3>
                          <Link to="/detail">Women Pant Collectons</Link>
                        </h3>
                        <div className="product-price">
                          <span>$29.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-product">
                      <div className="product-img">
                        <Link to="/detail">
                          <img
                            className="default-img"
                            src="https://wpthemesgrid.com/themes/eshop/images/modal2.png"
                            alt="#"
                          />
                          <img
                            className="hover-img"
                            src="https://wpthemesgrid.com/themes/eshop/images/modal1.png"
                            alt="#"
                          />
                        </Link>
                        <div className="button-head">
                          <div className="product-action">
                            <Link
                              data-toggle="modal"
                              data-target="#exampleModal"
                              title="Quick View"
                              to="#"
                            >
                              <i className=" ti-eye" />
                              <span>Quick Shop</span>
                            </Link>
                            <Link title="Wishlist" to="#">
                              <i className=" ti-heart " />
                              <span>Add to Wishlist</span>
                            </Link>
                            <Link title="Compare" to="#">
                              <i className="ti-bar-chart-alt" />
                              <span>Add to Compare</span>
                            </Link>
                          </div>
                          <div className="product-action-2">
                            <Link title="Add to cart" to="#">
                              Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <h3>
                          <Link to="/detail">Awesome Bags Collection</Link>
                        </h3>
                        <div className="product-price">
                          <span>$29.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-product">
                      <div className="product-img">
                        <Link to="/detail">
                          <img
                            className="default-img"
                            src="https://wpthemesgrid.com/themes/eshop/images/modal2.png"
                            alt="#"
                          />
                          <img
                            className="hover-img"
                            src="https://wpthemesgrid.com/themes/eshop/images/modal1.png"
                            alt="#"
                          />
                          <span className="price-dec">30% Off</span>
                        </Link>
                        <div className="button-head">
                          <div className="product-action">
                            <Link
                              data-toggle="modal"
                              data-target="#exampleModal"
                              title="Quick View"
                              to="#"
                            >
                              <i className=" ti-eye" />
                              <span>Quick Shop</span>
                            </Link>
                            <Link title="Wishlist" to="#">
                              <i className=" ti-heart " />
                              <span>Add to Wishlist</span>
                            </Link>
                            <Link title="Compare" to="#">
                              <i className="ti-bar-chart-alt" />
                              <span>Add to Compare</span>
                            </Link>
                          </div>
                          <div className="product-action-2">
                            <Link title="Add to cart" to="#">
                              Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <h3>
                          <Link to="/detail">Awesome Cap For Women</Link>
                        </h3>
                        <div className="product-price">
                          <span>$29.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-product">
                      <div className="product-img">
                        <Link to="/detail">
                          <img
                            className="default-img"
                            src="https://wpthemesgrid.com/themes/eshop/images/modal2.png"
                            alt="#"
                          />
                          <img
                            className="hover-img"
                            src="https://wpthemesgrid.com/themes/eshop/images/modal1.png"
                            alt="#"
                          />
                        </Link>
                        <div className="button-head">
                          <div className="product-action">
                            <Link
                              data-toggle="modal"
                              data-target="#exampleModal"
                              title="Quick View"
                              to="#"
                            >
                              <i className=" ti-eye" />
                              <span>Quick Shop</span>
                            </Link>
                            <Link title="Wishlist" to="#">
                              <i className=" ti-heart " />
                              <span>Add to Wishlist</span>
                            </Link>
                            <Link title="Compare" to="#">
                              <i className="ti-bar-chart-alt" />
                              <span>Add to Compare</span>
                            </Link>
                          </div>
                          <div className="product-action-2">
                            <Link title="Add to cart" to="#">
                              Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <h3>
                          <Link to="/detail">Polo Dress For Women</Link>
                        </h3>
                        <div className="product-price">
                          <span>$29.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-product">
                      <div className="product-img">
                        <Link to="/detail">
                          <img
                            className="default-img"
                            src="https://wpthemesgrid.com/themes/eshop/images/modal2.png"
                            alt="#"
                          />
                          <img
                            className="hover-img"
                            src="https://wpthemesgrid.com/themes/eshop/images/modal1.png"
                            alt="#"
                          />
                          <span className="out-of-stock">Hot</span>
                        </Link>
                        <div className="button-head">
                          <div className="product-action">
                            <Link
                              data-toggle="modal"
                              data-target="#exampleModal"
                              title="Quick View"
                              to="#"
                            >
                              <i className=" ti-eye" />
                              <span>Quick Shop</span>
                            </Link>
                            <Link title="Wishlist" to="#">
                              <i className=" ti-heart " />
                              <span>Add to Wishlist</span>
                            </Link>
                            <Link title="Compare" to="#">
                              <i className="ti-bar-chart-alt" />
                              <span>Add to Compare</span>
                            </Link>
                          </div>
                          <div className="product-action-2">
                            <Link title="Add to cart" to="#">
                              Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <h3>
                          <Link to="/detail">Black Sunglass For Women</Link>
                        </h3>
                        <div className="product-price">
                          <span className="old">$60.00</span>
                          <span>$50.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-product">
                      <div className="product-img">
                        <Link to="/detail">
                          <img
                            className="default-img"
                            src="https://wpthemesgrid.com/themes/eshop/images/modal2.png"
                            alt="#"
                          />
                          <img
                            className="hover-img"
                            src="https://wpthemesgrid.com/themes/eshop/images/modal1.png"
                            alt="#"
                          />
                          <span className="new">New</span>
                        </Link>
                        <div className="button-head">
                          <div className="product-action">
                            <Link
                              data-toggle="modal"
                              data-target="#exampleModal"
                              title="Quick View"
                              to="#"
                            >
                              <i className=" ti-eye" />
                              <span>Quick Shop</span>
                            </Link>
                            <Link title="Wishlist" to="#">
                              <i className=" ti-heart " />
                              <span>Add to Wishlist</span>
                            </Link>
                            <Link title="Compare" to="#">
                              <i className="ti-bar-chart-alt" />
                              <span>Add to Compare</span>
                            </Link>
                          </div>
                          <div className="product-action-2">
                            <Link title="Add to cart" to="#">
                              Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <h3>
                          <Link to="/detail">Women Pant Collectons</Link>
                        </h3>
                        <div className="product-price">
                          <span>$29.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Shops;
