import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="d-flex flex-column h-100 bg-dark">
        <footer className="w-100 py-4 flex-shrink-0">
          <div className="container py-4">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <h5 className="h1 text-white">Cameraoid</h5>
                <p className="small text-muted">
                  1. Actual colour and dimension may differ from the screen
                  image. <br /> 2. Colours and features of the product shown may differ
                  by model and country. <br /> 3. 4K: 3,840 x 2,160 pixels. <br />4. Features and specifications are
                  subject to change without prior notice.
                </p>
                <p className="small text-muted mb-0">
                  &copy; Copyrights. All rights reserved.
                </p>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">Quick links</h5>
                <ul className="list-unstyled text-muted">
                  <li>Home</li>
                  <li>About</li>
                  <li>Get started</li>
                  <li>FAQ</li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">Quick links</h5>
                <ul className="list-unstyled text-muted">
                  <li>Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6">
                <h5 className="text-white mb-3">Newsletter</h5>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Your Email"
                />
                <form action="#"></form>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
