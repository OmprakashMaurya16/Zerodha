import React from "react";

const Hero = () => {
  return (
    <div className="container mt-5 p-5">
      <div className="row text-center">
        <h1 className="fs-3 mb-4">Zerodha Products</h1>
        <h2 className="fs-5 text-muted mb-4">
          Sleek, modern, and intuitive trading platforms
        </h2>
        <h3 className="fs-6 text-muted">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings →
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Hero;
