import React, { Component, useEffect, useState } from "react";
import Header from "../components/otherPage/Header";
import Breadcrumbs from "../components/otherPage/Breadcrumbs";
import Footer from "../components/otherPage/Footer";
import ShopSlider from "../components/otherPage/products/bag/ShopSlider";
import BoxProduct from "../components/otherPage/products/bag/BoxProduct";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import useToken from "../components/token/index";

function BagScreen() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [temp, setTemp] = useState([]);
  const [sortt, setSort] = useState([2]);
  const [value, setValue] =  React.useState([0,300]);
  const {token} = useToken();
  let param = useParams();
 
  let categoryId = -1;
  let rangpricemin = parseInt(value[0]);
  let rangpricemax = parseInt(value[1]);


  if (param.category) {
    categoryId = parseInt(param.category);
  }

  function sortPrice(e){
    setSort({sortt:parseInt(e.target.value)});
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
 


  const likeSubmit = async (like) =>{
    return await axios
    .post(`http://localhost:1337/shop_like`,like)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <Breadcrumbs to={"Bag"} />
      <section className="product-area shop-sidebar shop section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12">
              <ShopSlider
                setValue={setValue}
                category={category}
                value={value}
              />
            </div>
            <div className="col-lg-9 col-md-8 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="shop-top">
                    <div className="shop-shorter">  
                      <div className="single-shorter">
                        <label>Sort By :</label>
                        <select className="nice-select" onChange={(e)=>{sortPrice(e)}}>
                        {/* <select className="nice-select"> */}
                          <option value="1" >lowest to highest</option>
                          <option value="2" selected>highest to lowest </option>
                        </select>
                       
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
                      (data.product_category === categoryId ||
                        categoryId === -1) &&
                      parseInt(data.product_price) >= rangpricemin &&
                      parseInt(data.product_price) <= rangpricemax
                  )
                  .sort(sortt.sortt == 1 ? ((a, b) => a.product_price > b.product_price ? 1 : -1 ): ((a, b) => a.product_price < b.product_price ? 1 : -1 ))
                  .map((data, index) => (
                    <BoxProduct likeSubmit={likeSubmit} data={data}/>
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
