import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Token from "../../token";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: "",
      user_id: Token.user_id,
      text_review: "",
      redirect: null,
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.onChangeProductId = this.handleChange.bind(this, "product_id");
    // this.onChangeUserId = this.handleChange.bind(this, "user_id");
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
        self.setState({ redirect: "/review" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { product_id, user_id, text_review } = this.state;

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <>
        <section className="blog-single section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12">
                <div className="blog-single-main">
                  <div className="row">
                    <div className="col-12">
                      <div className="image">
                        <img
                          src="https://via.placeholder.com/950x460"
                          alt="#"
                        />
                      </div>
                      <div className="blog-detail">
                        <h2 className="blog-title">
                          What are the secrets to start- up success?
                        </h2>
                        <div className="blog-meta">
                          <span className="author">
                            <a href="#">
                              <i className="fa fa-user" />
                              By Admin
                            </a>
                            <a href="#">
                              <i className="fa fa-calendar" />
                              Dec 24, 2018
                            </a>
                            <a href="#">
                              <i className="fa fa-comments" />
                              Comment (15)
                            </a>
                          </span>
                        </div>
                        <div className="content">
                          <p>
                            What a crazy time. I have five children in
                            colleghigh school graduates.jpge or pursing post
                            graduate studies Each of my children attends college
                            far from home, the closest of which is more than 800
                            miles away. While I miss being with my older
                            children, I know that a college experience can be
                            the source of great growth and experience can be the
                            source of source of great growth and can provide
                            them with even greater in future.
                          </p>
                          <blockquote>
                            {" "}
                            <i className="fa fa-quote-left" /> Do what you love
                            to do and give it your very best. Whether it's
                            business or baseball, or the theater, or any field.
                            If you don't love what you're doing and you can't
                            give it your best, get out of it. Life is too short.
                            You'll be an old man before you know it. risus. Ut
                            tincidunt, erat eget feugiat eleifend, eros magna
                            dapibus diam.
                          </blockquote>
                          <p>
                            What a crazy time. I have five children in
                            colleghigh school graduates.jpge or pursing post
                            graduate studies Each of my children attends college
                            far from home, the closest of which is more than 800
                            miles away. While I miss being with my older
                            children, I know that a college experience can be
                            the source of great growth and experience can be the
                            source of source of great growth and can provide
                            them with even greater in future.
                          </p>
                          <p>
                            What a crazy time. I have five children in
                            colleghigh school graduates.jpge or pursing post
                            graduate studies Each of my children attends college
                            far from home, the closest of which is more than 800
                            miles away. While I miss being with my older
                            children, I know that a college experience can be
                            the source of great growth and experience can be the
                            source of source of great growth and can provide
                            them with even greater in future.
                          </p>
                        </div>
                      </div>
                      <div className="share-social">
                        <div className="row">
                          <div className="col-12">
                            <div className="content-tags">
                              <h4>Tags:</h4>
                              <ul className="tag-inner">
                                <li>
                                  <a href="#">Glass</a>
                                </li>
                                <li>
                                  <a href="#">Pant</a>
                                </li>
                                <li>
                                  <a href="#">t-shirt</a>
                                </li>
                                <li>
                                  <a href="#">swater</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="comments">
                        <h3 className="comment-title">Comments (3)</h3>
                        {/* Single Comment */}
                        <div className="single-comment">
                          <img
                            src="https://via.placeholder.com/80x80"
                            alt="#"
                          />
                          <div className="content">
                            <h4>
                              Alisa harm <span>At 8:59 pm On Feb 28, 2018</span>
                            </h4>
                            <p>
                              Enthusiastically leverage existing premium quality
                              vectors with enterprise-wide innovation
                              collaboration Phosfluorescently leverage others
                              enterprisee Phosfluorescently leverage.
                            </p>
                            <div className="button">
                              <a href="#" className="btn">
                                <i className="fa fa-reply" aria-hidden="true" />
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* End Single Comment */}
                        {/* Single Comment */}
                        <div className="single-comment left">
                          <img
                            src="https://via.placeholder.com/80x80"
                            alt="#"
                          />
                          <div className="content">
                            <h4>
                              john deo <span>Feb 28, 2018 at 8:59 pm</span>
                            </h4>
                            <p>
                              Enthusiastically leverage existing premium quality
                              vectors with enterprise-wide innovation
                              collaboration Phosfluorescently leverage others
                              enterprisee Phosfluorescently leverage.
                            </p>
                            <div className="button">
                              <a href="#" className="btn">
                                <i className="fa fa-reply" aria-hidden="true" />
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* End Single Comment */}
                        {/* Single Comment */}
                        <div className="single-comment">
                          <img
                            src="https://via.placeholder.com/80x80"
                            alt="#"
                          />
                          <div className="content">
                            <h4>
                              megan mart <span>Feb 28, 2018 at 8:59 pm</span>
                            </h4>
                            <p>
                              Enthusiastically leverage existing premium quality
                              vectors with enterprise-wide innovation
                              collaboration Phosfluorescently leverage others
                              enterprisee Phosfluorescently leverage.
                            </p>
                            <div className="button">
                              <a href="#" className="btn">
                                <i className="fa fa-reply" aria-hidden="true" />
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* End Single Comment */}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="reply">
                        <div className="reply-head">
                          <h2 className="reply-title">Leave a Comment</h2>
                          {/* Comment Form */}
                          <form className="form" onSubmit={this.handleOnSubmit}>
                            <div className="row">
                              {/* <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-group">
                                  <label>
                                    Product<span>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    value={product_id}
                                    onChange={this.onChangeProductId}
                                    placeholder
                                    required="required"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-group">
                                  <label>
                                    User<span>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    value={user_id}
                                    onChange={this.onChangeUserId}
                                    placeholder
                                    required="required"
                                  />
                                </div>
                              </div> */}
                              <div className="col-12">
                                <div className="form-group">
                                  <label>
                                    Review<span>*</span>
                                  </label>
                                  <textarea
                                    type="text"
                                    value={text_review}
                                    onChange={this.onChangeReview}
                                    placeholder
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group button">
                                  <button
                                    type="submit"
                                    className="btn"
                                    value="Submit"
                                  >
                                    Post comment
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                          {/* End Comment Form */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Comment;
