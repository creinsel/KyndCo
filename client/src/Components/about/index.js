
import React from "react";
import "./style.css"

function About() {
    return (


      // <!-- ======= About Section ======= -->
    <section id="about" className="about">
      <div class="container">

        <div className="row justify-content-between">
          <div className=" d-flex align-items-center justify-content-center about-img">
            <img src="assets/images/stickfriends2.png" className="img-fluid stickfriends" alt="" data-aos="zoom-in"/>
          </div>
          <div className="col-lg-6 pt-5 pt-lg-0">
            <h3  className ="text-center" data-aos="fade-up">About Us</h3>
            <p data-aos="fade-up" data-aos-delay="100">
            At Kynd Co, we want to bring people of all parts of the world and their society closer together to make the world a better place.
              In doing so, our app encourages users to do acts of kindness by giving them challenges of kind acts they can do, starting off with less challenging acts and 
              working there way up to more challenging acts and recieving rewards along the way. Try it out!
            </p>
            
          </div>
        </div>

      </div>
    </section>
    // <!-- End About Section -->
    );
  };

export default About;