import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container">
      <div className="row align-items-center mt-5">
        <div className="col-1"></div>
        <div className="col-5">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <h1 className="fs-3">{productName}</h1>
          <p className="mt-4">{productDescription}</p>

          <div className="mt-4">
            <a
              href={tryDemo}
              style={{ marginRight: "40px" }}
              className="text-decoration-none"
            >
              Try Demo →
            </a>
            <a href={learnMore} className="text-decoration-none">
              Learn More →
            </a>
          </div>

          <div className="mt-4">
            <a
              href={googlePlay}
              style={{ marginRight: "40px" }}
              className="text-decoration-none"
            >
              <img
                src="media/image/googlePlayBadge.svg"
                alt="Google Play Store"
                className="img-fluid"
              />
            </a>
            <a href={appStore} className="text-decoration-none">
              <img
                src="media/image/appstoreBadge.svg"
                alt="Apple App Store"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
