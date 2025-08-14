import React from "react";

const Hero = () => {
  return (
    <div className="container text-center mt-5 p-5 mb-5">
      <div className="row">
        <div className="col">
          <h1 style={{ fontSize: "2.3rem", marginBottom: "10px" }}>Pricing</h1>
          <h3 className="fs-5 text-muted mt-4">
            Free equity investments and flat ₹20 traday and F&O trades
          </h3>
          <hr className="mt-5 p-3" />
          <div className="row">
            <div className="col-1"></div>
            <div className="col-3 ">
              <img src="media/image/pricingEquity.svg" />
              <h2 className="fs-2 mt-3">Free equity delivery</h2>
              <h3 className="fs-6 text-muted mt-4">
                All equity delivery investments (NSE, BSE), are absolutely free
                — ₹ 0 brokerage.
              </h3>
            </div>
            <div className="col-1"></div>
            <div className="col-3 ">
              <img src="media/image/intradayTrades.svg" />
              <h2 className="fs-2 mt-3">Intraday and F&O trades</h2>
              <h3 className="fs-6 text-muted mt-4">
                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                intraday trades across equity, currency, and commodity trades.
                Flat ₹20 on all option trades.
              </h3>
            </div>{" "}
            <div className="col-1"></div>
            <div className="col-3 ">
              <img src="media/image/pricingMF.svg" />
              <h2 className="fs-2 mt-3">Free direct MF</h2>
              <h3 className="fs-6 text-muted mt-4">
                All direct mutual fund investments are absolutely free — ₹ 0
                commissions & DP charges.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
