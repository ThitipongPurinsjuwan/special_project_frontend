import React, { Component, useEffect, useState } from "react";
import Header from "../components/otherPage/Header";
import Breadcrumbs from "../components/otherPage/Breadcrumbs";
import Contact from "../components/otherPage/contact/Contact";
import Footer from "../components/otherPage/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";

function CantactScreen() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [temp, setTemp] = useState([]);
  let param = useParams();
  let userId = -1;
  if (param.user) {
    userId = parseInt(param.user);
  }
  useEffect(() => {
    axios
      .get("http://localhost:1337/userposion")
      .then((results) => {
        setTemp(results.data.results);
        setData(results.data.results);
      })
      .catch((err) => console.log(err));

    getUser();
  }, []);

  async function getUser() {
    await axios
      .get("http://localhost:1337/userposion")
      .then((results) => {
        setUser(results.data.results);
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <Header />
      <Breadcrumbs to="Cantact" />
      <Contact />
      <section id="team" className="team section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Our Expert Team</h2>
                <p>
                  Business consulting excepteur sint occaecat cupidatat
                  consulting non proident, sunt in culpa qui officia deserunt
                  laborum market.{" "}
                </p>
              </div>
            </div>
          </div>
          {/* <div className="row">
            {data
              .filter((data) => data.product_user === userId || userId === -1)
              .map((data, index) => (
                <span className="designation">{data.user_firstname}</span>
              ))}
          </div> */}
          <div className="row">
            {/* Single Team */}
            {data
              .filter((data) => data.product_user === userId || userId === -1)
              .map((data, index) => (
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-team">
                    {/* Image */}
                    <div className="image">
                      <img
                        className="img-contact-us"
                        src={data.image}
                        alt="#"
                      />
                    </div>
                    {/* End Image */}
                    <div className="info-head">
                      {/* Info Box */}

                      <div className="info-box">
                        <h4 className="name">
                          <a href="#">
                            {data.user_firstname}&nbsp;
                            {data.user_lastname}
                          </a>
                        </h4>
                        <span className="designation">
                          {data.user_status_name}
                        </span>
                      </div>
                      <span className="designation">
                        Tel.
                        {data.user_phone_number}
                      </span>
                      {/* End Info Box */}
                      {/* Social */}
                      <div className="social-links">
                        <ul className="social">
                          <li>
                            <a href="#">
                              <i className="fa fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-behance" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* End Social */}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CantactScreen;
