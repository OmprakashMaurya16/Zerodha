import React from "react";

const Education = () => {
  return (
    <div className="container my-3 py-4 px-4">
      <div className="row align-items-center">
        <div className="col">
          <img src="media/image/education.svg" />
        </div>

        <div className="col-md-6">
          <h2 className="fw-semibold mb-4">Free and open market education</h2>

          <div className="mb-5">
            <p className="text-secondary">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a
              href="#"
              className="text-primary fw-medium text-decoration-none d-inline-flex align-items-center"
            >
              Varsity <i className="fa-solid fa-arrow-right ms-2"></i>
            </a>
          </div>

          <div>
            <p className="text-secondary">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a
              href="#"
              className="text-primary fw-medium text-decoration-none d-inline-flex align-items-center"
            >
              TradingQ&A <i className="fa-solid fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
