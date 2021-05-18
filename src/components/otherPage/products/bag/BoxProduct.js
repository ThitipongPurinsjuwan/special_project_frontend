import React from "react";
import { Link } from "react-router-dom";

function BoxProduct(props) {
  const { data } = props;
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="single-product">
          <div className="product-img">
            <Link to={"/detail/" + data.product_id}>
              <img className="default-img" src={data.product_img} alt="#" />
              <img className="hover-img" src={data.product_img} alt="#" />
            </Link>
            <div className="button-head">
              <div className="product-action">
                <Link
                  data-toggle="modal"
                  data-target="#exampleModal"
                  title="Quick View"
                  to={"/detail/" + data.product_id}
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
              <Link to={"/detail/" + data.product_id}>{data.product_name}</Link>
            </h3>
            <div className="product-price">
              <span>{formatter.format(data.product_price)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxProduct;
