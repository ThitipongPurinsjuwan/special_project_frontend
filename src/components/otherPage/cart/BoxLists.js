import React from "react";
import { Link } from "react-router-dom";

function BoxLists(props) {
  const { data, removeProduct, formatter } = props;
  return (
    <>
      <tr>
        <td className="image" data-title="No">
          <img src={data.product_img} alt="#" />
        </td>
        <td className="product-des" data-title="Description">
          <p className="product-name">
            <Link to={"/detail/" + data.in_order_product_id}>
              {data.product_name}
            </Link>
          </p>
          <p className="product-des">
            Maboriosam in a tonto nesciung eget distingy magndapibus.
          </p>
        </td>
        <td className="price" data-title="Price">
          <span>{formatter.format(data.in_order_price)} </span>
        </td>
        <td className="qty" data-title="Qty">
          {/* Input Order */}
          <div className="input-group">
            <div className="button minus">
              <button
                type="button"
                className="btn btn-primary btn-number"
                disabled="disabled"
                data-type="minus"
                data-field="quant[1]"
              >
                <i className="ti-minus" />
              </button>
            </div>
            <input
              type="text"
              name="quant[1]"
              value={data.in_order_quantity}
              className="input-number"
              data-min={1}
              data-max={100}
              defaultValue={1}
              placeholder="true"
              readOnly={true}
            />
            <div className="button plus">
              <button
                type="button"
                className="btn btn-primary btn-number"
                data-type="plus"
                data-field="quant[1]"
              >
                <i className="ti-plus" />
              </button>
            </div>
          </div>
          {/*/ End Input Order */}
        </td>
        <td className="total-amount" data-title="Total">
          <span>{formatter.format(data.in_order_total)}</span>
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
