import React, { Component } from "react";

class ProductDetail extends Component {
  render() {
    return (
      <>
        <section className="shop single section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    {/* Product Slider */}
                    <div className="product-gallery">
                      {/* Images slider */}
                      <div className="flexslider-thumbnails">
                        <div
                          className="flex-viewport"
                          style={{ overflow: "hidden", position: "relative" }}
                        >
                          <ul
                            className="slides"
                            style={{
                              width: "1200%",
                              transitionDuration: "0.6s",
                              transform: "translate3d(-555px, 0px, 0px)",
                            }}
                          >
                            <li
                              data-thumb="images/bx-slider4.jpg"
                              className="clone"
                              style={{
                                width: 555,
                                float: "left",
                                display: "block",
                              }}
                            >
                              <img src="images/bx-slider4.jpg" alt="#" />
                            </li>
                            <li
                              data-thumb="images/bx-slider1.jpg"
                              rel="adjustX:10, adjustY:"
                              className="flex-active-slide"
                              style={{
                                width: 555,
                                float: "left",
                                display: "block",
                              }}
                            >
                              <img src="images/bx-slider1.jpg" alt="#" />
                            </li>
                            <li
                              data-thumb="images/bx-slider2.jpg"
                              style={{
                                width: 555,
                                float: "left",
                                display: "block",
                              }}
                              className
                            >
                              <img src="images/bx-slider2.jpg" alt="#" />
                            </li>
                            <li
                              data-thumb="images/bx-slider3.jpg"
                              style={{
                                width: 555,
                                float: "left",
                                display: "block",
                              }}
                              className
                            >
                              <img src="images/bx-slider3.jpg" alt="#" />
                            </li>
                            <li
                              data-thumb="images/bx-slider4.jpg"
                              style={{
                                width: 555,
                                float: "left",
                                display: "block",
                              }}
                              className
                            >
                              <img src="images/bx-slider4.jpg" alt="#" />
                            </li>
                            <li
                              data-thumb="images/bx-slider1.jpg"
                              rel="adjustX:10, adjustY:"
                              className="clone"
                              style={{
                                width: 555,
                                float: "left",
                                display: "block",
                              }}
                            >
                              <img src="images/bx-slider1.jpg" alt="#" />
                            </li>
                          </ul>
                        </div>
                        <ol className="flex-control-nav flex-control-thumbs">
                          <li>
                            <img
                              src="images/bx-slider1.jpg"
                              className="flex-active"
                            />
                          </li>
                          <li>
                            <img src="images/bx-slider2.jpg" className />
                          </li>
                          <li>
                            <img src="images/bx-slider3.jpg" className />
                          </li>
                          <li>
                            <img src="images/bx-slider4.jpg" className />
                          </li>
                        </ol>
                        <ul className="flex-direction-nav">
                          <li>
                            <a className="flex-prev" href="#" />
                          </li>
                          <li>
                            <a className="flex-next" href="#" />
                          </li>
                        </ul>
                      </div>
                      {/* End Images slider */}
                    </div>
                    {/* End Product slider */}
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="product-des">
                      {/* Description */}
                      <div className="short">
                        <h4>Nonstick Dishwasher PFOA</h4>
                        <div className="rating-main">
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
                              <i className="fa fa-star-half-o" />
                            </li>
                            <li className="dark">
                              <i className="fa fa-star-o" />
                            </li>
                          </ul>
                          <a href="#" className="total-review">
                            (102) Review
                          </a>
                        </div>
                        <p className="price">
                          <span className="discount">$70.00</span>
                          <s>$80.00</s>{" "}
                        </p>
                        <p className="description">
                          eget velit. Donec ac tempus ante. Fusce ultricies
                          massa massa. Fusce aliquam, purus eget sagittis
                          vulputate, sapien libero hendrerit est, sed commodo
                          augue nisi non neque. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Sed tempor, lorem et
                          placerat vestibulum, metus nisi posuere nisl, in
                        </p>
                      </div>
                      {/*/ End Description */}
                      {/* Color */}
                      <div className="color">
                        <h4>
                          Available Options <span>Color</span>
                        </h4>
                        <ul>
                          <li>
                            <a href="#" className="one">
                              <i className="ti-check" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="two">
                              <i className="ti-check" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="three">
                              <i className="ti-check" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="four">
                              <i className="ti-check" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/*/ End Color */}
                      {/* Size */}
                      <div className="size">
                        <h4>Size</h4>
                        <ul>
                          <li>
                            <a href="#" className="one">
                              S
                            </a>
                          </li>
                          <li>
                            <a href="#" className="two">
                              M
                            </a>
                          </li>
                          <li>
                            <a href="#" className="three">
                              L
                            </a>
                          </li>
                          <li>
                            <a href="#" className="four">
                              XL
                            </a>
                          </li>
                          <li>
                            <a href="#" className="four">
                              XXL
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/*/ End Size */}
                      {/* Product Buy */}
                      <div className="product-buy">
                        <div className="quantity">
                          <h6>Quantity :</h6>
                          {/* Input Order */}
                          <div className="input-group">
                            <div className="button minus">
                              <button
                                type="button"
                                className="btn btn-primary btn-number"
                                disabled="disabled"
                                data-type="minus"
                                data-field="quant[1]"
                              >
                                <i className="ti-minus" />
                              </button>
                            </div>
                            <input
                              type="text"
                              name="quant[1]"
                              className="input-number"
                              data-min={1}
                              data-max={1000}
                              defaultValue={1}
                            />
                            <div className="button plus">
                              <button
                                type="button"
                                className="btn btn-primary btn-number"
                                data-type="plus"
                                data-field="quant[1]"
                              >
                                <i className="ti-plus" />
                              </button>
                            </div>
                          </div>
                          {/*/ End Input Order */}
                        </div>
                        <div className="add-to-cart">
                          <a href="#" className="btn">
                            Add to cart
                          </a>
                          <a href="#" className="btn min">
                            <i className="ti-heart" />
                          </a>
                          <a href="#" className="btn min">
                            <i className="fa fa-compress" />
                          </a>
                        </div>
                        <p className="cat">
                          Category :<a href="#">Clothing</a>
                        </p>
                        <p className="availability">
                          Availability : 180 Products In Stock
                        </p>
                      </div>
                      {/*/ End Product Buy */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="product-info">
                      <div className="nav-main">
                        {/* Tab Nav */}
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
                        {/*/ End Tab Nav */}
                      </div>
                      <div className="tab-content" id="myTabContent">
                        {/* Description Tab */}
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
                                    simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever
                                    since the 1500s, when an unknown printer
                                    took a galley of type and scrambled it to
                                    make a type specimen book. It has survived
                                    not only five centuries, but also the leap
                                    into electronic typesetting, remaining
                                    essentially unchanged. It was popularised in
                                    the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and
                                    more recently with deskto
                                  </p>
                                </div>
                                <div className="single-des">
                                  <p>
                                    Suspendisse consequatur voluptates lorem
                                    nobis accumsan natus mattis. Optio pede,
                                    optio qui metus, delectus! Ultricies
                                    impedit, minus tempor fuga, quasi, pede
                                    felis commodo bibendum voluptas nisi?
                                    Voluptatem risus tempore tempora. Quaerat
                                    aspernatur? Error praesent laoreet, cras in
                                    fames hac ea, massa montes diamlorem nec
                                    quaerat, quos occaecati leo nam aliquet
                                    corporis, ab recusandae parturient, etiam
                                    fermentum, a quasi possimus commodi, mollis
                                    voluptate mauris mollis, quisque donec
                                  </p>
                                </div>
                                <div className="single-des">
                                  <h4>Product Features:</h4>
                                  <ul>
                                    <li>long established fact.</li>
                                    <li>
                                      has a more-or-less normal distribution.{" "}
                                    </li>
                                    <li>lmany variations of passages of. </li>
                                    <li>generators on the Interne.</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*/ End Description Tab */}
                        {/* Reviews Tab */}
                        <div
                          className="tab-pane fade"
                          id="reviews"
                          role="tabpanel"
                        >
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
                                  {/* Single Rating */}
                                  <div className="single-rating">
                                    <div className="rating-author">
                                      <img src="images/comments1.jpg" alt="#" />
                                    </div>
                                    <div className="rating-des">
                                      <h6>Naimur Rahman</h6>
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
                                            <i className="fa fa-star-half-o" />
                                          </li>
                                          <li>
                                            <i className="fa fa-star-o" />
                                          </li>
                                        </ul>
                                        <div className="rate-count">
                                          (<span>3.5</span>)
                                        </div>
                                      </div>
                                      <p>
                                        Duis tincidunt mauris ac aliquet congue.
                                        Donec vestibulum consequat cursus.
                                        Aliquam pellentesque nulla dolor, in
                                        imperdiet.
                                      </p>
                                    </div>
                                  </div>
                                  {/*/ End Single Rating */}
                                  {/* Single Rating */}
                                  <div className="single-rating">
                                    <div className="rating-author">
                                      <img src="images/comments2.jpg" alt="#" />
                                    </div>
                                    <div className="rating-des">
                                      <h6>Advin Geri</h6>
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
                                        <div className="rate-count">
                                          (<span>5.0</span>)
                                        </div>
                                      </div>
                                      <p>
                                        Duis tincidunt mauris ac aliquet congue.
                                        Donec vestibulum consequat cursus.
                                        Aliquam pellentesque nulla dolor, in
                                        imperdiet.
                                      </p>
                                    </div>
                                  </div>
                                  {/*/ End Single Rating */}
                                </div>
                                {/* Review */}
                                <div className="comment-review">
                                  <div className="add-review">
                                    <h5>Add A Review</h5>
                                    <p>
                                      Your email address will not be published.
                                      Required fields are marked
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
                                </div>
                                {/*/ End Review */}
                                {/* Form */}
                                <form
                                  className="form"
                                  method="post"
                                  action="mail/mail.php"
                                >
                                  <div className="row">
                                    <div className="col-lg-6 col-12">
                                      <div className="form-group">
                                        <label>
                                          Your Name<span>*</span>
                                        </label>
                                        <input
                                          type="text"
                                          name="name"
                                          required="required"
                                          placeholder
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                      <div className="form-group">
                                        <label>
                                          Your Email<span>*</span>
                                        </label>
                                        <input
                                          type="email"
                                          name="email"
                                          required="required"
                                          placeholder
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12 col-12">
                                      <div className="form-group">
                                        <label>
                                          Write a review<span>*</span>
                                        </label>
                                        <textarea
                                          name="message"
                                          rows={6}
                                          placeholder
                                          defaultValue={""}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12 col-12">
                                      <div className="form-group button5">
                                        <button type="submit" className="btn">
                                          Submit
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
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ProductDetail;
