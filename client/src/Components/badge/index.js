import React from "react";

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
            className="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bxl-dribbble"></i>
              </div>
              <h4 className="title">Lorem Ipsum</h4>
              <p className="description">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-file"></i>
              </div>
              <h4 className="title">Sed ut perspiciatis</h4>
              <p className="description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-tachometer"></i>
              </div>
              <h4 className="title">Magni Dolores</h4>
              <p className="description">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-world"></i>
              </div>
              <h4 className="title">Nemo Enim\</h4>
              <p className="description">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    //  !-- End Services Section -->
  );
}
export default Badge;
