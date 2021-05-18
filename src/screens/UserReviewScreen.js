import React, { Component } from "react";
import Header from "../components/otherPage/Header";
import Breadcrumbs from "../components/otherPage/Breadcrumbs";
import Comment from "../components/otherPage/userReview/Comment";
import Footer from "../components/otherPage/Footer";

export class UserReviewScreen extends Component {
  render() {
    return (
      <>
        <Header />
        <Breadcrumbs to="Product Detail" />
        <Comment />
        <Footer />
      </>
    );
  }
}

export default UserReviewScreen;
