import React from "react";
import "./style.css";

function Team() {
  return (
    // <!-- ======= Team Section ======= -->
    <section id="team" className="team">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          
          <p>Our project team members!</p>
        </div>

        <div className="row">
          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="member">
              <img
                src="assets/images/anjali.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Anjali Sharma</h4>
                  <span>UI Designer</span>
                </div>
                
              </div>
            </div>
          </div>

          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="member">
              <img
                src="assets/images/sara.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
              <div className="member-info-content">
                <h4>Sara Bolduc</h4>
                <span>Back-End Developer</span>
              </div>
             
            </div>
          </div>
          </div>
        

        <div
          className="col-xl-3 col-lg-4 col-md-6"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div className="member">
            <img src="assets/images/mone.jpg" className="img-fluid home-img" alt="" />
            <div className="member-info">
              <div className="member-info-content">
                <h4>Mone Duncans-Francis</h4>
                <span>UI Designer</span>
              </div>
               
            </div>
          </div>
        </div> 

        <div
          className="col-xl-3 col-lg-4 col-md-6"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="member">
            <img
              src="assets/images/casImg.JPG"
              className="img-fluid"
              alt=""
            />
            <div className="member-info">
              <div className="member-info-content">
                <h4>Cassondra Reinsel</h4>
                <span>Back-End Developer</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>

    // {/* <!-- End Team Section --> */}
  );
}

export default Team;
