import React, { useState, useEffect } from "react";
import Header from "../components/otherPage/Header";
import Breadcrumbs from "../components/otherPage/Breadcrumbs";
import Review from "../components/otherPage/products/detail/Review";
import Rating from "../components/otherPage/products/detail/Rating";
import Footer from "../components/otherPage/Footer";
import useToken from "../components/token";
import axios from "axios";
import { withRouter } from "react-router";
import { Link, useParams } from "react-router-dom";
function ProductDetailScreen(props) {
  const { token } = useToken();
  const param = useParams();
  const [state, setState] = useState({
    name: "",
    price: 0,
    quantity: 0,
    quantityInstock: 0,
    path: "",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque facilis magni, saepe aspernatur aliquid maxime quo nesciunt libero illo consequuntur ipsa nam ab, harum aperiam est quod, suscipit adipisci ex quae dicta aut? Sit, saepe. Sed laudantium expedita odit quas modi quam temporibus aut, officiis a consequuntur illum maxime in cupiditate ipsam, minus ad nulla pariatur tempora molestias magnam perferendis. Non consequatur quo labore! Earum omnis debitis, accusamus similique quos vitae officia ipsum error in. Ullam non beatae soluta nam.",
    product_id: param.product_id,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:1337/productById?product_id=${state.product_id}`)
      .then((res) => {
        setState({
          ...state,
          name: res.data.results[0].product_name,
          price: res.data.results[0].product_price,
          path: res.data.results[0].product_img,
          quantityInstock: res.data.results[0].product_quantity,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  function increaseQuantity(e) {
    setState({ ...state, quantity: parseInt(state.quantity) + 1 });
  }

  function decreaseQuantity(e) {
    if (state.quantity > 0) {
      setState({ ...state, quantity: parseInt(state.quantity) - 1 });
    }
  }

  const handelAddToCart = (product_id) => {
    if (token) {
      if (state.quantity > 0) {
        addToCat(product_id);
      }
    } else {
    }
  };

  function addToCat(product_id) {
    const credentials = {
      product_id: parseInt(product_id),
      user_id: parseInt(token.user_id),
      quantity: parseInt(state.quantity),
      price: parseInt(state.price),
      total: parseFloat(state.price) * parseFloat(state.quantity),
      status: 2,
    };

    fetch("http://localhost:1337/insert_order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => props.history.push("/cart"));
  }

  const { name, price, path, description, quantity, quantityInstock } = state;
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <>
      <Header />
      <Breadcrumbs to="Detail" />
      <section className="shop single section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="product-gallery">
                    <div className="flexslider-thumbnails">
                      <div
                        className="flex-viewport"
                        style={{ overflow: "hidden", position: "relative" }}
                      >
                        <ul
                          className="slides"
                          style={{
                            width: "1200%",
                            transitionDuration: "0.6s",
                            transform: "translate3d(-555px, 0px, 0px)",
                          }}
                        >
                          <li
                            data-thumb={path}
                            className="clone"
                            style={{
                              width: 555,
                              float: "left",
                              display: "block",
                            }}
                          >
                            <img src={path} alt="#" />
                          </li>
                          <li
                            data-thumb={path}
                            rel="adjustX:10, adjustY:"
                            className="flex-active-slide"
                            style={{
                              width: 555,
                              float: "left",
                              display: "block",
                            }}
                          >
                            <img src={path} alt="#" />
                          </li>
                          <li
                            data-thumb={path}
                            style={{
                              width: 555,
                              float: "left",
                              display: "block",
                            }}
                          >
                            <img src={path} alt="#" />
                          </li>
                          <li
                            data-thumb={path}
                            style={{
                              width: 555,
                              float: "left",
                              display: "block",
                            }}
                          >
                            <img src={path} alt="#" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="product-des">
                    <div className="short">
                      <h4>{name}</h4>
                      <Rating />
                      <p className="price">
                        <span className="discount">
                          {formatter.format(price)}
                        </span>
                        <s>{formatter.format(price + 30)}</s>{" "}
                      </p>
                      <p className="description">{description}</p>
                    </div>
                    <div className="product-buy">
                      <div className="quantity">
                        <h6>Quantity :</h6>
                        <div className="input-group">
                          <div className="button minus">
                            <button
                              type="button"
                              onClick={() => decreaseQuantity()}
                              className="btn btn-primary btn-number"
                              data-type="minus"
                              data-field="quant[1]"
                            >
                              <i className="ti-minus" />
                            </button>
                          </div>
                          <input
                            type="text"
                            value={quantity}
                            onChange={(e) =>
                              setState({ ...state, quantity: e.target.value })
                            }
                            className="input-number"
                            data-min={1}
                            data-max={1000}
                            defaultValue={1}
                          />
                          <div className="button plus">
                            <button
                              type="button"
                              onClick={() => increaseQuantity()}
                              className="btn btn-primary btn-number"
                              data-type="plus"
                              data-field="quant[1]"
                            >
                              <i className="ti-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="add-to-cart">
                        <Link
                          to="#"
                          role="button"
                          onClick={() => handelAddToCart(state.product_id)}
                          className="btn"
                        >
                          Add to cart
                        </Link>
                        <Link to="/" className="btn min">
                          <i className="ti-heart" />
                        </Link>
                        <Link to="/" className="btn min">
                          <i className="fa fa-compress" />
                        </Link>
                      </div>
                      <p className="cat">
                        Category :<Link to="/">Clothing</Link>
                      </p>
                      <p className="availability">
                        Availability : {quantityInstock} Products In Stock
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Review />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default withRouter(ProductDetailScreen);
