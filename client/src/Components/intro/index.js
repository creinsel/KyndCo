import React from "react";

function Bootstrapintro() {
  return (
    // <!-- ======= Hero Section ======= -->
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div clasName="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
            <h1>Show the world how kynd you are</h1>
            <h2>
              Complete random acts of kyndness for yourself, others or the
              world.
            </h2>
            <a href="#acts" className="btn-get-started scrollto">
              Learn More
            </a>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img
              src="assets/img/hero-img.svg"
              className="img-fluid animated"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bootstrapintro;
