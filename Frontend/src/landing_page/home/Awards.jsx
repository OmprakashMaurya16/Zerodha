import React from "react";

const Awards = () => {
  return (
    <div className="container mt-5 px-5">
      <div className="row">
        <div className="col-6 mb-5">
          <img src="media/image/largestBroker.svg" alt="Largest Broker" />
        </div>
        <div className="col-6 mt-5">
          <h2>Largest stock broker in India</h2>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img src="media/image/pressLogos.png" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
};

export default Awards;
