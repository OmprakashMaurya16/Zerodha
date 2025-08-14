import React from "react";

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-1"></div>
        <div className="col-5">
          <h1 className="fs-3">{productName}</h1>
          <p className="mt-4">{productDescription}</p>
          <div className="mt-4">
            <a
              href={learnMore}
              style={{ marginRight: "40px" }}
              className="text-decoration-none"
            >
              Learn More →
            </a>
          </div>
        </div>{" "}
        <div className="col-1"></div>
        <div className="col-5">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
