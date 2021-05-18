import React from "react";
import { Link } from "react-router-dom";
import useToken from "../../../token";


function BoxProduct(props) {
  // const { token, removeToken } = useToken();
  const { data } = props;
  const {likeSubmit} = props;
  // const {like} = props;
  // console.log("product=>" + data.product_id);
  // console.log("user=>"+data.user_id);
  const { token } = useToken();
  // console.log("token=>" + token.user_id);
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
 
  var like = {
    user_id : token.user_id,
    product_id : data.product_id
  }

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
                {/* <Link title="Wishlist" to={likeSubmit(like)}> */}
                <Link title="Wishlist" to="#" onClick={() => likeSubmit(like)}>
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
