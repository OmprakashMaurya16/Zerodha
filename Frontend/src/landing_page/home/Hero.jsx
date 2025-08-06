import React from "react";

const Hero = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/image/homeHero.png"
          alt="Home Hero Image"
          className="mb-3"
        />
        <h1 className="mt-3">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
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

export default Hero;
