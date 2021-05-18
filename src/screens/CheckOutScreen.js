import React, { Component } from "react";
import Header from "../components/otherPage/Header";
import Breadcrumbs from "../components/otherPage/Breadcrumbs";
import Content from "../components/otherPage/checkout/Content";
import ServiceArea from "../components/otherPage/cart/ServiceArea";
import Newslater from "../components/otherPage/cart/Newslater";
import Footer from "../components/otherPage/Footer";

export class CheckOutScreen extends Component {
  render() {
    return (
      <>
        <Header />
        <Breadcrumbs />
        <Content />
        <ServiceArea />
        <Newslater />
        <Footer />
      </>
    );
  }
}

export default CheckOutScreen;
