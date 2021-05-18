import React from "react";
import { Link } from "react-router-dom";

function ShopSlider(props) {
  const { category } = props;
  return (
    <>
      <div className="shop-sidebar">
        <div className="single-widget category">
          <h3 className="title">Categories</h3>
          <ul className="categor-list">
            <li>
              <Link to="/bag">All</Link>
            </li>
            {category.map((data) => (
              <li key={data.category_id}>
                <Link to={"/bag/" + data.category_id}>
                  {data.category_name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
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

        <div className="single-widget recent-post">
          <h3 className="title">Recent post</h3>

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
        </div>

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
      </div>
    </>
  );
}

export default ShopSlider;
