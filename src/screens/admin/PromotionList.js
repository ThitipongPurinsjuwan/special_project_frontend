import React, { Component } from "react";
import axios from "axios";
import Header from "../../components/otherPage/Header";
import Breadcrumbs from "../../components/otherPage/Breadcrumbs";
import Footer from "../../components/otherPage/Footer";
import { Link } from "react-router-dom";

class PromotionList extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
    this.removePromotion = this.removePromotion.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:1337/all_promotion")
      .then((results) => {
        this.setState({ data: results.data.results });
      })
      .catch((err) => console.log(err));
  }
  handleRemove = (data) => {
    const url = `http://localhost:1337/delete_promotion?promotion_id=${data.promotion_id}`;
    axios
      .get(url)
      .then((res) => {
        this.setState((previousState) => {
          return {
            data: previousState.data.filter(
              (m) => m.promotion_id !== data.promotion_id
            ),
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  removePromotion = (e, data) => {
    this.handleRemove(data);
  };
  render() {
    const { data } = this.state;
    return (
      <>
        <Header />
        <Breadcrumbs to="Promotion" />
        <div className="shopping-cart section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="form-group login-btn">
                  <Link
                    to="/createPromotion"
                    className="btn btn-create-in-list"
                  >
                    Create Promotion
                  </Link>
                </div>
              </div>
              <div className="col-12">
                <table className="table shopping-summery">
                  <thead>
                    <tr className="main-hading">
                      <th></th>
                      <th>Promotion Name</th>
                      <th>Sales</th>
                      <th className="text-center">Promotion Start</th>
                      <th className="text-center">Promotion End</th>
                      <th className="text-center">
                        <i className="ti-pencil-alt remove-icon" />
                      </th>
                      <th className="text-center">
                        <i className="ti-trash remove-icon" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((data, index) => (
                      <tr key={index}>
                        <td className="product-des" data-title="Description">
                          <p className="product-name">{index + 1}</p>
                        </td>
                        <td className="product-des" data-title="Description">
                          <p className="product-name">
                            <Link to={"#"}>{data.promotion_name}</Link>
                          </p>
                        </td>
                        <td className="product-des" data-title="Description">
                          <p className="product-name">
                            {data.sales_percentage}
                          </p>
                        </td>
                        <td className="total-amount" data-title="Total">
                          <span>
                            {new Date(data.promotion_date_start).toDateString()}
                          </span>
                        </td>
                        <td className="total-amount" data-title="Total">
                          <span>
                            {new Date(data.promotion_date_end).toDateString()}
                          </span>
                        </td>
                        <td className="action" data-title="Remove">
                          <Link
                            to={`/updatePromotion?promotion_id=${data.promotion_id}`}
                          >
                            <i className="ti-pencil-alt remove-icon" />
                          </Link>
                        </td>
                        <td className="action" data-title="Remove">
                          <Link
                            to="#"
                            onClick={() => {
                              if (
                                window.confirm(
                                  "Are you sure you wish to delete this item?"
                                )
                              ) {
                                this.removePromotion(this, data);
                              }
                            }}
                          >
                            <i className="ti-trash remove-icon" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default PromotionList;
