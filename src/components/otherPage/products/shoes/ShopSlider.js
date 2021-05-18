import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

function ShopSlider(props) {
  const { category } = props;
  const { setValue } = props;
  const { value } = props;

  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="shop-sidebar">
        <div className="single-widget category">
          <h3 className="title">Categories</h3>
          <ul className="categor-list">
            <li>
              <Link to="/shose">All</Link>
            </li>
            {category.map((data) => (
              <li key={data.category_id}>
                <Link to={"/shoes/" + data.category_id}>
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
                style={{
                  margin: "auto",
                  display: "block",
                  width: "fit-content",
                }}
              >
                <Typography id="range-slider" gutterBottom>
                  Select Price Range:
                </Typography>
                <Slider
                  min={0}
                  max={1000}
                  value={value}
                  onChange={rangeSelector}
                  valueLabelDisplay="auto"
                />
              </div>
              <div className="price_slider_amount">
                <div className="label-input">
                  <span>
                    Range: {value[0]} - {value[1]}
                  </span>
                </div>
              </div>
            </div>
          </div>
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
