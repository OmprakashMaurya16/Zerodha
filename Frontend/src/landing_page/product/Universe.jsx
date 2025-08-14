import React from "react";

const Universe = () => {
  return (
    <div className="container text-center mt-5 p-5">
      <div className="row mt-5">
        <h1 className="fs-5 mb-5">
          Want to know more about our technology stack? Check out the
          <a href="" className="text-decoration-none">
            Zerodha.tech
          </a>
          &nbsp;blog.
        </h1>
        <h2 className="mt-5 fs-3 mb-4">The Zerodha Universe</h2>
        <p className="fs-6 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-4">
          <img
            src="media/image/smallcaseLogo.png"
            className="mb-3"
            style={{ width: "50%" }}
          />
          <p className="fs-6  text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            src="media/image/streakLogo.png"
            className="mb-3"
            style={{ width: "40%" }}
          />
          <p className="fs-6  text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            src="media/image/sensibullLogo.svg"
            className="mb-3"
            style={{ width: "60%" }}
          />
          <p className="fs-6  text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            src="media/image/zerodhaFundhouse.png"
            className="mb-3"
            style={{ width: "50%" }}
          />
          <p className="fs-6  text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            src="media/image/tijori.svg"
            className="mb-3"
            style={{ width: "50%" }}
          />
          <p className="fs-6  text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            src="media/image/dittoLogo.png"
            className="mb-3"
            style={{ width: "50%" }}
          />
          <p className="fs-6  text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>

        <button
          type="button"
          class="btn btn-primary mt-5"
          style={{ width: "15%", height: "3.2rem", marginLeft: "43%" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Universe;
