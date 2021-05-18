import React from "react";
import { Link } from "react-router-dom";

function BoxLists(props) {
  const { data, key, removeProduct } = props;
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <>
      <tr key={key}>
        <td className="image" data-title="No">
          <img src={data.product_img} alt="#" />
        </td>
        <td className="product-des" data-title="Description">
          <p className="product-name">
            <Link to={"/detail/" + data.product_id}>{data.product_name}</Link>
          </p>
          <p className="product-des">
            Maboriosam in a tonto nesciung eget distingy magndapibus.
          </p>
        </td>
        <td className="price" data-title="Price">
          <span>{formatter.format(data.product_price)}</span>
        </td>
        <td className="total-amount" data-title="Total">
          <span>{data.product_quantity}</span>
        </td>
        <td className="action" data-title="Remove">
          <Link to={`/updateProduct?product_id=${data.product_id}`}>
            <i className="ti-pencil-alt remove-icon" />
          </Link>
        </td>
        <td className="action" data-title="Remove">
          <Link
            to="#"
            onClick={() => {
              if (
                window.confirm("Are you sure you wish to delete this item?")
              ) {
                removeProduct(this, data);
              }
            }}
          >
            <i className="ti-trash remove-icon" />
          </Link>
        </td>
      </tr>
    </>
  );
}

export default BoxLists;
