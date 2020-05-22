import React from './node_modules/react';
import "./style.css";

function Footer() {
    return (
        // <!-- ======= Footer ======= -->
        <footer id="footer">
      
          <div className="footer-top">
            <div className="container">
              <div className="row">
      
                <div className="col-lg-12 col-md-1 footer-contact text-center" data-aos="fade-up" data-aos-delay="100">
                  <h3>Kynd Co.</h3>
                  <p>
                    123 Kynd Street <br />
                    Berkeley, CA 535022<br />
                    United States <br /><br />
                    <strong>Phone:</strong> 555-555-KYND<br />
                    <strong>Email:</strong> kynd@kyndco.com<br />
                  </p>
                </div>
      
              </div>
            </div>
          </div>
          
      
          <div className="container py-4">
            <div className="copyright justify-content-center">
              &copy; Copyright <strong><span>Kynd Co.</span></strong>. All Rights Reserved
            </div>
            
          </div>

          
        </footer>
        
       
        
    );
}
export default Footer;