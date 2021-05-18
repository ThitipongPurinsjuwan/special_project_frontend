import React, { Component, useEffect, useState } from "react";
import Header from "../components/otherPage/Header";
import Breadcrumbs from "../components/otherPage/Breadcrumbs";
import Footer from "../components/otherPage/Footer";
import ShopSlider from "../components/otherPage/products/bag/ShopSlider";
import BoxProduct from "../components/otherPage/products/bag/BoxProduct";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function BagScreen() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [temp, setTemp] = useState([]);
  let param = useParams();
  let categoryId = -1;
  if (param.category) {
    categoryId = parseInt(param.category);
  }
  useEffect(() => {
    axios
      .get("http://localhost:1337/product?category_id=1")
      .then((results) => {
        setTemp(results.data.results);
        setData(results.data.results);
      })
      .catch((err) => console.log(err));

    getCategories();
  }, []);

  async function getCategories() {
    await axios
      .get("http://localhost:1337/categories_bag")
      .then((results) => {
        setCategory(results.data.results);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Header />
      <Breadcrumbs to={"Bag"} />
      <section className="product-area shop-sidebar shop section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12">
              <ShopSlider category={category} />
            </div>
            <div className="col-lg-9 col-md-8 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="shop-top">
                    <div className="shop-shorter">
                      <div className="single-shorter">
                        <label>Show :</label>
                        <select style={{ display: "none" }}>
                          <option selected="selected">09</option>
                          <option>15</option>
                          <option>25</option>
                          <option>30</option>
                        </select>
                        <div className="nice-select" tabIndex={0}>
                          <span className="current">09</span>
                          <ul className="list">
                            <li data-value={9} className="option selected">
                              09
                            </li>
                            <li data-value={15} className="option">
                              15
                            </li>
                            <li data-value={25} className="option">
                              25
                            </li>
                            <li data-value={30} className="option">
                              30
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="single-shorter">
                        <label>Sort By :</label>
                        <select style={{ display: "none" }}>
                          <option selected="selected">Name</option>
                          <option>Price</option>
                          <option>Size</option>
                        </select>
                        <div className="nice-select" tabIndex={0}>
                          <span className="current">Name</span>
                          <ul className="list">
                            <li data-value="Name" className="option selected">
                              Name
                            </li>
                            <li data-value="Price" className="option">
                              Price
                            </li>
                            <li data-value="Size" className="option">
                              Size
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <ul className="view-mode">
                      <li className="active">
                        <Link to="shop-grid.html">
                          <i className="fa fa-th-large" />
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-list.html">
                          <i className="fa fa-th-list" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                {data
                  .filter(
                    (data) =>
                      data.product_category === categoryId || categoryId === -1
                  )
                  .map((data, index) => (
                    <BoxProduct data={data} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BagScreen;
