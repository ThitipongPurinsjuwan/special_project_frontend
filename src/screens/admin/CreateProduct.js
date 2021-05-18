import React, { Component } from "react";
import Header from "../../components/otherPage/Header";
import Breadcrumbs from "../../components/otherPage/Breadcrumbs";
import Footer from "../../components/otherPage/Footer";
import axios from "axios";
import { Redirect } from "react-router-dom";

class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      quantity: "",
      path: "",
      selectCategory: "0",
      selectPromotion: "0",
      redirect: null,
    };

    this.handleOnSabmit = this.handleOnSabmit.bind(this);
    this.onChangeName = this.handleChange.bind(this, "name");
    this.onChangePrice = this.handleChange.bind(this, "price");
    this.onChangeQuantity = this.handleChange.bind(this, "quantity");
    this.onChangePath = this.handleChange.bind(this, "path");
    this.onChangeCategory = this.handleChange.bind(this, "selectCategory");
    this.onChangePromotion = this.handleChange.bind(this, "selectPromotion");
  }

  handleChange(keyName, e) {
    this.setState({ [keyName]: e.target.value });
  }

  handleOnSabmit(e) {
    let data = {
      nameProduct: this.state.name,
      categoryProduct: this.state.selectCategory,
      promotionProduct: this.state.selectPromotion,
      price: this.state.price,
      quantity: this.state.quantity,
      pathPicture: this.state.path,
    };
    this.makeReq(data, this);
    e.preventDefault();
  }

  makeReq = async (data, self) => {
    return await axios
      .post("http://localhost:1337/insert_product", data)
      .then(function (res) {
        console.log(res);
        self.setState({ redirect: "/listsProduct" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const {
      selectCategory,
      selectPromotion,
      name,
      price,
      path,
      quantity,
    } = this.state;

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <>
        <Header />
        <Breadcrumbs to="create product" />

        <section className="shop login section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-12">
                <div className="login-form">
                  <h2>Create Product</h2>
                  <form className="form" onSubmit={this.handleOnSabmit}>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label>
                            Name<span>*</span>
                          </label>
                          <input
                            type="text"
                            value={name}
                            onChange={this.onChangeName}
                            placeholder
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label>
                            Category<span>*</span>
                          </label>
                          <select
                            value={selectCategory}
                            name="categoryProduct"
                            onChange={this.onChangeCategory}
                          >
                            <option value="0" hidden>
                              choose...
                            </option>
                            <option value="5">Wallet Bags</option>
                            <option value="6">Hand Bags</option>
                            <option value="7">Shoulder Bags</option>
                            <option value="8">Luggage Bags</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label>
                            Promotion<span>*</span>
                          </label>
                          <select
                            value={selectPromotion}
                            name="promotionProduct"
                            onChange={this.onChangePromotion}
                          >
                            <option value="0" hidden>
                              choose...
                            </option>
                            <option value="1">Discount all items 5%</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label>
                            Price<span>*</span>
                          </label>
                          <input
                            type="number"
                            value={price}
                            onChange={this.onChangePrice}
                            placeholder
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label>
                            Quantity<span>*</span>
                          </label>
                          <input
                            type="number"
                            value={quantity}
                            onChange={this.onChangeQuantity}
                            placeholder
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>
                            Path Picture<span>*</span>
                          </label>
                          <input
                            type="text"
                            value={path}
                            onChange={this.onChangePath}
                            placeholder
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group login-btn">
                          <button
                            className="btn"
                            style={{ float: "right", marginRight: 0 }}
                            type="submit"
                            value="Submit"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default CreateProduct;
