import React from "react";
import "./style.css";

function Badge() {
  return (
    // <!-- ======= Badges Section ======= -->
    <section id="services" className="services section-bg">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Badges</h2>
          <p>Check out our cool badges!</p>
        </div>

        <div className="row">
          <div
            className="col-md-4 col-lg-4 align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="icon-box">
              <div className="icon">
                
                  <img src = "../assets/images/world-badge.png" />
               
              </div>
              <h4 className="title">World Badge</h4>
              
            </div>
          </div>

          <div
            className="col-md-4 col-lg-4 align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="icon-box">
              <div className="icon">
              <img src = "../assets/images/yourself-badge.png" />
              </div>
              <h4 className="title">Self Badge</h4>
              
            </div>
          </div>

          <div
            className="col-md-4 col-lg-4 align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="icon-box">
              <div className="icon">
              <img src = "../assets/images/others-badge.png" />
              </div>
              <h4 className="title">Other Badge</h4>
              
            </div>
          </div>

         
        </div>
      </div>
    </section>
    //  !-- End Badge Section -->
  );
}
export default Badge;
