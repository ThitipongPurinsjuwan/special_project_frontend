import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    var dataGlobal = this.props.data;
    this.setState({ data: dataGlobal });
    console.log("props");
    console.log(this.props.data);
    console.log("state");
    console.log(this.state.data);
    console.log("Glo");
    console.log(this.state.dataGlobal);
  }
  render() {
    let { data } = this.state;
    return (
      <>
        <div className="shopping-cart section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Shopping Summery */}
                <table className="table shopping-summery">
                  <thead>
                    <tr className="main-hading">
                      <th>PRODUCT</th>
                      <th>NAME</th>
                      <th className="text-center" style={{ width: "80px" }}>
                        UNIT PRICE
                      </th>
                      <th className="text-center">QUANTITY</th>
                      <th className="text-center">
                        <i className="ti-pencil-alt remove-icon" />
                      </th>
                      <th className="text-center">
                        <i className="ti-trash remove-icon" />
                      </th>
                      <th className="text-center">
                        <i className="ti-eye remove-icon" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((data, index) => (
                      <tr key={index}>
                        <td className="image" data-title="No">
                          <img src={data.product_img} alt="#" />
                        </td>
                        <td className="product-des" data-title="Description">
                          <p className="product-name">
                            <Link to="#">{data.product_name}</Link>
                          </p>
                          <p className="product-des">
                            Maboriosam in a tonto nesciung eget distingy
                            magndapibus.
                          </p>
                        </td>
                        <td className="price" data-title="Price">
                          <span>${data.product_price} </span>
                        </td>
                        <td className="total-amount" data-title="Total">
                          <span>{data.product_quantity}</span>
                        </td>
                        <td className="action" data-title="Remove">
                          <Link to="#">
                            <i className="ti-pencil-alt remove-icon" />
                          </Link>
                        </td>
                        <td className="action" data-title="Remove">
                          <Link to="#">
                            <i className="ti-trash remove-icon" />
                          </Link>
                        </td>
                        <td className="action" data-title="Remove">
                          <Link to="/updateProduct">
                            <i className="ti-eye remove-icon" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/*/ End Shopping Summery */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Lists;
