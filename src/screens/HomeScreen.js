import React, { Component } from "react";
import Header from "../components/otherPage/Header";
import SliderArea from "../components/homePage/SliderArea";
import StartSmall from "../components/homePage/StartSmall";
import StartProduct from "../components/homePage/StartProduct";

class HomeScreen extends Component {
  render() {
    return (
      <>
        <Header />
        <SliderArea />
        <StartSmall />
        <StartProduct />
      </>
    );
  }
}

export default HomeScreen;
