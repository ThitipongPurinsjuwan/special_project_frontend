import React, { Component } from "react";
import Header from "../components/otherPage/Header";
import Breadcrumbs from "../components/otherPage/Breadcrumbs";
import Shops from "../components/otherPage/products/Shops";
import Footer from "../components/otherPage/Footer";
// import { useLocation } from "react-router-dom";

class ProductsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cate: "",
    };

    // const search = this.props.location.search;
    // const cate = new URLSearchParams(search).get("cate");
  }
  render() {
    return (
      <>
        <Header />
        <Breadcrumbs to="Products" />
        <Shops />
        <Footer />
      </>
    );
  }
}

export default ProductsScreen;
