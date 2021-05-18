import React, { Component } from "react";
import Header from "../../components/otherPage/Header";
import Breadcrumbs from "../../components/otherPage/Breadcrumbs";
import Footer from "../../components/otherPage/Footer";
import qs from "qs";
import axios from "axios";
import { Redirect } from "react-router-dom";

class FormUpdateProduct extends Component {
  constructor(props) {
    super(props);
    let param = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });
    this.state = {
      name: "",
      price: "",
      quantity: "",
      path: "",
      selectCategory: "0",
      selectPromotion: "0",
      redirect: null,
      product_id: param["product_id"],
    };
    console.log(param);
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
      .post(
        `http://localhost:1337/update_product?product_id=${this.state.product_id}`,
        data
      )
      .then(function (res) {
        self.setState({ redirect: "/listsProduct" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:1337/productById?product_id=${this.state.product_id}`
      )
      .then((res) => {
        this.setState({
          name: res.data.results[0].product_name,
          price: res.data.results[0].product_price,
          quantity: res.data.results[0].product_quantity,
          path: res.data.results[0].product_img,
          selectCategory: res.data.results[0].product_category,
          selectPromotion: res.data.results[0].product_promotion,
        });
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
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
        <Breadcrumbs to={this.state.product_id} />

        <section className="shop login section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-12">
                <div className="login-form">
                  <h2>Update Product</h2>
                  {/* Form */}
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
                            placeholder={true}
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
                            placeholder={true}
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
                            placeholder={true}
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
                            placeholder={true}
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
                  {/*/ End Form */}
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

export default FormUpdateProduct;
