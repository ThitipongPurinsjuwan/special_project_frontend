import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <>
        <section className="error-page">
          <div className="table">
            <div className="table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 offset-lg-3 col-12">
                    {/* Error Inner */}
                    <div className="error-inner">
                      <h2>404</h2>
                      <h5>This page cannot be founded</h5>
                      <p>
                        Oops! The page you are looking for does not exist. It
                        might have been moved or deleted.
                      </p>
                      <div className="button">
                        <Link to="/" className="btn">
                          Go Homepage
                        </Link>
                      </div>
                    </div>
                    {/*/ End Error Inner */}
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

export default NotFound;
