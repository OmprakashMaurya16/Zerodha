import React from "react";

const Pricing = () => {
  return (
    <div className="container mt-5 px-5">
      <div className="row" style={{ marginTop: "8rem" }}>
        <div className="col-4">
          <h3 className="fs-4">Unbeatable pricing</h3>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center mb-5">
            <div className="col p-4 border">
              <h1>&#8377;0</h1>
              <p>
                Free equity delivery and <br />
                direct mutual funds
              </p>
            </div>
            <div className="col p-4 border">
              <h1>&#8377;20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
