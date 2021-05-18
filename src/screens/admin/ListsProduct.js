import React, { Component } from "react";
import Header from "../../components/otherPage/Header";
import Breadcrumbs from "../../components/otherPage/Breadcrumbs";
import ServiceArea from "../../components/otherPage/cart/ServiceArea";
import Newslater from "../../components/otherPage/cart/Newslater";
import Footer from "../../components/otherPage/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import BoxLists from "../../components/otherPage/listsProduct/BoxLists";

class ListsProduct extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };

    this.removeProduct = this.removeProduct.bind(this);
  }

  handleRemove = (product) => {
    const url = `http://localhost:1337/delete_product?product_id=${product.product_id}`;
    axios
      .get(url)
      .then((res) => {
        this.setState((previousState) => {
          return {
            data: previousState.data.filter(
              (m) => m.product_id !== product.product_id
            ),
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  removeProduct = (e, product) => {
    this.handleRemove(product);
  };

  componentDidMount() {
    axios
      .get("http://localhost:1337/product?category_id=1")
      .then((results) => {
        this.setState({ data: results.data.results });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { data } = this.state;
    return (
      <>
        <Header />
        <Breadcrumbs to="Lists Product" />
        <div className="shopping-cart section">
          <div className="container">
            <div className="row">
              <div className="col-12">
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
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((data, index) => (
                      <BoxLists
                        data={data}
                        key={index}
                        removeProduct={this.removeProduct}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <ServiceArea />
        <Newslater />
        <Footer />
      </>
    );
  }
}

export default ListsProduct;
