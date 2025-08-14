import React from "react";

const Brokerage = () => {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-6">
          <h1 className="fs-5 text-center text-primary mb-5">
            Brokerage calculator
          </h1>{" "}
          <ul>
            <li className="mb-4">
              Call &amp; Trade and RMS auto-squareoff: Additional charges of ₹50
              + GST per order.
            </li>
            <li className="mb-4">
              Digital contract notes will be sent via e-mail.
            </li>
            <li className="mb-4">
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges extra.
            </li>
            <li className="mb-4">
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li className="mb-4">
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li className="mb-4">
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        <div className="col-5">
          <h1 className="fs-5 text-center text-primary mb-5">
            List of charges
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
