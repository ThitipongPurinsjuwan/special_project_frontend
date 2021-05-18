import React, { Component } from "react";

class Preload extends Component {
  render() {
    return (
      <>
        <div className="preloader">
          <div className="preloader-inner">
            <div className="preloader-icon">
              <span />
              <span />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Preload;
