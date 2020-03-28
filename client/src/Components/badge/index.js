import React from "react";
import "./style.css";

function Badge() {
  return (
    // <!-- ======= Badges Section ======= -->
    <section id="services" className="services section-bg">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
         
          <p>Check out our cool badges!</p>
          <div className= "p-badge">Collect fun badges as you complete acts of kyndness. You can see how far you are from achieving a badge in your dashboard.</div>
        </div>

        <div className="row">
          <div
            className="col-md-4 col-lg-4 align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="icon-box">
              <div className="icon">
                
                  <img src = "../assets/images/yourself-badge.png" />
               
              </div>
              <h4 className="title">Yourself Badge</h4>
              <p className="sub-title">As important as it is to help others, it is just as important to help yourself!</p>
              
            </div>
          </div>

          <div
            className="col-md-4 col-lg-4 align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="icon-box">
              <div className="icon">
              <img src = "../assets/images/others-badge.png" />
              </div>
              <h4 className="title">Others Badge</h4>
              <p className="sub-title">Who knows who day you could make with one simple act of kyndness!</p>
              
            </div>
          </div>

          <div
            className="col-md-4 col-lg-4 align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="icon-box">
              <div className="icon">
              <img src = "../assets/images/world-badge.png" />
              </div>
              <h4 className="title">The World Badge</h4>
              <p className="sub-title">We all need to work together to make the world a better place!</p>
              
            </div>
          </div>

         
        </div>
      </div>
    </section>
    //  !-- End Badge Section -->
  );
}
export default Badge;
