import React, { Component } from "react";
import { Link } from "react-router-dom";
import BoxUserReview from "./BoxUserReview";
import { Redirect } from "react-router-dom";
import axios from "axios";
class Review extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.token = props.token;
    this.state = {
      product_id: this.data,
      user_id: this.token,
      text_review: "",
      redirect: null,
      product_review: [],
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.onChangeReview = this.handleChange.bind(this, "text_review");
  }

  handleChange(keyName, e) {
    this.setState({ [keyName]: e.target.value });
  }

  handleOnSubmit(e) {
    let data = {
      product_id: this.state.product_id,
      user_id: this.state.user_id,
      text_review: this.state.text_review,
    };
    this.makeReq(data, this);
    e.preventDefault();
  }

  makeReq = async (data, self) => {
    return await axios
      .post("http://localhost:1337/insertreview", data)
      .then(function (res) {
        console.log(res);
        self.setState({ redirect: "/detail/" + this.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:1337/product_review?product_id=${this.state.product_id}`
      )
      .then((results) => {
        console.log(results.data.results);
        this.setState({ product_review: results.data.results });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { product_id, user_id, text_review, product_review } = this.state;

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <>
        <div className="row">
          <div className="col-12">
            <div className="product-info">
              {/* nav nemu  */}
              <div className="nav-main">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#description"
                      role="tab"
                    >
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#reviews"
                      role="tab"
                    >
                      Reviews
                    </a>
                  </li>
                </ul>
              </div>
              {/* end nav nemu  */}
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                >
                  <div className="tab-single">
                    <div className="row">
                      <div className="col-12">
                        <div className="single-des">
                          <p>
                            simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled
                            it to make a type specimen book. It has survived not
                            only five centuries, but also the leap into
                            electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with deskto
                          </p>
                        </div>
                        <div className="single-des">
                          <p>
                            Suspendisse consequatur voluptates lorem nobis
                            accumsan natus mattis. Optio pede, optio qui metus,
                            delectus! Ultricies impedit, minus tempor fuga,
                            quasi, pede felis commodo bibendum voluptas nisi?
                            Voluptatem risus tempore tempora. Quaerat
                            aspernatur? Error praesent laoreet, cras in fames
                            hac ea, massa montes diamlorem nec quaerat, quos
                            occaecati leo nam aliquet corporis, ab recusandae
                            parturient, etiam fermentum, a quasi possimus
                            commodi, mollis voluptate mauris mollis, quisque
                            donec
                          </p>
                        </div>
                        <div className="single-des">
                          <h4>Product Features:</h4>
                          <ul>
                            <li>long established fact.</li>
                            <li>has a more-or-less normal distribution. </li>
                            <li>lmany variations of passages of. </li>
                            <li>generators on the Interne.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="reviews" role="tabpanel">
                  <div className="tab-single review-panel">
                    <div className="row">
                      <div className="col-12">
                        <div className="ratting-main">
                          <div className="avg-ratting">
                            <h4>
                              4.5 <span>(Overall)</span>
                            </h4>
                            <span>Based on 1 Comments</span>
                          </div>
                          {product_review.map((data) => (
                            <BoxUserReview data={data} />
                          ))}
                        </div>
                        {/* Review */}
                        <div className="comment-review">
                          <div className="add-review">
                            <h5>Add A Review</h5>
                            <p>
                              Your email address will not be published. Required
                              fields are marked
                            </p>
                          </div>
                          <h4>Your Rating</h4>
                          <div className="review-inner">
                            <div className="ratings">
                              <ul className="rating">
                                <li>
                                  <i className="fa fa-star" />
                                </li>
                                <li>
                                  <i className="fa fa-star" />
                                </li>
                                <li>
                                  <i className="fa fa-star" />
                                </li>
                                <li>
                                  <i className="fa fa-star" />
                                </li>
                                <li>
                                  <i className="fa fa-star" />
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/*/ End Review */}
                          {/* Form */}
                          <form
                            className="form"
                            method="post"
                            onSubmit={this.handleOnSubmit}
                          >
                            <div className="row">
                              <div className="col-lg-12 col-12">
                                <div className="form-group">
                                  <label>
                                    Write a review<span>*</span>
                                  </label>
                                  <textarea
                                    name="text"
                                    value={text_review}
                                    onChange={this.onChangeReview}
                                    placeholder
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 col-12">
                                <div className="form-group button5">
                                  <button
                                    type="submit"
                                    className="btn"
                                    alue="Submit"
                                  >
                                    Send
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
                  {/*/ End Reviews Tab */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Review;
