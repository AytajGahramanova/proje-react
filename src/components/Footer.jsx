import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import "../components/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-top">
            <div className="about">
              <h4>About</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus et dolor blanditiis consequuntur ex voluptates
                perspiciatis omnis unde minima expedita.
              </p>
              <a href="">Learn More</a>
            </div>
            <div className="contact">
              <div className="container">
                <h4>CONTACT & ADDRESS</h4>
                <div className="address">
                  <div className="address-column">
                    <p style={{ color: "rgba(255,255,255,0.6" }}>A:</p>
                    <label
                      htmlFor=""
                      style={{
                        color: "#fff",
                        marginLeft: "15px",
                        fontSize: 14,
                        maxWidth: 250,
                      }}
                    >
                      34 Street Name, City Name Here, United States
                    </label>
                  </div>
                  <div className="address-column">
                    <p style={{ color: "rgba(255,255,255,0.6" }}>T:</p>
                    <label
                      htmlFor=""
                      style={{
                        color: "#fff",
                        marginLeft: "15px",
                        fontSize: 14,
                      }}
                    >
                      +1 242 4942 290
                    </label>
                  </div>
                  <div className="address-column">
                    <p style={{ color: "rgba(255,255,255,0.6" }}>E:</p>
                    <label
                      htmlFor=""
                      style={{
                        color: "#fff",
                        marginLeft: "15px",
                        fontSize: 14,
                      }}
                    >
                      info@yourdomain.com
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="link-wrapper">
              <div className="container">
                <h4>QUICK LINKS</h4>
                <div className="links-a">
                  <a href="">About</a>
                  <a href="">Success Stories</a>
                  <a href="">Waiting Children</a>
                  <a href="">Privacy Policy</a>
                  <a href="">Terms of Use</a>
                  <a href="">Disclaimers</a>
                  <a href="">Contact</a>
                </div>
              </div>
            </div>
            <div className="social">
              <div className="container">
                <h4>SOCIAL</h4>
                <div className="icons">
                  <div className="icon-border">
                    <TwitterIcon />
                  </div>
                  <div className="icon-border">
                    <FacebookIcon />
                  </div>
                  <div className="icon-border">
                    <LinkedInIcon />
                  </div>
                  <div className="icon-border">
                    <InstagramIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="copyright">
              <span style={{color: "rgba(255,255,255,0.4)"}}>Copyright ©2023 All rights reserved | This template is made with <FavoriteBorderIcon /> by <span style={{color: "#f4b214"}}>Colorlib</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
