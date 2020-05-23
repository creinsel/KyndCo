import React from "./node_modules/react";
import "./style.css";

function About() {
  return (
    // <!-- ======= About Section ======= -->
    <section id="about" className="about">
      <div class="container">
        <div className="row justify-content-between">
          <div className=" d-flex align-items-center justify-content-center about-img">
            <img
              src="assets/images/kynd-heart.png"
              className="img-fluid kynd-heart"
              alt="kind heart image"
              data-aos="zoom-in"
            />
          </div>
          <div className="col-lg-6 pt-5 pt-lg-0">
            <div className="section-title" data-aos="fade-up">
              <p className="about-title">About Us</p>
              <div className="p-about">
                At Kynd Co, we believe no good deed should go unrewarded. Our app encourages users to do acts of
                kyndness by providing them a list of kynd acts they can do. These acts range from being kynd to yourself, others and the world.
                Each act has a point value attached with easier acts having a lower point values and more challenging acts having a higher point value.
                Sign up today and try it out!
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- End About Section -->
  );
}

export default About;
