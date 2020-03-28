import React from "react";
import "./style.css";

function Bootstrapintro() {
  return (
    // <!-- ======= Hero Section ======= -->
    <section id="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div clasName="col-lg-3 pt-5 pt-lg-0 d-flex">
            <h1 className = "text-left">Show the world how 
            <br/>
            kynd you are</h1>
            <h2>
              Complete random acts of kyndness for yourself,
              <br/>
               others or the
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
