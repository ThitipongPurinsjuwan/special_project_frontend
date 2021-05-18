import React from "react";

function BoxUserReview(props) {
  const { data } = props;
  return (
    <>
      {/* Single Rating */}
      <div className="single-rating">
        <div className="rating-des">
          <h6>
            {data.user_firstname} {data.user_lastname}
          </h6>
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
          <p>{data.text_review}</p>
        </div>
      </div>
      {/*/ End Single Rating */}
    </>
  );
}

export default BoxUserReview;
