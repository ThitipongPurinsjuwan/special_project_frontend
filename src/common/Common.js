import React, { Component, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import CantactScreen from "../screens/CantacctScreen";
import ShoppingCart from "../screens/ShoppingCart";
import CheckOutScreen from "../screens/CheckOutScreen";
import UserReviewScreen from "../screens/UserReviewScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ProductsScreen from "../screens/ProductsScreen";
import InsertScreen from "../screens/InsertScreen";
import CreateProduct from "../screens/admin/CreateProduct";
import ListsProduct from "../screens/admin/ListsProduct";
import OrderList from "../screens/admin/OrderList";
import FormUpdateProduct from "../screens/admin/FormUpdateProduct";
import UpdateProfile from "../screens/users/UpdateProfile";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import BagScreen from "../screens/BagScreen";
import ShoseScreen from "../screens/ShoseScreen";
import ProductCategoirs from "../screens/ProductCategoirs";
import NotFound from "../screens/NotFound";
import useToken from "../components/token";
import "../App.css";
import "../style.css";

function Common() {
  const { token, setToken } = useToken();
  return (
    <>
      <Router>
        <Switch>
          <Route path="/register" component={RegisterScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route path="/contact" component={CantactScreen} />
          <Route path="/review" component={UserReviewScreen} />
          <Route path="/detail/:product_id" component={ProductDetailScreen} />
          <Route path="/profile" component={UpdateProfile} />
          <Route path="/checkout" component={CheckOutScreen} />
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/shop/:category" component={ProductCategoirs} />
          <Route path="/shop" component={ProductsScreen} />
          <Route path="/bag/:category" component={BagScreen} />
          <Route path="/bag" component={BagScreen} />
          <Route path="/shose" component={ShoseScreen} />
          <Route path="/create" component={InsertScreen} />
          <Route path="/createProduct" component={CreateProduct} />
          <Route path="/updateProduct" component={FormUpdateProduct} />
          <Route path="/listsProduct" component={ListsProduct} />
          <Route path="/orderlists" component={OrderList} />
          <Route path="/Home" component={HomeScreen} />
          <Route
            exact
            path="/"
            render={() =>
              token ? (
                <Redirect to="/Home" />
              ) : (
                <LoginScreen setToken={setToken} />
              )
            }
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default Common;
