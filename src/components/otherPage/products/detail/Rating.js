import React from "react";

function Rating() {
  return (
    <>
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
    </>
  );
}

export default Rating;
