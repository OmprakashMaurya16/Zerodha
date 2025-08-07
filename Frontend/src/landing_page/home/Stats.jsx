import React from "react";

const Stats = () => {
  return (
    <div className="container mt-5 px-5">
      <div className="row align-items-center" style={{ marginTop: "5rem" }}>
        <div className="col-md-6">
          <h1 className="fs-2 mb-5 mt-5">Trust with confidence</h1>

          <div className="mt-4">
            <h3 className="fs-4">Customer-first always</h3>
            <p>
              That’s why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="fs-4">No spam or gimmicks</h3>
            <p>
              No gimmicks, spam, “gamification”, or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="fs-4">The Zerodha universe</h3>
            <p>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="fs-4">Do better with money</h3>
            <p>
              With initiatives like Nudge and Kill Switch, we don’t just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        <div className="col-md-6 text-center mb-5">
          <img
            src="media/image/ecosystem.png"
            alt="Zerodha ecosystem illustration"
            className="img-fluid ms-md-3"
            style={{ maxWidth: "90%" }}
          />
          <div className="mt-4">
            <a href="#" style={{ textDecoration: "none" }} className="mx-5">
              Explore our Products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Try Kite demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
