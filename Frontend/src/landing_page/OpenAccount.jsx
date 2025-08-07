import React from "react";

const OpenAccount = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center mb-5">
        <h1 className="mt-3 mb-4 fs-3">Open a Zerodha account</h1>
        <p className="mb-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          style={{
            width: "15rem",
            height: "3rem",
            margin: "0 auto",
          }}
          className="btn btn-primary"
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default OpenAccount;
