import React from "react";
import "./style.css";

function Bootstrapintro() {
  return (
    // <!-- ======= Hero Section ======= -->
    <section id="hero">
      <div className="container">
<<<<<<< Updated upstream
        <div className="row">
          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
            <h1>Show the world how kynd you are</h1>
=======
        <div className="row justify-content-between">
          <div clasName="col-lg-6 pt-5 pt-lg-0 d-flex">
            <h1 className = "text-center">Show the world how kynd you are</h1>
>>>>>>> Stashed changes
            <h2>
              Complete random acts of kyndness for yourself, others or the
              world.
            </h2>
            <a href=" #about #acts " className="btn-get-started scrollto">
              Learn More
            </a>
          </div>
          <div className=" align-items-right justify-content-right hero-img">
            <img
              src="assets/images/kindness.png"
              className="img-fluid animated  kindimg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bootstrapintro;
