import React from "react";

const Hero = () => {
  return (
    <section className="container-fluid mb-5 p-5" id="supportHero">
      <div id="supportWrapper">
        <h3 className="fs-5">Support Portal</h3>
        <a href="">Track Tickets</a>
      </div>

      <div className="row mx-5">
        <div className="col-1"></div>
        <div className="col-5">
          <h3 className="fs-4">
            Search for an answer or browse help topics to create a ticket
          </h3>
          <input
            type="text"
            placeholder="Eg: how do I activate F&O, why is my order getting rejected?"
          />
          <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <h2>Featured</h2>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting – January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages – MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;
