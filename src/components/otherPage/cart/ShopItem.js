import React from "react";
import { Link } from "react-router-dom";

function ShopItem(props) {
  const { data, formatter } = props;
  return (
    <>
      <li>
        <Link to="/" className="remove" title="Remove this item">
          <i className="fa fa-remove" />
        </Link>
        <Link className="cart-img" to="/">
          <img src={data.product_img} alt="#" />
        </Link>
        <h4>
          <Link to="/">{data.product_name}</Link>
        </h4>
        <p className="quantity">
          {data.in_order_quantity}x -{" "}
          <span className="amount">
            {formatter.format(data.in_order_price)}
          </span>
        </p>
      </li>
    </>
  );
}

export default ShopItem;
