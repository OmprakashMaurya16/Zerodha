import React from "react";

const Team = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="fs-3 text-center p-5 border-top">People</h1>
        <div className="col-1"></div>
        <div className="col-4 text-center">
          <img
            src="media/image/nithinKamath.jpg"
            alt="CEO Image"
            style={{ borderRadius: "100%", width: "70%", marginTop: "2rem" }}
          />
          <h4 className="mt-4 fs-5">Nithin Kamath</h4>
          <h5 className="mt-3 fs-6 text-muted">Founder, CEO</h5>
        </div>
        <div className="col-5 mt-3 p-4">
          <p className="mb-4">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="mb-4">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="mb-4">Playing basketball is his zen.</p>
          <p className="mb-4">
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage&nbsp;
            </a>
            /
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              TradingQnA&nbsp;
            </a>
            /
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Twitter
            </a>
          </p>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Team;
